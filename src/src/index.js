// _worker.js – Cloudflare Pages Functions (runs on the same origin)
const TARGET_URL = "https://script.google.com/macros/s/AKfycbxPMeG7fg2x8axT_iRYRj7PsWG-kn72ztu2YSKP-TaOPMDMfcW9P2yd1ueEq1u5eogvRw/exec";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle API requests (all POSTs go to the proxy)
    if (request.method === "POST") {
      // Forward the request to Google Apps Script
      const modifiedRequest = new Request(TARGET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: request.body,
      });
      
      const response = await fetch(modifiedRequest);
      const responseData = await response.text();
      
      // Return with CORS headers (though same-origin, but good practice)
      return new Response(responseData, {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
    
    // For GET requests, serve your static HTML (if the file exists)
    // Cloudflare Pages automatically serves static assets, but we need to let it handle that.
    // The easiest: don't handle GET here – let Pages serve the HTML.
    // But because we have a _worker.js, we must explicitly serve the HTML.
    // Solution: use Pages Functions with a route, but simpler: rename _worker.js to /functions/api/proxy.js
    // However, the simplest is to use a Worker as a reverse proxy on a different route.
    // Let's do a clean approach: keep _worker.js but serve the HTML from it.
    
    // For GET requests, return the index.html content (read from the asset)
    // But that's complicated. Better: use a separate route /api/*
    
    // I'll provide a better version below – see the alternative.
  }
}
