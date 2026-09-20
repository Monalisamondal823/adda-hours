import { MENU, ORDER } from '../data.js'
import specialsPhoto from '../assets/specials-photo.png'
import imgCuttingChai from '../assets/menu-cutting-chai.png'
import imgNolenGurLatte from '../assets/menu-nolen-gur-latte.png'
import imgJhalmuri from '../assets/menu-jhalmuri.png'
import imgChickenPatty from '../assets/menu-chicken-patty.png'
import imgMishtiDoiJar from '../assets/menu-mishti-doi-jar.png'
import imgButteredToastOmelette from '../assets/menu-buttered-toast-omelette.png'
import imgFilterKaapi from '../assets/menu-filter-kaapi.png'
import imgFishFry from '../assets/menu-fish-fry.png'
import imgKabirajiCutlet from '../assets/menu-kabiraji-cutlet.png'
import imgColdCoffee from '../assets/menu-cold-coffee.png'

const label = (t) => t[0].toUpperCase() + t.slice(1)

const PERIOD_ICON = {
  morning: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  ),
  afternoon: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  ),
  evening: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
    </svg>
  ),
}
const ITEM_IMAGES = {
  'Cutting chai': imgCuttingChai,
  'Nolen gur latte': imgNolenGurLatte,
  'Jhalmuri': imgJhalmuri,
  'Chicken patty': imgChickenPatty,
  'Mishti doi jar': imgMishtiDoiJar,
  'Buttered toast & omelette': imgButteredToastOmelette,
  'Filter kaapi': imgFilterKaapi,
  'Fish fry': imgFishFry,
  'Kabiraji cutlet': imgKabirajiCutlet,
  'Cold coffee': imgColdCoffee,
}

const BADGES = [
  { text: 'Most Loved', className: 'badge-loved' },
  { text: 'Trending', className: 'badge-trending' },
  { text: "Chef's Pick", className: 'badge-chef' },
]

const initials = (name) =>
  name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function TimeMenu({ time, onChange }) {
  const { items } = MENU[time]

  return (
    <section className="clock" id="menu">
      <div className="specials-hero" style={{ backgroundImage: `url(${specialsPhoto})` }}>
        <div className="specials-copy">
          <h2 className="specials-headline">
            What's on the<br /><span>Table</span> Right Now
          </h2>
          <p className="specials-sub">Good food. Better mood.</p>
        </div>

        <div className="specials-panel">
          <div className="specials-head">
            <h3 className="specials-title">
              Our Specials
              <svg className="specials-crown" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                <path d="M3 8l4 3 5-6 5 6 4-3-2 10H5z" />
              </svg>
            </h3>
          </div>

          <div className="time-pills" role="tablist" aria-label="Time of day">
            {ORDER.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={t === time}
                className={`time-pill${t === time ? ' active' : ''}`}
                onClick={() => onChange(t)}
              >
                <span className="time-pill-icon">{PERIOD_ICON[t]}</span>
                <span className="time-pill-text">
                  <span className="time-pill-label">{label(t)}</span>
                  <span className="time-pill-range">{MENU[t].hours.split('·')[0].trim()}</span>
                </span>
              </button>
            ))}
          </div>

          <ul className="specials-list" key={time} aria-live="polite">
            {items.map(([name, desc, price], i) => {
              const badge = BADGES[i % BADGES.length]
              return (
            
                <li className="specials-card" key={name} style={{ '--i': i }}>
                  <span className={`specials-badge ${badge.className}`}>{badge.text}</span>
                  {ITEM_IMAGES[name] ? (
                    <img className="specials-thumb-img" src={ITEM_IMAGES[name]} alt={name} />
                  ) : (
                    <span className="specials-thumb" aria-hidden="true">{initials(name)}</span>
                  )}
                  <span className="specials-info">
                    <b className="specials-name">{name}</b>
                    <small className="specials-desc">{desc}</small>
                  </span>
                  <span className="specials-price">₹{price}</span>
                  <button className="specials-add" aria-label={`Add ${name}`} type="button">+</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
