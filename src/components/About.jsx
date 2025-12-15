import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const stats = [
  { number: '6+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '15+', label: 'Design Awards' },
]

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Design Systems',
    description: 'Building scalable, consistent design languages that empower teams.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'User Research',
    description: 'Deep understanding of user needs through research and testing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Visual Design',
    description: 'Crafting beautiful interfaces that delight and engage users.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column - Image & Stats */}
          <motion.div className="about-visual" variants={itemVariants}>
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img 
                  src="/profile.jpeg" 
                  alt="Renad Majdalwieh" 
                  className="about-image"
                  loading="lazy"
                />
                <div className="image-overlay" />
              </div>
              <div className="experience-badge">
                <span className="badge-years">6+</span>
                <span className="badge-text">Years of<br/>Experience</span>
              </div>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  variants={itemVariants}
                  custom={index}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="about-content" variants={itemVariants}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Designing Experiences<br/>That Matter</h2>
            
            <div className="about-text">
              <p className="lead">
                I'm a passionate Senior UI/UX Designer with over 6 years of experience 
                creating digital products that seamlessly blend aesthetics with functionality.
              </p>
              <p>
                My journey in design began with a simple belief: great design should be 
                invisible, effortlessly guiding users toward their goals. I specialize in 
                transforming complex problems into intuitive, elegant solutions that users 
                love and businesses value.
              </p>
              <p>
                I've had the privilege of working with diverse clients—from innovative 
                startups to established enterprises—helping them build products that 
                resonate with their users. My approach combines strategic thinking with 
                creative execution, always keeping the user at the center of every decision.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="highlight-item"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="/Renad-Majdalwieh-CV.pdf" 
              className="btn btn-outline download-cv"
              variants={itemVariants}
              download
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

