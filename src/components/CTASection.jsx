import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { ctaCopy, company } from '../data/siteData'

export default function CTASection({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  return (
    <section className="cta-section cta-sheen">
      <div>
        <p className="eyebrow gold">
          {isAr ? 'بدء محادثة منظمة' : ctaCopy.label}
        </p>
        <h2>
          {isAr ? 'هل تحتاج إلى شريك سعودي لمتطلبات تجارية أو تقنية؟' : ctaCopy.heading}
        </h2>
        <p>
          {isAr
            ? 'شارك طلب عرض السعر أو متطلبات دخول السوق أو نطاق الامتثال أو موجز التنفيذ الرقمي. سترد IBF بخطوة عملية تالية.'
            : ctaCopy.text}
        </p>
      </div>
      <div className="cta-buttons">
        <Link to={`${basePath}/request-a-quote`} className="button primary">
          {isAr ? 'طلب عرض سعر' : 'Request a Quote'} <ArrowRight size={16} />
        </Link>
        <a href={`mailto:${company.email}`} className="button ghost">
          <Mail size={16} /> {isAr ? 'راسل IBF' : 'Email IBF'}
        </a>
      </div>
    </section>
  )
}
