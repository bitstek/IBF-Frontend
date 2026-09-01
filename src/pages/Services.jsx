import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Brain,
  ChevronRight,
  ClipboardList,
  Compass,
  Cpu,
  Edit3,
  Headphones,
  Laptop,
  MapPin,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Zap,
} from 'lucide-react'

import servicesHeroBg from '../assets/services-hero-bg.jpg'
import partnerAbb from '../assets/partner-abb.png'
import partnerSiemens from '../assets/partner-siemens.png'
import partnerSchneider from '../assets/partner-schneider.png'
import partnerEaton from '../assets/partner-eaton.png'
import partnerOmron from '../assets/partner-omron.png'
import partnerPhoenix from '../assets/partner-phoenix.png'
import partnerFluke from '../assets/partner-fluke.png'

// Custom SVG Icons matching exact template reference
function GovtIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
    </svg>
  )
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M4 11h16M8 15h.01M16 15h.01M6 21l3-4M18 21l-3-4" />
    </svg>
  )
}

function EnergyTowerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 22l5-20 5 20M3 9h18M5 15h14M2 18l10-4 10 4" />
    </svg>
  )
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20V8l-6 4V8l-6 4V4H2v16zM6 16h2M11 16h2M16 16h2" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M9 18h6v4H9v-4z" />
    </svg>
  )
}

