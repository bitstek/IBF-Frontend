import { Link } from 'react-router-dom'
import {
  Award,
  BarChart3,
  Building2,
  ChevronRight,
  ClipboardList,
  Handshake,
  Mail,
  MapPin,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import aboutHeroBg from '../assets/about-hero-bg.jpg'

export default function About({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // Who We Serve 4 Cards
  const serveCards = isAr
    ? [
        {
          title: 'سياق التشغيل السعودي',
          desc: 'مقرنا في جدة مع فهم عملي ومتعمق للمتطلبات التجارية والمشتريات والتسجيل والتنسيق المحلي.',
          icon: Building2,
        },
        {
          title: 'تسليم واعي بالامتثال',
          desc: 'يتم التعامل مع التوثيق وعروض الأسعار وتسجيل الموردين ودعم العمليات كجزء أساسي من العمل وليس كفكرة متأخرة.',
          icon: ShieldCheck,
        },
        {
          title: 'تنفيذ بقيادة الشركاء',
          desc: 'تنسق IBF مع المصنعين الأصليين والموردين وفرق التكنولوجيا وأصحاب المصلحة المحليين للحفاظ على تقدم المشاريع التجارية.',
          icon: Handshake,
        },
        {
          title: 'عمليات مُمكّنة تقنياً',
          desc: 'يمكن تقديم لوحات المعلومات الرقمية والبوابات وأنظمة المراقبة وأدوات أتمتة سير العمل جنبًا إلى جنب مع دعم التجارة ودخول السوق.',
          icon: BarChart3,
        },
      ]
    : [
        {
          title: 'Saudi Operating Context',
          desc: 'Based in Jeddah with a practical understanding of local commercial, procurement, registration, and coordination requirements.',
          icon: Building2,
        },
        {
          title: 'Compliance-Aware Delivery',
          desc: 'Documentation, quotation, vendor registration, and process support are treated as part of the work, not as an afterthought.',
          icon: ShieldCheck,
        },
        {
          title: 'Partner-Led Execution',
          desc: 'IBF coordinates with OEMs, suppliers, technology teams, and local stakeholders to keep commercial projects moving.',
          icon: Handshake,
        },
        {
          title: 'Technology-Enabled Operations',
          desc: 'Digital dashboards, portals, monitoring systems, and workflow tools can be delivered alongside trading and market-entry support.',
          icon: BarChart3,
        },
      ]

  // 3 Pillar Strengths Cards
  const pillarCards = isAr
    ? [
        {
          title: 'الانضباط التجاري',
          desc: 'يتم التعامل مع الطلبات وعروض الأسعار وتنسيق الموردين والتوثيق ومتابعة التسليم وفق أعلى التوقعات المؤسسية.',
          icon: ClipboardList,
        },
        {
          title: 'المصداقية التقنية',
          desc: 'تدعم IBF لوحات التحكم الرقمية وحلول إنترنت الأشياء والبوابات وأدوات سير العمل ومسارات النشر السحابية أو المحلية.',
          icon: Award,
        },
        {
          title: 'الجاهزية السعودية',
          desc: 'تعتبر متطلبات دخول السوق وتسجيل الموردين وتوثيق الامتثال والتنسيق المحلي متطلبات تشغيلية أساسية.',
          icon: MapPin,
        },
      ]
    : [
        {
          title: 'Commercial discipline',
          desc: 'Requests, quotations, supplier coordination, documentation, and delivery follow-up are handled with enterprise expectations in mind.',
          icon: ClipboardList,
        },
        {
          title: 'Technology credibility',
          desc: 'IBF can support digital dashboards, IoT integrations, portals, workflow tools, and on-premise or cloud deployment paths.',
          icon: Award,
        },
        {
          title: 'Saudi readiness',
          desc: 'Market-entry, vendor registration, compliance documentation, and local coordination are treated as practical operating requirements.',
          icon: MapPin,
        },
      ]

  return (
    <main className="about-template-page">
      {/* HERO SECTION WITH ABOUT BACKGROUND IMAGE */}
      <section className="about-hero-section">
        <div className="hero-bg-container">
          <img src={aboutHeroBg} alt="Saudi Arabia Modern City Skyline Office Promenade" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'عن الشركة' : 'About'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'عن IBF' : 'ABOUT IBF'}
            </p>
            <h1 className="hero-headline">
              {isAr ? (
                <>
                  واجهتك التجارية في <span className="gold-highlight">المملكة العربية السعودية</span>
                </>
              ) : (
                <>
                  Your Business Front in <span className="gold-highlight">Saudi Arabia</span>
                </>
              )}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'شركة واجهة الأعمال الدولية هي منصة سعودية للشركات التي تحتاج إلى دعم تجاري منضبط في المملكة: التوريد، تنفيذ التكنولوجيا، تنسيق دخول السوق، التوثيق، جاهزية الموردين، والعمليات الموجهة للامتثال.'
                : 'International Business Front is a Saudi corporate platform for companies that need disciplined commercial support in the Kingdom: sourcing, technology implementation, market-entry coordination, documentation, vendor readiness, and compliance-oriented operations.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHO WE SERVE (2 COLUMN LAYOUT) */}
      <section className="shell section-spacing reveal-up">
        <div className="who-we-serve-layout">
          {/* Left Text Block */}
          <div className="who-we-serve-left">
            <p className="gold-subtitle">{isAr ? 'من نخدم' : 'WHO WE SERVE'}</p>
            <h2 className="who-we-serve-heading">
              {isAr
                ? 'واجهة محلية قادرة للمتطلبات التجارية الجادة.'
                : 'A capable local interface for serious business requirements.'}
            </h2>
            <p className="who-we-serve-desc">
              {isAr
                ? 'تعمل IBF مع الشركات الصناعية، المرافق العامة، مشغلي البنية التحتية، مقاولي الهندسة والتوريد، المؤسسات البحثية، مزودي التكنولوجيا، وفرق المشتريات، والشركات الأجنبية التي تدخل السعودية.'
                : 'IBF works with industrial companies, utilities, infrastructure operators, EPC contractors, research institutions, technology providers, procurement teams, and overseas companies entering Saudi Arabia.'}
            </p>
          </div>

          {/* Right Stacked 4 Feature Cards */}
          <div className="who-we-serve-cards">
            {serveCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div key={card.title} className={`serve-card-item reveal-up reveal-delay-${index}`}>
                  <div className="serve-icon-box">
                    <IconComponent size={26} />
                  </div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 PILLAR CARDS GRID */}
      <section className="shell section-spacing reveal-up">
        <div className="about-pillars-grid">
          {pillarCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div key={card.title} className={`pillar-card-item reveal-up reveal-delay-${index}`}>
                <div className="pillar-icon-box">
                  <IconComponent size={26} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: CTA BANNER (Structured Conversation) */}
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
