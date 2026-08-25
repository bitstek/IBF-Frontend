import { Link } from 'react-router-dom'
import {
  Activity,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  FileText,
  Globe,
  Headphones,
  LineChart,
  Maximize2,
  MessageSquare,
  Network,
  Plug,
  Puzzle,
  Radio,
  Search,
  Server,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wifi,
  Zap,
} from 'lucide-react'
import itHeroBg from '../assets/it-hero-bg.jpg'

export default function ITServices({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 8 Core Capabilities (4x2 Grid)
  const coreCapabilities = isAr
    ? [
        {
          title: 'حلول البنية التحتية للشبكات',
          desc: 'تصميم وتنفيذ ودعم بيئات شبكات المؤسسات.',
          icon: Network,
        },
        {
          title: 'حلول البنية التحتية اللاسلكية',
          desc: 'نشر وإدارة شبكات لاسلكية قابلة للتوسع للبيئات الصناعية والمؤسسية.',
          icon: Wifi,
        },
        {
          title: 'حلول الخوادم والتخزين',
          desc: 'تنفيذ الخوادم ومنصات التخزين وحلول النسخ الاحتياطي.',
          icon: Server,
        },
        {
          title: 'خدمات دعم مراكز البيانات',
          desc: 'نشر البنية التحتية وتركيب المعدات والدعم التشغيلي.',
          icon: Building2,
        },
        {
          title: 'حلول الاتصالات الموحدة',
          desc: 'حلول الصوت والتعاون والاتصال لأماكن العمل الحديثة.',
          icon: MessageSquare,
        },
        {
          title: 'حلول التمديدات السلكية المهيكلة',
          desc: 'تصميم وتركيب وصيانة أنظمة التمديدات السلكية المهيكلة.',
          icon: Plug,
        },
        {
          title: 'خدمات تكامل الأنظمة',
          desc: 'تكامل مكونات البنية التحتية والأنظمة التشغيلية.',
          icon: Puzzle,
        },
        {
          title: 'خدمات تكنولوجيا المعلومات المدارة',
          desc: 'مراقبة مستمرة، دعم، تقارير، وإدارة دورة الحياة.',
          icon: Headphones,
        },
      ]
    : [
        {
          title: 'Network Infrastructure Solutions',
          desc: 'Design, implementation and support of enterprise network environments.',
          icon: Network,
        },
        {
          title: 'Wireless Infrastructure Solutions',
          desc: 'Deployment and management of scalable wireless networks for industrial and enterprise environments.',
          icon: Wifi,
        },
        {
          title: 'Server & Storage Solutions',
          desc: 'Implementation of servers, storage platforms and backup solutions.',
          icon: Server,
        },
        {
          title: 'Data Centre Support Services',
          desc: 'Infrastructure deployment, equipment installation and operational support.',
          icon: Building2,
        },
        {
          title: 'Unified Communication Solutions',
          desc: 'Voice, collaboration and connectivity solutions for modern workplaces.',
          icon: MessageSquare,
        },
        {
          title: 'Structured Cabling Solutions',
          desc: 'Design, installation and maintenance of structured cabling systems.',
          icon: Plug,
        },
        {
          title: 'System Integration Services',
          desc: 'Integration of infrastructure components and operational systems.',
          icon: Puzzle,
        },
        {
          title: 'Managed IT Services',
          desc: 'Continuous monitoring, support, reporting and lifecycle management.',
          icon: Headphones,
        },
      ]

  // 6 Approach Process Steps
  const processSteps = isAr
    ? [
        {
          step: '01',
          title: 'التقييم',
          desc: 'تقييم متطلبات البنية التحتية والاحتياجات التشغيلية.',
          icon: Search,
        },
        {
          step: '02',
          title: 'التصميم',
          desc: 'تطوير البنية الهندسية واستراتيجية التنفيذ المناسبة.',
          icon: FileText,
        },
        {
          step: '03',
          title: 'النشر',
          desc: 'تركيب وتهيئة مكونات البنية التحتية.',
          icon: Settings,
        },
        {
          step: '04',
          title: 'التكامل',
          desc: 'ربط الأنظمة والتطبيقات والمنصات.',
          icon: Puzzle,
        },
        {
          step: '05',
          title: 'المراقبة',
          desc: 'مراقبة الأداء والتوافر والصحة التشغيلية.',
          icon: BarChart3,
        },
        {
          step: '06',
          title: 'الدعم',
          desc: 'تقديم إدارة وتحسين مستمر.',
          icon: Headphones,
        },
      ]
    : [
        {
          step: '01',
          title: 'Assess',
          desc: 'Evaluate infrastructure requirements and operational needs.',
          icon: Search,
        },
        {
          step: '02',
          title: 'Design',
          desc: 'Develop the appropriate architecture and implementation strategy.',
          icon: FileText,
        },
        {
          step: '03',
          title: 'Deploy',
          desc: 'Install and configure infrastructure components.',
          icon: Settings,
        },
        {
          step: '04',
          title: 'Integrate',
          desc: 'Connect systems, applications and platforms.',
          icon: Puzzle,
        },
        {
          step: '05',
          title: 'Monitor',
          desc: 'Monitor performance, availability and operational health.',
          icon: BarChart3,
        },
        {
          step: '06',
          title: 'Support',
          desc: 'Provide continuous management and optimization.',
          icon: Headphones,
        },
      ]

  // 6 Key Benefits Items
  const keyBenefitsItems = isAr
    ? [
        { title: 'تحسين الكفاءة التشغيلية', icon: TrendingUp },
        { title: 'تقليل وقت التوقف', icon: Clock },
        { title: 'قابليّة توسّع أكبر', icon: Maximize2 },
        { title: 'زيادة الموثوقية', icon: ShieldCheck },
        { title: 'إدارة مركزية', icon: Network },
        { title: 'دعم طويل الأمد', icon: Headphones },
      ]
    : [
        { title: 'Improved Operational Efficiency', icon: TrendingUp },
        { title: 'Reduced Downtime', icon: Clock },
        { title: 'Greater Scalability', icon: Maximize2 },
        { title: 'Increased Reliability', icon: ShieldCheck },
        { title: 'Centralized Management', icon: Network },
        { title: 'Long-term Support', icon: Headphones },
      ]

  return (
    <main className="it-services-page">
      {/* HERO SECTION WITH IT BACKGROUND IMAGE */}
      <section className="it-hero-section">
        <div className="hero-bg-container">
          <img src={itHeroBg} alt="IT Infrastructure Server Room Engineer" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'خدمات تكنولوجيا المعلومات' : 'IT Services'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'تكنولوجيا المعلومات عبر IBF' : 'NEXUS IT THROUGH IBF'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'البنية التحتية والخدمات المدارة لتقنية المعلومات' : 'IT Infrastructure & Managed Services'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'بنية تحتية موثوقة، اتصال سلس، وخدمات تقنية مدارة مصممة لدعم البيئات الصناعية والمؤسسية الحديثة.'
                : 'Reliable infrastructure, seamless connectivity, and managed technology services designed to support modern industrial and enterprise environments.'}
            </p>
            <div className="hero-actions-row">
              <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                <span>{isAr ? 'طلب استشارة' : 'Request a Consultation'}</span> <ChevronRight size={16} />
              </Link>
              <a href="#core-capabilities-section" className="btn-secondary-white">
                <span>{isAr ? 'استكشف خدماتنا' : 'Explore Our Services'}</span> <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR CORE CAPABILITIES (4x2 GRID) */}
      <section id="core-capabilities-section" className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'قدراتنا الرئيسية' : 'OUR CORE CAPABILITIES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'خدمات تقنية معلومات شاملة للحفاظ على استمرارية أعمالك' : 'Comprehensive IT services to keep your business running'}
          </h2>
        </div>

        <div className="it-capabilities-grid">
          {coreCapabilities.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className={`capability-card reveal-up reveal-delay-${index % 4}`}>
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

      {/* SECTION 2: OUR APPROACH */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'منهجيتنا' : 'OUR APPROACH'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'عملية مهيكلة لتقديم خدمات IT سلسة' : 'A structured process for seamless IT delivery'}
          </h2>
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
                <p>{stepItem.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: KEY BENEFITS (6 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'المزايا الرئيسية' : 'KEY BENEFITS'}</p>
        </div>

        <div className="key-benefits-grid">
          {keyBenefitsItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className={`benefit-card reveal-up reveal-delay-${index}`}>
                <div className="benefit-icon-box">
                  <IconComponent size={28} />
                </div>
                <h3>{item.title}</h3>
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
              <MessageSquare size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? 'ابنِ أساساً تكنولوجياً أقوى.'
                  : 'Build a stronger technology foundation.'}
              </h3>
              <p>
                {isAr
                  ? 'تقدم IBF حلول بنية تحتية متكاملة وخدمات مدارة تساعد المنشآت على تبسيط العمليات وتحسين الأداء ودعم النمو على المدى الطويل.'
                  : 'IBF delivers integrated infrastructure solutions and managed services that help organizations simplify operations, improve performance, and support long-term growth.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="btn-gold-accent">
              <span>{isAr ? 'طلب استشارة' : 'Request a Consultation'}</span> <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
