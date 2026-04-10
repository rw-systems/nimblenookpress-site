import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.wordmark}>
            <span className={styles.wordmarkNimble}>Nimble</span>
            <span className={styles.wordmarkNook}> Nook</span>
            <span className={styles.wordmarkPress}> Press</span>
          </div>
          <p className={styles.tagline}>
            Stories that spark a love of reading.
          </p>
        </div>

        <nav className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Explore</span>
            <a href="#books">Our Books</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Connect</span>
            <a href="mailto:hello@nimblenookpress.com">hello@nimblenookpress.com</a>
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
