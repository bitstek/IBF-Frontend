import { Link } from 'react-router-dom'
import {
  Award,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  FileText,
  Globe,
  Handshake,
  Headphones,
  LineChart,
  Lock,
  Puzzle,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import technologyHeroBg from '../assets/technology-hero-bg.jpg'

export default function TechnologyServices({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 6 Core Capabilities
  const coreCapabilities = isAr
    ? [
        {
          title: 'تطوير البرمجيات المخصصة',
          desc: 'هندسة برمجيات ويب، سطح مكتب، وجوال مخصصة تناسب مسارات عملك التشغيلية.',
          icon: Code2,
        },
        {
          title: 'هندسة السحابة والانتقال إليها',
          desc: 'نشر وإدارة البنية التحتية السحابية القابلة للتوسع (AWS، Azure، والسحب الخاصة).',
          icon: Cloud,
        },
        {
          title: 'تكامل الأنظمة المؤسسية',
          desc: 'ربط أنظمة ERP وCRM وإنترنت الأشياء والأنظمة القائمة لتدفق بيانات سلس.',
          icon: Puzzle,
        },
        {
          title: 'الأمن السيبراني والامتثال',
          desc: 'تقييمات أمنية قوية، تشفير البيانات، إدارة الهويات، وأطر عمل الامتثال.',
          icon: ShieldCheck,
        },
        {
          title: 'تحليلات البيانات وبوابات BI',
          desc: 'لوحات تحكم استخبارات الأعمال في الوقت الفعلي، تقارير القياس، وتصور البيانات.',
          icon: BarChart3,
        },
        {
          title: 'استشارات تقنية المعلومات والتوجيه',
          desc: 'خرائط طريق تقنية استراتيجية، تقييم الموردين، وإرشادات التحول الرقمي.',
          icon: Compass,
        },
      ]
    : [
        {
          title: 'Custom Software Development',
          desc: 'Bespoke web, desktop, and mobile software engineering designed to fit your unique operational workflows.',
          icon: Code2,
        },
        {
          title: 'Cloud Architecture & Migration',
          desc: 'Scalable AWS, Azure, and private cloud deployment, migration, and infrastructure management.',
          icon: Cloud,
        },
        {
          title: 'Enterprise System Integration',
          desc: 'Connecting ERPs, CRMs, IoT systems, and legacy infrastructure for seamless data flow.',
          icon: Puzzle,
        },
        {
          title: 'Cybersecurity & Compliance',
          desc: 'Robust security assessments, encryption, identity management, and compliance frameworks.',
          icon: ShieldCheck,
        },
        {
          title: 'Data Analytics & BI Portals',
          desc: 'Real-time business intelligence dashboards, telemetry reports, and data visualization.',
          icon: BarChart3,
        },
        {
          title: 'IT Consulting & Advisory',
          desc: 'Strategic technology roadmaps, vendor evaluation, and digital transformation guidance.',
          icon: Compass,
        },
      ]

  // Additional Services (8 items in 2 columns)
  const additionalServicesCol1 = isAr
    ? [
        'تحديث الأنظمة القديمة وإعادة إعداد البنية',
        'خطوط نشر وتكامل مستمر مؤتمتة (DevOps & CI/CD)',
        'تطوير وتكامل APIs والخدمات البرمجية',
        'تحسين قواعد البيانات وإدارة مستودعات البيانات',
      ]
    : [
        'Legacy system modernization & refactoring',
        'DevOps & automated CI/CD deployment pipelines',
        'API development, integration & RESTful services',
        'Database optimization & data warehouse management',
      ]

  const additionalServicesCol2 = isAr
    ? [
        'التوثيق الفني ورسم البنية الهندسية',
        'ضمان الجودة واختبار البرمجيات المؤتمت',
        'إدارة الموردين وتنسيق برمجيات OEMs',
        'دعم فني وتتفقات مستوى الخدمة على مدار 24/7',
      ]
    : [
        'Technical documentation & architecture mapping',
        'Quality assurance & automated software testing',
        'Vendor management & OEM software coordination',
        '24/7 Technical support & maintenance SLAs',
      ]

  // 6 Process Steps
  const processSteps = isAr
    ? [
        { step: '01', title: 'الاستكشاف والتقييم', icon: Search },
        { step: '02', title: 'تصميم البنية الهندسية', icon: FileText },
        { step: '03', title: 'التطوير المرن (Agile)', icon: Cpu },
        { step: '04', title: 'تكامل الأنظمة', icon: Puzzle },
        { step: '05', title: 'الاختبار وضمان الجودة', icon: ShieldCheck },
        { step: '06', title: 'النشر والدعم', icon: TrendingUp },
      ]
    : [
        { step: '01', title: 'Discovery & Assessment', icon: Search },
        { step: '02', title: 'Architecture Design', icon: FileText },
        { step: '03', title: 'Agile Development', icon: Cpu },
        { step: '04', title: 'System Integration', icon: Puzzle },
        { step: '05', title: 'Testing & QA', icon: ShieldCheck },
        { step: '06', title: 'Deployment & Support', icon: TrendingUp },
      ]

  // 4 Why Partner Items
  const whyPartnerItems = isAr
    ? [
        {
          title: 'خبرة تقنية مثبتة',
          desc: 'فريق متعدد التخصصات من مهندسي البرمجيات ومثمري السحابة وخبراء التكامل.',
          icon: Award,
        },
        {
          title: 'بنية مخصصة',
          desc: 'حلول مصممة خصيصًا لتناسب سياق التشغيل المؤسسي والصناعي في السعودية.',
          icon: Settings,
        },
        {
          title: 'نهج الأمان أولاً',
          desc: 'خصوصية بيانات مدمجة، بنية ثقة صفرية (Zero-Trust)، ومعايير امتثال عالمية.',
          icon: ShieldCheck,
        },
        {
          title: 'دعم واتفاقيات SLA شاملة',
          desc: 'مراقبة مستمرة، صيانة استباقية، وشراكة طويلة الأمد مكرسة لنجاحك.',
          icon: Headphones,
        },
      ]
    : [
        {
          title: 'Proven Technical Expertise',
          desc: 'Multidisciplinary team of software engineers, cloud architects, and integration experts.',
          icon: Award,
        },
        {
          title: 'Tailored Architecture',
          desc: "Solutions engineered specifically for Saudi Arabia's enterprise & industrial operating context.",
          icon: Settings,
        },
        {
          title: 'Security-First Approach',
          desc: 'Built-in data privacy, zero-trust architecture, and international compliance standards.',
          icon: ShieldCheck,
        },
        {
          title: 'End-to-End SLA Support',
          desc: 'Continuous monitoring, proactive maintenance, and dedicated long-term partnership.',
          icon: Headphones,
        },
      ]

  return (
    <main className="technology-services-page">
      {/* HERO SECTION WITH TECHNOLOGY BACKGROUND IMAGE */}
      <section className="technology-hero-section">
        <div className="hero-bg-container">
          <img src={technologyHeroBg} alt="Technology Services Executive Desk & Saudi Skyline" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'الخدمات التقنية' : 'Technology Services'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'التكنولوجيا والتنفيذ المؤسسي' : 'ENTERPRISE TECHNOLOGY & IMPLEMENTATION'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'الخدمات التقنية' : 'Technology Services'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'تنفيذ التكنولوجيا المتكامل، تطوير البرمجيات، الهندسة السحابية، تكامل الأنظمة، والتحول الرقمي للعمليات المؤسسية.'
                : 'End-to-end technology implementation, software development, cloud architecture, system integration, and digital transformation for enterprise operations.'}
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

      {/* SECTION 1: OUR CORE CAPABILITIES (6 CARDS GRID) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'قدراتنا الرئيسية' : 'OUR CORE CAPABILITIES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'حلول تقنية شاملة مصممة لدعم النمو' : 'Comprehensive technology solutions tailored for growth'}
          </h2>
        </div>

        <div className="core-capabilities-grid">
          {coreCapabilities.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className={`capability-card reveal-up reveal-delay-${index % 3}`}>
                <div className="capability-icon-box">
                  <IconComponent size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 2: ADDITIONAL SERVICES (8 PILL CARDS IN 2 COLS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'خدمات إضافية' : 'ADDITIONAL SERVICES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'ندعم كل طبقة من بنيتك التكنولوجية' : 'Supporting every layer of your technology stack'}
          </h2>
        </div>

        <div className="additional-services-grid">
          <div className="service-col">
            {additionalServicesCol1.map((itemText) => (
              <div className="additional-service-pill" key={itemText}>
                <CheckCircle2 size={18} className="gold-check-icon" />
                <span>{itemText}</span>
              </div>
            ))}
          </div>
          <div className="service-col">
            {additionalServicesCol2.map((itemText) => (
              <div className="additional-service-pill" key={itemText}>
                <CheckCircle2 size={18} className="gold-check-icon" />
                <span>{itemText}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR IMPLEMENTATION PROCESS (6 STEPS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'مسار التنفيذ' : 'OUR IMPLEMENTATION PROCESS'}</p>
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

      {/* SECTION 4: WHY PARTNER WITH IBF? (4 COLUMNS) */}
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

      {/* SECTION 5: CTA BANNER */}
      <section className="cta-banner-section shell reveal-up">
        <div className="cta-banner-container">
          <div className="cta-left-content">
            <div className="cta-headset-circle">
              <Cpu size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? 'هل أنت مستعد لتسريع تحولك الرقمي؟'
                  : 'Ready to accelerate your digital transformation?'}
              </h3>
              <p>
                {isAr
                  ? 'تشارك مع IBF للحصول على خدمات تقنية بمستوى المؤسسات، برمجيات مخصصة، وتكامل أنظمة متكامل.'
                  : 'Partner with IBF for enterprise-grade technology services, custom software, and system integration.'}
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
