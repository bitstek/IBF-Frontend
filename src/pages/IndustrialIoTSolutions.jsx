import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Activity,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Cpu,
  Database,
  FileText,
  Globe,
  Headphones,
  LineChart,
  Lock,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Thermometer,
  UserCheck,
  Zap,
} from 'lucide-react'
import iotHeroBg from '../assets/iot-hero-bg.jpg'

export default function IndustrialIoTSolutions({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 7 Core Capabilities
  const coreCapabilities = isAr
    ? [
        {
          title: 'مراقبة إنترنت الأشياء الصناعي',
          desc: 'مراقبة أصول في الوقت الفعلي ورؤى أداء متقدمة.',
          icon: Radio,
        },
        {
          title: 'إدارة الأصول عن بُعد',
          desc: 'إدارة والتحكم بالأصول عن بُعد مع تشخيصات ذكية.',
          icon: Cloud,
        },
        {
          title: 'جمع البيانات والقياس عن بُعد',
          desc: 'جمع بيانات عالية الدقة لاتخاذ قرارات أكثر ذكاءً.',
          icon: Database,
        },
        {
          title: 'المراقبة البيئية والظرفية',
          desc: 'مراقبة درجة الحرارة، الرطوبة، الاهتزاز، الضغط وغيرها.',
          icon: Thermometer,
        },
        {
          title: 'تكامل بوابات الحافة (Edge Gateway)',
          desc: 'معالجة آمنة على الحافة وتصفية البيانات للعمليات الحرجة.',
          icon: Cpu,
        },
        {
          title: 'إدارة الطاقة والمرافق',
          desc: 'تحسين استخدام الطاقة وضمان الكفاءة التشغيلية.',
          icon: Zap,
        },
        {
          title: 'منصات ولوحات تحكم IIoT',
          desc: 'لوحات تحكم مخصصة للتصور والتقارير في الوقت الفعلي.',
          icon: BarChart3,
        },
      ]
    : [
        {
          title: 'Industrial IoT Monitoring',
          desc: 'Real-time asset monitoring and performance insights.',
          icon: Radio,
        },
        {
          title: 'Remote Asset Management',
          desc: 'Manage and control assets remotely with smart diagnostics.',
          icon: Cloud,
        },
        {
          title: 'Data Acquisition & Telemetry',
          desc: 'High-accuracy data collection for smarter decisions.',
          icon: Database,
        },
        {
          title: 'Environmental & Condition Monitoring',
          desc: 'Monitor temperature, humidity, vibration, pressure and more.',
          icon: Thermometer,
        },
        {
          title: 'Edge Gateway Integration',
          desc: 'Secure edge processing and data filtering for critical operations.',
          icon: Cpu,
        },
        {
          title: 'Energy & Utility Management',
          desc: 'Optimize energy usage and ensure operational efficiency.',
          icon: Zap,
        },
        {
          title: 'IIoT Platforms & Dashboards',
          desc: 'Custom dashboards for real-time visualization and reporting.',
          icon: BarChart3,
        },
      ]

  // 6 IIoT Process Steps
  const processSteps = isAr
    ? [
        {
          step: '01',
          title: 'التقييم',
          desc: 'نقيم بيئتك الصناعية ونفهم أهدافك.',
          icon: Search,
        },
        {
          step: '02',
          title: 'التصميم',
          desc: 'نصمم بنية حلول IIoT مخصصة لاحتياجاتك.',
          icon: FileText,
        },
        {
          step: '03',
          title: 'الربط',
          desc: 'نربط المستشعرات والأجهزة والأنظمة بأمان.',
          icon: LineChart,
        },
        {
          step: '04',
          title: 'التحليل',
          desc: 'نجمع البيانات ونحللها لتوليد رؤى قابلة للتنفيذ.',
          icon: BarChart3,
        },
        {
          step: '05',
          title: 'التنبيه',
          desc: 'نهيئ التنبيهات والإشعارات للأحداث الحرجة.',
          icon: Bell,
        },
        {
          step: '06',
          title: 'التحسين',
          desc: 'نحسن الأداء باستمرار ونقود التميز التشغيلي.',
          icon: Settings,
        },
      ]
    : [
        {
          step: '01',
          title: 'Assess',
          desc: 'We assess your industrial environment and understand your goals.',
          icon: Search,
        },
        {
          step: '02',
          title: 'Design',
          desc: 'We design a tailored IIoT solution architecture for your needs.',
          icon: FileText,
        },
        {
          step: '03',
          title: 'Connect',
          desc: 'We securely connect sensors, devices and systems.',
          icon: LineChart,
        },
        {
          step: '04',
          title: 'Analyze',
          desc: 'We collect and analyze data to generate actionable insights.',
          icon: BarChart3,
        },
        {
          step: '05',
          title: 'Alert',
          desc: 'We configure alerts and notifications for critical events.',
          icon: Bell,
        },
        {
          step: '06',
          title: 'Optimize',
          desc: 'We continuously optimize performance and drive operational excellence.',
          icon: Settings,
        },
      ]

  // 5 Why Choose Items
  const whyPartnerItems = isAr
    ? [
        {
          title: 'خبرة متكاملة من البداية للنهاية',
          desc: 'من المستشعرات إلى السحابة، نقدم حلول IIoT كاملة.',
          icon: ShieldCheck,
        },
        {
          title: 'آمن وموثوق',
          desc: 'أمان بمستوى المؤسسات واتصال موثوق يمكنك الوثوق به.',
          icon: Lock,
        },
        {
          title: 'حلول قابلة للتوسع',
          desc: 'حلول مصممة للتوسع مع أعمالك وعملياتك.',
          icon: Settings,
        },
        {
          title: 'ذكاء في الوقت الفعلي',
          desc: 'تحويل البيانات إلى رؤى فورية لاتخاذ قرارات أسرع.',
          icon: Clock,
        },
        {
          title: 'دعم محلي',
          desc: 'فرق محلية بمعايير عالمية لدعم نجاحك.',
          icon: UserCheck,
        },
      ]
    : [
        {
          title: 'End-to-End Expertise',
          desc: 'From sensors to cloud, we deliver complete IIoT solutions.',
          icon: ShieldCheck,
        },
        {
          title: 'Secure & Reliable',
          desc: 'Enterprise-grade security and reliable connectivity you can trust.',
          icon: Lock,
        },
        {
          title: 'Scalable Solutions',
          desc: 'Solutions built to scale with your business and operations.',
          icon: Settings,
        },
        {
          title: 'Real-Time Intelligence',
          desc: 'Transform data into real-time insights for faster decisions.',
          icon: Clock,
        },
        {
          title: 'Local Support',
          desc: 'Local teams with global standards to support your success.',
          icon: UserCheck,
        },
      ]

  return (
    <main className="industrial-iot-solutions-page">
      <SEO lang={lang} pageKey="iotSolutions" />
      {/* HERO SECTION WITH IOT BACKGROUND IMAGE */}
      <section className="iot-hero-section">
        <div className="hero-bg-container">
          <img src={iotHeroBg} alt="Industrial IoT Wireless Sensors Plant" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'حلول إنترنت الأشياء الصناعي' : 'Industrial IoT Solutions'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'إنترنت الأشياء عبر IBF' : 'NEXUS IOT THROUGH IBF'}
            </p>
            <h1 className="hero-headline">{isAr ? 'حلول إنترنت الأشياء الصناعي' : 'Industrial IoT Solutions'}</h1>
            <p className="hero-lead-text">
              {isAr
                ? 'المراقبة الصناعية، إدارة الأصول عن بعد، اتصال الحافة، جمع البيانات، والذكاء التشغيلي في الوقت الفعلي للصناعات الحديثة.'
                : 'Industrial monitoring, remote asset management, edge connectivity, data acquisition, and real-time operational intelligence for modern industries.'}
            </p>
            <div className="hero-actions-row">
              <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={16} />
              </Link>
              <Link to={`${basePath}/contact`} className="btn-secondary-white">
                <span>{isAr ? 'التحدث إلى خبير' : 'Talk to an Expert'}</span> <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR CORE CAPABILITIES (7 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'قدراتنا الرئيسية' : 'OUR CORE CAPABILITIES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'قدرات إنترنت أشياء شاملة لعمليات ذكية' : 'Comprehensive IoT capabilities for intelligent operations'}
          </h2>
        </div>

        <div className="core-services-grid">
          {coreCapabilities.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className={`core-service-card reveal-up reveal-delay-${index % 4}`}>
                <div className="service-card-icon">
                  <IconComponent size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 2: OUR IIOT IMPLEMENTATION PROCESS */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'مسار تطبيق إنترنت الأشياء' : 'OUR IIOT IMPLEMENTATION PROCESS'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'عملية تطبيق IIoT متكاملة من البداية للنهاية' : 'End-to-end IIoT implementation process'}
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

      {/* SECTION 3: WHY CHOOSE IBF FOR IIOT? (5 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'لماذا تختار IBF لـ IIoT؟' : 'WHY CHOOSE IBF FOR IIOT?'}</p>
        </div>

        <div className="why-partner-grid-5">
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
              <Radio size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? 'هل أنت مستعد لتحويل عملياتك؟'
                  : 'Ready to transform your operations?'}
              </h3>
              <p>
                {isAr
                  ? 'دعنا نربط عالمك الصناعي ونطلق العنان لقوة إنترنت الأشياء.'
                  : "Let's connect your industrial world and unlock the power of IoT."}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="btn-gold-accent">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={15} />
            </Link>
            <Link to={`${basePath}/contact`} className="cta-btn-outline">
              <span>{isAr ? 'التحدث إلى خبير' : 'Talk to an Expert'}</span> <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
