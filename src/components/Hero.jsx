import heroPhoto from '../assets/hero-photo.png'
import coffeeCup from '../assets/coffee-cup.png'
import steamImg from '../assets/steam.png'

// Small line icons, drawn inline so no icon library is needed.
const CupIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
    <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
    <path d="M8 4c.6.8-.4 1.2 0 2M12 4c.6.8-.4 1.2 0 2" />
  </svg>
)
const CookieIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14" cy="9" r=".9" fill="currentColor" stroke="none" />
    <circle cx="13" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="9" cy="15" r=".9" fill="currentColor" stroke="none" />
  </svg>
)
const BookIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
    <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
  </svg>
)
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M3.5 20c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5" />
    <path d="M15.5 15.3c2 .2 3.6 1.7 4 4.7" />
  </svg>
)
const Heart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.4-9.5-8.8C.7 7.8 2.4 4 6 4c2 0 3.3 1 4 2.2C10.7 5 12 4 14 4c3.6 0 5.3 3.8 3.5 7.2C19 15.6 12 20 12 20z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero">
      <svg className="hero-leaf hero-leaf-tl" viewBox="0 0 220 200" aria-hidden="true">
        <path d="M0 0c40 10 90 20 110 55 15 26 10 60-10 78-8-30-25-52-55-66C25 55 8 35 0 0Z" />
        <path d="M0 0c55 4 105 22 130 60 12 19 14 44 3 62-10-34-30-58-63-74C40 35 16 20 0 0Z" opacity=".55" />
      </svg>
      <svg className="hero-leaf hero-leaf-bl" viewBox="0 0 220 220" aria-hidden="true">
        <path d="M0 220c10-55 30-100 70-125 27-17 60-16 80 2-33 4-58 18-78 45-18 24-30 52-37 78Z" />
        <path d="M0 220c22-46 52-82 96-100 21-9 44-8 60 2-31 8-54 22-73 46-17 21-28 40-38 60Z" opacity=".5" />
      </svg>

      {/*
        DOM order below is deliberately the same as the visual order we want
        on mobile: all the text, then the photo, then the buttons/features.
        Nothing here relies on CSS `order` or `display:contents` — on desktop
        the photo is pulled out with `position:absolute` and the two text
        blocks are just a normal flex column, so it reads the same way it
        always did; on mobile everything simply stacks in the order it's
        written, no reordering trickery needed at all.
      */}

      <div className="hero-copy hero-copy-top">
        <p className="hero-tagline l" style={{ '--i': 0 }}>
          Good Coffee <Heart className="tag-heart" /><br />
          Better Books<br />
          Brighter Conversations <Heart className="tag-heart" />
        </p>

        <h1 className="hero-title l" style={{ '--i': 1 }}>
          <span className="bn" lang="bn">আড্ডা</span>
          <svg className="title-cup" viewBox="0 0 60 60" aria-hidden="true">
            <path className="steamline" d="M22 16c-4-5 4-7 0-13M32 16c-4-5 4-7 0-13" />
            <path d="M14 22h32v9c0 9-7 16-16 16s-16-7-16-16z" />
            <path d="M46 25h4c5 0 5 10 0 10h-4" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
          <span className="sr-only">Adda</span>
        </h1>

        <p className="hero-brand l" style={{ '--i': 2 }}>Adda Hours · Cafe &amp; Bookshop</p>

        <p className="hero-lede l" style={{ '--i': 3 }}>
          Filter coffee, Kolkata snacks and a shelf of second-hand books. Stay as long as the
          conversation lasts. <Heart className="lede-heart" />
        </p>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo" style={{ backgroundImage: `url(${heroPhoto})` }} role="img" aria-label="A latte and a stack of books on a wooden cafe table" />
        <div className="coffee-cup-container">
          <img className="cup-steam-img steam-a" src={steamImg} alt="" aria-hidden="true" />
          <img className="cup-steam-img steam-b" src={steamImg} alt="" aria-hidden="true" />
          <img className="coffee-cup-img" src={coffeeCup} alt="Coffee cup on table" />
        </div>
      </div>

      <div className="hero-copy hero-copy-bottom">
        <div className="hero-actions l" style={{ '--i': 4 }}>
          <a className="btn hero-btn" href="#menu"><CupIcon /> See what's on now <span>→</span></a>
          <a className="btn hero-btn ghost" href="#visit"><BookIcon /> Reserve a table <span>→</span></a>
        </div>

        <ul className="hero-features l" style={{ '--i': 5 }}>
          <li><CupIcon /><span>Specialty<br />Coffee</span></li>
          <li><CookieIcon /><span>Kolkata<br />Snacks</span></li>
          <li><BookIcon /><span>Second-hand<br />Books</span></li>
          <li><PeopleIcon /><span>Cozy<br />Vibes</span></li>
        </ul>
      </div>
    </section>
  )
}
