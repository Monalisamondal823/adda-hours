import { SPACE, SPACE_INTRO } from '../data.js'
import bgPhoto from '../assets/bg-photo.jpg'
import cardTable from '../assets/card-table.jpg'
import cardBooks from '../assets/card-books.jpg'
import cardWifi from '../assets/card-wifi.jpg'

const Line = (p) => <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p} />
const ICONS = [
  <Line key="t"><ellipse cx="20" cy="15" rx="7" ry="2.4" /><path d="M20 17.5V29M15.5 29h9M8.5 15v14M8.5 22H13M13 22v7M31.5 15v14M31.5 22H27M27 22v7" /></Line>,
  <Line key="b"><path d="M20 12c-3-2.2-7-2.6-11-1.8v17c4-.8 8-.4 11 1.8 3-2.2 7-2.6 11-1.8v-17c-4-.8-8-.4-11 1.8zM20 12v17" /></Line>,
  <Line key="w"><path d="M9 17.5a15 15 0 0 1 22 0M13 22a9.5 9.5 0 0 1 14 0M16.8 26.2a4.2 4.2 0 0 1 6.4 0" /><circle cx="20" cy="30.5" r="1.3" fill="currentColor" stroke="none" /></Line>,
]
const CARDS = [
  { key: 'table', photo: cardTable },
  { key: 'books', photo: cardBooks },
  { key: 'wifi', photo: cardWifi },
]
export default function Space() {
  const [a, b, c] = SPACE_INTRO.eyebrow
  return (
    <section
      className="convo"
      id="space"
      aria-labelledby="convo-title"
      style={{ '--convo-bg': `url(${bgPhoto})` }}
    >
      <div className="cv-stage">
        <p className="cv-eyebrow"><span>{a}</span><i>/</i><b>{b}</b><i>/</i><span>{c}</span></p>

        <h2 className="cv-title" id="convo-title">
          <span className="cv-t1">Built for long</span>{' '}
          <span className="cv-t2">conversations</span>
          <svg className="cv-ul" viewBox="0 0 452 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 16Q222 8 449 3" /></svg>
        </h2>

        <p className="cv-lede">{SPACE_INTRO.lede[0]}{' '}<br />{SPACE_INTRO.lede[1]}</p>

        <svg className="cv-star" viewBox="-13 -13 26 26" aria-hidden="true"><path d="M0-11C1-3 3-1 11 0 3 1 1 3 0 11-1 3-3 1-11 0-3-1-1-3 0-11z" /></svg>
        <span className="cv-vline" aria-hidden="true" />
        <span className="cv-dots" aria-hidden="true" />

        <a className="cv-explore" href="#visit">
          <span className="cv-ring"><Line strokeWidth="2"><path d="M20 10v20M12 22l8 8 8-8" /></Line></span>
          <span className="cv-explore-t">{SPACE_INTRO.explore[0]}<br />{SPACE_INTRO.explore[1]}</span>
        </a>

        <p className="cv-note" aria-hidden="true">{SPACE_INTRO.note.map((w, i) => <span key={i}>{w}<br /></span>)}</p>
        <svg className="cv-note-arrow" viewBox="0 0 60 38" fill="none" aria-hidden="true"><path d="M3 2Q10 26 44 28M37 22l8 6-9 5" /></svg>
        <svg className="cv-sparkle" viewBox="0 0 70 62" fill="none" aria-hidden="true"><path d="M8 6L20 32 50 56M22 24l12-4M29 34l8 6" /></svg>

        {SPACE.map(([title, text, tags], i) => (
          <article className={`cv-card ${CARDS[i].key}`} key={title}>
            <img className="cv-card-photo cv-photo" src={CARDS[i].photo} alt="" />
            <span className="cv-ic">{ICONS[i]}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="cv-foot">
              <span className="cv-tags">{tags.map((t) => <span key={t}>{t}</span>)}</span>
              <a className="cv-go" href="#visit" aria-label={`Reserve a table: ${title}`}>
                <Line strokeWidth="2"><path d="M11 20h17M21 13l7 7-7 7" /></Line>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}