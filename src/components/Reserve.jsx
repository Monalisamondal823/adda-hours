import { useState } from 'react'
import { BRAND, ORDER } from '../data.js'
import reserveBg from '../assets/reserve-bg.jpg'

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c2 0 3.5 1.5 5.5 3.5C14 6.5 15.5 5 17.5 5 21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z" />
  </svg>
)
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>
)
const GuestsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c1-3.4 3.6-5.2 6.5-5.2s5.5 1.8 6.5 5.2" />
    <circle cx="17" cy="9" r="2.4" /><path d="M15.5 14.5c2.3.2 4 1.8 4.8 4.5" />
  </svg>
)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export default function Reserve({ time }) {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('2')
  const [when, setWhen] = useState(time)
  const [done, setDone] = useState(false)

  const submit = (e) => { e.preventDefault(); setDone(true) }

  return (
    <section
      className="reserve-hero"
      id="visit"
      style={{ '--reserve-bg': `url(${reserveBg})` }}
    >
      <div className="reserve-copy">
        <p className="reserve-eyebrow">Good Food<br />Good Mood <HeartIcon /></p>
        <h2 className="reserve-title">Save Your<br /><span>Seat</span></h2>
        <p className="reserve-lede">Great food, cozy vibes and unforgettable moments — all in one place.</p>

        <div className="reserve-info">
          <div>
            <span className="reserve-info-icon">📍</span>
            <div>
              <b>Find us</b>
              <p>{BRAND.address}</p>
            </div>
          </div>
          <div>
            <span className="reserve-info-icon">🕐</span>
            <div>
              <b>Open</b>
              <p>Every day, 8 am to 10 pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reserve-card">
        <div className="reserve-tape" aria-hidden="true" />
        <p className="reserve-card-title">Reservation <HeartIcon /></p>

        {done ? (
          <div className="ok" role="status">
            <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 34l14 14 30-32" /></svg>
            <p>Table held for {name.trim() || 'you'}, {guests} guests, this {when}.</p>
            <button className="btn ghost" onClick={() => setDone(false)}>Book another</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label>Your name
              <div className="reserve-input">
                <PersonIcon />
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Priya Sen" required />
              </div>
            </label>
            <label>Guests
              <div className="reserve-input">
                <GuestsIcon />
                <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  {['1', '2', '4', '6'].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
            </label>
            <label>When
              <div className="reserve-input">
                <CalendarIcon />
                <select value={when} onChange={(e) => setWhen(e.target.value)}>
                  {ORDER.map((t) => <option key={t} value={t}>{t[0].toUpperCase() + t.slice(1)}</option>)}
                </select>
              </div>
            </label>
            <button className="reserve-submit" type="submit">Reserve a table <span>→</span></button>
          </form>
        )}
      </div>
    </section>
  )
}