export default function Services({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 7 Core Services matching Image 2 Template Reference
  const coreServices = isAr
    ? [
        {
          num: '01',
          title: 'التجارة والمشتريات',
          desc: 'المعدات الكهربائية الصناعية، البطاريات، المقومات والمزيد، بتوريد عالمي موثوق.',
          icon: ShoppingCart,
          link: `${basePath}/solutions/trading-procurement`,
        },
        {
          num: '02',
          title: 'الذكاء الاصطناعي والحلول الرقمية',
          desc: 'حلول مدعومة بالذكاء الاصطناعي وخدمات التحول الرقمي لعمليات أكثر ذكاءً.',
          icon: Brain,
          link: `${basePath}/solutions/ai-digital-solutions`,
        },
        {
          num: '03',
          title: 'حلول إنترنت الأشياء (IoT)',
          desc: 'حلول إنترنت الأشياء الذكية لربط ومراقبة وتحسين عملياتك التشغيلية.',
          icon: Radio,
          link: `${basePath}/solutions/iot-solutions`,
        },
        {
          num: '04',
          title: 'خدمات تكنولوجيا المعلومات',
          desc: 'خدمات تكنولوجيا المعلومات المدارة وحلول البنية التحتية لحماية وتسهيل أعمالك.',
          icon: Laptop,
          link: `${basePath}/solutions/it-services`,
        },
        {
          num: '05',
          title: 'دخول السوق السعودي',
          desc: 'دعم شامل لمساعدتك في الدخول والتأسيس والنمو في السوق السعودي.',
          icon: MapPin,
          link: `${basePath}/solutions/saudi-market-entry`,
        },
        {
          num: '06',
          title: 'الآيزو والامتثال',
          desc: 'استشارات الامتثال ودعم الحصول على شهادات الآيزو عبر مختلف القطاعات.',
          icon: ShieldCheck,
          link: `${basePath}/solutions/iso-compliance`,
        },
        {
          num: '07',
          title: 'الخدمات التقنية',
          desc: 'التكامل التقني، الدعم الهندسي، والحلول التكنولوجية المخصصة.',
          icon: Settings,
          link: `${basePath}/solutions/technology-services`,
        },
      ]
    : [
        {
          num: '01',
          title: 'Trading & Procurement',
          desc: 'Industrial electrical, batteries, rectifiers and more, sourced globally, delivered reliably.',
          icon: ShoppingCart,
          link: `${basePath}/solutions/trading-procurement`,
        },
        {
          num: '02',
          title: 'AI & Digital Solutions',
          desc: 'AI-powered solutions and digital transformation services for smarter operations.',
          icon: Brain,
          link: `${basePath}/solutions/ai-digital-solutions`,
        },
        {
          num: '03',
          title: 'IoT Solutions',
          desc: 'Smart IoT solutions that connect, monitor, and optimize your operations.',
          icon: Radio,
          link: `${basePath}/solutions/iot-solutions`,
        },
        {
          num: '04',
          title: 'IT Services',
          desc: 'Managed IT services and infrastructure solutions to keep your business secure and efficient.',
          icon: Laptop,
          link: `${basePath}/solutions/it-services`,
        },
        {
          num: '05',
          title: 'Saudi Market Entry',
          desc: 'End-to-end support to help you enter, establish, and grow in the Saudi market.',
          icon: MapPin,
          link: `${basePath}/solutions/saudi-market-entry`,
        },
        {
          num: '06',
          title: 'ISO & Compliance',
          desc: 'Compliance consulting and ISO certification support across industries.',
          icon: ShieldCheck,
          link: `${basePath}/solutions/iso-compliance`,
        },
        {
          num: '07',
          title: 'Technology Services',
          desc: 'Technology integration, engineering support, and tailored technical solutions.',
          icon: Settings,
          link: `${basePath}/solutions/technology-services`,
        },
      ]

  // 5 Approach Steps matching Image 2 Template Reference
  const approachSteps = isAr
    ? [
        {
          num: '01',
          title: 'الاكتشاف',
          desc: 'نفهم طبيعة أعمالك والتحديات والأهداف الاستراتيجية.',
          icon: Search,
        },
        {
          num: '02',
          title: 'التقييم',
          desc: 'نحلل المتطلبات الفنية ونحدد الفرص والحلول.',
          icon: ClipboardList,
        },
        {
          num: '03',
          title: 'التصميم',
          desc: 'نصمم حلولاً مخصصة متكاملة تتوافق مع تطلعاتك.',
          icon: Edit3,
        },
        {
          num: '04',
          title: 'التنفيذ',
          desc: 'ننفذ بدقة عالية ونضمن التكامل السلس مع أنظمتك.',
          icon: Settings,
        },
        {
          num: '05',
          title: 'الدعم',
          desc: 'نقدم الدعم المستمر والتطوير المتواصل للعمليات.',
          icon: TrendingUp,
        },
      ]
    : [
        {
          num: '01',
          title: 'Discover',
          desc: 'We understand your business, challenges, and objectives.',
          icon: Search,
        },
        {
          num: '02',
          title: 'Assess',
          desc: 'We analyze requirements and identify opportunities.',
          icon: ClipboardList,
        },
        {
          num: '03',
          title: 'Design',
          desc: 'We design tailored solutions aligned with your goals.',
          icon: Edit3,
        },
        {
          num: '04',
          title: 'Implement',
          desc: 'We execute with precision and ensure seamless integration.',
          icon: Settings,
        },
        {
          num: '05',
          title: 'Support',
          desc: 'We provide ongoing support and continuous improvement.',
          icon: TrendingUp,
        },
      ]

  // Industries We Serve List matching Image 2 Template Reference
  const industriesList = isAr
    ? [
        { title: 'الطاقة والمرافق', icon: EnergyTowerIcon },
        { title: 'الصناعة والتصنيع', icon: FactoryIcon },
        { title: 'الإنشاءات والعقارات', icon: BuildingIcon },
        { title: 'القطاع الحكومي', icon: GovtIcon },
        { title: 'النقل واللوجستيات', icon: TrainIcon },
      ]
    : [
        { title: 'Energy & Utilities', icon: EnergyTowerIcon },
        { title: 'Industrial & Manufacturing', icon: FactoryIcon },
        { title: 'Construction & Real Estate', icon: BuildingIcon },
        { title: 'Government', icon: GovtIcon },
        { title: 'Transportation', icon: TrainIcon },
      ]

  return (
    <main className="services-template-page">
      <SEO lang={lang} pageKey="services" />
      {/* HERO SECTION WITH UPLOADED BACKGROUND IMAGE (IMAGE 1) */}
      <section className="template-hero-section services-hero-section">
        <div className="hero-bg-container">
          <img src={servicesHeroBg} alt="IBF Global Services Node Platform" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB OVER HERO */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'الخدمات' : 'Services'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">{isAr ? 'الخدمات' : 'SERVICES'}</p>

            <h1 className="hero-headline">
              {isAr ? (
                <>
                  حلول مصممة لمواجهة <span className="gold-highlight">تحديات أعمالك</span>.
                </>
              ) : (
                <>
                  Solutions built around <span className="gold-highlight">your business challenges</span>.
                </>
              )}
            </h1>

            <p className="hero-lead-text">
              {isAr
                ? 'من المشتريات الصناعية إلى الذكاء الاصطناعي، إنترنت الأشياء، إدارة تقنية المعلومات، الامتثال، ودخول السوق، نقدم حلولاً متكاملة تعزز الكفاءة وتضمن الامتثال وتسرع نمو أعمالك في المملكة العربية السعودية وخارجها.'
                : 'From industrial procurement to AI, IoT, managed IT, compliance, and market entry, we deliver end-to-end solutions that drive efficiency, ensure compliance, and accelerate your growth in Saudi Arabia and beyond.'}
            </p>

            <div className="hero-actions-row">
              <a href="#core-services" className="btn-primary-navy">
                <span>{isAr ? 'استكشف خدماتنا' : 'Explore Our Services'}</span> <ArrowRight size={16} />
              </a>
              <Link to={`${basePath}/request-a-quote`} className="btn-secondary-white">
                <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION (MATCHING IMAGE 2 GRID) */}
      <section id="core-services" className="shell section-spacing core-services-section reveal-up">
        <div className="section-head-flex">
          <div className="section-head-left">
            <p className="gold-subtitle">{isAr ? 'خدماتنا الرئيسية' : 'OUR CORE SERVICES'}</p>
            <h2 className="section-main-heading">
              {isAr ? 'حلول شاملة. أثر ملموس.' : 'Comprehensive solutions. Measurable impact.'}
            </h2>
          </div>
          <p className="section-head-desc">
            {isAr
              ? 'صممت محفظة خدماتنا المتكاملة لدعم عملياتك وتأمين الامتثال وفتح آفاق فرص جديدة.'
              : 'Our integrated service portfolio is designed to support your operations, ensure compliance, and unlock new opportunities.'}
          </p>
        </div>

        <div className="services-template-grid">
          {coreServices.map((service) => {
            const IconComponent = service.icon
            return (
              <article className="services-template-card" key={service.title}>
                <div className="service-card-top-row">
                  <div className="service-card-icon">
                    <IconComponent size={24} />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-card-link">
                  <span>{isAr ? 'اعرف المزيد' : 'Learn more'}</span> <ArrowRight size={14} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      {/* OUR APPROACH SECTION (5-STEP PROCESS MATCHING IMAGE 2) */}
      <section className="shell section-spacing our-approach-section reveal-up">
        <div className="section-head-center">
          <p className="gold-subtitle">{isAr ? 'منهجية العمل' : 'OUR APPROACH'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'منهجية مثبتة تحقق النتائج.' : 'A proven approach that delivers results.'}
          </h2>
          <p className="section-center-desc">
            {isAr
              ? 'نتبع مساراً مهيكلاً لفهم احتياجاتك وتصميم الحل المناسب وتقديم قيمة مستدامة.'
              : 'We follow a structured process to understand your needs, design the right solution, and deliver long-term value.'}
          </p>
        </div>

        <div className="approach-process-row">
          {approachSteps.map((step, idx) => {
            const StepIcon = step.icon
            return (
              <div className="approach-step-card" key={step.num}>
                <div className="approach-circle-box">
                  <StepIcon size={22} className="approach-icon" />
                  <span className="approach-num-tag">{step.num}</span>
                </div>
                {idx < approachSteps.length - 1 && <div className="approach-connector-line" />}
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section className="shell section-spacing industries-serve-section reveal-up">
        <div className="section-header-flex">
          <div>
            <p className="gold-subtitle">{isAr ? 'القطاعات التي نخدمها' : 'INDUSTRIES WE SERVE'}</p>
            <h2 className="section-main-heading">
              {isAr ? 'خبرة عريقة في القطاعات. سجل نجاحات مثبت.' : 'Industry expertise. Proven experience.'}
            </h2>
          </div>
          <Link to={`${basePath}/industries`} className="btn-primary-navy">
            <span>{isAr ? 'عرض جميع القطاعات' : 'View All Industries'}</span> <ArrowRight size={16} />
          </Link>
        </div>

        <div className="industries-row-5col">
          {industriesList.map((item) => {
            const IconComp = item.icon
            return (
              <div className="industry-card-item" key={item.title}>
                <div className="industry-icon-box">
                  <IconComp />
                </div>
                <h4>{item.title}</h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* GLOBAL PARTNERS SECTION */}
      <section className="shell section-spacing global-partners-section reveal-up">
        <div className="section-head-center">
          <p className="gold-subtitle">{isAr ? 'شركاؤنا العالميّون' : 'OUR PARTNERS'}</p>
        </div>
        <div className="partners-logo-strip">
          <img src={partnerSiemens} alt="Siemens Partner Logo" className="partner-logo-img" />
          <img src={partnerSchneider} alt="Schneider Electric Partner Logo" className="partner-logo-img" />
          <img src={partnerAbb} alt="ABB Partner Logo" className="partner-logo-img" />
          <img src={partnerEaton} alt="Eaton Partner Logo" className="partner-logo-img" />
          <img src={partnerOmron} alt="Omron Partner Logo" className="partner-logo-img" />
          <img src={partnerPhoenix} alt="Phoenix Contact Partner Logo" className="partner-logo-img" />
          <img src={partnerFluke} alt="Fluke Partner Logo" className="partner-logo-img" />
          <Link to={`${basePath}/about`} className="partner-brand-more">
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="shell section-spacing cta-banner-section reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div className="cta-headset-circle">
              <Headphones size={24} />
            </div>
            <div>
              <p className="gold-subtitle-sm">{isAr ? 'هل أنت جاهز للبدء؟' : 'READY TO GET STARTED?'}</p>
              <h3>
                {isAr
                  ? 'لنصمم الحل المناسب لنمو أعمالك.'
                  : "Let's build the right solution for your business."}
              </h3>
            </div>
          </div>
          <Link to={`${basePath}/request-a-quote`} className="cta-btn-white">
            <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
