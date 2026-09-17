import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <motion.div
        className={styles.panel}
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Case Study</p>
            <h2 className={styles.title}>{project.name}</h2>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close case study">
            <FiX size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.tags}>
            {project.technologies.map((technology) => (
              <span key={technology} className="tag">{technology}</span>
            ))}
          </div>

          <Section title="Problem" content={project.problem} />
          <Section title="Solution" content={project.solution} />
          <Section title="My Contribution" content={project.myContribution} />

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Key Features</h3>
            <ul className={styles.featureList}>
              {project.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <span className={styles.featureDot} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Section title="Challenges" content={project.challenges} />
          <Section title="What I Learned" content={project.learning} />

          <div className={styles.ctaRow}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                <FiGithub size={15} /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <FiExternalLink size={15} /> Live Demo
              </a>
            )}
            {project.backendUrl && !project.liveUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <FiExternalLink size={15} /> Backend Deployment
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Section({ title, content }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionText}>{content}</p>
    </div>
  )
}
