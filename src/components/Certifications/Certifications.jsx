import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../../data/certifications'
import styles from './Certifications.module.css'

const categoryColors = {
  AI:          '#a78bfa',
  Cloud:       '#818cf8',
  Networking:  '#38bdf8',
  Robotics:    '#fbbf24',
  Achievement: '#34d399',
  Industry:    '#fb923c',
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className={`section ${styles.bg}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Learning &amp; recognition</h2>
          <p className="section-subtitle">
            Courses, certifications, and programmes I&apos;ve completed alongside my degree.
          </p>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => {
            const color = categoryColors[cert.category] || 'var(--accent)'
            return (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className={styles.iconWrap} style={{ '--cert-color': color }}>
                  <FiAward size={17} aria-hidden="true" />
                </div>
                <div className={styles.info}>
                  <p className={styles.title}>{cert.title}</p>
                  <p className={styles.issuer}>{cert.issuer}</p>
                </div>
                <div className={styles.right}>
                  <span className={styles.category} style={{ '--cert-color': color }}>
                    {cert.category}
                  </span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      aria-label={`View certificate: ${cert.title}`}
                    >
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
