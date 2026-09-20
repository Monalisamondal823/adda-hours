import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import TimeMenu from './components/TimeMenu.jsx'
import Reserve from './components/Reserve.jsx'
import ScrollTram from './components/ScrollTram.jsx'
import { BRAND } from './data.js'
import About from './components/About.jsx'
import Space from './components/Space.jsx'

// Start on the time of day it actually is
const currentTime = () => {
  const h = new Date().getHours()
  return h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 17 ? 'afternoon' : 'evening'
}

export default function App() {
  const [time, setTime] = useState(currentTime)

  // The theme lives in CSS variables keyed off <body data-time="...">
  useEffect(() => { document.body.dataset.time = time }, [time])

  return (
    <>
      <header className="nav">
        <svg className="nav-leaf nav-leaf-l" viewBox="0 0 100 60" aria-hidden="true">
          <path d="M0 0c20 5 45 12 55 28 6 10 4 24-6 30-3-14-12-24-27-31C15 22 6 12 0 0Z" />
        </svg>

        <a className="logo" href="#top">
          <span className="logo-mark">
            {BRAND.name}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
              <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
            </svg>
          </span>
          <span className="logo-sub">{BRAND.tagline ?? 'Adda Hours · Cafe & Bookshop'}</span>
        </a>

        <nav aria-label="Main">
          <a href="#top" className="active">Home</a>
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#space">The Space</a>
          <a className="btn hero-btn small" href="#visit">Reserve a Table <span>→</span></a>
        </nav>

        <svg className="nav-leaf nav-leaf-r" viewBox="0 0 100 60" aria-hidden="true">
          <path d="M100 0c-20 5-45 12-55 28-6 10-4 24 6 30 3-14 12-24 27-31C85 22 94 12 100 0Z" />
        </svg>
      </header>

      <main id="top">
        <Hero />
        <TimeMenu time={time} onChange={setTime} />

        <About />

        <Space />

        <Reserve time={time} />
      </main>

      <footer className="footer">
        <div><strong>{BRAND.name}</strong><br />{BRAND.address}</div>
        <div>Open daily, 8 am to 10 pm<br />{BRAND.phone} · {BRAND.email}</div>
        <div className="note">Concept demo. Names, prices and contact details are placeholders.</div>
      </footer>

      <ScrollTram />
    </>
  )
}