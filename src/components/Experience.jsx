import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Experience.css'

const experiences = [
  {
    period: '2022 - Present',
    role: 'Senior UI/UX Designer',
    company: 'Tech Innovation Corp',
    location: 'Dubai, UAE',
    description: 'Leading design initiatives for enterprise-level products, managing a team of 4 designers, and establishing design system standards across multiple product lines.',
    achievements: [
      'Increased user engagement by 40% through redesigned onboarding flow',
      'Built comprehensive design system used across 5 products',
      'Mentored junior designers and conducted design reviews',
    ],
    technologies: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  },
  {
    period: '2020 - 2022',
    role: 'UI/UX Designer',
    company: 'Digital Solutions Agency',
    location: 'Amman, Jordan',
    description: 'Designed user interfaces for web and mobile applications across various industries including fintech, healthcare, and e-commerce.',
    achievements: [
      'Delivered 20+ successful product designs',
      'Reduced user task completion time by 35%',
      'Established UX research practice within the team',
    ],
    technologies: ['Adobe XD', 'Sketch', 'InVision', 'Usability Testing'],
  },
  {
    period: '2018 - 2020',
    role: 'Junior UI Designer',
    company: 'Creative Studio',
    location: 'Amman, Jordan',
    description: 'Started my design career creating visual designs for websites, mobile apps, and marketing materials while developing UX foundations.',
    achievements: [
      'Designed interfaces for 15+ client projects',
      'Collaborated closely with development teams',
      'Received client satisfaction rating of 95%',
    ],
    technologies: ['Photoshop', 'Illustrator', 'Figma', 'HTML/CSS'],
  },
]

const education = [
  {
    period: '2014 - 2018',
    degree: 'Bachelor of Design',
    institution: 'University of Jordan',
    field: 'Visual Communication Design',
    description: 'Focused on digital design, typography, and user experience principles.',
  },
]

const certifications = [
  { name: 'Google UX Design Professional Certificate', year: '2023' },
  { name: 'Interaction Design Foundation Certification', year: '2022' },
  { name: 'Nielsen Norman Group UX Certification', year: '2021' },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Career Path
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Work Experience
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            A journey of continuous growth and impactful design work
          </motion.p>
        </motion.div>

        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline */}
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  {index < experiences.length - 1 && <div className="marker-line" />}
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                  
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  
                  <p className="timeline-description">{exp.description}</p>
                  
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="timeline-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Certifications */}
          <motion.div 
            className="education-certs"
            variants={containerVariants}
          >
            {/* Education */}
            <motion.div className="education-section" variants={itemVariants}>
              <h3 className="section-subtitle-heading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <span className="edu-period">{edu.period}</span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-field">{edu.field}</p>
                  <p className="edu-description">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div className="certs-section" variants={itemVariants}>
              <h3 className="section-subtitle-heading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
                Certifications
              </h3>
              <div className="certs-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <div className="cert-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div className="cert-content">
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

