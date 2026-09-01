import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Brain,
  Briefcase,
  Cpu,
  Globe,
  Headphones,
  Laptop,
  Radio,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  User,
  Users,
} from 'lucide-react'
import heroBgSaudi from '../assets/hero-bg-saudi.jpg'
import prodElectrical from '../assets/prod-electrical.jpg'
import prodBatteries from '../assets/prod-batteries.jpg'
import prodRectifiers from '../assets/prod-rectifiers.jpg'
import prodControl from '../assets/prod-control.jpg'
import prodCables from '../assets/prod-cables.jpg'
import prodMeters from '../assets/prod-meters.jpg'
import partnerAbb from '../assets/partner-abb.png'
import partnerSiemens from '../assets/partner-siemens.png'
import partnerSchneider from '../assets/partner-schneider.png'
import partnerEaton from '../assets/partner-eaton.png'
import partnerOmron from '../assets/partner-omron.png'
import partnerPhoenix from '../assets/partner-phoenix.png'
import partnerFluke from '../assets/partner-fluke.png'

// Custom Industry Icons matching template reference
function GovtIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
    </svg>
  )
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20V9l-6 4V9l-6 4V5L2 9v11z" />
      <circle cx="17" cy="6" r="2" />
    </svg>
  )
}

function UtilityTowerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l-7 19h14L12 2zM7 16h10M8.5 12h7M10 8h4M4 8l16 0M2 13l20 0" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v5L4.5 18A2 2 0 006.3 21h11.4a2 2 0 001.8-3L14 8V3" />
      <path d="M8.5 14h7" />
    </svg>
  )
}

function EpcBuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 4v16M15 4v16M4 10h16M4 15h16" />
    </svg>
  )
}

function TechMonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M12 6.5v1M12 12.5v1M8.5 10h1M14.5 10h1" />
    </svg>
  )
}

function SaudiMapIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15c2-2 3-5 5-6s4 1 6-1 2-4 5-3c1 3-1 6-3 8s-5 4-8 4-4-1-5-2z" />
    </svg>
  )
}

