import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/renad-majdalawieh-3178a7145/', icon: 'linkedin' },
  { name: 'Behance', url: 'https://www.behance.net/renadmajd791995', icon: 'behance' },
  { name: 'Figma', url: 'https://www.figma.com/design/cjcJXPrOKLuZ7ODghsBh64/Case-Studies?node-id=0-1&p=f', icon: 'figma' },
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
figma: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.49c0 2.476-2.014 4.49-4.588 4.49zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02c1.665 0 3.019-1.355 3.019-3.019v-3.02H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.147zM8.148 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98H8.148zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V7.511H8.147zM15.852 15.02h-4.588V6.039h4.588c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49zm-3.117-7.51v5.039h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.02-3.019-3.02h-3.117z"/>
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
            <span className="card-number">7+</span>
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

