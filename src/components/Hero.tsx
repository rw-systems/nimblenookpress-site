import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>📚</span> Children's Book Publisher
          </div>
          <h1 className={styles.headline}>
            Stories that
            <span className={styles.accentOrange}> spark</span> a
            <span className={styles.accentBlue}> love of reading</span>
          </h1>
          <p className={styles.subhead}>
            Nimble Nook Press publishes beautifully crafted children's books that ignite curiosity, celebrate imagination, and stay with young readers long after the last page.
          </p>
          <div className={styles.actions}>
            <a href="#books" className="btn btn-primary">
              <span>Explore Our Books</span>
              <ArrowRight />
            </a>
            <a href="#about" className="btn btn-secondary">
              About Us
            </a>
          </div>
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {['🐦', '📖', '⭐'].map((emoji, i) => (
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
              age="Ages 4-8"
              delay="0s"
            />
            <BookCard
              color="var(--nnp-blue)"
              title="Captain Curious"
              emoji="🚀"
              age="Ages 5-9"
              delay="0.15s"
            />
            <BookCard
              color="var(--nnp-green)"
              title="The Whispering Woods"
              emoji="🌳"
              age="Ages 6-10"
              delay="0.3s"
            />
          </div>
          <div className={styles.blob} />
        </div>
      </div>
    </section>
  )
}

function BookCard({ color, title, emoji, age, delay }: { color: string; title: string; emoji: string; age: string; delay: string }) {
  return (
    <div className={styles.bookCard} style={{ '--card-color': color, '--card-delay': delay } as React.CSSProperties}>
      <div className={styles.bookCover}>
        <span className={styles.bookEmoji}>{emoji}</span>
      </div>
      <div className={styles.bookMeta}>
        <span className={styles.bookTitle}>{title}</span>
        <span className={styles.bookTag}>{age}</span>
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
