import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Activity,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Cpu,
  Database,
  Globe,
  Headphones,
  LineChart,
  Link as LinkIcon,
  PieChart,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react'
import aiHeroBg from '../assets/ai-hero-bg.jpg'

export default function AIDigitalSolutions({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // 7 Core Capabilities
  const coreCapabilities = isAr
    ? [
        {
          title: 'لوحات تحكم تشغيلية بالذكاء الاصطناعي',
          desc: 'رؤية في الوقت الفعلي ورؤى قابلة للتنفيذ عبر عملياتك.',
          icon: LineChart,
        },
        {
          title: 'لوحات تحكم مخصصة',
          desc: 'لوحات تحكم مصممة خصيصًا لتتبع المقاييس التي تهم أعمالك.',
          icon: PieChart,
        },
        {
          title: 'تنبيهات وتقارير في الوقت الفعلي',
          desc: 'تنبيهات ذكية وتقارير مؤتمتة لإبقائك على علم ومتقدمًا.',
          icon: Bell,
        },
        {
          title: 'تكامل البيانات',
          desc: 'تكامل سلس للبيانات من مصادر متعددة لرؤية موحدة للعمليات.',
          icon: Database,
        },
        {
          title: 'بوابات ويب ثنائية اللغة',
          desc: 'بوابات ثنائية اللغة مصممة لسهولة الوصول وتجربة مستخدم أفضل.',
          icon: Globe,
        },
        {
          title: 'تطبيقات الجوال والويب',
          desc: 'تطبيقات استجابية للويب والجوال تمكّن الوصول من أي مكان.',
          icon: Smartphone,
        },
        {
          title: 'نشر سحابي ومحلي',
          desc: 'خيارات نشر مرنة لتناسب بنيتك التحتية ومتطلبات الأمان.',
          icon: Cloud,
        },
      ]
    : [
        {
          title: 'AI-powered operational dashboards',
          desc: 'Real-time visibility and actionable insights across your operations.',
          icon: LineChart,
        },
        {
          title: 'Custom dashboards',
          desc: 'Tailored dashboards that track the metrics that matter to your business.',
          icon: PieChart,
        },
        {
          title: 'Real-time alerts and reporting',
          desc: 'Intelligent alerts and automated reporting to keep you informed and ahead.',
          icon: Bell,
        },
        {
          title: 'Data integration',
          desc: 'Seamless integration of data from multiple sources for a unified view of operations.',
          icon: Database,
        },
        {
          title: 'Bilingual web portals',
          desc: 'Bilingual portals designed for ease of access and better user experience.',
          icon: Globe,
        },
        {
          title: 'Mobile and web applications',
          desc: 'Responsive applications for web and mobile enabling anywhere access.',
          icon: Smartphone,
        },
        {
          title: 'Cloud and on-premise deployment',
          desc: 'Flexible deployment options to match your infrastructure and security needs.',
          icon: Cloud,
        },
      ]

  // Additional Services (8 items in 2 columns)
  const additionalServicesCol1 = isAr
    ? [
        'مراقبة إنترنت الأشياء الصناعية (IIoT)',
        'أنظمة مراقبة البطاريات',
        'مراقبة الطاقة والمرافق',
        'تكامل MQTT و Modbus و REST API',
      ]
    : [
        'Industrial IoT monitoring',
        'Battery monitoring systems',
        'Energy and utility monitoring',
        'MQTT, Modbus and REST API integration',
      ]

  const additionalServicesCol2 = isAr
    ? [
        'مراقبة صحة المعدات',
        'تكامل بوابات الحافة (Edge Gateway)',
        'المراقبة البيئية والمائية',
        'مراقبة الأصول عن بعد',
      ]
    : [
        'Equipment health monitoring',
        'Edge gateway integration',
        'Environmental and aquatic monitoring',
        'Remote asset monitoring',
      ]

  // 6 Process Steps
  const processSteps = isAr
    ? [
        {
          step: '01',
          title: 'الاستكشاف والتقييم',
          desc: 'نفهم تحدياتك ونقيم عملياتك الحالية.',
          icon: Activity,
        },
        {
          step: '02',
          title: 'الربط والتكامل',
          desc: 'نربط أنظمتك وندمج البيانات من مصادر متعددة.',
          icon: LinkIcon,
        },
        {
          step: '03',
          title: 'التحليل والتصور',
          desc: 'نحلل البيانات ونعرض الرؤى عبر لوحات تحكم ذكية.',
          icon: TrendingUp,
        },
        {
          step: '04',
          title: 'التنبيه والتقارير',
          desc: 'نهيئ تنبيهات في الوقت الفعلي وتقارير مؤتمتة.',
          icon: Bell,
        },
        {
          step: '05',
          title: 'التحسين والتطوير',
          desc: 'نقدم رؤى قابلة للتنفيذ لتحسين أداء عملياتك.',
          icon: Settings,
        },
        {
          step: '06',
          title: 'التطور المستمر',
          desc: 'نطور الحلول باستمرار مع نمو وتوسع أعمالك.',
          icon: Cpu,
        },
      ]
    : [
        {
          step: '01',
          title: 'Discover & Assess',
          desc: 'We understand your challenges and assess your current operations.',
          icon: Activity,
        },
        {
          step: '02',
          title: 'Connect & Integrate',
          desc: 'We connect your systems and integrate data from multiple sources.',
          icon: LinkIcon,
        },
        {
          step: '03',
          title: 'Analyse & Visualize',
          desc: 'We analyse data and visualize insights through intelligent dashboards.',
          icon: TrendingUp,
        },
        {
          step: '04',
          title: 'Alert & Report',
          desc: 'We configure real-time alerts and automated reporting.',
          icon: Bell,
        },
        {
          step: '05',
          title: 'Optimize',
          desc: 'We provide actionable insights to optimize your performance.',
          icon: Settings,
        },
        {
          step: '06',
          title: 'Evolve',
          desc: 'We continuously improve solutions as your business grows and evolves.',
          icon: Cpu,
        },
      ]

  // 5 Why Partner Items
  const whyPartnerItems = isAr
    ? [
        {
          title: 'خبرة موثوقة',
          desc: 'معرفة صناعية عميقة وخبرة في تقديم حلول الذكاء الاصطناعي والحلول الرقمية.',
          icon: ShieldCheck,
        },
        {
          title: 'آمن وموثوق',
          desc: 'حلول مصممة بالأمان والموثوقية والأداء العالي في جوهرها.',
          icon: Zap,
        },
        {
          title: 'قابل للتوسع والمرونة',
          desc: 'مصممة للتوسع والتكيف مع احتياجات أعمالك المتغيرة.',
          icon: Cloud,
        },
        {
          title: 'قرارات أسرع',
          desc: 'رؤى في الوقت الفعلي تساعدك على اتخاذ قرارات مدروسة وواثقة.',
          icon: Clock,
        },
        {
          title: 'دعم شامل',
          desc: 'من النشر إلى التحسين، نحن معك في كل خطوة.',
          icon: Headphones,
        },
      ]
    : [
        {
          title: 'Trusted Expertise',
          desc: 'Deep industry knowledge and experience in delivering AI and digital solutions.',
          icon: ShieldCheck,
        },
        {
          title: 'Secure & Reliable',
          desc: 'Solutions designed with security, reliability and performance at the core.',
          icon: Zap,
        },
        {
          title: 'Scalable & Flexible',
          desc: 'Built to scale and adapt with your business needs.',
          icon: Cloud,
        },
        {
          title: 'Faster Decisions',
          desc: 'Real-time insights that help you make informed and confident decisions.',
          icon: Clock,
        },
        {
          title: 'End-to-End Support',
          desc: "From deployment to optimization, we're with you at every step.",
          icon: Headphones,
        },
      ]

  return (
    <main className="ai-digital-solutions-page">
      <SEO lang={lang} pageKey="aiDigital" />
      {/* HERO SECTION WITH AI BACKGROUND IMAGE */}
      <section className="ai-hero-section">
        <div className="hero-bg-container">
          <img src={aiHeroBg} alt="AI and Digital Solutions" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'الذكاء الاصطناعي والحلول الرقمية' : 'AI & Digital Solutions'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'الذكاء الاصطناعي عبر IBF' : 'NEXUS AI THROUGH IBF'}
            </p>
            <h1 className="hero-headline">{isAr ? 'الذكاء الاصطناعي والحلول الرقمية' : 'AI & Digital Solutions'}</h1>
            <p className="hero-lead-text">
              {isAr
                ? 'حلول ذكية تحول البيانات الصناعية إلى رؤى في الوقت الفعلي، وتقود القرارات الأكثر ذكاءً، وتسرّع التميز التشغيلي.'
                : 'Intelligent solutions that convert industrial data into real-time insights, drive smarter decisions, and accelerate operational excellence.'}
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
            {isAr ? 'حلول قائمة على الذكاء الاصطناعي لقيادة عمليات أكثر ذكاءً' : 'AI-powered solutions to drive smarter operations'}
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

      {/* SECTION 2: ADDITIONAL SERVICES */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'خدمات إضافية' : 'ADDITIONAL SERVICES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'ندعم كل مرحلة من رحلتك الرقمية' : 'Supporting every stage of your digital journey'}
          </h2>
        </div>

        <div className="additional-services-grid">
          <div className="service-col">
            {additionalServicesCol1.map((serviceText) => (
              <div className="additional-service-pill" key={serviceText}>
                <CheckCircle2 size={18} className="gold-check-icon" />
                <span>{serviceText}</span>
              </div>
            ))}
          </div>
          <div className="service-col">
            {additionalServicesCol2.map((serviceText) => (
              <div className="additional-service-pill" key={serviceText}>
                <CheckCircle2 size={18} className="gold-check-icon" />
                <span>{serviceText}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PROCESS */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'منهجيتنا' : 'OUR PROCESS'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'نهج مثبت لتقديم حلول ذكية' : 'A proven approach to deliver intelligent solutions'}
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

      {/* SECTION 4: WHY PARTNER WITH IBF? (5 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'لماذا تتشارك مع IBF؟' : 'WHY PARTNER WITH IBF?'}</p>
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
                  ? 'حَوّل عملياتك مع الحلول الرقمية القائمة على الذكاء الاصطناعي.'
                  : 'Transform your operations with AI-powered digital solutions.'}
              </h3>
              <p>
                {isAr
                  ? 'احصل على رؤية في الوقت الفعلي. قد الكفاءة. اتخذ قرارات أكثر ذكاءً.'
                  : 'Gain real-time visibility. Drive efficiency. Make smarter decisions.'}
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
