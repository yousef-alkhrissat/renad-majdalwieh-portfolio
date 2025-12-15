import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Experience.css'

const experiences = [
  {
    period: 'Feb 2025 - Present',
    role: 'Senior UI/UX Designer',
    company: 'Axelerated Solutions',
    location: 'Saudi Arabia',
    description: 'IT solutions for companies & institutions. Providing UI/UX design expertise across multiple enterprise products and platforms.',
    achievements: [
      'AXS Website & Marketplace - UI/UX consultations and fine tuning',
      'Dara (Visits Management System) - Designed locations flow, manage content and settings flow',
      'Sadaem Corporate Website - Complete design for website and responsive layouts in Arabic and English',
    ],
    technologies: ['Figma', 'UI Consultation', 'Responsive Design', 'Bilingual Design'],
  },
  {
    period: 'Jul 2024 - Feb 2025',
    role: 'Senior UI/UX Designer',
    company: 'EJADA',
    location: 'Saudi Arabia',
    description: 'IT Services & IT Consulting company. Designed complex banking, fintech, and government systems with focus on user experience.',
    achievements: [
      'Al-Rajhi Bank Mobile App - Transfer, Recurring payments, and limit management features',
      'Loyalty Banking System - Products management and rewards management',
      'Saudi Government Donation System - Beneficiaries management and donation governance',
      'AI Robo Advisor - Dashboard and stock management features',
    ],
    technologies: ['Figma', 'Banking UX', 'Fintech', 'Government Systems'],
  },
  {
    period: 'Oct 2022 - Jul 2023',
    role: 'Senior UI/UX Designer',
    company: 'Joacademy',
    location: 'Jordan',
    description: 'Online Education Platform. Led design for educational products with comprehensive user research and testing methodologies.',
    achievements: [
      'Joacademy Website & Mobile App - Courses, Campaigns, E-schools, Products and more',
      'Conducted Usability tests, A/B tests, Surveys, and Hotjar analysis',
      'Web and mobile apps: SAAS, AI tools, Social media, CRM, Marketplaces, Healthcare',
    ],
    technologies: ['Figma', 'Usability Testing', 'A/B Testing', 'Hotjar', 'User Research'],
  },
  {
    period: 'Jul 2019 - Oct 2022',
    role: 'UI/UX Designer & Team Lead',
    company: 'NADSoft',
    location: 'Jordan',
    description: 'Software Company. Led design team and managed multiple web and mobile application projects across various industries.',
    achievements: [
      'Led UI/UX design team and managed project deliverables',
      'Designed web and mobile apps: Marketplaces, Brand websites, Educational platforms',
      'Established design processes and team workflows',
    ],
    technologies: ['Figma', 'Team Leadership', 'Design Systems', 'Project Management'],
  },
  {
    period: 'Mar 2018 - Jul 2019',
    role: 'UI/UX Designer',
    company: 'Atomkit',
    location: 'Jordan',
    description: 'IT Services Agency. Started professional design career creating user interfaces for various client projects.',
    achievements: [
      'Designed user interfaces for multiple client projects',
      'Collaborated with development teams on implementation',
      'Built foundation in UI/UX design principles and processes',
    ],
    technologies: ['Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
]

const education = [
  {
    period: 'Sep 2013 - Jul 2017',
    degree: 'Business Information Technology',
    institution: 'University of Jordan',
    field: 'Cumulative Grade: Good',
    description: 'Studied business and information technology fundamentals.',
  },
]

const certifications = [
  { name: 'UX Design Certificate - Google', year: 'Present' },
  { name: 'UX Design & UX Research - Edrak', year: '2022' },
  { name: 'UX Design User Behavior & Psychology - Udemy', year: '2020' },
  { name: 'Interaction Design & Design Thinking - LinkedIn Learning', year: '2018' },
  { name: 'Graphic Design & Adobe Tools - INSPIRE ME Center', year: '2017' },
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

