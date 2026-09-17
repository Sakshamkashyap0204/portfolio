import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiAngular,
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiOpencv,
  SiGit, SiGithub,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbApi, TbBrain, TbRocket } from 'react-icons/tb'
import { skillCategories } from '../../data/skills'
import styles from './Skills.module.css'

const iconMap = {
  SiHtml5,
  SiCss3: SiCss,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiOpencv,
  SiAmazonaws: FaAws,
  SiGit,
  SiGithub,
  TbApi,
  TbBrain,
  TbPrompt: TbBrain,
  TbRocket,
}

function SkillCard({ name, icon, delay }) {
  const Icon = iconMap[icon]
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {Icon && <Icon size={18} className={styles.icon} aria-hidden="true" />}
      <span className={styles.name}>{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={`section ${styles.bg}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.categories}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={styles.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className={styles.catLabel}>{cat.label}</h3>
              <div className={styles.grid}>
                {cat.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    delay={ci * 0.05 + si * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
