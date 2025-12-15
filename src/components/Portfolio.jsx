import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

const categories = ['All', 'Mobile App', 'Web Design', 'Design System', 'Branding']

const projects = [
  {
    id: 1,
    title: 'FinFlow Banking App',
    category: 'Mobile App',
    description: 'Complete redesign of a mobile banking application focusing on intuitive navigation and enhanced security features.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['UX Research', 'Mobile Design', 'Prototyping'],
    metrics: { improvement: '45%', metric: 'User Satisfaction' },
    color: '#722F37',
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    category: 'Web Design',
    description: 'Designed a patient portal for a healthcare provider, streamlining appointment booking and medical records access.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['Healthcare', 'Accessibility', 'Dashboard'],
    metrics: { improvement: '60%', metric: 'Task Completion' },
    color: '#2D5A5A',
  },
  {
    id: 3,
    title: 'Nova Design System',
    category: 'Design System',
    description: 'Built a comprehensive design system with 200+ components, enabling faster product development across teams.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    tags: ['Components', 'Documentation', 'Tokens'],
    metrics: { improvement: '3x', metric: 'Dev Speed' },
    color: '#4A3B6B',
  },
  {
    id: 4,
    title: 'EcoTrack App',
    category: 'Mobile App',
    description: 'Sustainability tracking app helping users monitor and reduce their carbon footprint through gamified challenges.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tags: ['Gamification', 'Data Viz', 'Social'],
    metrics: { improvement: '80K+', metric: 'Active Users' },
    color: '#2D5A3A',
  },
  {
    id: 5,
    title: 'Luxe Realty Website',
    category: 'Web Design',
    description: 'Premium real estate platform with immersive property showcases and advanced search functionality.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['Real Estate', '3D Tours', 'Filters'],
    metrics: { improvement: '35%', metric: 'Lead Generation' },
    color: '#8B6B3D',
  },
  {
    id: 6,
    title: 'Artisan Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity for an artisanal coffee roastery, including logo, packaging, and digital presence.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    tags: ['Logo Design', 'Packaging', 'Brand Guide'],
    metrics: { improvement: '200%', metric: 'Brand Recognition' },
    color: '#5C4033',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
    <section id="portfolio" className="portfolio section" ref={ref}>
      <div className="container">
        <motion.div
          className="portfolio-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={itemVariants}>
            My Work
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            A selection of projects showcasing my design process and problem-solving approach
          </motion.p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div 
                    className="project-overlay"
                    style={{ background: `linear-gradient(135deg, ${project.color}ee, ${project.color}99)` }}
                  >
                    <div className="project-metrics">
                      <span className="metrics-value">{project.metrics.improvement}</span>
                      <span className="metrics-label">{project.metrics.metric}</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <button className="project-link">
                    View Case Study
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="https://behance.net/renadmajdalwieh" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Projects on Behance
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

