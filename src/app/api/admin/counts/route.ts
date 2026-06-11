import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [diagRes, lspRes, dlRes, subRes, semRes] = await Promise.all([
      supabase.from("gallery_items").select("*", { count: "exact", head: true }),
      supabase.from("lsp_tools").select("*", { count: "exact", head: true }),
      supabase.from("lsp_downloads").select("*", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      supabase.from("register").select("*", { count: "exact", head: true }),
    ]);

    return NextResponse.json({
      diagrams: diagRes.count || 0,
      lsp: lspRes.count || 0,
      downloads: dlRes.count || 0,
      submissions: subRes.count || 0,
      seminars: semRes.count || 0,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
