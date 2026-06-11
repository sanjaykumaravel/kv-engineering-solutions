import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const lspFiles = [
  { name: "Z-Value Zero", cmd: "0line", url: "/LSP/0line.lsp" },
  { name: "Convert 2D Text to 3D", cmd: "3Dtext", url: "/LSP/3DText.lsp" },
  {
    name: "Align Text (2mm – 3mm)",
    cmd: "AT",
    url: "/LSP/Align Text2mm to 3mm-at.lsp",
  },
  {
    name: "Incremental Array (User-Friendly)",
    cmd: "Incarray",
    url: "/LSP/Array - IncArray.lsp",
  },
  {
    name: "Convert Attribute to Text",
    cmd: "AttDefToText",
    url: "/LSP/AttDefToText.lsp",
  },
  { name: "Convert Circle to Xline", cmd: "C2X", url: "/LSP/C2X.lsp" },
  { name: "Cable Tray / Duct", cmd: "Duct", url: "/LSP/cable tray _ dect.lsp" },
  {
    name: "Background Color Change",
    cmd: "BLCC",
    url: "/LSP/color change-blcc.lsp",
  },
  { name: "Xref Tool", cmd: "C2X", url: "/LSP/Copy2XRefV1-c2x.lsp" },
  {
    name: "Delete Dimension",
    cmd: "deldim",
    url: "/LSP/Delete Dimension-deldim.lsp",
  },
  { name: "Delete Text", cmd: "deltext", url: "/LSP/Delete text-deltext.lsp" },
  {
    name: "Note Below Dimension",
    cmd: "NDIM",
    url: "/LSP/Dimension below note- NDIM.lsp",
  },
  {
    name: "Rotate Dimensions",
    cmd: "dimrotate",
    url: "/LSP/Dimension rotate-DIMROTATE.lsp",
  },
  {
    name: "Fix Dimension Overlap",
    cmd: "dimoverlap",
    url: "/LSP/DimensionOverlapV1-2.lsp",
  },
  {
    name: "Restore Original Dimension",
    cmd: "org",
    url: "/LSP/dimsion orginal.LSP",
  },
  {
    name: "Architectural Door (Single/Double)",
    cmd: "d1 / d2",
    url: "/LSP/DOOR.LSP",
  },
  { name: "Easy Cloud", cmd: "CD", url: "/LSP/Easyclouds.lsp" },
  { name: "Join Texts", cmd: "JT", url: "/LSP/joint text-JT.lsp" },
  { name: "Create Legend", cmd: "legend", url: "/LSP/LEGEND.LSP" },
  {
    name: "Length Measurement",
    cmd: "GTH",
    url: "/LSP/length measure-GTH.LSP",
  },
  { name: "Quick Number Entry", cmd: "5", url: "/LSP/Number enter - 5.lsp" },
  {
    name: "Replace Point with Block",
    cmd: "RPWP",
    url: "/LSP/ReplacePointsWithBlock-RPWB.LSP",
  },
  {
    name: "Reduce Opposite Space (Scale)",
    cmd: "CS",
    url: "/LSP/Space Reduce - CS.lsp",
  },
  { name: "Architectural Window", cmd: "sunwindow", url: "/LSP/SUNWINDOW.lsp" },
  { name: "Table Count", cmd: "count", url: "/LSP/table count-COUNT.lsp" },
  {
    name: "Export Table (AutoCAD → Excel)",
    cmd: "TE",
    url: "/LSP/TE_cad to xl TableExport.lsp",
  },
  {
    name: "Change Text Base Point",
    cmd: "LL",
    url: "/LSP/Text base point-ll.lsp",
  },
  {
    name: "Calculate Text Values",
    cmd: "call",
    url: "/LSP/Text Calculator - Call.lsp",
  },
  {
    name: "Fix Text Overlap",
    cmd: "txtoverlap",
    url: "/LSP/text overlap - TxtOverlap.VLX",
  },
  {
    name: "Convert Text to Attribute",
    cmd: "txt2att",
    url: "/LSP/TEXT2Attribute-TXT2ATT-1.lsp",
  },
  { name: "Match Text Properties", cmd: "txx", url: "/LSP/textmatch-TXX.LSP" },
  { name: "Remove Mask", cmd: "unmask", url: "/LSP/RemoveMask.lsp" },
  { name: "Isotext (with TAB)", cmd: "isotext", url: "/LSP/Isotext.lsp" },
  { name: "X Coordinate Tool", cmd: "xc", url: "/LSP/XCoordinate.lsp" },
  { name: "Y Coordinate Tool", cmd: "yc", url: "/LSP/YCoordinate.lsp" },
  {
    name: "Detach All Xrefs",
    cmd: "detachall",
    url: "/LSP/DetachAllXrefs.lsp",
  },
];

