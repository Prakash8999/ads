export default function Privacy() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: November 27, 2026</p>

        <p>
          This Privacy Policy describes how Substriq ("we", "us", or "our") collects, uses, and
          shares information when you visit <strong>substriq.com</strong> and{' '}
          <strong>tools.substriq.com</strong> (collectively, the "Sites").
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>Files and data you process:</strong> All file processing on Substriq Tools (image
          editing, PDF manipulation, QR generation, etc.) is performed entirely inside your browser
          using client-side APIs (HTML5 Canvas, PDF.js, Web Crypto API). No files or personal data
          are transmitted to our servers.
        </p>
        <p>
          <strong>Usage data:</strong> We use Cloudflare Web Analytics on tools.substriq.com to
          collect aggregate, privacy-preserving metrics (page views, referrers, device type). This
          data is not tied to individual users, contains no cookies, and is not shared with third
          parties.
        </p>
        <p>
          <strong>Advertising:</strong> tools.substriq.com uses Google AdSense to display ads.
          Google may use cookies and similar tracking technologies to serve personalised
          advertisements. You can review Google's privacy practices at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          . To opt out of personalised ads, visit{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            google.com/settings/ads
          </a>
          .
        </p>

        <h2>2. Cookies</h2>
        <p>
          substriq.com itself does not set any cookies. tools.substriq.com may serve third-party
          cookies from Google AdSense for the purpose of ad personalisation and measurement.
        </p>

        <h2>3. How We Use Information</h2>
        <ul>
          <li>To operate and improve the Sites.</li>
          <li>To monitor aggregate traffic and performance via Cloudflare Analytics.</li>
          <li>To display relevant advertising via Google AdSense on tools.substriq.com.</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information. We share anonymised analytics
          with Cloudflare and advertising data with Google solely to operate our ad-supported
          service.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          Since we do not collect personal data or receive uploaded files, there is no personal data
          for us to retain. Cloudflare Analytics data is retained per Cloudflare's data retention
          policies.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          Our Sites are not directed to children under 13. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Last updated" date at the top
          of this page will reflect any changes. Continued use of the Sites after changes constitutes
          acceptance of the updated policy.
        </p>

        <h2>8. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please{' '}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </section>
  )
}
