import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img
            src="/nimblenookpress-logo.png"
            alt="Nimble Nook Press"
            className={styles.logoImg}
          />
        </a>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#how-it-works" className={styles.navLink}>How It Works</a>
          <a
            href="https://app.nimblenookpress.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open StoryForge
          </a>
        </nav>
      </div>
    </header>
  )
}
