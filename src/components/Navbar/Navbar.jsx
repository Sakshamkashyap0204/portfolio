import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from '../../context/ThemeContext'
import { profile } from '../../data/profile'
import styles from './Navbar.module.css'

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('')
  const { theme, toggle }         = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>

        <a href="#hero" className={styles.logo} onClick={(e) => scrollTo(e, '#hero')} aria-label="Home">
          <span className={styles.logoMark}>SP</span>
          <span className={styles.logoText}>Saksham Prasad</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.navLink} ${active === l.href ? styles.navLinkActive : ''}`}
                  onClick={(e) => scrollTo(e, l.href)}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span className={styles.activeDot} layoutId="activeDot" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <RiSunLine size={17} /> : <RiMoonLine size={17} />}
          </button>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          )}
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className={styles.mobileList}>
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={l.href}
                      className={`${styles.mobileLink} ${active === l.href ? styles.mobileLinkActive : ''}`}
                      onClick={(e) => scrollTo(e, l.href)}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className={styles.mobileFooter}>
              <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
                {theme === 'dark' ? <RiSunLine size={16} /> : <RiMoonLine size={16} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className={styles.mobileResume} target="_blank" rel="noopener noreferrer">
                  Download Resume ↗
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
