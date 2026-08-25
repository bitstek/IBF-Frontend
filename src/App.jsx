import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import SearchPage from './pages/SearchPage'
import RequestQuote from './pages/RequestQuote'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import NexERP from './pages/NexERP'
import SolutionPage from './pages/SolutionPage'
import TradingProcurement from './pages/TradingProcurement'
import AIDigitalSolutions from './pages/AIDigitalSolutions'
import IndustrialIoTSolutions from './pages/IndustrialIoTSolutions'
import ITServices from './pages/ITServices'
import SaudiMarketEntry from './pages/SaudiMarketEntry'
import ISOCompliance from './pages/ISOCompliance'
import ISODetailPage from './pages/ISODetailPage'
import TechnologyServices from './pages/TechnologyServices'
import Services from './pages/Services'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const isAr = pathname.startsWith('/ar')
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.documentElement.lang = isAr ? 'ar' : 'en'
    if (isAr) {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }

    // Immediately reveal all text & cards on page load/route change
    const revealAll = () => {
      const elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .reveal-right')
      elements.forEach((el) => {
        el.classList.add('active')
        el.classList.add('is-revealed')
      })
    }

    revealAll()
    const timer1 = setTimeout(revealAll, 50)
    const timer2 = setTimeout(revealAll, 200)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            entry.target.classList.add('is-revealed')
          }
        })
      },
      { threshold: 0.05 }
    )

    const elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      observer.disconnect()
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Redirect root to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* English Routes */}
        <Route path="/en" element={<Home lang="en" />} />
        <Route path="/en/services" element={<Services lang="en" />} />
        <Route path="/en/catalogue" element={<Catalogue lang="en" />} />
        <Route path="/en/search" element={<SearchPage lang="en" />} />
        <Route path="/en/request-a-quote" element={<RequestQuote lang="en" />} />
        <Route path="/en/industries" element={<Industries lang="en" />} />
        <Route path="/en/about" element={<About lang="en" />} />
        <Route path="/en/contact" element={<Contact lang="en" />} />
        <Route path="/en/catalogue/nexerp" element={<NexERP lang="en" />} />
        <Route path="/en/catalogue/:slug" element={<ProductDetail lang="en" />} />
        <Route path="/en/solutions/trading-procurement" element={<TradingProcurement lang="en" />} />
        <Route path="/en/solutions/ai-digital-solutions" element={<AIDigitalSolutions lang="en" />} />
        <Route path="/en/solutions/iot-solutions" element={<IndustrialIoTSolutions lang="en" />} />
        <Route path="/en/solutions/it-services" element={<ITServices lang="en" />} />
        <Route path="/en/solutions/saudi-market-entry" element={<SaudiMarketEntry lang="en" />} />
        <Route path="/en/solutions/iso-compliance" element={<ISOCompliance lang="en" />} />
        <Route path="/en/solutions/iso-9001" element={<ISODetailPage lang="en" forcedSlug="iso-9001" />} />
        <Route path="/en/solutions/iso-27001" element={<ISODetailPage lang="en" forcedSlug="iso-27001" />} />
        <Route path="/en/solutions/iso-14001" element={<ISODetailPage lang="en" forcedSlug="iso-14001" />} />
        <Route path="/en/solutions/iso-17025" element={<ISODetailPage lang="en" forcedSlug="iso-17025" />} />
        <Route path="/en/solutions/iso-45001" element={<ISODetailPage lang="en" forcedSlug="iso-45001" />} />
        <Route path="/en/solutions/iso-22000" element={<ISODetailPage lang="en" forcedSlug="iso-22000" />} />
        <Route path="/en/solutions/iso-13485" element={<ISODetailPage lang="en" forcedSlug="iso-13485" />} />
        <Route path="/en/solutions/technology-services" element={<TechnologyServices lang="en" />} />
        <Route path="/en/solutions/:slug" element={<SolutionPage lang="en" />} />

        {/* Arabic Routes */}
        <Route path="/ar" element={<Home lang="ar" />} />
        <Route path="/ar/services" element={<Services lang="ar" />} />
        <Route path="/ar/catalogue" element={<Catalogue lang="ar" />} />
        <Route path="/ar/search" element={<SearchPage lang="ar" />} />
        <Route path="/ar/request-a-quote" element={<RequestQuote lang="ar" />} />
        <Route path="/ar/industries" element={<Industries lang="ar" />} />
        <Route path="/ar/about" element={<About lang="ar" />} />
        <Route path="/ar/contact" element={<Contact lang="ar" />} />
        <Route path="/ar/catalogue/nexerp" element={<NexERP lang="ar" />} />
        <Route path="/ar/catalogue/:slug" element={<ProductDetail lang="ar" />} />
        <Route path="/ar/solutions/trading-procurement" element={<TradingProcurement lang="ar" />} />
        <Route path="/ar/solutions/ai-digital-solutions" element={<AIDigitalSolutions lang="ar" />} />
        <Route path="/ar/solutions/iot-solutions" element={<IndustrialIoTSolutions lang="ar" />} />
        <Route path="/ar/solutions/it-services" element={<ITServices lang="ar" />} />
        <Route path="/ar/solutions/saudi-market-entry" element={<SaudiMarketEntry lang="ar" />} />
        <Route path="/ar/solutions/iso-compliance" element={<ISOCompliance lang="ar" />} />
        <Route path="/ar/solutions/iso-9001" element={<ISODetailPage lang="ar" forcedSlug="iso-9001" />} />
        <Route path="/ar/solutions/iso-27001" element={<ISODetailPage lang="ar" forcedSlug="iso-27001" />} />
        <Route path="/ar/solutions/iso-14001" element={<ISODetailPage lang="ar" forcedSlug="iso-14001" />} />
        <Route path="/ar/solutions/iso-17025" element={<ISODetailPage lang="ar" forcedSlug="iso-17025" />} />
        <Route path="/ar/solutions/iso-45001" element={<ISODetailPage lang="ar" forcedSlug="iso-45001" />} />
        <Route path="/ar/solutions/iso-22000" element={<ISODetailPage lang="ar" forcedSlug="iso-22000" />} />
        <Route path="/ar/solutions/iso-13485" element={<ISODetailPage lang="ar" forcedSlug="iso-13485" />} />
        <Route path="/ar/solutions/technology-services" element={<TechnologyServices lang="ar" />} />
        <Route path="/ar/solutions/:slug" element={<SolutionPage lang="ar" />} />

        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