// Mappings for filenames that differ from code URLs
const fileMapping: Record<string, string> = {
  'RemoveMask.lsp': 'unmask.lsp',
  'Isotext.lsp': 'use keyboard tab button-isotext.lsp',
  'XCoordinate.lsp': 'XC-E coordinat.LSP',
  'YCoordinate.lsp': 'YC-N cordinat.LSP',
  'DetachAllXrefs.lsp': 'xref detach-Detachall.lsp',
};

// Load .env file manually
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const index = trimmed.indexOf('=');
      if (index !== -1) {
        const key = trimmed.substring(0, index).trim();
        const value = trimmed.substring(index + 1).trim().replace(/^['"]|['"]$/g, '');
        process.env[key] = value;
      }
    }
  });
}

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl) {
  console.error('Error: SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL is not set in .env');
  process.exit(1);
}

if (!supabaseKey || supabaseKey.startsWith('YOUR_')) {
  console.error('Error: Please set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY in your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const LSP_DIR = path.join(process.cwd(), 'public', 'LSP');
const BUCKET_NAME = 'lsp';

async function uploadAll() {
  console.log('Starting LSP migration to Supabase...');
  console.log(`Supabase URL: ${supabaseUrl}`);

  // 1. Ensure storage bucket exists
  console.log(`Checking storage bucket "${BUCKET_NAME}"...`);
  const { data: bucketData, error: bucketError } = await supabase.storage.getBucket(BUCKET_NAME);
  
  if (bucketError) {
    console.log(`Bucket "${BUCKET_NAME}" not found or inaccessible. Attempting to create it...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
    });
    if (createError) {
      console.error('Failed to create bucket:', createError.message);
      process.exit(1);
    }
    console.log(`Successfully created public bucket "${BUCKET_NAME}".`);
  } else {
    console.log(`Bucket "${BUCKET_NAME}" already exists.`);
  }

  // 2. Loop through and upload all items
  let successCount = 0;
  let errorCount = 0;

  for (let idx = 0; idx < lspFiles.length; idx++) {
    const item = lspFiles[idx];
    const urlFilename = path.basename(item.url);
    // Resolve filename with mapping or fallback
    const actualFilename = fileMapping[urlFilename] || urlFilename;
    const localFilePath = path.join(LSP_DIR, actualFilename);

    if (!fs.existsSync(localFilePath)) {
      console.error(`[ERROR] Local file not found for item ${item.name} at expected path: ${localFilePath}`);
      errorCount++;
      continue;
    }

    console.log(`\n[${idx + 1}/${lspFiles.length}] Uploading ${actualFilename}...`);

    // Upload to Storage
    const fileBody = fs.readFileSync(localFilePath);
    
    // AutoLISP files are text/plain or application/octet-stream
    let mimeType = 'text/plain';
    if (actualFilename.toLowerCase().endsWith('.vlx')) {
      mimeType = 'application/octet-stream';
    }

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(actualFilename, fileBody, {
        contentType: mimeType,
        upsert: true,
      });

    if (uploadError) {
      console.error(`[ERROR] Failed to upload ${actualFilename}:`, uploadError.message);
      errorCount++;
      continue;
    }

    // Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(actualFilename);

    console.log(`Uploaded! Public URL: ${publicUrl}`);

    // Insert metadata into the table
    console.log(`Upserting database record for "${item.name}"...`);
    const { error: dbError } = await supabase
      .from('lsp_tools')
      .upsert({
        id: idx + 1, // preserve order via serial id
        name: item.name,
        cmd: item.cmd,
        url: publicUrl,
        filename: actualFilename,
      });

    if (dbError) {
      console.error(`[ERROR] Failed to save database record for ${item.name}:`, dbError.message);
      errorCount++;
    } else {
      console.log(`[SUCCESS] Saved database record for "${item.name}".`);
      successCount++;
    }
  }

  console.log(`\n=== Migration Summary ===`);
  console.log(`Successfully migrated: ${successCount} items`);
  console.log(`Errors encountered: ${errorCount} items`);
  if (errorCount === 0) {
    console.log('All LSP files migrated successfully!');
  } else {
    console.warn('Migration finished with some errors. Please inspect the log.');
  }
}

uploadAll().catch(err => {
  console.error('Unhandled execution error:', err);
});
