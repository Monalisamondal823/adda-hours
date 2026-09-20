import { useEffect } from 'react'
import tramImg from '../assets/tram.png'

// Motion that answers the person's scroll: the tram tracks page progress.
export default function ScrollTram() {
  useEffect(() => {
    const root = document.documentElement
    const update = () => {
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  return (
    <div className="rail" aria-hidden="true">
      <img className="tram" src={tramImg} alt="" />
    </div>
  )
}