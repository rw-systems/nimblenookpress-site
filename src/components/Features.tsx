import styles from './Features.module.css'

const features = [
  {
    icon: '✍️',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'AI-Assisted Writing',
    description:
      'StoryForge uses cutting-edge AI to help craft age-appropriate, imaginative stories — while keeping human creativity front and center.',
  },
  {
    icon: '🎨',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Visual Storytelling',
    description:
      'Match your narrative with stunning illustration prompts and visual references, keeping artwork consistent across every page.',
  },
  {
    icon: '🌍',
    color: 'var(--nnp-green)',
    bg: 'rgba(45,158,43,0.08)',
    title: 'Multilingual Ready',
    description:
      'Publish in multiple languages from day one. StoryForge manages translations and ensures stories resonate across cultures.',
  },
  {
    icon: '📦',
    color: 'var(--nnp-yellow)',
    bg: 'rgba(245,193,0,0.1)',
    title: 'Production Pipeline',
    description:
      'From outline to EPUB in a guided workflow — scenes, drafts, QA passes, and final export all managed in one place.',
  },
  {
    icon: '🔍',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'Quality Assurance',
    description:
      'Built-in QA checks review readability, age-appropriateness, and consistency before a single page goes to print.',
  },
  {
    icon: '🚀',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Fast Iteration',
    description:
      'Revise, reimagine, and refine. StoryForge makes it painless to explore creative directions without losing any of your work.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label" style={{ background: 'rgba(27,159,216,0.1)', color: 'var(--nnp-blue)' }}>
            What We Do
          </span>
          <h2 className={styles.title}>
            Publishing reimagined for the{' '}
            <span style={{ color: 'var(--nnp-blue)' }}>modern storyteller</span>
          </h2>
          <p className={styles.subtitle}>
            Every tool in StoryForge is purpose-built for children's book creators who want to move fast without cutting corners.
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
