import { useState } from 'react'
import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  FileCheck2,
  HelpCircle,
  Layers,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { isoDetailData } from '../data/isoDetailData'

export default function ISODetailPage({ lang = 'en', forcedSlug }) {
  const { slug } = useParams()
  const location = useLocation()
  const isAr = lang === 'ar' || location.pathname.startsWith('/ar')
  const basePath = isAr ? '/ar' : '/en'

  // Look up standard by forcedSlug, param slug, or URL pathname segment
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const lastSegment = pathSegments[pathSegments.length - 1]
  const resolvedSlug = forcedSlug || slug || (isoDetailData[lastSegment] ? lastSegment : 'iso-9001')
  const data = isoDetailData[resolvedSlug]

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(0)

  if (!data) {
    return <Navigate to={`${basePath}/solutions/iso-compliance`} replace />
  }

  // All 7 ISO standards for the switcher/sidebar
  const allStandards = Object.values(isoDetailData)

  return (
    <main className="iso-detail-page">
      <SEO
        lang={lang}
        customTitle={`${isAr ? data.titleAr : data.titleEn} | IBF Global ISO Certification`}
        customDescription={isAr ? data.heroLeadAr : data.heroLeadEn}
        faqs={data.faqs ? data.faqs.map(f => ({ question: isAr ? f.qAr : f.qEn, answer: isAr ? f.aAr : f.aEn })) : []}
      />
      {/* HERO SECTION */}
      <section className="iso-detail-hero">
        <div className="shell">
          {/* BREADCRUMBS */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <Link to={`${basePath}/solutions/iso-compliance`}>
              {isAr ? 'ISO والامتثال' : 'ISO & Compliance'}
            </Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">
              {isAr ? data.titleAr : data.titleEn}
            </span>
          </div>

          <div className="iso-hero-grid">
            <div className="iso-hero-text-col reveal-up">
              <div className="hero-gold-badge">
                <BadgeCheck size={16} />
                <span>{isAr ? data.badgeAr : data.badgeEn}</span>
              </div>
              <h1 className="iso-hero-title">
                {isAr ? data.titleAr : data.titleEn}
              </h1>
              <p className="iso-hero-subtitle">
                {isAr ? data.subtitleAr : data.subtitleEn}
              </p>
              <p className="hero-lead-text">
                {isAr ? data.heroLeadAr : data.heroLeadEn}
              </p>
              <div className="hero-actions-row">
                <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                  <span>{isAr ? 'طلب استشارة واعتماد' : 'Request Certification Quote'}</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to={`${basePath}/contact`} className="btn-secondary-white">
                  <span>{isAr ? 'تواصل مع مستشارينا' : 'Speak with an Expert'}</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="iso-hero-visual-col reveal-up reveal-delay-1">
              <div className="iso-hero-image-frame">
                <img
                  src={data.banner}
                  alt={isAr ? data.titleAr : data.titleEn}
                  className="iso-hero-banner-img"
                />
                <div className="iso-hero-img-badge">
                  <ShieldCheck size={20} />
                  <div>
                    <strong>{data.iso}</strong>
                    <small>{isAr ? 'معتمد ومطابق للمعايير' : 'Accredited Framework'}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OVERVIEW & SYSTEM EXPLANATION */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'نظرة عامة' : 'OVERVIEW'}</p>
          <h2 className="section-main-heading">
            {isAr ? data.overview.headlineAr : data.overview.headlineEn}
          </h2>
        </div>

        <div className="iso-overview-grid">
          {/* Left Column: Text & Highlights */}
          <div className="iso-overview-text-card">
            {(isAr ? data.overview.paragraphsAr : data.overview.paragraphsEn).map(
              (p, idx) => (
                <p key={idx} className="iso-overview-para">
                  {p}
                </p>
              )
            )}

            <div className="iso-highlights-box">
              <h4>{isAr ? 'الميزات والركائز الأساسية:' : 'Key Operational Highlights:'}</h4>
              <div className="iso-highlights-list">
                {(isAr
                  ? data.overview.keyHighlightsAr
                  : data.overview.keyHighlightsEn
                ).map((hl, idx) => (
                  <div key={idx} className="iso-highlight-item">
                    <CheckCircle2 size={18} className="gold-check-icon" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: System Pillars */}
          <div className="iso-system-pillars-card">
            <div className="pillars-header">
              <Sparkles size={22} className="gold-icon" />
              <h3>
                {isAr
                  ? data.systemExplanation.headlineAr
                  : data.systemExplanation.headlineEn}
              </h3>
            </div>
            <p className="pillars-summary">
              {isAr
                ? data.systemExplanation.textAr
                : data.systemExplanation.textEn}
            </p>

            <div className="pillars-grid">
              {data.systemExplanation.pillars.map((pillar, idx) => {
                const IconComp = pillar.icon
                return (
                  <div key={idx} className="pillar-tile">
                    <div className="pillar-icon-box">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h5>{isAr ? pillar.titleAr : pillar.titleEn}</h5>
                      <p>{isAr ? pillar.descAr : pillar.descEn}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CERTIFICATION PROCESS ROADMAP */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'مسار الاعتماد' : 'CERTIFICATION ROADMAP'}</p>
          <h2 className="section-main-heading">
            {isAr
              ? `خطوات الحصول على شهادة ${data.iso}`
              : `5-Step Journey to ${data.iso} Certification`}
          </h2>
        </div>

        <div className="iso-process-cards-grid">
          {data.processSteps.map((stepItem, idx) => {
            const IconComp = stepItem.icon
            return (
              <div key={stepItem.step} className={`iso-process-card reveal-up reveal-delay-${idx}`}>
                <div className="process-card-step-num">{stepItem.step}</div>
                <div className="process-card-icon-box">
                  <IconComp size={24} />
                </div>
                <h4>{isAr ? stepItem.titleAr : stepItem.titleEn}</h4>
                <p>{isAr ? stepItem.descAr : stepItem.descEn}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: KEY BENEFITS */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'المزايا والقيمة المضافة' : 'STRATEGIC BENEFITS'}</p>
          <h2 className="section-main-heading">
            {isAr
              ? `فوائد تطبيق معيار ${data.iso} لمؤسستك`
              : `Business Benefits of ${data.iso} Compliance`}
          </h2>
        </div>

        <div className="iso-benefits-grid">
          {data.benefits.map((benefit, idx) => {
            const IconComp = benefit.icon
            return (
              <div key={idx} className={`iso-benefit-card reveal-up reveal-delay-${idx % 3}`}>
                <div className="benefit-icon-box">
                  <IconComp size={24} />
                </div>
                <h3>{isAr ? benefit.titleAr : benefit.titleEn}</h3>
                <p>{isAr ? benefit.descAr : benefit.descEn}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 4: TARGET INDUSTRIES */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'القطاعات المستفيدة' : 'TARGET SECTORS'}</p>
          <h2 className="section-main-heading">
            {isAr
              ? `القطاعات التي تعتمد على ${data.iso}`
              : `Key Industries Requiring ${data.iso}`}
          </h2>
        </div>

        <div className="iso-industries-grid">
          {data.industries.map((ind, idx) => {
            const IconComp = ind.icon
            return (
              <div key={idx} className="iso-industry-card">
                <div className="industry-icon-box">
                  <IconComp size={22} />
                </div>
                <h4>{isAr ? ind.nameAr : ind.nameEn}</h4>
                <p>{isAr ? ind.descAr : ind.descEn}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 5: FAQS ACCORDION */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="shell section-spacing reveal-up">
          <div className="section-header-center">
            <p className="gold-subtitle">{isAr ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}</p>
            <h2 className="section-main-heading">
              {isAr ? 'كل ما تحتاج معرفته عن الاعتماد' : 'Common Inquiries About Certification'}
            </h2>
          </div>

          <div className="iso-faq-accordion">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`iso-faq-item ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div className="iso-faq-question">
                    <div className="faq-q-left">
                      <HelpCircle size={20} className="faq-gold-icon" />
                      <h4>{isAr ? faq.qAr : faq.qEn}</h4>
                    </div>
                    <ChevronDown size={18} className="faq-toggle-arrow" />
                  </div>
                  {isOpen && (
                    <div className="iso-faq-answer">
                      <p>{isAr ? faq.aAr : faq.aEn}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* SECTION 6: OTHER ISO STANDARDS QUICK SELECTOR */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'معايير ISO الأخرى' : 'EXPLORE OTHER STANDARDS'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'خدمات الامتثال والاعتماد الأخرى' : 'Complete Certification Capabilities'}
          </h2>
        </div>

        <div className="iso-other-standards-grid">
          {allStandards
            .filter((item) => item.slug !== data.slug)
            .map((item) => (
              <Link
                key={item.slug}
                to={`${basePath}/solutions/${item.slug}`}
                className="iso-other-card"
              >
                <div className="other-card-header">
                  <strong>{item.iso}</strong>
                  <ArrowRight size={16} className="other-arrow" />
                </div>
                <h4>{isAr ? item.titleAr : item.titleEn}</h4>
                <p>{isAr ? item.subtitleAr : item.subtitleEn}</p>
              </Link>
            ))}
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <section className="cta-banner-section shell reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div className="cta-headset-circle">
              <Users size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? `ابدأ رحلة اعتماد ${data.iso} مع IBF اليوم`
                  : `Achieve ${data.iso} Certification with Confidence`}
              </h3>
              <p>
                {isAr
                  ? 'يقوم خبراؤنا المعتمدون بإرشادك في كل خطوة من التقييم الأولي وحتى استلام الشهادة والتدقيق السنوي.'
                  : 'Our accredited advisory team guides your organization from initial diagnostic review to successful audit and accreditation.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="cta-btn-white">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
              <ChevronRight size={15} />
            </Link>
            <Link to={`${basePath}/contact`} className="cta-btn-outline">
              <span>{isAr ? 'التواصل مع IBF' : 'Contact IBF'}</span>
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
