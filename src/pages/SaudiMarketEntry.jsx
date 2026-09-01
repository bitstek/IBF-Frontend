import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  AlertCircle,
  Building,
  Building2,
  CheckSquare,
  ChevronRight,
  Compass,
  FileCheck,
  FileText,
  Handshake,
  Landmark,
  LineChart,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react'
import saudiMarketHeroBg from '../assets/saudi-market-hero-bg.jpg'

export default function SaudiMarketEntry({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 12 Capability Services (2 Columns of 6)
  const servicesCol1 = isAr
    ? [
        {
          title: 'استشارات دخول السوق السعودي',
          desc: 'توجيه استراتيجي مصمم خصيصاً لأهداف العمل ومتطلبات السوق.',
          icon: UserCheck,
        },
        {
          title: 'دعم إجراءات تراخيص MISA',
          desc: 'المساعدة في إعداد الوثائق وتنسيق العمليات.',
          icon: Search,
        },
        {
          title: 'تنسيق تأسيس الشركات',
          desc: 'التوجيه خلال جميع مراحل عملية تأسيس الأعمال.',
          icon: Building2,
        },
        {
          title: 'إعداد قائمة المراجعة والمستندات',
          desc: 'دعم إعداد مستندات التشغيل والتسجيل الرسمية.',
          icon: FileText,
        },
        {
          title: 'تنسيق طلبات التقديم والمتابعة',
          desc: 'التنسيق المستمر طوال فترة طلبات التقديم.',
          icon: Users,
        },
        {
          title: 'التمثيل التجاري المحلي',
          desc: 'دعم محلي لتعزيز التواصل وجهود تطوير الأعمال.',
          icon: UserCheck,
        },
      ]
    : [
        {
          title: 'Saudi market-entry advisory',
          desc: 'Strategic guidance tailored to business objectives and market requirements.',
          icon: UserCheck,
        },
        {
          title: 'MISA licensing process support',
          desc: 'Assistance with documentation preparation and process coordination.',
          icon: Search,
        },
        {
          title: 'Company establishment coordination',
          desc: 'Guidance throughout the business setup process.',
          icon: Building2,
        },
        {
          title: 'Documentation checklist preparation',
          desc: 'Support in preparing operational and registration documentation.',
          icon: FileText,
        },
        {
          title: 'Application coordination and follow-up',
          desc: 'Coordination throughout the application process.',
          icon: Users,
        },
        {
          title: 'Local commercial representation',
          desc: 'Local support to strengthen communication and business development efforts.',
          icon: UserCheck,
        },
      ]

  const servicesCol2 = isAr
    ? [
        {
          title: 'دعم الشركاء والموزعين في السعودية',
          desc: 'المساعدة في تحديد الشركاء والموزعين التجاريين المناسبين.',
          icon: Handshake,
        },
        {
          title: 'دعم تسجيل الموردين (Vendor Registration)',
          desc: 'إرشاد حول إجراءات تسجيل الموردين والبائعين لدى الجهات.',
          icon: ShieldCheck,
        },
        {
          title: 'تنسيق التسجيل الحكومي والمؤسسي',
          desc: 'تنسيق أنشطة التسجيل والمستندات الداعمة.',
          icon: Landmark,
        },
        {
          title: 'تحديد الفرص التجارية',
          desc: 'تحديد الفرص التجارية المحتملة في السوق.',
          icon: Search,
        },
        {
          title: 'دعم تطوير الأعمال',
          desc: 'المساعدة في تعزيز الحضور في السوق والنمو التجاري.',
          icon: TrendingUp,
        },
        {
          title: 'تنسيق التجهيز التشغيلي المحلي',
          desc: 'دعم التجهيز التشغيلي والجاهزية المحلية.',
          icon: CheckSquare,
        },
      ]
    : [
        {
          title: 'Saudi partner and distributor support',
          desc: 'Assistance in identifying suitable business partners and distributors.',
          icon: Handshake,
        },
        {
          title: 'Vendor registration support',
          desc: 'Guidance on supplier and vendor registration procedures.',
          icon: ShieldCheck,
        },
        {
          title: 'Government and enterprise registration coordination',
          desc: 'Coordination of registration activities and supporting documentation.',
          icon: Landmark,
        },
        {
          title: 'Commercial opportunity identification',
          desc: 'Identification of potential commercial opportunities.',
          icon: Search,
        },
        {
          title: 'Business-development support',
          desc: 'Assistance in strengthening market presence and commercial growth.',
          icon: TrendingUp,
        },
        {
          title: 'Local operational setup coordination',
          desc: 'Support for local operational readiness.',
          icon: CheckSquare,
        },
      ]

  // 6 Approach Steps
  const processSteps = isAr
    ? [
        { step: '01', title: 'تقييم المتطلبات', icon: UserCheck },
        { step: '02', title: 'تحديد الاستراتيجية', icon: Target },
        { step: '03', title: 'إعداد المستندات', icon: FileText },
        { step: '04', title: 'تنسيق العمليات', icon: Users },
        { step: '05', title: 'تأسيس العمليات', icon: Landmark },
        { step: '06', title: 'دعم النمو طويل الأمد', icon: TrendingUp },
      ]
    : [
        { step: '01', title: 'Assess requirements', icon: UserCheck },
        { step: '02', title: 'Define strategy', icon: Target },
        { step: '03', title: 'Prepare documentation', icon: FileText },
        { step: '04', title: 'Coordinate processes', icon: Users },
        { step: '05', title: 'Establish operations', icon: Landmark },
        { step: '06', title: 'Support long-term growth', icon: TrendingUp },
      ]

  // 4 Why Partner Items
  const whyPartnerItems = isAr
    ? [
        {
          title: 'الخبرة المحلية',
          desc: 'فهم متعمق لمتطلبات الأعمال الإقليمية، والعمليات، والممارسات التجارية.',
          icon: Users,
        },
        {
          title: 'التوجيه الاستراتيجي',
          desc: 'دعم مهيكل طوال عملية دخول السوق من التخطيط إلى الجاهزية التشغيلية.',
          icon: Compass,
        },
        {
          title: 'علاقات راسخة',
          desc: 'صلات قوية مع الشركاء والموردين والشبكات التجارية.',
          icon: Handshake,
        },
        {
          title: 'شراكة طويلة الأمد',
          desc: 'دعم مستمر مصمم لمساعدة الشركات على تحقيق نمو مستدام.',
          icon: UserCheck,
        },
      ]
    : [
        {
          title: 'Local expertise',
          desc: 'Understanding of regional business requirements, processes, and commercial practices.',
          icon: Users,
        },
        {
          title: 'Strategic guidance',
          desc: 'Structured support throughout the market-entry process from planning to operational readiness.',
          icon: Compass,
        },
        {
          title: 'Established relationships',
          desc: 'Connections with partners, suppliers, and commercial networks.',
          icon: Handshake,
        },
        {
          title: 'Long-term partnership',
          desc: 'Ongoing support designed to help businesses establish sustainable growth.',
          icon: UserCheck,
        },
      ]

  return (
    <main className="saudi-market-entry-page">
      <SEO lang={lang} pageKey="saudiMarketEntry" />
      {/* HERO SECTION WITH SAUDI MARKET BACKGROUND IMAGE */}
      <section className="saudi-market-hero-section">
        <div className="hero-bg-container">
          <img src={saudiMarketHeroBg} alt="Saudi Market Entry Boardroom Executives" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'دخول السوق السعودي' : 'Saudi Market Entry'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'دعم تأسيس الأعمال والتمثيل' : 'BUSINESS SETUP & REPRESENTATION SUPPORT'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'دخول السوق السعودي' : 'Saudi Market Entry'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'إرشادات عملية لدخول السوق، وتنسيق إجراءات MISA، ودعم التمثيل المحلي، وجاهزية التسجيل للعمليات في السعودية.'
                : 'Practical market-entry guidance, MISA process coordination, local representation support, and registration readiness for Saudi operations.'}
            </p>
            <div className="hero-actions-row">
              <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={16} />
              </Link>
              <Link to={`${basePath}/contact`} className="btn-secondary-white">
                <span>{isAr ? 'التواصل مع IBF' : 'Contact IBF'}</span> <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: SERVICES INCLUDED IN THIS CAPABILITY (12 ITEMS IN 2 COLS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'الخدمات المشمولة في هذه القدرة' : 'SERVICES INCLUDED IN THIS CAPABILITY'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'دعم التوسع في أعمالك داخل المملكة العربية السعودية' : 'Supporting your business expansion into Saudi Arabia'}
          </h2>
        </div>

        <div className="saudi-services-grid">
          <div className="saudi-service-col">
            {servicesCol1.map((serviceItem) => {
              const IconComponent = serviceItem.icon
              return (
                <div key={serviceItem.title} className="saudi-service-item">
                  <div className="saudi-service-icon">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3>{serviceItem.title}</h3>
                    <p>{serviceItem.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="saudi-service-col">
            {servicesCol2.map((serviceItem) => {
              const IconComponent = serviceItem.icon
              return (
                <div key={serviceItem.title} className="saudi-service-item">
                  <div className="saudi-service-icon">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3>{serviceItem.title}</h3>
                    <p>{serviceItem.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* IMPORTANT NOTE ALERT BOX */}
        <div className="saudi-important-note-box">
          <div className="note-left-bar" />
          <div className="note-content">
            <h4>{isAr ? 'ملاحظة هامة' : 'Important note'}</h4>
            <p>
              {isAr
                ? 'تقدم IBF الاستشارات التجارية، ودعم التوثيق، وخدمات تنسيق العمليات. لا تعمل IBF كمكتب محاماة ولا تضمن الموافقة التنظيمية.'
                : 'IBF provides business guidance, documentation support, and process coordination services. IBF does not operate as a law firm and does not guarantee regulatory approvals.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH (6 STEPS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'منهجيتنا' : 'OUR APPROACH'}</p>
        </div>

        <div className="procurement-process-row">
          <div className="process-line-connector" />
          {processSteps.map((stepItem, index) => {
            const IconComponent = stepItem.icon
            return (
              <div key={stepItem.step} className={`process-step-item reveal-up reveal-delay-${index}`}>
                <div className="process-badge-circle">{stepItem.step}</div>
                <div className="process-icon-box">
                  <IconComponent size={22} />
                </div>
                <h4>{stepItem.title}</h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: WHY PARTNER WITH IBF? (4 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'لماذا تتشارك مع IBF؟' : 'WHY PARTNER WITH IBF?'}</p>
        </div>

        <div className="why-partner-grid">
          {whyPartnerItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className={`why-partner-card reveal-up reveal-delay-${index}`}>
                <div className="why-icon-box">
                  <IconComponent size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 4: CTA BANNER */}
      <section className="cta-banner-section shell reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div className="cta-headset-circle">
              <Users size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? 'هل أنت مستعد لتأسيس وجودك في السعودية؟'
                  : 'Ready to establish your presence in Saudi Arabia?'}
              </h3>
              <p>
                {isAr
                  ? 'من التخطيط لدخول السوق إلى التجهيز التشغيلي، تدعم IBF كل مرحلة من رحلة توسعك.'
                  : 'From market-entry planning to operational readiness, IBF supports every stage of your expansion journey.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="cta-btn-white">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={15} />
            </Link>
            <Link to={`${basePath}/contact`} className="cta-btn-outline">
              <span>{isAr ? 'التواصل مع IBF' : 'Contact IBF'}</span> <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
