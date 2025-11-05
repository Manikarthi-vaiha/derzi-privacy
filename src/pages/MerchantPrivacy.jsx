import '../App.css'

function MerchantPrivacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <span className="user-type">Merchant</span>
        <p className="last-updated">Last Updated: November 5, 2025</p>
      </div>

      <div className="privacy-content">
        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Derzi Merchant App collects, uses, and protects the information of merchants
            who partner with our platform. As a merchant, you entrust us with important business and
            customer information, and we take that responsibility seriously.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Information We Collect from Merchants</h2>
          <h3>Business Information</h3>
          <p>When you register as a merchant, we collect:</p>
          <ul>
            <li>Business name, address, and contact information</li>
            <li>Business registration and tax identification numbers</li>
            <li>Bank account and payment information</li>
            <li>Business owner/representative contact details</li>
            <li>Business licenses and certifications</li>
          </ul>

          <h3>Operational Data</h3>
          <ul>
            <li>Menu items, pricing, and product catalog</li>
            <li>Order history and transaction records</li>
            <li>Inventory and availability information</li>
            <li>Customer reviews and ratings</li>
            <li>Business hours and operational settings</li>
          </ul>

          <h3>Technical Information</h3>
          <ul>
            <li>Device and browser information</li>
            <li>IP addresses and access logs</li>
            <li>Usage analytics and dashboard activity</li>
            <li>API access and integration data</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. How We Use Merchant Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Onboard and verify your business on our platform</li>
            <li>Process payments and manage financial transactions</li>
            <li>Facilitate order management and customer communications</li>
            <li>Provide merchant dashboard and analytics tools</li>
            <li>Offer customer support and technical assistance</li>
            <li>Improve platform features and services</li>
            <li>Ensure compliance with legal and regulatory requirements</li>
            <li>Detect and prevent fraudulent activities</li>
            <li>Send business updates and marketing communications</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>4. Information Sharing</h2>
          <p>We may share merchant information with:</p>
          <ul>
            <li><strong>Customers:</strong> Business name, location, menu, ratings, and reviews</li>
            <li><strong>Drivers:</strong> Business location, order details, and pickup instructions</li>
            <li><strong>Payment Processors:</strong> Financial information for payment processing</li>
            <li><strong>Service Providers:</strong> Third-party vendors supporting platform operations</li>
            <li><strong>Legal Authorities:</strong> When required by law or legal process</li>
            <li><strong>Business Partners:</strong> For marketing and promotional opportunities (with consent)</li>
          </ul>
          <p>Your confidential business information is protected and never sold to third parties.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Data Security and Protection</h2>
          <p>
            We implement industry-standard security measures to protect your business information, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and access controls</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Employee training on data protection</li>
            <li>Incident response and breach notification procedures</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>6. Merchant Rights and Controls</h2>
          <p>As a merchant partner, you have the right to:</p>
          <ul>
            <li>Access and download your business data</li>
            <li>Update your business information and settings</li>
            <li>Request deletion of your account and associated data</li>
            <li>Opt-out of marketing communications</li>
            <li>Control visibility of your business information</li>
            <li>Export transaction and sales reports</li>
            <li>Object to certain data processing activities</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>7. Financial Data</h2>
          <p>
            Payment and financial information is processed through secure, PCI-DSS compliant payment
            processors. We retain transaction records as required by law for accounting, tax, and
            audit purposes. Bank account information is encrypted and access is strictly controlled.
          </p>
        </div>

        <div className="privacy-section">
          <h2>8. Customer Data Responsibilities</h2>
          <p>
            As a merchant using Derzi Merchant App, you may have access to customer information through our platform. You agree to:
          </p>
          <ul>
            <li>Use customer data only for order fulfillment purposes</li>
            <li>Maintain confidentiality of customer information</li>
            <li>Comply with applicable data protection laws</li>
            <li>Not use customer data for independent marketing</li>
            <li>Report any data breaches or security incidents</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>9. Data Retention</h2>
          <p>
            We retain merchant information for as long as your account is active and as required by law.
            Financial records are retained for tax and regulatory compliance. After account termination,
            we may retain certain information for legal, audit, and business continuity purposes.
          </p>
        </div>

        <div className="privacy-section">
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own.
            We ensure appropriate safeguards are in place to protect your data in accordance with
            applicable data protection laws.
          </p>
        </div>

        <div className="privacy-section">
          <h2>11. Policy Updates</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or legal requirements.
            Merchants will be notified of material changes via email or platform notifications.
          </p>
        </div>

        <div className="privacy-section">
          <h2>12. Contact Us</h2>
          <p>For merchant-specific privacy inquiries, please contact:</p>
          <div className="contact-info">
            <p><strong>Name:</strong> Sayed Ahmed Alkhabbaz</p>
            <p><strong>Email:</strong> <a href="mailto:admin@loyaleapp.com">admin@loyaleapp.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+97366659995">+973-6665 9995</a></p>
            <p><strong>Address:</strong> Manama, Bahrain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantPrivacy

