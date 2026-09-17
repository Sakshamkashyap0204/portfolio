import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import styles from './ProjectCard.module.css'

const statusConfig = {
  live:             { label: 'Live',           color: '#34d399' },
  'backend-only':   { label: 'Backend Deployment', color: '#38bdf8' },
  'in-development': { label: 'In Development', color: '#fbbf24' },
  academic:         { label: 'Academic',        color: '#a78bfa' },
  completed:        { label: 'Completed',       color: '#818cf8' },
}

export default function ProjectCard({ project, delay, onOpen, large }) {
  const status = statusConfig[project.status] || statusConfig.completed

  return (
    <motion.article
      className={`${styles.card} ${large ? styles.large : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.name}</h3>
          <span className={styles.status} style={{ '--status-color': status.color }}>
            <span className={styles.statusDot} />
            {status.label}
          </span>
        </div>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.desc}>{project.description}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.tags}>
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology} className="tag">{technology}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tag">+{project.technologies.length - 5}</span>
          )}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.caseStudyBtn}
            onClick={onOpen}
            aria-label={`View case study for ${project.name}`}
          >
            Case study <FiArrowRight size={12} />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label={`GitHub repository for ${project.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconBtn} ${styles.liveBtn}`}
              aria-label={`Live demo for ${project.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={15} />
            </a>
          )}
          {project.backendUrl && !project.liveUrl && (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconBtn} ${styles.liveBtn}`}
              aria-label={`Backend deployment for ${project.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
