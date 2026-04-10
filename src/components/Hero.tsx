import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>✨</span> AI-Powered Children's Publishing
          </div>
          <h1 className={styles.headline}>
            Where every story
            <span className={styles.accentOrange}> finds</span> its
            <span className={styles.accentBlue}> reader</span>
          </h1>
          <p className={styles.subhead}>
            Nimble Nook Press creates beautifully crafted children's books — fast, thoughtfully, and with heart. Our StoryForge platform brings AI-assisted storytelling to life, from first draft to finished page.
          </p>
          <div className={styles.actions}>
            <a
              href="https://app.nimblenookpress.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open StoryForge</span>
              <ArrowRight />
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {['🐦', '📚', '✏️'].map((emoji, i) => (
                <div key={i} className={styles.avatar}>{emoji}</div>
              ))}
            </div>
            <p>Crafting stories with curiosity and care</p>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.bookStack}>
            <BookCard
              color="var(--nnp-orange)"
              title="The Moonlit Meadow"
              emoji="🌙"
              delay="0s"
            />
            <BookCard
              color="var(--nnp-blue)"
              title="Captain Curious"
              emoji="🚀"
              delay="0.15s"
            />
            <BookCard
              color="var(--nnp-green)"
              title="The Whispering Woods"
              emoji="🌳"
              delay="0.3s"
            />
          </div>
          <div className={styles.blob} />
        </div>
      </div>
    </section>
  )
}

function BookCard({ color, title, emoji, delay }: { color: string; title: string; emoji: string; delay: string }) {
  return (
    <div className={styles.bookCard} style={{ '--card-color': color, '--card-delay': delay } as React.CSSProperties}>
      <div className={styles.bookCover}>
        <span className={styles.bookEmoji}>{emoji}</span>
      </div>
      <div className={styles.bookMeta}>
        <span className={styles.bookTitle}>{title}</span>
        <span className={styles.bookTag}>Children's</span>
      </div>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
