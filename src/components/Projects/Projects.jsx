import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data/projects'
import { socials } from '../../data/socials'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className={`section ${styles.bg}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-subtitle">
            A mix of full-stack applications, AI-powered tools, and academic
            computer-vision projects. Click any card to read the full case study.
          </p>
          <a
            className="btn-outline"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Saksham Prasad's GitHub profile"
          >
            <FiGithub size={15} />
            Explore GitHub <FiExternalLink size={13} />
          </a>
          <div className="divider" />
        </motion.div>

        <div className={styles.featured}>
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={i * 0.1}
              onOpen={() => setActive(p)}
              large
            />
          ))}
        </div>

        <div className={styles.grid}>
          {rest.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={i * 0.08}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
