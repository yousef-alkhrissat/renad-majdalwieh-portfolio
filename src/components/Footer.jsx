import { motion } from 'framer-motion'
import './Footer.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/renadmajdalwieh' },
  { name: 'Behance', url: 'https://behance.net/renadmajdalwieh' },
  { name: 'Dribbble', url: 'https://dribbble.com/renadmajdalwieh' },
  { name: 'Instagram', url: 'https://instagram.com/renadmajdalwieh' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,100 1440,60 L1440,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
                <span className="logo-text">Renad</span>
                <span className="logo-dot">.</span>
              </a>
              <p className="footer-tagline">
                Senior UI/UX Designer crafting digital experiences that users love and businesses value.
              </p>
              <div className="footer-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#portfolio">UI/UX Design</a></li>
                <li><a href="#portfolio">Product Design</a></li>
                <li><a href="#portfolio">Design Systems</a></li>
                <li><a href="#portfolio">User Research</a></li>
                <li><a href="#portfolio">Prototyping</a></li>
                <li><a href="#portfolio">Brand Identity</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 className="footer-heading">Get In Touch</h4>
              <div className="contact-items">
                <a href="mailto:renad.majdalwieh@email.com" className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  renad.majdalwieh@email.com
                </a>
                <span className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Dubai, UAE
                </span>
              </div>
              <a href="#contact" className="footer-cta btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
                Start a Project
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Renad Majdalwieh. All rights reserved.
            </p>
            <p className="made-with">
              Designed with <span className="heart">♥</span> for great user experiences
            </p>
          </div>
        </div>
      </div>

      <motion.button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </motion.button>
    </footer>
  )
}

