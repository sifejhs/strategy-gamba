export function GET() {
  return new Response(
    "google-site-verification: google28a1bb12c03039aa.html",
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}
