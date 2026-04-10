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
          <span className={styles.wordmark}>
            <span className={styles.wordmarkNimble}>Nimble</span>
            <span className={styles.wordmarkNook}> Nook</span>
            <span className={styles.wordmarkPress}> Press</span>
          </span>
        </a>
        <nav className={styles.nav}>
          <a href="#books" className={styles.navLink}>Our Books</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
