import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Support.css'

function MerchantSupport() {
  const [searchQuery, setSearchQuery] = useState('')

  const helpTopics = [
    {
      icon: '🏪',
      title: 'Account & Onboarding',
      description: 'Set up and manage your merchant account',
      topics: [
        'How to register as a merchant?',
        'Account verification process',
        'Update business information',
        'Dashboard access issues'
      ]
    },
    {
      icon: '📋',
      title: 'Orders & Management',
      description: 'Handle incoming orders and inventory',
      topics: [
        'Accept or reject orders',
        'Update menu and pricing',
        'Manage business hours',
        'Handle order modifications'
      ]
    },
    {
      icon: '💰',
      title: 'Payments & Payouts',
      description: 'Earnings, settlements, and transactions',
      topics: [
        'When do I receive payments?',
        'Commission and fees structure',
        'Payment settlement issues',
        'View transaction history'
      ]
    },
    {
      icon: '📊',
      title: 'Reports & Analytics',
      description: 'Sales reports and performance metrics',
      topics: [
        'Access sales reports',
        'Download financial statements',
        'View customer analytics',
        'Performance insights'
      ]
    },
    {
      icon: '📱',
      title: 'App & Technical',
      description: 'Technical support and app features',
      topics: [
        'App not working properly',
        'Notification issues',
        'Update merchant app',
        'Device compatibility'
      ]
    },
    {
      icon: '🎯',
      title: 'Promotions & Marketing',
      description: 'Boost your business visibility',
      topics: [
        'Create promotional offers',
        'Featured listing options',
        'Advertising opportunities',
        'Customer loyalty programs'
      ]
    }
  ]

  const contactOptions = [
    {
      icon: '📧',
      title: 'Merchant Support Email',
      value: 'admin@loyaleapp.com',
      link: 'mailto:admin@loyaleapp.com',
      description: 'Response within 12 hours'
    },
    {
      icon: '📞',
      title: 'Merchant Hotline',
      value: '+973-6665 9995',
      link: 'tel:+97366659995',
      description: 'Priority support 24/7'
    },
    {
      icon: '👨‍💼',
      title: 'Account Manager',
      value: 'Request callback',
      link: '#',
      description: 'Dedicated support for partners'
    }
  ]

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>How can we help you?</h1>
        <span className="user-type-badge merchant">Merchant Support</span>
        <p className="support-subtitle">Get help with your merchant account and grow your business</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Describe your issue or search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <p className="search-hint">Example: "How to update menu?" or "Payment settlement issue"</p>
      </div>

      <div className="help-topics-section">
        <h2>Browse Help Topics</h2>
        <div className="help-topics-grid">
          {helpTopics.map((topic, index) => (
            <div key={index} className="help-topic-card">
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
              <ul className="topic-list">
                {topic.topics.map((item, idx) => (
                  <li key={idx}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2>Still need help? Contact us</h2>
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <a key={index} href={option.link} className="contact-card">
              <div className="contact-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p className="contact-value">{option.value}</p>
              <p className="contact-description">{option.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>How do I get started as a Derzi merchant?</summary>
            <p>Download Derzi Merchant App, complete registration with business documents, submit for verification, and once approved, you can start accepting orders.</p>
          </details>
          <details className="faq-item">
            <summary>What is the commission structure?</summary>
            <p>Commission rates vary based on your business type and volume. Contact your account manager for customized pricing or check your dashboard for current rates.</p>
          </details>
          <details className="faq-item">
            <summary>When will I receive my payments?</summary>
            <p>Settlements are processed weekly. Funds are transferred to your registered bank account every Monday for the previous week's orders, minus applicable commissions.</p>
          </details>
          <details className="faq-item">
            <summary>How do I update my menu or prices?</summary>
            <p>Go to Merchant Dashboard → Menu Management. You can add, edit, or remove items, update prices, and set availability in real-time.</p>
          </details>
          <details className="faq-item">
            <summary>Can I temporarily close my store?</summary>
            <p>Yes, use the "Temporarily Closed" toggle in your dashboard. This prevents new orders while keeping your profile active. Don't forget to reopen when ready!</p>
          </details>
          <details className="faq-item">
            <summary>How do I handle customer complaints?</summary>
            <p>Address issues promptly through the app's messaging system. Serious complaints are escalated to our support team for resolution. Good customer service improves ratings!</p>
          </details>
        </div>
      </div>

      <div className="footer-links">
        <p>Looking for our privacy policy?</p>
        <Link to="/merchant/privacy" className="privacy-link">
          View Derzi Merchant App Privacy Policy →
        </Link>
      </div>
    </div>
  )
}

export default MerchantSupport

