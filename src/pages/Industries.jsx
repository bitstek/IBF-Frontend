import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Factory,
  Globe2,
  Handshake,
  Mail,
  Microscope,
  Users,
  Zap,
} from 'lucide-react'
import industriesHeroBg from '../assets/industries-hero-bg.jpg'

export default function Industries({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  const industryCards = isAr
    ? [
        {
          title: 'الجهات والمؤسسات الحكومية وشبه الحكومية',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Building2,
        },
        {
          title: 'الشركات الصناعية والمصانع',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Factory,
        },
        {
          title: 'مشغلو المرافق والبنية التحتية',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Zap,
        },
        {
          title: 'المؤسسات البحثية والمختبرات',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Microscope,
        },
        {
          title: 'المصنعون الدوليون الذين يدخلون السوق السعودي',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Globe2,
        },
        {
          title: 'مقاولو الهندسة والتوريد والبناء (EPC) وأقسام المشتريات',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Users,
        },
        {
          title: 'شركات التكنولوجيا التي تبحث عن شريك سعودي',
          desc: 'يمكن لـ IBF تنسيق المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية وفقاً لسياق المشروع.',
          icon: Handshake,
        },
      ]
    : [
        {
          title: 'Government and semi-government organizations',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Building2,
        },
        {
          title: 'Industrial companies and manufacturers',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Factory,
        },
        {
          title: 'Utilities and infrastructure operators',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Zap,
        },
        {
          title: 'Research institutions and laboratories',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Microscope,
        },
        {
          title: 'International manufacturers entering Saudi Arabia',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Globe2,
        },
        {
          title: 'EPC contractors and procurement departments',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Users,
        },
        {
          title: 'Technology companies seeking a Saudi partner',
          desc: 'IBF can coordinate commercial, technical, documentation, supplier, and local-readiness requirements according to the project context.',
          icon: Handshake,
        },
      ]

  return (
    <main className="industries-template-page">
      {/* HERO SECTION WITH INDUSTRIES BACKGROUND IMAGE */}
      <section className="industries-hero-section">
        <div className="hero-bg-container">
          <img src={industriesHeroBg} alt="Saudi Engineer in Automated Factory with Hardhat and Tablet" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'القطاعات' : 'Industries'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'القطاعات' : 'INDUSTRIES'}
            </p>
            <h1 className="hero-headline">
              {isAr
                ? 'تمكين المنشآت عبر المملكة العربية السعودية بالتميز في المشتريات والحلول التقنية.'
                : 'Enabling organizations across Saudi Arabia with procurement and technical excellence.'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'تدعم IBF مجموعة واسعة من المنشآت في المتطلبات التجارية والفنية والتوثيق والموردين والجاهزية المحلية، بتسليم دقيق وموثوق.'
                : 'IBF supports a wide range of organizations with commercial, technical, documentation, supplier, and local-readiness requirements, delivered with precision and reliability.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: 7 INDUSTRY CARDS GRID (3 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="industries-cards-grid">
          {industryCards.map((item) => {
            const IconComponent = item.icon
            return (
              <article className="industry-template-card reveal-up" key={item.title}>
                <div className="industry-card-icon-box">
                  <IconComponent size={26} className="industry-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="industry-card-footer">
                  <ArrowRight size={18} className="industry-gold-arrow" />
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* SECTION 2: CTA BANNER */}
      <section className="cta-banner-section shell reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div>
              <p className="gold-subtitle-sm">
                {isAr ? 'ابدأ حواراً مهيكلاً' : 'START A STRUCTURED CONVERSATION'}
              </p>
              <h3>
                {isAr
                  ? 'هل تحتاج إلى شريك سعودي لمتطلبات تجارية أو تقنية؟'
                  : 'Need a Saudi partner for a commercial or technology requirement?'}
              </h3>
              <p>
                {isAr
                  ? 'شارك طلب عروض الأسعار (RFQ)، متطلبات دخول السوق، نطاق الامتثال، أو موجز التنفيذ الرقمي. ستجيب IBF بخطوة عملية تالية.'
                  : 'Share your RFQ, market-entry requirement, compliance scope, or digital implementation brief. IBF will respond with a practical next step.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="cta-btn-white">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={15} />
            </Link>
            <Link to={`${basePath}/contact`} className="cta-btn-outline">
              <Mail size={15} /> <span>{isAr ? 'مراسلة IBF' : 'Email IBF'}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