export default function Home({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const navigate = useNavigate()
  const [homeSearchQuery, setHomeSearchQuery] = useState('')

  const handleHomeSearchSubmit = (e) => {
    e.preventDefault()
    if (homeSearchQuery.trim()) {
      navigate(`${basePath}/catalogue?search=${encodeURIComponent(homeSearchQuery.trim())}`)
    }
  }

  // Core Services List matching Image 2 template
  const coreServices = isAr
    ? [
      {
        title: 'التجارة والمشتريات',
        desc: 'التوريد العالمي للمنتجات الصناعية مع دعم شامل للمشتريات.',
        icon: ShoppingCart,
        href: `${basePath}/solutions/trading-procurement`,
      },
      {
        title: 'حلول الذكاء الاصطناعي والحلول الرقمية',
        desc: 'تطبيقات ذكية، لوحات تحكم، وحلول التحول الرقمي.',
        icon: Brain,
        href: `${basePath}/solutions/ai-digital-solutions`,
      },
      {
        title: 'حلول إنترنت الأشياء (IoT)',
        desc: 'مراقبة ذكية، جمع البيانات، وحلول صناعية متصلة.',
        icon: Radio,
        href: `${basePath}/solutions/iot-solutions`,
      },
      {
        title: 'خدمات تكنولوجيا المعلومات',
        desc: 'خدمات إدارية لدعم وتأمين البنية التحتية لضمان استمرارية أعمالك.',
        icon: Server,
        href: `${basePath}/solutions/it-services`,
      },
      {
        title: 'دخول السوق السعودي',
        desc: 'مساعدة الشركات العالمية في دخول وتوسيع أعمالها في السوق السعودي بثقة.',
        icon: SaudiMapIcon,
        href: `${basePath}/solutions/saudi-market-entry`,
      },
      {
        title: 'الآيزو والامتثال',
        desc: 'شهادات الجودة، استشارات الامتثال، والدعم التوثيقي.',
        icon: ShieldCheck,
        href: `${basePath}/solutions/iso-compliance`,
      },
      {
        title: 'الخدمات التقنية',
        desc: 'تطوير المواقع، البوابات، التطبيقات وتطبيقات التكنولوجيا المخصصة.',
        icon: Laptop,
        href: `${basePath}/solutions/technology-services`,
      },
    ]
    : [
      {
        title: 'Trading & Procurement',
        desc: 'Global sourcing of industrial products with end-to-end procurement support.',
        icon: ShoppingCart,
        href: `${basePath}/solutions/trading-procurement`,
      },
      {
        title: 'AI & Digital Solutions',
        desc: 'Intelligent applications, dashboards, and digital transformation solutions.',
        icon: Brain,
        href: `${basePath}/solutions/ai-digital-solutions`,
      },
      {
        title: 'IoT Solutions',
        desc: 'Smart monitoring, data collection, and connected industrial solutions.',
        icon: Radio,
        href: `${basePath}/solutions/iot-solutions`,
      },
      {
        title: 'IT Services',
        desc: 'Managed IT services and infrastructure support to keep your business running.',
        icon: Server,
        href: `${basePath}/solutions/it-services`,
      },
      {
        title: 'Saudi Market Entry',
        desc: 'Helping international businesses enter and grow in the Saudi market with confidence.',
        icon: SaudiMapIcon,
        href: `${basePath}/solutions/saudi-market-entry`,
      },
      {
        title: 'ISO & Compliance',
        desc: 'Certification, compliance consulting and documentation support.',
        icon: ShieldCheck,
        href: `${basePath}/solutions/iso-compliance`,
      },
      {
        title: 'Technology Services',
        desc: 'Custom web, portal, applications and technology implementation.',
        icon: Laptop,
        href: `${basePath}/solutions/technology-services`,
      },
    ]

  // Industries We Serve matching Image 2 template
  const industries = isAr
    ? [
      { title: 'القطاع الحكومي وشبه الحكومي', icon: GovtIcon },
      { title: 'التصنيع والقطاع الصناعي', icon: FactoryIcon },
      { title: 'المرافق والبنية التحتية', icon: UtilityTowerIcon },
      { title: 'الأبحاث والمختبرات', icon: FlaskIcon },
      { title: 'الهندسة والمشتريات والبناء', icon: EpcBuildingIcon },
      { title: 'شركات التكنولوجيا', icon: TechMonitorIcon },
      { title: 'الشركات الدولية', icon: Globe },
    ]
    : [
      { title: 'Government & Semi-Government', icon: GovtIcon },
      { title: 'Manufacturing & Industrial', icon: FactoryIcon },
      { title: 'Utilities & Infrastructure', icon: UtilityTowerIcon },
      { title: 'Research & Laboratories', icon: FlaskIcon },
      { title: 'EPC & Procurement', icon: EpcBuildingIcon },
      { title: 'Technology Companies', icon: TechMonitorIcon },
      { title: 'International Businesses', icon: Globe },
    ]

  // Featured Products matching Image 2 template
  const featuredProducts = isAr
    ? [
      { title: 'الكهرباء الصناعية', img: prodElectrical },
      { title: 'أنظمة البطاريات والطاقة', img: prodBatteries },
      { title: 'المقومات والشواحن', img: prodRectifiers },
      { title: 'التحكم والتحكم الآلي', img: prodControl },
      { title: 'الكابلات والملحقات', img: prodCables },
      { title: 'الاختبار والقياس', img: prodMeters },
    ]
    : [
      { title: 'Industrial Electrical', img: prodElectrical },
      { title: 'Batteries & Power Systems', img: prodBatteries },
      { title: 'Rectifiers & Chargers', img: prodRectifiers },
      { title: 'Control & Automation', img: prodControl },
      { title: 'Cables & Accessories', img: prodCables },
      { title: 'Test & Measurement', img: prodMeters },
    ]

  return (
    <main className="template-landing-page">
      <SEO lang={lang} pageKey="home" />
      {/* 1. HERO SECTION WITH IMAGE 1 BACKGROUND & TEMPLATE OVERLAY */}
      <section className="template-hero-section">
        <div className="hero-bg-container">
          <img src={heroBgSaudi} alt="Industrial Technology Saudi Skyline" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          <div className="hero-left-content reveal-up">
            {/* Tagline category */}
            <p className="hero-gold-badge">
              INDUSTRIAL &nbsp;•&nbsp; TECHNOLOGY &nbsp;•&nbsp; PROCUREMENT
            </p>

            {/* Main Headline */}
            <h1 className="hero-headline">
              {isAr ? (
                <>
                  حلول ترتبط <span className="gold-highlight">بالصناعات</span>.
                  <br />
                  تكنولوجيا تقود <span className="gold-highlight">النمو</span>.
                  <br />
                  شراكات تحقق <span className="gold-highlight">القيمة</span>.
                </>
              ) : (
                <>
                  Solutions that <span className="gold-highlight">connect</span> industries.
                  <br />
                  Technology that <span className="gold-highlight">drives</span> growth.
                  <br />
                  Partnerships that <span className="gold-highlight">deliver</span> value.
                </>
              )}
            </h1>

            {/* Lead text */}
            <p className="hero-lead-text">
              {isAr
                ? 'تقدم IBF حلولاً متكاملة في المشتريات الصناعية، والتحول الرقمي، وإنترنت الأشياء، وخدمات تكنولوجيا المعلومات، والامتثال، ودخول السوق، لتمكين المنشآت من الابتكار والعمل بكفاءة والريادة في عالم مترابط.'
                : 'IBF delivers end-to-end solutions in industrial sourcing, digital transformation, IoT, IT services, compliance, and market entry, empowering businesses to innovate, operate efficiently, and lead in a connected world.'}
            </p>

            {/* Product Search Bar */}
            <form onSubmit={handleHomeSearchSubmit} className="hero-product-search-form">
              <div className="hero-search-input-wrapper">
                <Search size={18} className="hero-search-icon" />
                <input
                  type="text"
                  placeholder={
                    isAr
                      ? 'ابحث عن أي منتج، موديل، أو ماركة (مثل: Siemens, Eaton, Cables)...'
                      : 'Search product, model, or brand (e.g. Siemens, Eaton, Cables)...'
                  }
                  value={homeSearchQuery}
                  onChange={(e) => setHomeSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn-hero-search-submit">
                  <span>{isAr ? 'بحث' : 'Search'}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>

            {/* Action buttons */}
            <div className="hero-actions-row">
              <Link to={`${basePath}/solutions/trading-procurement`} className="btn-primary-navy">
                <span>{isAr ? 'استكشف الخدمات' : 'Explore Services'}</span> <ArrowRight size={16} />
              </Link>
              <Link to={`${basePath}/catalogue`} className="btn-secondary-white">
                <span>{isAr ? 'استكشف المنتجات' : 'Explore Products'}</span> <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* 2. OVERLAPPING KEY STATS BAR */}
          <div className="hero-stats-card-bar reveal-up reveal-delay-2">
            <div className="stat-card-box">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={26} />
              </div>
              <div className="stat-text-group">
                <strong>20+</strong>
                <small>{isAr ? 'سنوات من الخبرة' : 'Years of Experience'}</small>
              </div>
            </div>

            <div className="stat-card-box">
              <div className="stat-icon-wrapper">
                <Briefcase size={26} />
              </div>
              <div className="stat-text-group">
                <strong>500+</strong>
                <small>{isAr ? 'مشروع ناجح' : 'Successful Projects'}</small>
              </div>
            </div>

            <div className="stat-card-box">
              <div className="stat-icon-wrapper">
                <Users size={26} />
              </div>
              <div className="stat-text-group">
                <strong>300+</strong>
                <small>{isAr ? 'عميل مؤسسي' : 'Enterprise Clients'}</small>
              </div>
            </div>

            <div className="stat-card-box">
              <div className="stat-icon-wrapper">
                <Globe size={26} />
              </div>
              <div className="stat-text-group">
                <strong>{isAr ? 'انتشار عالمي' : 'Global Reach'}</strong>
                <small>{isAr ? 'خبرة محليّة' : 'Local Expertise'}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES SECTION */}
      <section className="core-services-section shell">
        <div className="section-header-center reveal-up">
          <p className="gold-subtitle">{isAr ? 'خدماتنا الرئيسية' : 'OUR CORE SERVICES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'حلول متكاملة تدعم نمو أعمالك' : 'End-to-end solutions that power your business'}
          </h2>
        </div>

        <div className="core-services-grid">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link
                to={service.href}
                key={service.title}
                className={`core-service-card reveal-up reveal-delay-${index % 4}`}
              >
                <div className="service-card-icon">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-card-arrow">
                  <ArrowRight size={16} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE SECTION */}
      <section className="industries-serve-section shell">
        <div className="section-header-center reveal-up">
          <p className="gold-subtitle">{isAr ? 'القطاعات التي نخدمها' : 'INDUSTRIES WE SERVE'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'حلول مخصصة لقطاعك الصناعي' : 'Solutions tailored to your industry'}
          </h2>
        </div>

        <div className="industries-grid-row">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon
            return (
              <div className={`industry-card-item reveal-up reveal-delay-${index}`} key={ind.title}>
                <div className="industry-icon-box">
                  <IconComponent />
                </div>
                <h4>{ind.title}</h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SECTION */}
      <section className="featured-products-section shell">
        <div className="section-header-flex reveal-up">
          <div>
            <p className="gold-subtitle">{isAr ? 'المنتجات المميزة' : 'FEATURED PRODUCTS'}</p>
            <h2 className="section-main-heading left-align">
              {isAr ? 'منتجات صناعية عالية الجودة من علامات عالمية موثوقة' : 'Quality industrial products from trusted global brands'}
            </h2>
          </div>
          <Link to={`${basePath}/catalogue`} className="view-all-gold-link">
            <span>{isAr ? 'عرض جميع المنتجات' : 'View all products'}</span> <ArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-products-grid">
          {featuredProducts.map((prod, index) => (
            <Link to={`${basePath}/catalogue`} key={prod.title} className={`featured-prod-card reveal-up reveal-delay-${index}`}>
              <div className="prod-img-box">
                <img src={prod.img} alt={prod.title} />
              </div>
              <h4>{prod.title}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. OUR GLOBAL PARTNERS SECTION */}
      <section className="global-partners-section shell">
        <div className="section-header-center reveal-up">
          <p className="gold-subtitle">{isAr ? 'شركاؤنا العالميون' : 'OUR GLOBAL PARTNERS'}</p>
        </div>

        <div className="partners-logo-strip reveal-up reveal-delay-1">
          <img src={partnerAbb} alt="ABB" className="partner-logo-img" />
          <img src={partnerSiemens} alt="SIEMENS" className="partner-logo-img" />
          <img src={partnerSchneider} alt="Schneider Electric" className="partner-logo-img" />
          <img src={partnerEaton} alt="EATON" className="partner-logo-img" />
          <img src={partnerOmron} alt="OMRON" className="partner-logo-img" />
          <img src={partnerPhoenix} alt="PHOENIX CONTACT" className="partner-logo-img" />
          <img src={partnerFluke} alt="FLUKE" className="partner-logo-img" />
          <div className="partner-brand-more">+ Many More</div>
        </div>
      </section>

      {/* 7. CTA BANNER SECTION */}
      <section className="cta-banner-section shell reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div className="cta-headset-circle">
              <Headphones size={26} />
            </div>
            <div>
              <h3>{isAr ? 'دعنا نبني شيئاً رائعاً معا.' : "Let's build something great together."}</h3>
              <p>
                {isAr
                  ? 'تحدث مع فريقنا لتوريد المنتجات، الحلول، أو أي متطلبات مشتريات.'
                  : 'Talk to our team for product sourcing, solutions, or any procurement requirements.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="cta-btn-white">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <User size={15} />
            </Link>
            <Link to={`${basePath}/contact`} className="cta-btn-outline">
              <span>{isAr ? 'اتصل بنا' : 'Contact Us'}</span> <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

