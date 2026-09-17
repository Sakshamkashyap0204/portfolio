import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import { experience } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
            >
              <div className={styles.lineCol}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      <FiBriefcase size={13} aria-hidden="true" />
                      {job.company}
                    </p>
                  </div>
                  <span className={styles.badge}>{job.type}</span>
                </div>

                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <FiCalendar size={12} aria-hidden="true" />
                    {job.period}
                  </span>
                  <span className={styles.metaItem}>
                    <FiMapPin size={12} aria-hidden="true" />
                    {job.location}
                  </span>
                </div>

                <ul className={styles.list}>
                  {job.responsibilities.map((r, ri) => (
                    <li key={ri} className={styles.listItem}>
                      <span className={styles.bullet} aria-hidden="true">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
