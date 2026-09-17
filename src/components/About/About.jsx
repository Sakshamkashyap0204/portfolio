import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { socials } from '../../data/socials'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className={styles.links}>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn <FiExternalLink size={13} />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub <FiExternalLink size={13} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.highlights.map((h) => (
              <div key={h.label} className={styles.statCard}>
                <span className={styles.statValue}>{h.value}</span>
                <span className={styles.statLabel}>{h.label}</span>
                <span className={styles.statSub}>{h.sub}</span>
              </div>
            ))}

            <div className={styles.eduCard}>
              <p className={styles.eduLabel}>Education</p>
              <p className={styles.eduDegree}>{profile.education.degree}</p>
              <p className={styles.eduInst}>{profile.education.institution}</p>
              <p className={styles.eduYear}>{profile.education.year}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
