import '../App.css'

function UserPrivacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <span className="user-type">User</span>
        <p className="last-updated">Last Updated: November 5, 2025</p>
      </div>

      <div className="privacy-content">
        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Derzi User App. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use the Derzi User App platform. Please read this privacy policy carefully.
            If you do not agree with the terms of this privacy policy, please do not access the application.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account</li>
            <li>Place an order or make a purchase</li>
            <li>Contact customer support</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact information (email, phone number, address)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Order history and preferences</li>
            <li>Profile information and photos</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you use Derzi User App, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address and device identifiers</li>
            <li>Browser type and version</li>
            <li>Location data (with your permission)</li>
            <li>Usage data and analytics</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Provide customer support</li>
            <li>Improve our services and user experience</li>
            <li>Send you promotional materials (with your consent)</li>
            <li>Detect and prevent fraud or security issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Merchants and Drivers:</strong> To facilitate order delivery and fulfillment</li>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform</li>
            <li><strong>Payment Processors:</strong> To process your transactions securely</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However, no method
            of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Your Privacy Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            Derzi User App uses cookies and similar tracking technologies to track activity on our service and store
            certain information. You can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent.
          </p>
        </div>

        <div className="privacy-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Derzi User App is not intended for children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you become aware that a child has provided
            us with personal information, please contact us.
          </p>
        </div>

        <div className="privacy-section">
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </div>

        <div className="privacy-section">
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default UserPrivacy

