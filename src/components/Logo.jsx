import { Link } from 'react-router-dom'
import ibfLogo from '../assets/ibf-logo.png'

export default function Logo({ inverted = false, isAr = false }) {
  const homePath = isAr ? '/ar' : '/en'
  return (
    <Link to={homePath} className={`logo-link ${inverted ? 'logo-link-inverted' : ''}`} aria-label="IBF Global Home">
      <img src={ibfLogo} alt="IBF Global" className={`logo-img ${inverted ? 'logo-img-inverted' : ''}`} />
    </Link>
  )
}

