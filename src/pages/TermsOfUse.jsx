import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  FileCheck2,
  ChevronRight,
  Printer,
  Mail,
  Building2,
  Info,
  Send,
  Boxes,
  Award,
  AlertTriangle,
  ExternalLink,
  Scale,
  RefreshCw,
  HelpCircle,
} from 'lucide-react'

export default function TermsOfUse({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const lastUpdated = isAr ? '1 سبتمبر 2026' : 'September 1, 2026'

  const sections = isAr
    ? [
        { id: 'section-1', num: '1', title: 'عن IBF' },
        { id: 'section-2', num: '2', title: 'معلومات الموقع الإلكتروني' },
        { id: 'section-3', num: '3', title: 'طلبات عروض الأسعار والاستفسارات' },
        { id: 'section-4', num: '4', title: 'المنتجات ومعلومات الجهات الخارجية' },
        { id: 'section-5', num: '5', title: 'الملكية الفكرية' },
        { id: 'section-6', num: '6', title: 'الاستخدام المصرح به والمحظورات' },
        { id: 'section-7', num: '7', title: 'الروابط الخارجية' },
        { id: 'section-8', num: '8', title: 'حدود المسؤولية' },
        { id: 'section-9', num: '9', title: 'التغييرات في شروط الاستخدام' },
        { id: 'section-10', num: '10', title: 'اتصل بنا' },
      ]
    : [
        { id: 'section-1', num: '1', title: 'About IBF' },
        { id: 'section-2', num: '2', title: 'Website Information' },
        { id: 'section-3', num: '3', title: 'RFQs and Enquiries' },
        { id: 'section-4', num: '4', title: 'Products & Third-Party Info' },
        { id: 'section-5', num: '5', title: 'Intellectual Property' },
        { id: 'section-6', num: '6', title: 'Permitted Use' },
        { id: 'section-7', num: '7', title: 'Third-Party Links' },
        { id: 'section-8', num: '8', title: 'Limitation of Liability' },
        { id: 'section-9', num: '9', title: 'Changes to These Terms' },
        { id: 'section-10', num: '10', title: 'Contact Us' },
      ]

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const topOffset = 90
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="legal-template-page">
      <SEO lang={lang} pageKey="termsOfUse" />

      {/* HERO SECTION */}
      <section className="legal-hero-section">
        <div className="shell">
          {/* Breadcrumb Nav */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'شروط الاستخدام' : 'Terms of Use'}</span>
          </div>

          <div className="legal-hero-content reveal-up">
            <div className="legal-hero-badge">
              <FileCheck2 size={16} />
              <span>{isAr ? 'الإطار القانوني والتجاري' : 'COMMERCIAL & LEGAL FRAMEWORK'}</span>
            </div>
            <h1 className="legal-hero-title">
              {isAr ? 'شروط وأحكام الاستخدام' : 'Terms of Use'}
            </h1>
            <p className="legal-hero-meta">
              <span>{isAr ? 'آخر تحديث:' : 'Last Updated:'} <strong>{lastUpdated}</strong></span>
              <span className="meta-bullet">•</span>
              <span>International Business Front (IBF)</span>
            </p>

            {/* Top Action Quick Buttons */}
            <div className="legal-action-buttons">
              <button onClick={handlePrint} className="btn-legal-action" title="Print or Save PDF">
                <Printer size={15} />
                <span>{isAr ? 'طباعة / حفظ كملف PDF' : 'Print / Save PDF'}</span>
              </button>
              <a href="mailto:info@ibf.com.sa" className="btn-legal-action" title="Contact Legal Team">
                <Mail size={15} />
                <span>{isAr ? 'مراسلة الشؤون القانونية' : 'Contact Legal Team'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE UNIFIED DOCUMENT CONTAINER */}
      <section className="shell legal-body-section">
        <div className="legal-single-layout">

          <article className="legal-single-document-container reveal-up">
            
            {/* Document Preamble */}
            <div className="legal-doc-intro-box">
              <p className="legal-lead-paragraph">
                {isAr
                  ? 'مرحباً بكم في الموقع الإلكتروني لشركة واجهة الأعمال الدولية ("IBF"). من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك توافق على الالتزام بشروط الاستخدام هذه.'
                  : 'Welcome to the International Business Front (“IBF”) website. By accessing or using this website, you agree to these Terms of Use.'}
              </p>
              <p className="legal-lead-paragraph">
                {isAr
                  ? 'إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام هذا الموقع.'
                  : 'If you do not agree with these terms, please do not use this website.'}
              </p>
            </div>

            {/* QUICK JUMP NAVIGATION CHIPS - INTEGRATED DIRECTLY INSIDE THE CONTAINER */}
            <div className="legal-doc-toc-box">
              <div className="legal-toc-title-row">
                <span className="legal-toc-label">
                  {isAr ? 'فهرس البنود السريع:' : 'Jump to Section:'}
                </span>
              </div>
              <div className="legal-toc-chips-grid">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="legal-toc-chip"
                  >
                    <span className="toc-chip-num">{sec.num}</span>
                    <span className="toc-chip-text">{sec.title}</span>
                  </a>
                ))}
              </div>
            </div>

            <hr className="legal-doc-divider" />

            {/* Section 1 */}
            <section id="section-1" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">1</span>
                <h3>{isAr ? 'عن IBF' : 'About IBF'}</h3>
              </div>
              <p>
                {isAr
                  ? 'تقدم IBF خدمات التجارة والتوريد للمعدات الصناعية، وحلول التكنولوجيا وتقنية المعلومات، وحلول الذكاء الاصطناعي وإنترنت الأشياء، ودعم دخول السوق السعودي والامتثال.'
                  : 'IBF provides industrial equipment trading and procurement, technology and IT solutions, AI and IoT solutions, and Saudi market-entry and compliance support.'}
              </p>
              <p>
                {isAr
                  ? 'تهدف المعلومات الواردة على هذا الموقع إلى تقديم نظرة عامة عن IBF وقدراتها.'
                  : 'The information provided on this website is intended to provide a general overview of IBF and its capabilities.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 2 */}
            <section id="section-2" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">2</span>
                <h3>{isAr ? 'معلومات الموقع الإلكتروني' : 'Website Information'}</h3>
              </div>
              <p>
                {isAr
                  ? 'نبذل جهوداً معقولة للحفاظ على دقة وتحديث معلومات الموقع. ومع ذلك، قد تتغير المعلومات دون إشعار.'
                  : 'We make reasonable efforts to keep website information accurate and up to date. However, information may change without notice.'}
              </p>
              <p>
                {isAr
                  ? 'تخضع معلومات المنتجات والمواصفات والتوافر وتقديرات التسليم وعروض الأسعار والأسعار والشروط التجارية للتأكيد.'
                  : 'Product information, specifications, availability, delivery estimates, quotations, pricing and commercial terms may be subject to confirmation.'}
              </p>
              <p>
                {isAr
                  ? 'المعلومات المعروضة على هذا الموقع لا تشكل عرضاً ملزماً ما لم يُنص على خلاف ذلك صراحة في عرض سعر أو مقترح أو اتفاقية مكتوبة ورسمية صادرة من IBF.'
                  : 'Information displayed on this website does not constitute a binding offer unless expressly stated otherwise in a formal written quotation, proposal or agreement issued by IBF.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 3 */}
            <section id="section-3" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">3</span>
                <h3>{isAr ? 'طلبات عروض الأسعار (RFQs) والاستفسارات' : 'RFQs and Enquiries'}</h3>
              </div>
              <p>
                {isAr
                  ? 'تعتبر طلبات عروض الأسعار والاستفسارات الأخرى المقدمة عبر الموقع الإلكتروني طلبات للحصول على معلومات أو اعتبارات تجارية فقط.'
                  : 'Requests for quotation and other enquiries submitted through the website are requests for information or commercial consideration only.'}
              </p>
              <p>
                {isAr ? 'تقديم طلب عرض سعر أو استفسار لا:' : 'Submission of an RFQ or enquiry does not:'}
              </p>
              <ul className="legal-items-grid">
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'يضمن تقديم عرض سعر' : 'Guarantee a quotation'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'يضمن توافر المنتج أو الخدمة' : 'Guarantee product or service availability'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'ينشئ عقداً ملزماً' : 'Create a binding contract'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'يضمن تاريخ تسليم محدد أو سعراً أو نتيجة معينة' : 'Guarantee a particular delivery date, price or outcome'}</span>
                </li>
              </ul>
              <p className="legal-note-text">
                {isAr
                  ? 'أي تعامل تجاري مع IBF يخضع لعرض السعر ذي الصلة أو أمر الشراء أو الاتفاقية أو الشروط التجارية الأخرى المعمول بها.'
                  : 'Any commercial engagement with IBF will be subject to the relevant quotation, purchase order, agreement or other applicable commercial terms.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 4 */}
            <section id="section-4" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">4</span>
                <h3>{isAr ? 'المنتجات ومعلومات الجهات الخارجية' : 'Products and Third-Party Information'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد تتعلق بعض المنتجات والمواصفات والوثائق والمعلومات الواردة على هذا الموقع بمصنعين أو موردين أو شركاء أصليين (OEMs) خارجيين.'
                  : 'Certain products, specifications, documents and information on this website may relate to third-party manufacturers, OEMs or suppliers.'}
              </p>
              <p>
                {isAr
                  ? 'تبذل IBF جهوداً معقولة لعرض المعلومات ذات الصلة بدقة، لكنها لا تضمن أن معلومات الجهات الخارجية كاملة أو حديثة أو خالية من الأخطاء.'
                  : 'IBF makes reasonable efforts to present relevant information accurately but does not guarantee that third-party information is complete, current or error-free.'}
              </p>
              <p className="legal-highlight-callout">
                {isAr
                  ? 'يتحمل العملاء مسؤولية التحقق من أن المنتج أو الحل يلبي متطلباتهم الفنية والتشغيلية والمشروعية قبل تقديم الطلب.'
                  : 'Customers are responsible for confirming that a product or solution meets their technical, operational and project requirements before placing an order.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 5 */}
            <section id="section-5" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">5</span>
                <h3>{isAr ? 'الملكية الفكرية' : 'Intellectual Property'}</h3>
              </div>
              <p>
                {isAr
                  ? 'ما لم يُنص على خلاف ذلك، فإن محتوى هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور وعناصر التصميم والمواد الأخرى، مملوك لشركة IBF أو مرخص لها ومحمي بموجب قوانين الملكية الفكرية المعمول بها.'
                  : 'Unless otherwise stated, the content of this website, including text, graphics, logos, images, design elements and other materials, is owned by or licensed to IBF and is protected by applicable intellectual property laws.'}
              </p>
              <p>
                {isAr
                  ? 'لا يجوز لك إعادة إنتاج أو توزيع أو تعديل أو استخدام محتوى الموقع لأغراض تجارية دون الحصول على إذن خطي مسبق من IBF.'
                  : 'You may not reproduce, distribute, modify or commercially use website content without prior written permission from IBF.'}
              </p>
              <p>
                {isAr
                  ? 'تظل العلامات التجارية والشعارات وأسماء المنتجات الخاصة بأطراف ثالثة ملكاً لأصحابها المعنيين.'
                  : 'Third-party trademarks, logos and product names remain the property of their respective owners.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 6 */}
            <section id="section-6" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">6</span>
                <h3>{isAr ? 'الاستخدام المصرح به' : 'Permitted Use'}</h3>
              </div>
              <p>
                {isAr
                  ? 'يجوز لك استخدام هذا الموقع لأغراض تجارية مشروعة ونظامية.'
                  : 'You may use this website for lawful and legitimate business purposes.'}
              </p>
              <p>
                {isAr ? 'يجب عليك عدم:' : 'You must not:'}
              </p>
              <ul className="legal-items-grid">
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'استخدام الموقع لأغراض غير قانونية' : 'Use the website for unlawful purposes'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'محاولة الوصول غير المصرح به إلى الأنظمة أو البيانات' : 'Attempt unauthorised access to systems or data'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'إدخال برمجيات خبيثة أو تكنولوجيا ضارة' : 'Introduce malicious code or harmful technology'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'التدخل في أمن الموقع أو تشغيله' : 'Interfere with website security or operation'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'نسخ أو استخراج (scraping) محتوى الموقع دون تصريح' : 'Copy or scrape website content without authorisation'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'تقديم معلومات كاذبة أو مضللة أو احتيالية' : 'Submit false, misleading or fraudulent information'}</span>
                </li>
              </ul>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 7 */}
            <section id="section-7" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">7</span>
                <h3>{isAr ? 'الروابط الخارجية' : 'Third-Party Links'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد يحتوي هذا الموقع على روابط لمواقع أو مصادر خارجية. IBF لا تملك السيطرة على تلك المواقع وليست مسؤولة عن محتواها أو توفرها أو سياساتها.'
                  : 'This website may contain links to external websites or resources. IBF does not control and is not responsible for the content, availability or policies of third-party websites.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 8 */}
            <section id="section-8" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">8</span>
                <h3>{isAr ? 'حدود المسؤولية' : 'Limitation of Liability'}</h3>
              </div>
              <p>
                {isAr
                  ? 'إلى الحد الذي يسمح به القانون المعمول به، لا تتحمل IBF المسؤولية عن الخسائر الناشئة عن استخدام هذا الموقع أو عدم القدرة على استخدامه أو الاعتماد على المعلومات العامة المنشورة فيه.'
                  : 'To the extent permitted by applicable law, IBF shall not be liable for losses arising from the use of, or inability to use, this website or reliance on general information published on it.'}
              </p>
              <p>
                {isAr
                  ? 'لا يوجد في هذه الشروط ما يستبعد أو يحد من المسؤولية حيثما كان هذا الاستبعاد أو التقييد محظوراً بموجب القانون المعمول به.'
                  : 'Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 9 */}
            <section id="section-9" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">9</span>
                <h3>{isAr ? 'التغييرات في هذه الشروط' : 'Changes to These Terms'}</h3>
              </div>
              <p>
                {isAr
                  ? 'يجوز لشركة IBF تعديل شروط الاستخدام هذه من وقت لآخر. استمرارك في استخدام الموقع بعد نشر الشروط المحدثة يشكل قبولاً منك بالشروط المعدلة.'
                  : 'IBF may modify these Terms of Use from time to time. Continued use of the website following publication of updated terms constitutes acceptance of the revised terms.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 10 */}
            <section id="section-10" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">10</span>
                <h3>{isAr ? 'اتصل بنا' : 'Contact Us'}</h3>
              </div>
              <p>
                {isAr
                  ? 'للأسئلة المتعلقة بشروط الاستخدام هذه، يرجى التواصل مع:'
                  : 'For questions regarding these Terms of Use, please contact:'}
              </p>
              
              <div className="legal-contact-card">
                <div className="legal-contact-info">
                  <h4 className="legal-contact-title">International Business Front (IBF)</h4>
                  <p className="legal-contact-sub">{isAr ? 'المملكة العربية السعودية • الشؤون القانونية والامتثال' : 'Kingdom of Saudi Arabia • Legal & Compliance Affairs'}</p>
                  <a href="mailto:info@ibf.com.sa" className="legal-contact-email-link">
                    <Mail size={16} />
                    <span>info@ibf.com.sa</span>
                  </a>
                </div>
                <a href="mailto:info@ibf.com.sa" className="legal-contact-cta">
                  <Send size={15} />
                  <span>{isAr ? 'إرسال استفسار' : 'Send Enquiry'}</span>
                </a>
              </div>
            </section>

          </article>
        </div>
      </section>
    </main>
  )
}
