import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi'
import { projects } from '../../data/projects'
import { socials } from '../../data/socials'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const categories = ['All', ...new Set(projects.flatMap((project) => project.categories))]
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' || project.categories.includes(activeCategory)
    const searchText = [
      project.name,
      project.tagline,
      project.description,
      ...project.technologies,
    ].join(' ').toLowerCase()
    return matchesCategory && searchText.includes(query.trim().toLowerCase())
  })
  const featured = filteredProjects.filter((project) => project.featured)
  const rest = filteredProjects.filter((project) => !project.featured)

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

        <div className={styles.controls}>
          <label className={styles.search}>
            <FiSearch size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or technologies"
              aria-label="Search projects or technologies"
            />
          </label>
          <div className={styles.filters} aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filter} ${activeCategory === category ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

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
        {filteredProjects.length === 0 && (
          <p className={styles.empty}>No projects match that search.</p>
        )}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
