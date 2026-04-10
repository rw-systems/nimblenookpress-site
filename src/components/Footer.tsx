import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img
            src="/nimblenookpress-logo.png"
            alt="Nimble Nook Press"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Where every story finds its reader.
          </p>
        </div>

        <nav className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Product</span>
            <a href="https://app.nimblenookpress.com" target="_blank" rel="noopener noreferrer">
              StoryForge App
            </a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Company</span>
            <a href="mailto:hello@nimblenookpress.com">Contact</a>
            <a href="https://www.nimblenookpress.com">nimblenookpress.com</a>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Nimble Nook Press. All rights reserved.</p>
      </div>
    </footer>
  )
}
