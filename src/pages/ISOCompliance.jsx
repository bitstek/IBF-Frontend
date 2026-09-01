import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  FileSearch,
  FileText,
  GitCompareArrows,
  Handshake,
  HeartPulse,
  Leaf,
  Lock,
  Microscope,
  ScrollText,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Workflow,
} from 'lucide-react'
import isoHeroBg from '../assets/iso-hero-bg.jpg'

export default function ISOCompliance({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  // ISO Certification & Service Cards (combined, no duplicates)
  const isoCertifications = isAr
    ? [
        {
          iso: 'ISO 9001',
          slug: 'iso-9001',
          title: 'نظام إدارة الجودة',
          desc: 'لتمكين المنظمة من تقديم خدمات ومنتجات عالية الجودة للعميل.',
          icon: BadgeCheck,
        },
        {
          iso: 'ISO 27001',
          slug: 'iso-27001',
          title: 'نظام إدارة أمن المعلومات',
          desc: 'لزيادة أمن المعلومات الحساسة في المنظمة.',
          icon: Lock,
        },
        {
          iso: 'ISO 14001',
          slug: 'iso-14001',
          title: 'نظام الإدارة البيئية',
          desc: 'تجنب هدر الموارد المفيدة وزيادة كفاءة المنظمة.',
          icon: Leaf,
        },
        {
          iso: 'ISO 17025',
          slug: 'iso-17025',
          title: 'اختبار ومعايرة المختبرات',
          desc: 'لزيادة دقة الاختبار مع المتطلبات العامة لكفاءة المختبرات وإنتاج نتائج اختبار دقيقة.',
          icon: Microscope,
        },
        {
          iso: 'ISO 45001',
          slug: 'iso-45001',
          title: 'نظام إدارة الصحة والسلامة المهنية',
          desc: 'لتقليل مخاطر مكان العمل للموظفين مع التوجيه الصحيح.',
          icon: HeartPulse,
        },
        {
          iso: 'ISO 22000',
          slug: 'iso-22000',
          title: 'نظام إدارة سلامة الغذاء',
          desc: 'لزيادة سلامة عملية تصنيع الأغذية والخدمات من مخاطر الغذاء.',
          icon: UtensilsCrossed,
        },
        {
          iso: 'ISO 13485',
          slug: 'iso-13485',
          title: 'نظام إدارة جودة الأجهزة الطبية',
          desc: 'لتلبية متطلبات اللوائح في كل خطوة من دورة حياة المنتج.',
          icon: ShieldCheck,
        },
        {
          title: 'السياسات والإجراءات',
          desc: 'تطوير وتوثيق السياسات والإجراءات التشغيلية المتوافقة مع المعايير.',
          icon: ScrollText,
        },
        {
          title: 'تطوير التوثيق',
          desc: 'إعداد وتنظيم الوثائق المطلوبة لتطبيق أنظمة الإدارة.',
          icon: FileText,
        },
        {
          title: 'رسم العمليات',
          desc: 'تحليل ورسم خرائط العمليات التشغيلية لتحسين الكفاءة والامتثال.',
          icon: Workflow,
        },
        {
          title: 'التحضير للمراجعة الداخلية',
          desc: 'تجهيز الفرق والوثائق لعمليات المراجعة والتدقيق الداخلي.',
          icon: ClipboardCheck,
        },
        {
          title: 'تقييم الفجوات',
          desc: 'تحديد وتحليل الفجوات بين الوضع الحالي ومتطلبات المعايير.',
          icon: FileSearch,
        },
        {
          title: 'دعم الإجراءات التصحيحية',
          desc: 'تطوير وتنفيذ الإجراءات التصحيحية لمعالجة عدم المطابقة.',
          icon: GitCompareArrows,
        },
        {
          title: 'تنسيق جهات منح الشهادات',
          desc: 'التنسيق مع جهات منح الشهادات المعتمدة لضمان سلاسة عملية الاعتماد.',
          icon: Handshake,
        },
        {
          title: 'توثيق الامتثال',
          desc: 'إعداد وصيانة وثائق الامتثال التنظيمي والمعايير المعتمدة.',
          icon: FileCheck,
        },
        {
          title: 'تحسين سير العمل التشغيلي',
          desc: 'تحسين العمليات التشغيلية لزيادة الكفاءة وتقليل الهدر.',
          icon: TrendingUp,
        },
      ]
    : [
        {
          iso: 'ISO 9001',
          slug: 'iso-9001',
          title: 'Quality Management System',
          desc: 'To enable the organization to provide quality service and products to the customer.',
          icon: BadgeCheck,
        },
        {
          iso: 'ISO 27001',
          slug: 'iso-27001',
          title: 'Information Security Management System',
          desc: "To increase the security of the organization sensitive information's.",
          icon: Lock,
        },
        {
          iso: 'ISO 14001',
          slug: 'iso-14001',
          title: 'Environmental Management System',
          desc: 'Avoid the waste of useful resources and increase the efficiency of the organization.',
          icon: Leaf,
        },
        {
          iso: 'ISO 17025',
          slug: 'iso-17025',
          title: 'Testing and Calibration of Laboratories',
          desc: 'To increase the test accuracy with general requirements competence of laboratories and produce accurate test results.',
          icon: Microscope,
        },
        {
          iso: 'ISO 45001',
          slug: 'iso-45001',
          title: 'Occupational Health and Safety Management System',
          desc: 'To decrease the workplace hazards for employees with the right instruction.',
          icon: HeartPulse,
        },
        {
          iso: 'ISO 22000',
          slug: 'iso-22000',
          title: 'Food Safety Management System',
          desc: 'To increase the safety of the food manufacturing process and services from food hazards.',
          icon: UtensilsCrossed,
        },
        {
          iso: 'ISO 13485',
          slug: 'iso-13485',
          title: 'Medical Devices Quality Management System',
          desc: 'To meet the requirements of regulations in every step of the product life cycle.',
          icon: ShieldCheck,
        },
        {
          title: 'Policies and procedures',
          desc: 'Development and documentation of operational policies and procedures aligned with standards.',
          icon: ScrollText,
        },
        {
          title: 'Documentation development',
          desc: 'Preparation and organization of documentation required for management system implementation.',
          icon: FileText,
        },
        {
          title: 'Process mapping',
          desc: 'Analysis and mapping of operational processes to improve efficiency and compliance.',
          icon: Workflow,
        },
        {
          title: 'Internal audit preparation',
          desc: 'Preparing teams and documentation for internal audit and review processes.',
          icon: ClipboardCheck,
        },
        {
          title: 'Gap assessment',
          desc: 'Identifying and analyzing gaps between current state and standard requirements.',
          icon: FileSearch,
        },
        {
          title: 'Corrective action support',
          desc: 'Developing and implementing corrective actions to address non-conformities.',
          icon: GitCompareArrows,
        },
        {
          title: 'Certification-body coordination',
          desc: 'Coordinating with accredited certification bodies to ensure smooth certification process.',
          icon: Handshake,
        },
        {
          title: 'Compliance documentation',
          desc: 'Preparation and maintenance of regulatory compliance and standards documentation.',
          icon: FileCheck,
        },
        {
          title: 'Operational workflow improvement',
          desc: 'Optimizing operational processes to increase efficiency and reduce waste.',
          icon: TrendingUp,
        },
      ]

  // 6 Process Steps
  const processSteps = isAr
    ? [
        { step: '01', title: 'تقييم المتطلبات', icon: ClipboardList },
        { step: '02', title: 'تحديد الاستراتيجية', icon: Target },
        { step: '03', title: 'تطوير التوثيق', icon: FileText },
        { step: '04', title: 'تطبيق العمليات', icon: Users },
        { step: '05', title: 'المراجعة والتدقيق', icon: ClipboardCheck },
        { step: '06', title: 'الاعتماد والتحسين', icon: TrendingUp },
      ]
    : [
        { step: '01', title: 'Assess requirements', icon: ClipboardList },
        { step: '02', title: 'Define strategy', icon: Target },
        { step: '03', title: 'Develop documentation', icon: FileText },
        { step: '04', title: 'Implement processes', icon: Users },
        { step: '05', title: 'Audit & review', icon: ClipboardCheck },
        { step: '06', title: 'Certify & improve', icon: TrendingUp },
      ]

  // 4 Why Partner Items
  const whyPartnerItems = isAr
    ? [
        {
          title: 'خبراء متمكنون',
          desc: 'محترفون ماهرون مع خبرة عملية في تطبيق ISO وتطوير التوثيق.',
          icon: Users,
        },
        {
          title: 'حلول مخصصة',
          desc: 'حلول مصممة لتتوافق مع عمليات أعمالك واحتياجاتك التشغيلية.',
          icon: Handshake,
        },
        {
          title: 'التخفيف من المخاطر',
          desc: 'نهج مهيكل لتحديد الفجوات وتقليل مخاطر الامتثال والتشغيل.',
          icon: ShieldCheck,
        },
        {
          title: 'التميز التشغيلي',
          desc: 'أطر عمل تدعم الكفاءة، الاتساق، والتحسين المستمر.',
          icon: TrendingUp,
        },
      ]
    : [
        {
          title: 'Experienced Experts',
          desc: 'Skilled professionals with practical expertise in ISO implementation and documentation.',
          icon: Users,
        },
        {
          title: 'Tailored Solutions',
          desc: 'Solutions designed to align with your business processes and operational needs.',
          icon: Handshake,
        },
        {
          title: 'Risk Mitigation',
          desc: 'Structured approach to identify gaps and reduce compliance and operational risks.',
          icon: ShieldCheck,
        },
        {
          title: 'Operational Excellence',
          desc: 'Frameworks that support efficiency, consistency, and continuous improvement.',
          icon: TrendingUp,
        },
      ]

  return (
    <main className="iso-compliance-page">
      <SEO lang={lang} pageKey="isoCompliance" />
      {/* HERO SECTION WITH ISO BACKGROUND IMAGE */}
      <section className="iso-hero-section">
        <div className="hero-bg-container">
          <img src={isoHeroBg} alt="ISO Compliance Holographic Dashboard" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-muted">{isAr ? 'الخدمات' : 'Services'}</span>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'ISO والامتثال' : 'ISO & Compliance'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'الجاهزية التشغيلية والتوثيق' : 'OPERATIONAL READINESS & DOCUMENTATION'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'ISO والامتثال' : 'ISO & Compliance'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'دعم تطبيق ISO، تطوير التوثيق، جاهزية التدقيق الداخلي، تقييم الفجوات، وتنسيق الإجراءات التصحيحية.'
                : 'ISO implementation support, documentation development, internal audit readiness, gap assessment, and corrective action coordination.'}
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

      {/* SECTION 1: ISO CERTIFICATIONS & SERVICES (COMBINED CARD GRID) */}
      <section className="shell section-spacing reveal-up">
        <div className="section-header-center">
          <p className="gold-subtitle">{isAr ? 'شهادات الأيزو والخدمات' : 'ISO CERTIFICATIONS & SERVICES'}</p>
          <h2 className="section-main-heading">
            {isAr ? 'الخدمات المشمولة في هذه القدرة.' : 'Services included in this capability.'}
          </h2>
        </div>

        <div className="iso-cert-grid">
          {isoCertifications.map((cert, index) => {
            const IconComponent = cert.icon
            const isClickable = Boolean(cert.slug)
            const CardWrapper = isClickable ? Link : 'div'
            const wrapperProps = isClickable
              ? {
                  to: `${basePath}/solutions/${cert.slug}`,
                  className: `iso-cert-card is-clickable reveal-up reveal-delay-${index % 4}`,
                }
              : {
                  className: `iso-cert-card reveal-up reveal-delay-${index % 4}`,
                }

            return (
              <CardWrapper key={cert.iso || cert.title} {...wrapperProps}>
                <div className="iso-cert-icon-box">
                  <IconComponent size={28} />
                </div>
                {cert.iso && (
                  <>
                    <h3 className="iso-cert-number">{cert.iso}</h3>
                    <p className="iso-cert-subtitle">{isAr ? 'شهادة' : 'Certification'}</p>
                  </>
                )}
                <h4 className="iso-cert-title">{cert.title}</h4>
                <p className="iso-cert-desc">{cert.desc}</p>
                {isClickable && (
                  <div className="iso-card-explore-link">
                    <span>{isAr ? 'استكشف المعيار' : 'Explore Standard'}</span>
                    <ChevronRight size={14} className="explore-arrow" />
                  </div>
                )}
              </CardWrapper>
            )
          })}
        </div>
      </section>


      {/* SECTION 3: OUR APPROACH (6 STEPS) */}
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
              <Users size={26} />
            </div>
            <div>
              <h3>
                {isAr
                  ? 'ضمن الامتثال. ابنِ الثقة. قد النمو.'
                  : 'Ensure compliance. Build trust. Drive growth.'}
              </h3>
              <p>
                {isAr
                  ? 'دع IBF تساعدك في تطبيق المعايير المناسبة وتحقيق الاعتماد بثقة.'
                  : 'Let IBF help you implement the right standards and achieve certification with confidence.'}
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
