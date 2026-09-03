import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ShieldCheck,
  ChevronRight,
  Printer,
  Mail,
  Lock,
  FileText,
  Clock,
  Eye,
  Cookie,
  ExternalLink,
  RefreshCw,
  HelpCircle,
  Building2,
  CheckCircle2,
  Send,
  Check,
} from 'lucide-react'

export default function PrivacyPolicy({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const lastUpdated = isAr ? '1 سبتمبر 2026' : 'September 1, 2026'

  const sections = isAr
    ? [
        { id: 'section-1', num: '1', title: 'المعلومات التي نجمعها' },
        { id: 'section-2', num: '2', title: 'كيف نستخدم معلوماتك' },
        { id: 'section-3', num: '3', title: 'مشاركة معلوماتك' },
        { id: 'section-4', num: '4', title: 'أمان البيانات' },
        { id: 'section-5', num: '5', title: 'الاحتفاظ بالبيانات' },
        { id: 'section-6', num: '6', title: 'ملفات تعريف الارتباط (Cookies)' },
        { id: 'section-7', num: '7', title: 'حقوقك' },
        { id: 'section-8', num: '8', title: 'المواقع التابعة لجهات خارجية' },
        { id: 'section-9', num: '9', title: 'التغييرات على سياسة الخصوصية' },
        { id: 'section-10', num: '10', title: 'اتصل بنا' },
      ]
    : [
        { id: 'section-1', num: '1', title: 'Information We Collect' },
        { id: 'section-2', num: '2', title: 'How We Use Your Information' },
        { id: 'section-3', num: '3', title: 'Sharing Your Information' },
        { id: 'section-4', num: '4', title: 'Data Security' },
        { id: 'section-5', num: '5', title: 'Data Retention' },
        { id: 'section-6', num: '6', title: 'Cookies' },
        { id: 'section-7', num: '7', title: 'Your Rights' },
        { id: 'section-8', num: '8', title: 'Third-Party Websites' },
        { id: 'section-9', num: '9', title: 'Changes to This Policy' },
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
      <SEO lang={lang} pageKey="privacyPolicy" />

      {/* HERO SECTION */}
      <section className="legal-hero-section">
        <div className="shell">
          {/* Breadcrumb Nav */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
          </div>

          <div className="legal-hero-content reveal-up">
            <div className="legal-hero-badge">
              <ShieldCheck size={16} />
              <span>{isAr ? 'حماية البيانات والسرية' : 'DATA PROTECTION & CONFIDENTIALITY'}</span>
            </div>
            <h1 className="legal-hero-title">
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
              <a href="mailto:info@ibf.com.sa" className="btn-legal-action" title="Contact Privacy Officer">
                <Mail size={15} />
                <span>{isAr ? 'مراسلة قسم الخصوصية' : 'Contact Privacy Team'}</span>
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
                  ? 'تحترم شركة واجهة الأعمال الدولية ("IBF" أو "نحن" أو "خاصتنا") خصوصيتك وتلتزم بحماية المعلومات الشخصية والتجارية التي تشاركها معنا.'
                  : 'International Business Front (“IBF”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal and business information you share with us.'}
              </p>
              <p className="legal-lead-paragraph">
                {isAr
                  ? 'توضح سياسة الخصوصية هذه كيفية جمع واستخدام وتخزين وحماية المعلومات عند زيارتك لموقعنا الإلكتروني أو تقديم استفسار أو طلب عرض سعر (RFQ) أو أي معلومات تجارية أخرى إلينا.'
                  : 'This Privacy Policy explains how we collect, use, store and protect information when you visit our website or submit an enquiry, Request for Quote (RFQ), or other business information to us.'}
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
                <h3>{isAr ? 'المعلومات التي نجمعها' : 'Information We Collect'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد نجمع المعلومات الشخصية والتجارية التي تقدمها لنا، بما في ذلك:'
                  : 'We may collect personal and business information that you provide to us, including:'}
              </p>
              <ul className="legal-items-grid">
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'الاسم والمسمى الوظيفي' : 'Name and job title'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'اسم الشركة' : 'Company name'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'عنوان البريد الإلكتروني' : 'Email address'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'رقم الهاتف' : 'Phone number'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'معلومات الأعمال والمشاريع' : 'Business and project information'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'متطلبات المنتجات أو الخدمات أو عروض الأسعار' : 'Product, service or quotation requirements'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'المواصفات الفنية' : 'Technical specifications'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'متطلبات التسليم والمشاريع' : 'Delivery and project requirements'}</span>
                </li>
                <li className="legal-item-card">
                  <span className="legal-item-dot" />
                  <span>{isAr ? 'الرسائل والمراسلات الأخرى المرسلة إلى IBF' : 'Messages and other correspondence sent to IBF'}</span>
                </li>
              </ul>
              <p className="legal-note-text">
                {isAr
                  ? 'قد نجمع أيضاً بعض المعلومات التقنية المتعلقة باستخدامك لموقعنا، مثل عنوان IP ونوع المتصفح ومعلومات الجهاز وبيانات استخدام الموقع.'
                  : 'We may also collect certain technical information relating to your use of our website, such as IP address, browser type, device information and website usage data.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 2 */}
            <section id="section-2" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">2</span>
                <h3>{isAr ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد نستخدم معلوماتك للأغراض التالية:'
                  : 'We may use your information to:'}
              </p>
              <ul className="legal-doc-list">
                <li>{isAr ? 'الرد على الاستفسارات والطلبات' : 'Respond to enquiries and requests'}</li>
                <li>{isAr ? 'معالجة وتقييم طلبات عروض الأسعار (RFQs)' : 'Process and evaluate RFQs'}</li>
                <li>{isAr ? 'إعداد عروض الأسعار والمقترحات' : 'Prepare quotations and proposals'}</li>
                <li>{isAr ? 'تقديم معلومات حول منتجاتنا وخدماتنا' : 'Provide information about our products and services'}</li>
                <li>{isAr ? 'التنسيق مع الموردين، والمصنعين الأصليين (OEMs)، والشركاء أو الأطراف المعنية الأخرى عند الضرورة للاستجابة لمتطلباتك' : 'Coordinate with suppliers, OEMs, partners or other relevant parties where necessary to respond to your requirements'}</li>
                <li>{isAr ? 'التواصل بخصوص المشاريع أو الخدمات أو الفرص التجارية' : 'Communicate regarding projects, services or commercial opportunities'}</li>
                <li>{isAr ? 'تحسين موقعنا الإلكتروني وخدماتنا' : 'Improve our website and services'}</li>
                <li>{isAr ? 'الاحتفاظ بالسجلات التجارية' : 'Maintain business records'}</li>
                <li>{isAr ? 'الوفاء بالمتطلبات القانونية والتنظيمية ومعايير الامتثال المعمول بها' : 'Meet applicable legal, regulatory and compliance requirements'}</li>
              </ul>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 3 */}
            <section id="section-3" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">3</span>
                <h3>{isAr ? 'مشاركة معلوماتك' : 'Sharing Your Information'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد تشارك IBF المعلومات ذات الصلة مع الموردين والمصنعين الأصليين والشركاء التجاريين ومزودي الخدمات أو الأطراف الأخرى ذات العلاقة عندما يكون ذلك ضرورياً بشكل معقول للرد على طلبك أو تقديم الخدمة المطلوبة.'
                  : 'IBF may share relevant information with suppliers, OEMs, business partners, service providers or other relevant parties when reasonably necessary to respond to your request or provide the required service.'}
              </p>
              <p>
                {isAr
                  ? 'قد نكشف أيضاً عن المعلومات عندما يتطلب ذلك القانون أو اللوائح المعمول بها.'
                  : 'We may also disclose information where required by applicable law or regulation.'}
              </p>
              <p className="legal-highlight-callout">
                <strong>{isAr ? 'ملاحظة هامة: ' : 'Important Notice: '}</strong>
                {isAr
                  ? 'لا تقوم IBF ببيع المعلومات الشخصية لأطراف ثالثة.'
                  : 'IBF does not sell personal information to third parties.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 4 */}
            <section id="section-4" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">4</span>
                <h3>{isAr ? 'أمان البيانات' : 'Data Security'}</h3>
              </div>
              <p>
                {isAr
                  ? 'نتخذ تدابير فنية وتنظيمية معقولة لحماية المعلومات الشخصية والتجارية ضد الوصول غير المصرح به أو الفقدان أو سوء الاستخدام أو التعديل أو الإفصاح.'
                  : 'We take reasonable technical and organisational measures to protect personal and business information against unauthorised access, loss, misuse, alteration or disclosure.'}
              </p>
              <p>
                {isAr
                  ? 'ومع ذلك، لا توجد طريقة نقل إلكتروني أو تخزين آمنة تماماً، ولا يمكننا ضمان الأمان المطلق.'
                  : 'However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 5 */}
            <section id="section-5" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">5</span>
                <h3>{isAr ? 'الاحتفاظ بالبيانات' : 'Data Retention'}</h3>
              </div>
              <p>
                {isAr
                  ? 'نحتفظ بالمعلومات فقط للمدة الضرورية بشكل معقول للأغراض التي جُمعت من أجلها، بما في ذلك الأغراض التجارية أو التعاقدية أو القانونية أو التنظيمية أو المحاسبية أو متطلبات الامتثال.'
                  : 'We retain information only for as long as reasonably necessary for the purposes for which it was collected, including business, contractual, legal, regulatory, accounting or compliance requirements.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 6 */}
            <section id="section-6" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">6</span>
                <h3>{isAr ? 'ملفات تعريف الارتباط (Cookies)' : 'Cookies'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المماثلة لتشغيل الموقع وتحسينه وفهم أنماط استخدامه.'
                  : 'Our website may use cookies and similar technologies to operate and improve the website and understand website usage.'}
              </p>
              <p>
                {isAr
                  ? 'يمكنك التحكم في ملفات تعريف ارتباط معينة من خلال إعدادات متصفحك. قد يؤثر تعطيل ملفات تعريف الارتباط على بعض وظائف وميزات الموقع.'
                  : 'You may control certain cookies through your browser settings. Disabling cookies may affect certain features of the website.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 7 */}
            <section id="section-7" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">7</span>
                <h3>{isAr ? 'حقوقك' : 'Your Rights'}</h3>
              </div>
              <p>
                {isAr
                  ? 'وفقاً للأنظمة والقوانين المعمول بها، قد تتمتع بحقوق فيما يتعلق ببياناتك الشخصية، بما في ذلك الحق في طلب الوصول إلى معلوماتك أو تصحيحها أو حذفها، حيثما ينطبق ذلك.'
                  : 'Subject to applicable law, you may have rights regarding your personal data, including the right to request access to, correction of or deletion of your information, where applicable.'}
              </p>
              <p>
                {isAr ? 'لتقديم طلب متعلق بالخصوصية، يرجى التواصل معنا عبر:' : 'To make a privacy-related request, please contact us at:'}
              </p>
              <div className="contact-inline-block">
                <span>{isAr ? 'البريد الإلكتروني: ' : 'Email: '}</span>
                <a href="mailto:info@ibf.com.sa" className="legal-email-anchor">info@ibf.com.sa</a>
              </div>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 8 */}
            <section id="section-8" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">8</span>
                <h3>{isAr ? 'المواقع الإلكترونية التابعة لجهات خارجية' : 'Third-Party Websites'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد يحتوي موقعنا على روابط لمواقع إلكترونية خارجية. شركة IBF غير مسؤولة عن ممارسات الخصوصية أو محتوى المواقع الخارجية.'
                  : 'Our website may contain links to third-party websites. IBF is not responsible for the privacy practices or content of external websites.'}
              </p>
            </section>

            <hr className="legal-doc-divider" />

            {/* Section 9 */}
            <section id="section-9" className="legal-doc-section">
              <div className="legal-section-header">
                <span className="section-badge-num">9</span>
                <h3>{isAr ? 'التغييرات على سياسة الخصوصية' : 'Changes to This Privacy Policy'}</h3>
              </div>
              <p>
                {isAr
                  ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم دائماً نشر أحدث إصدار على هذا الموقع مع تاريخ التحديث المعني.'
                  : 'We may update this Privacy Policy from time to time. The latest version will always be published on this website with the relevant update date.'}
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
                  ? 'للأسئلة المتعلقة بسياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك، يرجى التواصل مع:'
                  : 'For questions regarding this Privacy Policy or our handling of your information, please contact:'}
              </p>
              
              <div className="legal-contact-card">
                <div className="legal-contact-info">
                  <h4 className="legal-contact-title">International Business Front (IBF)</h4>
                  <p className="legal-contact-sub">{isAr ? 'المملكة العربية السعودية • الامتثال وحماية البيانات' : 'Kingdom of Saudi Arabia • Legal & Data Protection'}</p>
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
