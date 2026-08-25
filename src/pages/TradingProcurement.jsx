import { Link } from 'react-router-dom'
import {
  Award,
  Battery,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileCheck,
  FileText,
  Globe,
  Headphones,
  Layers,
  Scale,
  Search,
  ShieldCheck,
  Truck,
  Users,
  Zap,
} from 'lucide-react'
import tradingHeroBg from '../assets/trading-hero-bg.jpg'

export default function TradingProcurement({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // Core Capabilities Cards (6 items)
  const coreCapabilities = isAr
    ? [
        {
          title: 'التوريد العالمي',
          desc: 'الوصول إلى شبكة واسعة من المصنعين والموردين الموثوقين حول العالم.',
          icon: Globe,
        },
        {
          title: 'المعدات الكهربائية والصناعية',
          desc: 'توريد مجموعة شاملة من المعدات الكهربائية والتحكم الآلي والصناعي.',
          icon: Zap,
        },
        {
          title: 'أنظمة UPS وطاقة التيار المستمر',
          desc: 'أنظمة UPS وتيار مستمر موثوقة للطاقة الحرجة واستمرارية الأعمال.',
          icon: Layers,
        },
        {
          title: 'البطاريات الصناعية',
          desc: 'بطاريات صناعية عالية الأداء لمختلف التطبيقات والمجالات.',
          icon: Battery,
        },
        {
          title: 'معدات التحكم والحماية',
          desc: 'حلول تحكم وحماية متقدمة لعمليات آمنة وفعالة.',
          icon: ShieldCheck,
        },
        {
          title: 'تنسيق OEM والموردين',
          desc: 'التنسيق مع المصنعين الأصليين والموردين المعتمدين لضمان الجودة والأصالة.',
          icon: Users,
        },
      ]
    : [
        {
          title: 'Global Sourcing',
          desc: 'Access to a wide network of trusted manufacturers and suppliers worldwide.',
          icon: Globe,
        },
        {
          title: 'Electrical & Industrial Equipment',
          desc: 'Sourcing a comprehensive range of electrical, automation and industrial equipment.',
          icon: Zap,
        },
        {
          title: 'UPS & DC Power Systems',
          desc: 'Reliable UPS and DC systems for critical power and business continuity.',
          icon: Layers,
        },
        {
          title: 'Industrial Batteries',
          desc: 'High-performance industrial batteries for various applications.',
          icon: Battery,
        },
        {
          title: 'Control & Protection Equipment',
          desc: 'Advanced control and protection solutions for safe and efficient operations.',
          icon: ShieldCheck,
        },
        {
          title: 'OEM & Supplier Coordination',
          desc: 'Coordination with OEMs and authorized suppliers to ensure quality and product authenticity.',
          icon: Users,
        },
      ]

  // Additional Services (8 items in 2 columns)
  const additionalServicesCol1 = isAr
    ? [
        'المحولات ومحولات التيار',
        'معدات البحث والمختبرات',
        'إعداد العروض الفنية والتجارية',
        'دعم التوثيق والامتثال',
      ]
    : [
        'Transformers and current transformers',
        'Research and laboratory equipment',
        'Technical and commercial quotation preparation',
        'Documentation and compliance support',
      ]

  const additionalServicesCol2 = isAr
    ? [
        'معدات تكنولوجيا المعلومات والشبكات',
        'دعم العروض والمناقصات',
        'تنسيق الاستيراد واللوجستيات والتسليم',
        'تنسيق ما بعد البيع',
      ]
    : [
        'IT and networking equipment',
        'Quotation and tender support',
        'Import, logistics and delivery coordination',
        'After-sales coordination',
      ]

  // Procurement Process Steps (6 steps)
  const processSteps = isAr
    ? [
        {
          step: '01',
          title: 'الاستكشاف والتقييم',
          desc: 'نفهم متطلباتك بالتفصيل.',
          icon: Search,
        },
        {
          step: '02',
          title: 'تحديد الموردين',
          desc: 'نحدد ونقيم المصنعين والموردين المناسبين.',
          icon: FileCheck,
        },
        {
          step: '03',
          title: 'العروض والتقييم',
          desc: 'نعد ونقيم عروض أسعار تنافسية للحصول على أفضل قيمة.',
          icon: Scale,
        },
        {
          step: '04',
          title: 'الطلب والتنسيق',
          desc: 'ندير الطلبات وتنسيق الإنتاج والجودة.',
          icon: ClipboardList,
        },
        {
          step: '05',
          title: 'اللوجستيات والتسليم',
          desc: 'نتعامل مع اللوجستيات ونضمن التسليم الآمن وفي الوقت المحدد.',
          icon: Truck,
        },
        {
          step: '06',
          title: 'دعم ما بعد البيع',
          desc: 'نقدم دعم ما بعد البيع وشراكة طويلة الأمد.',
          icon: Headphones,
        },
      ]
    : [
        {
          step: '01',
          title: 'Discover & Assess',
          desc: 'We understand your requirements in detail.',
          icon: Search,
        },
        {
          step: '02',
          title: 'Supplier Identification',
          desc: 'We identify and evaluate the right manufacturers and suppliers.',
          icon: FileCheck,
        },
        {
          step: '03',
          title: 'Quotation & Evaluation',
          desc: 'We prepare and evaluate competitive quotations for the best value.',
          icon: Scale,
        },
        {
          step: '04',
          title: 'Order & Coordination',
          desc: 'We manage orders, production and quality coordination.',
          icon: ClipboardList,
        },
        {
          step: '05',
          title: 'Logistics & Delivery',
          desc: 'We handle logistics and ensure timely and safe delivery.',
          icon: Truck,
        },
        {
          step: '06',
          title: 'After-sales Support',
          desc: 'We provide after-sales support and long-term partnership.',
          icon: Headphones,
        },
      ]

  // Why Partner With IBF (4 items)
  const whyPartnerItems = isAr
    ? [
        {
          title: 'شبكة موثوقة',
          desc: 'علاقات قوية مع كبار المصنعين العالميين.',
          icon: Award,
        },
        {
          title: 'ضمان الجودة',
          desc: 'نضمن منتجات أصلية تلبي المعايير الدولية.',
          icon: ShieldCheck,
        },
        {
          title: 'تسليم موثوق',
          desc: 'تنسيق لوجستي شامل للتسليم الآمن وفي الوقت المحدد.',
          icon: Truck,
        },
        {
          title: 'دعم شامل',
          desc: 'من التوريد إلى تنسيق ما بعد البيع، نحن معك في كل خطوة.',
          icon: Headphones,
        },
      ]
    : [
        {
          title: 'Trusted Network',
          desc: 'Strong relationships with leading global manufacturers.',
          icon: Award,
        },
        {
          title: 'Quality Assurance',
          desc: 'We ensure genuine products that meet international standards.',
          icon: ShieldCheck,
        },
        {
          title: 'Reliable Delivery',
          desc: 'End-to-end logistics coordination for timely and safe delivery.',
          icon: Truck,
        },
        {
          title: 'End-to-End Support',
          desc: "From sourcing to after-sales coordination, we're with you all the way.",
          icon: Headphones,
        },
      ]

  return (
    <main className="trading-procurement-page">
      {/* HERO SECTION WITH TRADING BACKGROUND IMAGE */}
      <section className="trading-hero-section">
        <div className="hero-bg-container">
          <img src={tradingHeroBg} alt="Trading and Procurement" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'التجارة والمشتريات' : 'Trading & Procurement'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'التوريد العالمي. تسليم موثوق.' : 'GLOBAL SOURCING. RELIABLE DELIVERY.'}
            </p>
            <h1 className="hero-headline">{isAr ? 'التجارة والمشتريات' : 'Trading & Procurement'}</h1>
            <p className="hero-lead-text">
              {isAr
                ? 'التوريد العالمي. منتجات عالية الجودة. تسليم موثوق. نربط أعمالك بالمنتجات والمصنعين والحلول المناسبة بكل كفاءة ومسؤولية.'
                : 'Global sourcing. Quality products. Reliable delivery. We connect your business with the right products, manufacturers, and solutions, efficiently and responsibly.'}
            </p>
            <div className="hero-actions-row">
              <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={16} />
              </Link>
              <a href="#process-section" className="btn-secondary-white">
                <span>{isAr ? 'مسار عملنا' : 'Our Process'}</span> <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR CORE CAPABILITIES */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'قدراتنا الرئيسية' : 'OUR CORE CAPABILITIES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'حلول مشتريات متكاملة تدعم نمو أعمالك' : 'End-to-end procurement solutions for your business'}
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

      {/* SECTION 2: ADDITIONAL SERVICES */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'خدمات إضافية' : 'ADDITIONAL SERVICES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'ندعم كل مرحلة من رحلة المشتريات الخاصة بك' : 'Supporting every stage of your procurement journey'}
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

      {/* SECTION 3: OUR PROCUREMENT PROCESS */}
      <section id="process-section" className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'مسار العمليات والمشتريات' : 'OUR PROCUREMENT PROCESS'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'عملية مبسطة للوفاء بمتطلباتك بثقة' : 'A streamlined process to deliver with confidence'}
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

      {/* SECTION 4: WHY PARTNER WITH IBF? */}
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
              <FileText size={26} />
            </div>
            <div>
              <h3>{isAr ? 'هل أنت مستعد للتوريد بذكاء أكبر؟' : 'Ready to source smarter?'}</h3>
              <p>
                {isAr
                  ? 'دع خبراء المشتريات لدينا يجدون المنتجات المناسبة لأعمالك.'
                  : 'Let our procurement experts find the right products for your business.'}
              </p>
            </div>
          </div>

          <div className="cta-right-buttons">
            <Link to={`${basePath}/request-a-quote`} className="btn-gold-accent">
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
