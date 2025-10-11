#!/usr/bin/env node
import { Project, SyntaxKind, ts } from 'ts-morph';
import path from 'node:path';

// Codemod: Replace <img .../> with next/image <Image .../>.
// Behavior:
// - Adds `import Image from 'next/image'` if missing.
// - If the <img> has numeric width & height attributes, keep them on <Image>.
// - If width/height are missing, and className exists, move className to a wrapper <div className="... relative overflow-hidden"> and use <Image fill ... /> inside the wrapper. The wrapper preserves sizing utility classes (w-*, h-*, rounded-*, shadow-*, etc.).
// - If src is an expression like {foo.src} it will be converted to {foo} (strip .src). If src is a string literal, kept as-is.

const root = process.cwd();
const project = new Project({
  tsConfigFilePath: path.join(root, 'tsconfig.json'),
});

const sourceFiles = project.getSourceFiles('src/**/*.tsx');
if (sourceFiles.length === 0) {
  console.log('No .tsx files found under src/ — exiting.');
  process.exit(0);
}

let totalReplacements = 0;

for (const sf of sourceFiles) {
  const imgs = sf.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement).filter(n => n.getTagNameNode().getText() === 'img');
  if (imgs.length === 0) continue;

  // Ensure import Image from 'next/image' exists or add it once per file
  const existingImageImport = sf.getImportDeclarations().find(d => d.getModuleSpecifierValue() === 'next/image');
  let addedImport = false;
  if (!existingImageImport) {
    sf.insertImportDeclaration(0, {
      defaultImport: 'Image',
      moduleSpecifier: 'next/image',
    });
    addedImport = true;
  }

  for (const img of imgs) {
    const attrs = img.getAttributes();
    const attrMap = Object.create(null);
    for (const a of attrs) {
      try {
        const name = a.getName ? a.getName() : a.getKindName();
        attrMap[name] = a;
      } catch (e) {
        // skip
      }
    }

    // Helper to get attribute text
    const getAttrText = (name) => {
      const a = attrMap[name];
      if (!a) return null;
      const init = a.getInitializer ? a.getInitializer() : null;
      if (!init) return null;
      return init.getText();
    };

    const srcAttr = attrMap['src'];
    let newSrcText = null;
    if (srcAttr) {
      const init = srcAttr.getInitializer();
      if (init) {
        const txt = init.getText();
        // if expression like {foo.src} -> return foo
        if (/^\{.*\.src\}$/.test(txt.replace(/\s+/g, ''))) {
          newSrcText = txt.replace(/\.src\s*\}$/,'}').replace(/^\{/, '{');
          // simplify {foo.src} -> {foo}
          newSrcText = newSrcText.replace(/\{\s*(.*)\s*\}/, '{$1}').replace(/\.src\s*$/,'');
          // final expression should be like {foo}
          newSrcText = `{${newSrcText.replace('{','').replace('}','')}}`;
        } else {
          newSrcText = txt; // keep as-is
        }
      }
    }

    const classAttr = attrMap['className'];
    const classText = classAttr ? classAttr.getInitializer().getText() : null;

    const widthAttr = attrMap['width'];
    const heightAttr = attrMap['height'];

    // Build new JSX for Image
    const imageProps = [];
    // src
    if (newSrcText) {
      imageProps.push(`src={${newSrcText.replace(/^{|}$/g,'')}}`);
    } else if (srcAttr) {
      // fallback: use the existing initializer text
      imageProps.push(`src=${getAttrText('src')}`);
    }

    // alt
    if (attrMap['alt']) imageProps.push(`alt=${getAttrText('alt')}`);

    // width/height
    if (widthAttr && heightAttr) {
      imageProps.push(`width=${getAttrText('width')}`);
      imageProps.push(`height=${getAttrText('height')}`);
    }

    // className: we'll move to wrapper when width/height are absent
    // other attributes: copy any remaining simple attributes (loading, quality, etc.)
    for (const [k, v] of Object.entries(attrMap)) {
      if (['src','alt','className','width','height'].includes(k)) continue;
      // copy attribute text
      const txt = v.getText();
      imageProps.push(txt);
    }

    // Construct replacement text
    let replacementText = '';
    if (widthAttr && heightAttr) {
      replacementText = `<Image ${imageProps.join(' ')} />`;
      img.replaceWithText(replacementText);
    } else {
      // wrap in a div that preserves sizing classes
      const wrapperClass = classText ? classText : 'relative overflow-hidden';
      // derive object-fit preference from className
      const objectFit = classText && classText.includes('object-cover') ? 'object-cover' : 'object-contain';
      // ensure Image has fill
      imageProps.push('fill');
      imageProps.push(`className="${objectFit}"`);
      const inner = `<Image ${imageProps.join(' ')} />`;
      // build wrapper: if classText was a string literal, strip the quotes when embedding
      let wrapperClassText = wrapperClass;
      // if classText is a JSX expression, keep it as is
      if (wrapperClassText.startsWith('{')) {
        // expression
      } else {
        // ensure no surrounding quotes
        wrapperClassText = wrapperClassText.replace(/^"|"$/g, '');
      }
      replacementText = `<div className={${classText ? classText : '"relative overflow-hidden"'}}>${inner}</div>`;
      img.replaceWithText(replacementText);
    }

    totalReplacements++;
  }

  if (addedImport) {
    // format file changes
  }

  sf.saveSync();
}

console.log(`Replaced ${totalReplacements} <img> elements across ${sourceFiles.length} files.`);
