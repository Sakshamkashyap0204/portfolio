import { motion } from 'framer-motion'
import styles from './CodeWindow.module.css'

const lines = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'developer' }, { t: 'op', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  name' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Saksham Prasad"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  role' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Full-Stack Developer"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  stack' }, { t: 'op', v: ': [' }, { t: 'str', v: '"React"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Node"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"MongoDB"' }, { t: 'op', v: '],' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  ai' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  available' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'fn', v: 'console' }, { t: 'op', v: '.' }, { t: 'fn', v: 'log' }, { t: 'op', v: '(' }, { t: 'str', v: '"Let\'s build something."' }, { t: 'op', v: ')' }] },
]

export default function CodeWindow() {
  return (
    <div className={styles.window} role="img" aria-label="Code snippet showing developer profile">
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <span className={styles.filename}>developer.js</span>
      </div>
      <div className={styles.body}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={styles.line}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
          >
            <span className={styles.lineNum}>{i + 1}</span>
            <span className={styles.code}>
              {line.tokens.map((tok, j) => (
                <span key={j} className={styles[tok.t]}>{tok.v}</span>
              ))}
              {line.tokens.length === 0 && '\u00A0'}
            </span>
          </motion.div>
        ))}
        <motion.div
          className={styles.cursor}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.1 }}
        />
      </div>
    </div>
  )
}
