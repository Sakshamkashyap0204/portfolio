import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
} from 'react-icons/fi'
import { contactItems } from '../../data/socials'
import styles from './Contact.module.css'

const icons = {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
}

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  const inView = useInView(sectionRef, {
    once: true,
    margin: '-80px',
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitState, setSubmitState] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    setSubmitState('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitState('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setSubmitState('success')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitState('error')
    }
  }

  return (
    <section
      id="contact"
      className="section"
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Contact</p>

          <h2 className="section-title">Get in touch</h2>

          <p className="section-subtitle">
            I&apos;m currently open to full-time opportunities. If you have a role
            that might be a good fit, or just want to say hello, feel free to
            reach out.
          </p>

          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={styles.infoTitle}>Contact details</h3>

            <div className={styles.items}>
              {contactItems.map((item) => {
                const Icon = icons[item.icon]

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>
                      <Icon size={16} aria-hidden="true" />
                    </span>

                    <div>
                      <p className={styles.contactLabel}>
                        {item.label}
                      </p>

                      <p className={styles.contactValue}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Contact form"
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label
                  htmlFor="name"
                  className={styles.label}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label
                  htmlFor="email"
                  className={styles.label}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label
                htmlFor="message"
                className={styles.label}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitState === 'sending'}
            >
              <FiSend size={15} aria-hidden="true" />

              {submitState === 'sending'
                ? 'Sending...'
                : submitState === 'success'
                ? 'Message Sent'
                : 'Send Message'}
            </button>

            <p
              className={styles.note}
              aria-live="polite"
            >
              {submitState === 'success'
                ? 'Your message has been sent successfully.'
                : submitState === 'error'
                ? 'Something went wrong. Please try again or email me directly.'
                : submitState === 'sending'
                ? 'Sending your message...'
                : 'Your message will be sent directly to my inbox.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}