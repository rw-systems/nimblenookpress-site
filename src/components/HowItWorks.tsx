import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    color: 'var(--nnp-orange)',
    bg: 'rgba(245,128,30,0.08)',
    title: 'Start with an idea',
    description:
      'Describe your story concept — a brave rabbit, a curious astronaut, a magical forest. StoryForge builds out the world.',
  },
  {
    number: '02',
    color: 'var(--nnp-blue)',
    bg: 'rgba(27,159,216,0.08)',
    title: 'Shape the scenes',
    description:
      'Plan your scenes, develop characters, and refine the narrative arc with AI guidance at every step.',
  },
  {
    number: '03',
    color: 'var(--nnp-green)',
    bg: 'rgba(45,158,43,0.08)',
    title: 'Polish the draft',
    description:
      'Run QA passes, tweak language for your target age group, and add visual reference prompts for illustrators.',
  },
  {
    number: '04',
    color: 'var(--nnp-yellow)',
    bg: 'rgba(245,193,0,0.1)',
    title: 'Publish your book',
    description:
      'Export to EPUB or print-ready formats. Translate into multiple languages. Ship with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label" style={{ background: 'rgba(45,158,43,0.1)', color: 'var(--nnp-green)' }}>
            How It Works
          </span>
          <h2 className={styles.title}>
            From spark to{' '}
            <span style={{ color: 'var(--nnp-orange)' }}>shelf</span>{' '}
            in four steps
          </h2>
          <p className={styles.subtitle}>
            StoryForge guides you through the entire publishing journey — no experience required.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber} style={{ color: step.color, background: step.bg }}>
                  {step.number}
                </div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaEmoji}>🐦</div>
            <h3 className={styles.ctaTitle}>Ready to tell your story?</h3>
            <p className={styles.ctaDesc}>
              Join Nimble Nook Press and start creating children's books that spark imagination.
            </p>
            <a
              href="https://app.nimblenookpress.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started with StoryForge →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
