import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { contact, socials } from '../../data/socials'
import styles from './Footer.module.css'

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${contact.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.name}>Saksham Prasad</span>
          <span className={styles.sub}>B.Tech CSE Graduate · Developer · AI Enthusiast</span>
        </div>

        <div className={styles.socials}>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
              aria-label={s.label}
            >
              <s.icon size={17} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className={styles.copy}>
          © {year} Saksham Prasad. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}
