# Orbi Landing Site

Standalone marketing site for Orbi.

Why this lives outside `orbi_nhost`:

- FlutterFlow will not overwrite it.
- Search engines get semantic, crawlable HTML instead of a Flutter web app shell.
- Legal and support pages can be indexed directly.

Files:

- `index.html`: main landing page
- `terms/index.html`: Terms of Service
- `privacy/index.html`: Privacy Policy
- `support/index.html`: Support page
- `styles.css`: shared styling
- `script.js`: carousel, smooth scrolling, reveal animations
- `robots.txt`: crawler rules
- `sitemap.xml`: starter sitemap

Notes before deployment:

- Update the canonical URLs and sitemap if the final domain is not `https://orbichat.io/`.
- If you later host the app itself on a subdomain like `app.orbichat.io`, update the "Join Orbi" CTA to point there.
- To enable the secure support form, set the Cloudflare Turnstile site key in
  `support/index.html` (`orbi-turnstile-site-key`) and configure the matching
  `TURNSTILE_SECRET_KEY` Nhost secret. The form never writes directly to
  Hasura or Storage.
- This project can be deployed as plain static hosting on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or similar.

## Google Search launch checklist

Technical SEO files and metadata are already included in the site. After each
production deployment:

1. Add and verify the `https://orbichat.io/` domain property in Google Search
   Console.
2. Submit `https://orbichat.io/sitemap.xml` in the Sitemaps report.
3. Inspect `https://orbichat.io/` with URL Inspection and request indexing after
   important content changes.
4. Check Page indexing, Core Web Vitals, and Enhancements reports for issues.
5. Test the home page with Google's Rich Results Test after changing its JSON-LD.

Search visibility is not immediate or guaranteed. Google must crawl the deployed
site, and useful third-party links and genuinely helpful content remain important
ranking signals.
