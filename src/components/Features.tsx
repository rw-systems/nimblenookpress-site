import styles from './Features.module.css'

const features = [
  {
    icon: '🌟',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'Stories That Stick',
    description:
      'Every Nimble Nook book is built around characters and moments that stay with children long after the story ends - sparking conversation and repeat reads.',
  },
  {
    icon: '🎨',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Vibrant Illustrations',
    description:
      'Our books pair rich, expressive artwork with every story - visual storytelling that draws young readers in and makes the world of each book come alive.',
  },
  {
    icon: '🌍',
    color: 'var(--nnp-green)',
    bg: 'rgba(45,158,43,0.08)',
    title: 'Multilingual Editions',
    description:
      'Many of our titles are available in multiple languages, helping families share stories across cultures and giving bilingual children books that reflect their world.',
  },
  {
    icon: '🧒',
    color: 'var(--nnp-yellow)',
    bg: 'rgba(245,193,0,0.1)',
    title: 'Age-Appropriate Craft',
    description:
      'From board books to early chapter books, our stories are written with careful attention to vocabulary, pacing, and themes suited to each age group.',
  },
  {
    icon: '💡',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'Curiosity-First Themes',
    description:
      'We publish books that encourage kids to ask questions, explore the world around them, and see themselves as capable, creative thinkers.',
  },
  {
    icon: '❤️',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Made With Heart',
    description:
      'Every title we publish reflects a genuine love of children\'s literature - carefully crafted, thoughtfully edited, and produced to the highest quality standards.',
  },
]

export default function Features() {
  return (
    <section id="books" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label" style={{ background: 'rgba(27,159,216,0.1)', color: 'var(--nnp-blue)' }}>
            What We Publish
          </span>
          <h2 className={styles.title}>
            Books children
            <span style={{ color: 'var(--nnp-blue)' }}> love</span>, parents
            <span style={{ color: 'var(--nnp-orange)' }}> trust</span>
          </h2>
          <p className={styles.subtitle}>
            At Nimble Nook Press, we believe the right book at the right moment can change a child's life. Every title we publish is chosen with that belief in mind.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: f.bg }}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
