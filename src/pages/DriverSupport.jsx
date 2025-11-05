import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Support.css'

function DriverSupport() {
  const [searchQuery, setSearchQuery] = useState('')

  const helpTopics = [
    {
      icon: '🚗',
      title: 'Getting Started',
      description: 'Sign up and start earning as a driver',
      topics: [
        'How to become a driver?',
        'Required documents',
        'Background check process',
        'Account activation timeline'
      ]
    },
    {
      icon: '📍',
      title: 'Deliveries & Navigation',
      description: 'Accept orders and complete deliveries',
      topics: [
        'How to accept orders?',
        'GPS and navigation issues',
        'Mark delivery as complete',
        'Handle multiple orders'
      ]
    },
    {
      icon: '💵',
      title: 'Earnings & Payments',
      description: 'Track income and manage payouts',
      topics: [
        'How are earnings calculated?',
        'View weekly earnings',
        'Tips and bonuses',
        'Payment schedule and methods'
      ]
    },
    {
      icon: '⏰',
      title: 'Schedule & Availability',
      description: 'Manage your working hours',
      topics: [
        'Set availability hours',
        'Go online/offline',
        'Peak hours and incentives',
        'Schedule flexibility'
      ]
    },
    {
      icon: '🛡️',
      title: 'Safety & Insurance',
      description: 'Stay safe and protected while driving',
      topics: [
        'Insurance coverage details',
        'Report an accident',
        'Safety guidelines',
        'Emergency contacts'
      ]
    },
    {
      icon: '📱',
      title: 'App & Technical',
      description: 'Technical support for driver app',
      topics: [
        'App not working properly',
        'Location tracking issues',
        'Update driver app',
        'Battery optimization tips'
      ]
    }
  ]

  const contactOptions = [
    {
      icon: '📧',
      title: 'Driver Support Email',
      value: 'admin@loyaleapp.com',
      link: 'mailto:admin@loyaleapp.com',
      description: 'Response within 12 hours'
    },
    {
      icon: '📞',
      title: 'Driver Hotline',
      value: '+973-6665 9995',
      link: 'tel:+97366659995',
      description: '24/7 support for drivers'
    },
    {
      icon: '🚨',
      title: 'Emergency Support',
      value: 'Report incident',
      link: '#',
      description: 'Immediate assistance needed'
    }
  ]

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>How can we help you?</h1>
        <span className="user-type-badge driver">Driver Support</span>
        <p className="support-subtitle">Get support for deliveries, earnings, and everything in between</p>
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
        <p className="search-hint">Example: "Payment not received" or "GPS not working"</p>
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
            <summary>How do I become a Derzi driver?</summary>
            <p>Download Derzi Driver App, submit required documents (driver's license, vehicle registration, insurance), pass background check, and complete orientation. Approval typically takes 3-5 business days.</p>
          </details>
          <details className="faq-item">
            <summary>How much can I earn as a driver?</summary>
            <p>Earnings vary based on deliveries completed, distance, time, and tips. Most drivers earn competitive rates plus 100% of customer tips. Peak hours offer bonus incentives.</p>
          </details>
          <details className="faq-item">
            <summary>When do I receive my payments?</summary>
            <p>Earnings are deposited weekly every Monday for the previous week's deliveries. You can track daily earnings in real-time through the app.</p>
          </details>
          <details className="faq-item">
            <summary>Can I choose my own hours?</summary>
            <p>Yes! Derzi Driver App offers complete flexibility. Go online when you want to work and offline when you're done. No minimum hours required.</p>
          </details>
          <details className="faq-item">
            <summary>What if I have an issue during delivery?</summary>
            <p>Use the in-app help button for immediate support. For emergencies, call our 24/7 driver hotline. We're here to help you complete every delivery safely.</p>
          </details>
          <details className="faq-item">
            <summary>Am I covered by insurance while driving?</summary>
            <p>Yes, all active deliveries are covered by our commercial insurance policy. This includes liability and accident coverage during pickup and delivery.</p>
          </details>
        </div>
      </div>

      <div className="footer-links">
        <p>Looking for our privacy policy?</p>
        <Link to="/driver/privacy" className="privacy-link">
          View Derzi Driver App Privacy Policy →
        </Link>
      </div>
    </div>
  )
}

export default DriverSupport

