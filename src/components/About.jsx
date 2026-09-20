import { useEffect, useRef, useState } from 'react'
import '../about.css'
import BG from '../assets/about-bg.jpg'          // the cafe photo
import SKETCH from '../assets/about-victoria.png' // Victoria Memorial line art (transparent PNG)

// Everything editable for this section lives here, so no other file needs to change.
const COPY = {
  eyebrow: 'More than just coffee',
  before: 'Inspired by the',
  script: 'Kolkata',
  after: 'coffee house',
  text: "For generations, Kolkata's coffee houses have been where students, poets and filmmakers argue for hours over a cup. Adda Hours keeps that habit alive: good coffee, honest snacks and no clock on the conversation.",
  primary: ['Explore Menu', '#menu'],
  secondary: ['Watch Vibe', '#space'], // swap for a video modal later
  note: 'Good Things Happen Here',
  tagline: 'Same city, new stories.',
  next: '#space',
}
// [icon key, label]
const PERKS = [
  ['cup', 'Great Coffee'],
  ['snack', 'Honest Snacks'],
  ['people', 'No Clock on Conversation'],
  ['heart', 'Adda Vibes'],
]

const ICONS = {
  cup: <><path d="M4 13h17v3a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z" /><path d="M21 15h1.5a2.5 2.5 0 0 1 0 5H20" /><path d="M9 4c-1.5 1.5 1.5 3 0 5M14 4c-1.5 1.5 1.5 3 0 5" /></>,
  snack: <><path d="M3 20c0-8 5-13 13-13 4 0 7 2 9 5-2 5-6 8-12 8z" /><path d="M11 9l2 10M17 9l-1 9M7 12l3 7" /></>,
  people: <><circle cx="8" cy="9" r="3" /><circle cx="19" cy="9" r="3" /><circle cx="13.5" cy="7" r="3.2" /><path d="M2 22c0-4 2.5-6 6-6M25 22c0-4-2.5-6-6-6M7.5 22c0-4 2.5-7 6-7s6 3 6 7z" /></>,
  heart: <path d="M14 24C4 17 2 11 5 7.5 7.5 5 11 6 14 10c3-4 6.5-5 9-2.5C26 11 24 17 14 24z" />,
}

const hideOnError = (e) => { e.currentTarget.style.display = 'none' }

export default function About() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  // Play the entrance when the section scrolls into view (not on page load, when it's off-screen)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className={`ab ${seen ? 'ab-in' : 'ab-pre'}`} id="about" aria-labelledby="ab-title">
      <img className="ab-bg" src={BG} alt="" onError={hideOnError} />
      <div className="ab-shade" aria-hidden="true" />

      <div className="ab-text">
        <p className="ab-eyebrow ab-r" style={{ '--i': 0 }}>{COPY.eyebrow}</p>

        <h2 id="ab-title" className="ab-r" style={{ '--i': 1 }}>
          <span className="ab-line">{COPY.before}</span>
          <span className="ab-script">
            {COPY.script}
            <svg className="ab-crown" viewBox="0 0 40 32" aria-hidden="true"><path d="M4 26l-1-18 9 8 8-13 8 13 9-8-1 18z" /></svg>
            <svg className="ab-spark" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 8l10 4M2 22l12-1M8 36l9-9" /></svg>
          </span>
          <span className="ab-line ab-after">{COPY.after}</span>
        </h2>

        <p className="ab-lede ab-r" style={{ '--i': 2 }}>{COPY.text}</p>

        <div className="ab-actions ab-r" style={{ '--i': 3 }}>
          <a className="ab-btn" href={COPY.primary[1]}>
            {COPY.primary[0]}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>
          <a className="ab-watch" href={COPY.secondary[1]}>
            <span className="ab-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 7l8 5-8 5z" /></svg></span>
            <span className="ab-watch-label">{COPY.secondary[0]}</span>
          </a>
        </div>
      </div>

      <img className="ab-sketch ab-f" style={{ '--i': 4 }} src={SKETCH} alt="" onError={hideOnError} />
      <p className="ab-tagline ab-f" style={{ '--i': 5 }} aria-hidden="true">{COPY.tagline} <span>♡</span></p>
      <p className="ab-sticky ab-f" style={{ '--i': 5 }} aria-hidden="true">{COPY.note} <span>♡</span></p>

      <ul className="ab-perks ab-f" style={{ '--i': 4 }}>
        {PERKS.map(([icon, label]) => (
          <li key={label}><svg viewBox="0 0 28 28" aria-hidden="true">{ICONS[icon]}</svg><span>{label}</span></li>
        ))}
      </ul>


    </section>
  )
}
