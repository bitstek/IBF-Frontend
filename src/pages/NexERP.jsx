import { ArrowRight, FileText, ShieldCheck } from 'lucide-react'
import CTASection from '../components/CTASection'
import nexerpImage from '../assets/nexerp-dashboard.png'
import { nexerpModules, saipClasses } from '../data/siteData'

export default function NexERP({ lang = 'en' }) {
  const isAr = lang === 'ar'

  const arabicModules = [
    { title: 'المالية والحسابات', text: 'دفتر الأستاذ العام، الذمم المدينة/الدائنة، التسوية البنكية، والامتثال للمرحلة الثانية من الفوترة الإلكترونية (ZATCA).' },
    { title: 'الذكاء الاصطناعي وتحليلات الأعمال', text: 'التنبؤ التنبئي، اكتشاف الشذوذ التلقائي، ولوحات معلومات اتخاذ القرار التنفيذي في الوقت الفعلي.' },
    { title: 'أتمتة سير العمل', text: 'محركات الموافقة المخصصة، توجيه المهام متعدد المراحل، أدلة العمل الرقمية، وقواعد التشغيل التلقائي.' },
    { title: 'المشتريات والمخزون', text: 'موافقات الطلبات، إدارة المخزون، تتبع الدفعات، وأوامر الشراء المؤتمتة.' },
    { title: 'إدارة علاقات العملاء (CRM)', text: 'تخصيص العملاء المحتملين، مولد عروض الأسعار، تتبع مسار الصفقات، ومكتب اتفاقية مستوى الخدمة (SLA).' },
    { title: 'الموارد البشرية والرواتب', text: 'الخدمة الذاتية للموظفين، الحضور والانصراف، مسير الرواتب، ومتطلبات نظام التأمينات (GOSI) وحماية الأجور (WPS).' },
  ]

  const activeModules = isAr
    ? nexerpModules.map((mod, i) => ({ ...mod, title: arabicModules[i].title, text: arabicModules[i].text }))
    : nexerpModules

  const arabicClasses = [
    ['الفئة 9', 'البرمجيات ومحركات الذكاء الاصطناعي', 'برامج الحاسوب المسجلة، محركات ERP، برمجيات تحليلات الذكاء الاصطناعي، تطبيقات الفوترة الإلكترونية، وأدوات المؤسسات السحابية.'],
    ['الفئة 42', 'الخدمات السحابية (SaaS)', 'البرمجيات كخدمة (SaaS)، الاستضافة السحابية، استشارات التحول الرقمي، تكامل المنصات، وخدمات أمن المعلومات.'],
    ['الفئة 35', 'إدارة الأعمال والمشتريات', 'إدارة المنشآت، خدمات إدارة المخزون والمشتريات المؤتمتة، ومعالجة تحليلات الأعمال.'],
  ]

  const activeClasses = isAr ? arabicClasses : saipClasses

  return (
    <main>
      <section className="nexerp-hero motion-lines">
        <div className="shell nexerp-layout">
          <div className="reveal-up">
            <span className="saip-badge">
              <ShieldCheck size={17} />
              {isAr ? 'علامة تجارية مسجلة لدى الهيئة السعودية للملكية الفكرية (SAIP)' : 'Saudi Authority for Intellectual Property (SAIP) Registered Trademark'}
            </span>
            <h1>{isAr ? 'منظومة NexERP الذكية' : 'NexERP Platform'}</h1>
            <p>
              {isAr
                ? 'منصة متكاملة لتخطيط موارد المنشآت (ERP) مدعومة بالذكاء الاصطناعي، تجمع الحسابات والمالية والمشتريات والمخزون وإدارة العملاء والموارد البشرية في بيئة سحابية آمنة.'
                : 'A unified, AI-powered Enterprise Resource Planning ecosystem connecting finance, procurement, inventory, CRM, HR, analytics, and cloud operations across Saudi Arabia.'}
            </p>
            <div className="hero-actions">
              <a href="#modules" className="button primary large">
                {isAr ? 'استكشف وحدات المنظومة' : 'Explore Platform Modules'} <ArrowRight size={17} />
              </a>
              <a href="#trademark" className="button ghost large">
                <FileText size={17} /> {isAr ? 'بيانات الملكية الفكرية' : 'View SAIP Filing Details'}
              </a>
            </div>
          </div>
          <img className="nexerp-dashboard-image reveal-up reveal-delay-2" src={nexerpImage} alt="NexERP enterprise dashboard on laptop" />
        </div>
      </section>

      <section id="trademark" className="shell trademark-grid">
        <article className="panel reveal-up">
          <p className="eyebrow">{isAr ? 'وصف العلامة التجارية (بالإنجليزية)' : 'NexERP Trademark Description (English)'}</p>
          <h2>Trademark: NexERP</h2>
          <p className="saip-purpose"><strong>Applicant Purpose:</strong> Registration before the Saudi Authority for Intellectual Property (SAIP).</p>
          <p>NexERP is a distinctive trademark representing an enterprise software ecosystem providing Enterprise Resource Planning (ERP), Artificial Intelligence, workflow automation, accounting, finance, procurement, inventory, CRM, HR, cloud computing, analytics and digital transformation solutions.</p>
          <p>The mark consists of the coined word "NexERP" together with its distinctive logo. The mark is intended to identify the Applicant's software products and technology services throughout the Kingdom of Saudi Arabia and internationally.</p>
          <p>The logo symbolizes innovation, trust, secure digital transformation, scalability, enterprise integration and intelligent business operations. Primary filing classes recommended: Nice Class 9, Class 42 and, where applicable, Class 35.</p>
        </article>
        <article className="panel ar-panel reveal-up reveal-delay-1" dir="rtl" lang="ar">
          <p className="eyebrow">الوصف العربي للعلامة التجارية (SAIP)</p>
          <h2>اسم العلامة: NexERP</h2>
          <p className="saip-purpose"><strong>الغرض:</strong> التسجيل لدى الهيئة السعودية للملكية الفكرية (SAIP).</p>
          <p>تُعدّ علامة NexERP علامة تجارية مميزة تُستخدم لتمييز منصة متكاملة لتخطيط موارد المنشآت (ERP) تقدم حلولاً تقنية متقدمة تشمل الذكاء الاصطناعي، وأتمتة العمليات، وإدارة الموارد المالية، والمحاسبة، والمشتريات، والمخزون، وإدارة علاقات العملاء، وإدارة الموارد البشرية، والخدمات السحابية، وتحليلات الأعمال، والتحول الرقمي.</p>
          <p>تتكون العلامة من الكلمة المبتكرة "NexERP" بالإضافة إلى شعارها المميز لتمييز منتجات البرمجيات والخدمات التقنية التابعة للمالك في المملكة العربية السعودية ودولياً.</p>
          <p>يرمز الشعار إلى الابتكار، والثقة، والتحول الرقمي الآمن، والقابلية للتوسع، والتكامل المؤسسي، والعمليات الذكية. تصنيفات نيس الموصى بها: الفئة 9، الفئة 42، والفئة 35.</p>
        </article>
      </section>

      <section className="shell classes-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">{isAr ? 'تصنيفات نيس للملكية الفكرية' : 'SAIP Filing Classes'}</p>
            <h2>{isAr ? 'نطاق تصنيف نيس المعتمَد للحماية القانونية' : 'Recommended Nice Classification scope'}</h2>
          </div>
        </div>
        <div className="classes-grid">
          {activeClasses.map(([num, title, text]) => (
            <article className="class-card interactive-card reveal-up" key={num}>
              <strong>{num}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="nexerp-modules grid-texture">
        <div className="shell">
          <div className="section-head center">
            <div>
              <p className="eyebrow">{isAr ? 'منظومة برمجيات NexERP' : 'NexERP Software Ecosystem'}</p>
              <h2>{isAr ? 'وحدات مؤسسية مخصصة للعمليات السعودية' : 'Enterprise modules for Saudi operations'}</h2>
            </div>
          </div>
          <div className="serve-grid">
            {activeModules.map(({ title, icon: Icon, text }) => (
              <article className="border-card dark-card interactive-card reveal-up" key={title}>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="shell"><CTASection lang={lang} /></div>
    </main>
  )
}
