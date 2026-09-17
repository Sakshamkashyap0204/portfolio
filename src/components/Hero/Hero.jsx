import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiArrowDown } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { socials } from '../../data/socials'
import CodeWindow from './CodeWindow'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.glowLeft} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.p className={styles.greeting} {...fadeUp(0.1)}>
            <span className={styles.wave}>👋</span> Hi, I&apos;m
          </motion.p>

          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            {profile.name}
          </motion.h1>

          <motion.p className={styles.title} {...fadeUp(0.3)}>
            <span className={styles.titleAccent}>{profile.title}</span>
            <span className={styles.separator}>·</span>
            AI Enthusiast
            <span className={styles.separator}>·</span>
            B.Tech CSE &rsquo;26
          </motion.p>

          <motion.p className={styles.bio} {...fadeUp(0.4)}>
            {profile.bio}
          </motion.p>

          <motion.div className={styles.actions} {...fadeUp(0.5)}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo('#projects')}
            >
              View Projects
            </button>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
              aria-label="GitHub profile"
            >
              <FiGithub size={15} />
              GitHub
            </a>
            <button
              className={styles.btnGhost}
              onClick={() => scrollTo('#contact')}
            >
              <FiMail size={15} />
              Contact
            </button>
          </motion.div>

          <motion.div className={styles.meta} {...fadeUp(0.6)}>
            {profile.availableForWork && (
              <span className={styles.metaItem}>
                <span className={styles.dot} />
                Open to opportunities
              </span>
            )}
            <span className={styles.metaItem}>📍 {profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeWindow />
        </motion.div>
      </div>

      <motion.button
        className={styles.scrollHint}
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  )
}
