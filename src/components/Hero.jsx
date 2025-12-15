import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/renadmajdalwieh', icon: 'linkedin' },
  { name: 'Behance', url: 'https://behance.net/renadmajdalwieh', icon: 'behance' },
  { name: 'Dribbble', url: 'https://dribbble.com/renadmajdalwieh', icon: 'dribbble' },
]

const SocialIcon = ({ icon }) => {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    behance: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
      </svg>
    ),
    dribbble: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>

      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            Available for new projects
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="title-line">Hi, I'm</span>
            <span className="title-name">Renad Majdalwieh</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            <span className="subtitle-role">Senior UI/UX Designer</span>
            <span className="subtitle-divider">—</span>
            <span className="subtitle-tagline">Crafting Digital Experiences</span>
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            I transform complex problems into elegant, user-centered solutions. 
            With a passion for detail and a love for beautiful design, I create 
            digital experiences that users love and businesses value.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#portfolio" className="btn btn-primary">
              View My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-container">
            <div className="image-frame">
              <div className="image-frame-accent" />
              <img 
                src="/profile.jpeg" 
                alt="Renad Majdalwieh - Senior UI/UX Designer" 
                className="hero-image"
                loading="eager"
              />
            </div>
            <div className="image-decoration image-decoration-1" />
            <div className="image-decoration image-decoration-2" />
          </div>
          
          <motion.div 
            className="floating-card floating-card-projects"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="card-number">50+</span>
            <span className="card-label">Projects Completed</span>
          </motion.div>

          <motion.div 
            className="floating-card floating-card-experience"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="card-number">6+</span>
            <span className="card-label">Years Experience</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}

