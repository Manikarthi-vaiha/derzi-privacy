import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Support.css'

function UserSupport() {
  const [searchQuery, setSearchQuery] = useState('')

  const helpTopics = [
    {
      icon: '📦',
      title: 'Orders & Delivery',
      description: 'Track orders, delivery status, and order history',
      topics: [
        'How to track my order?',
        'Delivery taking too long',
        'Wrong item delivered',
        'Cancel or modify order'
      ]
    },
    {
      icon: '💳',
      title: 'Payments & Refunds',
      description: 'Payment methods, billing, and refund requests',
      topics: [
        'Payment methods accepted',
        'How to request a refund?',
        'Payment failed or declined',
        'Invoice or receipt'
      ]
    },
    {
      icon: '👤',
      title: 'Account & Profile',
      description: 'Manage your account settings and preferences',
      topics: [
        'Update profile information',
        'Change password',
        'Delete my account',
        'Login issues'
      ]
    },
    {
      icon: '🎁',
      title: 'Promotions & Offers',
      description: 'Coupons, discounts, and special offers',
      topics: [
        'How to apply promo code?',
        'Available offers',
        'Loyalty rewards program',
        'Expired coupon issues'
      ]
    },
    {
      icon: '🔔',
      title: 'Notifications',
      description: 'Manage app notifications and preferences',
      topics: [
        'Turn off notifications',
        'Not receiving updates',
        'SMS and email alerts',
        'Notification settings'
      ]
    },
    {
      icon: '⭐',
      title: 'Reviews & Ratings',
      description: 'Rate and review your experience',
      topics: [
        'How to leave a review?',
        'Edit or delete review',
        'Report inappropriate content',
        'Rating guidelines'
      ]
    }
  ]

  const contactOptions = [
    {
      icon: '📧',
      title: 'Email Support',
      value: 'admin@loyaleapp.com',
      link: 'mailto:admin@loyaleapp.com',
      description: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      value: '+973-6665 9995',
      link: 'tel:+97366659995',
      description: 'Available 9 AM - 9 PM'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Chat with us',
      link: '#',
      description: 'Average wait: 2 minutes'
    }
  ]

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>How can we help you?</h1>
        <span className="user-type-badge">User Support</span>
        <p className="support-subtitle">Find answers to your questions or get in touch with our support team</p>
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
        <p className="search-hint">Example: "How to track my order?" or "Payment issue"</p>
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
            <summary>How do I place an order on Derzi User App?</summary>
            <p>Browse available merchants, select items, add to cart, choose delivery address, and complete payment. You'll receive real-time updates on your order status.</p>
          </details>
          <details className="faq-item">
            <summary>What payment methods are accepted?</summary>
            <p>We accept credit/debit cards, mobile wallets, and cash on delivery (where available). All online payments are processed securely.</p>
          </details>
          <details className="faq-item">
            <summary>How long does delivery take?</summary>
            <p>Delivery times vary by merchant and location, typically 30-60 minutes. You can track your order in real-time through the app.</p>
          </details>
          <details className="faq-item">
            <summary>Can I cancel my order after placing it?</summary>
            <p>Yes, you can cancel orders before the merchant confirms. Once confirmed, cancellation may not be possible. Check the order details for cancellation options.</p>
          </details>
          <details className="faq-item">
            <summary>How do I request a refund?</summary>
            <p>Go to Order History, select the order, and tap "Request Refund". Provide the reason and our team will process it within 5-7 business days.</p>
          </details>
        </div>
      </div>

      <div className="footer-links">
        <p>Looking for our privacy policy?</p>
        <Link to="/user/privacy" className="privacy-link">
          View Derzi User App Privacy Policy →
        </Link>
      </div>
    </div>
  )
}

export default UserSupport

