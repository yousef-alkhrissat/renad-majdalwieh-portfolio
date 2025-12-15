import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const skillCategories = [
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', level: 98, icon: '🎨' },
      { name: 'Adobe XD', level: 92, icon: '💎' },
      { name: 'Sketch', level: 88, icon: '✏️' },
      { name: 'Adobe Photoshop', level: 90, icon: '📸' },
      { name: 'Adobe Illustrator', level: 85, icon: '🖼️' },
      { name: 'Principle', level: 82, icon: '🎬' },
    ]
  },
  {
    title: 'UX Skills',
    skills: [
      { name: 'User Research', level: 95, icon: '🔍' },
      { name: 'Wireframing', level: 96, icon: '📐' },
      { name: 'Prototyping', level: 94, icon: '⚡' },
      { name: 'Usability Testing', level: 92, icon: '🧪' },
      { name: 'Information Architecture', level: 90, icon: '🏗️' },
      { name: 'User Personas', level: 93, icon: '👤' },
    ]
  },
  {
    title: 'Technical Skills',
    skills: [
      { name: 'HTML/CSS', level: 88, icon: '🌐' },
      { name: 'Design Systems', level: 94, icon: '📚' },
      { name: 'Responsive Design', level: 96, icon: '📱' },
      { name: 'Accessibility (WCAG)', level: 90, icon: '♿' },
      { name: 'Motion Design', level: 85, icon: '🎥' },
      { name: 'Component Libraries', level: 92, icon: '🧩' },
    ]
  },
]

const softSkills = [
  { name: 'Communication', icon: '💬' },
  { name: 'Problem Solving', icon: '🧠' },
  { name: 'Team Collaboration', icon: '🤝' },
  { name: 'Project Management', icon: '📋' },
  { name: 'Critical Thinking', icon: '💡' },
  { name: 'Attention to Detail', icon: '🎯' },
]

export default function Skills() {
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
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Expertise
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Tools
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            A comprehensive toolkit for crafting exceptional digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              custom={categoryIndex}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5 
                    }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="soft-skills"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 className="soft-skills-title" variants={itemVariants}>
            Soft Skills
          </motion.h3>
          <motion.div className="soft-skills-grid" variants={itemVariants}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="soft-skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="soft-skill-icon">{skill.icon}</span>
                <span className="soft-skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

