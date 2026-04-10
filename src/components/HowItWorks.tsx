import styles from './HowItWorks.module.css'

const values = [
  {
    number: '01',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'Story first, always',
    description:
      'Every decision we make - from concept to cover - starts with the story. If it doesn\'t serve the narrative, it doesn\'t belong.',
  },
  {
    number: '02',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Respect for young readers',
    description:
      'Children are perceptive, curious, and emotionally intelligent. We write for them honestly - no talking down, no loose ends brushed aside.',
  },
  {
    number: '03',
    color: 'var(--nnp-green)',
    bg: 'rgba(45,158,43,0.08)',
    title: 'Quality without compromise',
    description:
      'Every book goes through rigorous editorial and design review. We\'d rather publish fewer books and publish them well.',
  },
  {
    number: '04',
    color: 'var(--nnp-yellow)',
    bg: 'rgba(245,193,0,0.1)',
    title: 'Reach that matters',
    description:
      'We publish multilingual editions and work to make our titles accessible to families across cultures, languages, and backgrounds.',
  },
]

export default function HowItWorks() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label" style={{ background: 'rgba(45,158,43,0.1)', color: 'var(--nnp-green)' }}>
            About Us
          </span>
          <h2 className={styles.title}>
            A small press with a
            <span style={{ color: 'var(--nnp-orange)' }}> big</span> mission
          </h2>
          <p className={styles.subtitle}>
            Nimble Nook Press was founded on a simple idea: that well-made children's books are one of the most powerful things you can put in a child's hands. These are the values we bring to every title.
          </p>
        </div>

        <div className={styles.steps}>
          {values.map((v, i) => (
            <div key={v.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber} style={{ color: v.color, background: v.bg }}>
                  {v.number}
                </div>
                {i < values.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{v.title}</h3>
                <p className={styles.stepDesc}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaEmoji}>🐦</div>
            <h3 className={styles.ctaTitle}>Get in touch</h3>
            <p className={styles.ctaDesc}>
              Interested in our books, licensing, or working with us? We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@nimblenookpress.com"
              className="btn btn-primary"
            >
              hello@nimblenookpress.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
