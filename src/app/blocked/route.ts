import { NextResponse } from "next/server";

export async function GET() {
  const body = `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Access Restricted — KSV Engineering</title>
    <style>
      :root{--bg:#0f172a;--card:#0b1220;--muted:#9aa4b2;--accent:#60a5fa}
      html,body{height:100%;margin:0}
      body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#071029 0%, #0b1220 100%);color:#e6eef8}
      .card{max-width:920px;width:96%;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.04);padding:36px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6)}
      h1{font-size:28px;margin:0 0 8px}
      p{color:var(--muted);margin:0 0 18px}
      .hint{font-size:14px;color:var(--muted);margin-top:14px}
      .btn{display:inline-block;padding:10px 16px;background:var(--accent);color:#04203a;border-radius:8px;text-decoration:none;font-weight:600}
      .meta{font-size:12px;color:#7f8a97;margin-top:12px}
      @media (min-width:768px){h1{font-size:34px}}    
    </style>
  </head>
  <body>
    <div class="card">
      <header style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div style="width:56px;height:56px;border-radius:10px;background:linear-gradient(90deg,#0ea5e9,#2563eb);display:flex;align-items:center;justify-content:center;font-weight:700;color:white">KSV</div>
        <div>
          <div style="font-size:13px;color:#9fb8d8">KSV Engineering</div>
          <div style="font-size:12px;color:var(--muted)">Access restriction</div>
        </div>
      </header>
      <main>
        <h1>Content not available in your region</h1>
        <p>We're sorry, this site isn't available from your current location. If you believe this is an error, please contact our team and include your location details.</p>
        <div class="hint">If you are using a VPN or proxy, try disabling it and refresh.</div>
        <div class="meta">Error code: 451 — Unavailable For Legal Reasons</div>
      </main>
    </div>
  </body>
  </html>`;
  const res = new NextResponse(body, {
    status: 451,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Tell crawlers explicitly not to index
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    },
  });
  return res;
}
