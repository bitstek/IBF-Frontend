import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck2,
  FileText,
  Globe,
  HelpCircle,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  User,
} from 'lucide-react'
import { company, products } from '../data/siteData'
import quoteHeroBg from '../assets/quote-hero-bg.jpg'
import { API_BASE_URL } from '../config/api'

export default function RequestQuote({ lang = 'en' }) {
  const [params] = useSearchParams()
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  const selectedProduct = products.find((p) => p.slug === params.get('product'))

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    // Customer information
    contactName: '',
    company: '',
    email: '',
    mobile: '',
    country: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    city: '',

    // Project information
    projectName: '',
    customerRfqRef: '',
    deliveryCountry: '',
    deliveryCity: '',
    submissionDeadline: '',
    requiredDeliveryDate: '',
    deliveryBasis: 'NOT SPECIFIED',
    currency: 'SAR',
    deliveryAddress: '',
    approvedVendorListRequired: false,
    certificationRequirements: '',
    technicalNotes: selectedProduct
      ? `Selected Product: ${selectedProduct.title} (${selectedProduct.brand} | MPN: ${selectedProduct.mpn || 'N/A'})`
      : '',
    commercialNotes: '',

    // Consent
    consent: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/request-quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(data.message || (isAr ? 'حدث خطأ أثناء إرسال طلب عرض السعر.' : 'Failed to submit RFQ request.'))
      }
    } catch (err) {
      console.error('RFQ submission error:', err)
      setErrorMessage(
        isAr
          ? 'تعذر الاتصال بخادم البريد الإلكتروني. يرجى التأكد من تشغيل خادم Backend أو مراسلتنا مباشرة على ms@ibf.com.sa'
          : 'Could not connect to mail server. Please ensure backend is running or email us directly at ms@ibf.com.sa'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const rfqSteps = isAr
    ? [
        {
          num: '01',
          title: 'تحديد المواصفات',
          desc: 'توفير أرقام الموديلات، ملفات جدول الكميات (BOQ)، أو المواصفات الفنية.',
        },
        {
          num: '02',
          title: 'مراجعة التوافق والاعتمادات',
          desc: 'التحقق من التوافق الفني والامتثال لمعايير ISO من قِبل فريقنا في جدة.',
        },
        {
          num: '03',
          title: 'التحقق من المهل الزمنية والمخزون',
          desc: 'التنسيق المباشر مع المصنعين الأصليين (OEM) حول العالم.',
        },
        {
          num: '04',
          title: 'تقديم العرض التجاري',
          desc: 'إصدار عرض سعر رسمي منظم مع تأكيد شروط التسليم.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Specification Selection',
          desc: 'Provide model numbers, BOQ files, or technical datasheets.',
        },
        {
          num: '02',
          title: 'Compliance Review',
          desc: 'Technical & ISO compliance verification by our Jeddah team.',
        },
        {
          num: '03',
          title: 'Lead Time & Stock Check',
          desc: 'Direct coordination with global OEM manufacturers.',
        },
        {
          num: '04',
          title: 'Commercial Proposal',
          desc: 'Official structured quotation with confirmed delivery terms.',
        },
      ]

  return (
    <main className="rfq-themed-page">
      <SEO lang={lang} pageKey="requestQuote" />
      {/* HERO SECTION WITH GOLD ACCENTS & VIGNETTE */}
      <section className="template-hero-section quote-hero-section">
        <div className="hero-bg-container">
          <img src={quoteHeroBg} alt="IBF Commercial RFQ Desk" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'طلب عرض سعر من IBF' : 'Request a Quote from IBF'}
            </p>

            <h1 className="hero-headline">
              {isAr ? (
                <>
                  أخبرنا باحتياجاتك. <span className="gold-highlight"><br />وسنتولى الأمر من هنا.</span>
                </>
              ) : (
                <>
                  Tell Us What You Need. <span className="gold-highlight"><br />We’ll Take It From Here.</span>
                </>
              )}
            </h1>

            <p className="hero-lead-text">
              {isAr
                ? 'يرجى تعبئة بيانات العميل والمشروع أدناه. يراجع مهندسو المشتريات التجاريون لدى IBF مواصفاتك ويصدرون عرض سعر رسمي مفصل خلال وقت قياسي.'
                : 'Complete the customer and project information below. IBF procurement engineers will review your specifications and issue an official structured quotation promptly.'}
            </p>

            {selectedProduct && (
              <div className="product-preselect-pill">
                <PackageCheck size={18} className="gold-check-icon" />
                <span>
                  {isAr ? 'المنتج المحدد:' : 'Selected Product:'} <strong>{selectedProduct.title}</strong> ({selectedProduct.brand} | MPN: <span className="ltr-num">{selectedProduct.mpn}</span>)
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN RFQ LAYOUT GRID */}
      <section className="shell section-spacing reveal-up">
        <div className="rfq-themed-layout-grid">
          {/* MAIN FORM CARD */}
          <div className="rfq-themed-form-card">
            <div className="rfq-form-card-header">
              <div className="rfq-head-badge">
                <FileText size={16} /> <span>{isAr ? 'نموذج طلب عرض السعر التجاري الرسمي' : 'Official Commercial RFQ Form'}</span>
              </div>
              <h3>{isAr ? 'متطلبات المشتريات وعروض الأسعار' : 'Procurement & Quotation Requirements'}</h3>
              <p>
                {isAr
                  ? 'يرجى تعبئة الحقول المخصصة أدناه. وسيقوم فريق هندسة المشتريات التجارية لدينا بمعالجة طلبك.'
                  : 'Fill in the structured fields below. Our commercial procurement engineering team will process your request.'}
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-box rfq-success-box">
                <CheckCircle2 size={58} className="success-icon" />
                <h4>{isAr ? 'تم إرسال طلب عرض السعر (RFQ) بنجاح!' : 'RFQ Request Dispatched Successfully!'}</h4>
                <p>
                  {isAr
                    ? `شكراً لك، ${formData.contactName || 'عميلنا العزيز'}. تم تسجيل طلب عرض السعر لشركة (${formData.company || 'منشأتك'}). وسيقوم فريق الهندسة التجارية لدينا بالمتابعة عبر البريد الإلكتروني (${formData.email || company.email}).`
                    : `Thank you, ${formData.contactName || 'Valued Client'}. Your RFQ for ${formData.company || 'your organization'} has been logged. Our commercial engineering team will follow up via email (${formData.email || company.email}).`}
                </p>
                <div className="success-actions">
                  <button type="button" onClick={() => setSubmitted(false)} className="btn-card-outline">
                    {isAr ? 'تقديم طلب جديد' : 'Submit Another RFQ'}
                  </button>
                  <Link to={`${basePath}/catalogue`} className="btn-primary-navy">
                    <span>{isAr ? 'تصفح الكتالوج' : 'Browse Catalogue'}</span> <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rfq-themed-form-body">
                {errorMessage && (
                  <div style={{ padding: '12px 16px', backgroundColor: '#fff0f0', border: '1px solid #ffcdd2', borderRadius: '6px', color: '#c62828', fontSize: '0.9rem', marginBottom: '15px' }}>
                    ⚠️ {errorMessage}
                  </div>
                )}
                {/* SECTION 1: CUSTOMER INFORMATION */}
                <div className="rfq-form-section-card">
                  <div className="rfq-section-header">
                    <div className="rfq-sec-icon-pill">
                      <User size={18} />
                    </div>
                    <div>
                      <h2>{isAr ? 'معلومات العميل' : 'Customer information'}</h2>
                      <p>{isAr ? 'بيانات التواصل والمنشأة الرئيسية' : 'Primary contact & organization details'}</p>
                    </div>
                  </div>

                  <div className="rfq-form-grid-2col">
                    <div className="rfq-themed-field">
                      <label htmlFor="contactName">{isAr ? 'اسم المسؤول *' : 'Contact name *'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <User size={16} className="rfq-field-icon" />
                        <input
                          id="contactName"
                          name="contactName"
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder={isAr ? 'مثال: عبد الله الحربي' : 'e.g. Abdullah Al-Harbi'}
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="company">{isAr ? 'الشركة *' : 'Company *'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Building2 size={16} className="rfq-field-icon" />
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={isAr ? 'اسم الشركة أو المؤسسة' : 'e.g. Saudi Aramco Contractor'}
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="email">{isAr ? 'البريد الإلكتروني *' : 'Email *'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Mail size={16} className="rfq-field-icon" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="mobile">{isAr ? 'الجوال *' : 'Mobile *'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Phone size={16} className="rfq-field-icon" />
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="+966 55 757 1816"
                          className="ltr-num"
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="country">{isAr ? 'الدولة' : 'Country'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Globe size={16} className="rfq-field-icon" />
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="city">{isAr ? 'المدينة' : 'City'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <MapPin size={16} className="rfq-field-icon" />
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder={isAr ? 'جدة، الرياض، الخبر...' : 'e.g. Jeddah / Riyadh'}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: PROJECT INFORMATION */}
                <div className="rfq-form-section-card">
                  <div className="rfq-section-header">
                    <div className="rfq-sec-icon-pill">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h2>{isAr ? 'معلومات المشروع' : 'Project information'}</h2>
                      <p>{isAr ? 'نطاق المشروع، مواعيد التسليم، والملاحظات الفنية والتجارية' : 'Project scope, delivery milestones, technical & commercial notes'}</p>
                    </div>
                  </div>

                  <div className="rfq-form-grid-2col">
                    <div className="rfq-themed-field">
                      <label htmlFor="projectName">{isAr ? 'اسم المشروع' : 'Project name'}</label>
                      <input
                        id="projectName"
                        name="projectName"
                        type="text"
                        value={formData.projectName}
                        onChange={handleChange}
                        placeholder={isAr ? 'مثال: توسعة المحطة الفرعية المرحلة 2' : 'e.g. Substation Expansion Phase 2'}
                      />
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="customerRfqRef">{isAr ? 'مرجع طلب العرض لدى العميل' : 'Customer RFQ reference'}</label>
                      <input
                        id="customerRfqRef"
                        name="customerRfqRef"
                        type="text"
                        value={formData.customerRfqRef}
                        onChange={handleChange}
                        placeholder={isAr ? 'مثال: RFQ-2026-8841' : 'e.g. RFQ-2026-8841'}
                      />
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="deliveryCountry">{isAr ? 'دولة التسليم' : 'Delivery country'}</label>
                      <input
                        id="deliveryCountry"
                        name="deliveryCountry"
                        type="text"
                        value={formData.deliveryCountry}
                        onChange={handleChange}
                        placeholder={isAr ? 'المملكة العربية السعودية' : 'e.g. Saudi Arabia'}
                      />
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="deliveryCity">{isAr ? 'مدينة التسليم' : 'Delivery city'}</label>
                      <input
                        id="deliveryCity"
                        name="deliveryCity"
                        type="text"
                        value={formData.deliveryCity}
                        onChange={handleChange}
                        placeholder={isAr ? 'مدينة جدة الصناعية الثانية' : 'e.g. Jubail Industrial Port'}
                      />
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="submissionDeadline">{isAr ? 'الموعد النهائي للتقديم' : 'Submission deadline'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Calendar size={16} className="rfq-field-icon" />
                        <input
                          id="submissionDeadline"
                          name="submissionDeadline"
                          type="date"
                          value={formData.submissionDeadline}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="requiredDeliveryDate">{isAr ? 'تاريخ التسليم المطلوب' : 'Required delivery date'}</label>
                      <div className="rfq-input-icon-wrapper">
                        <Calendar size={16} className="rfq-field-icon" />
                        <input
                          id="requiredDeliveryDate"
                          name="requiredDeliveryDate"
                          type="date"
                          value={formData.requiredDeliveryDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="deliveryBasis">{isAr ? 'شروط التسليم' : 'Delivery basis'}</label>
                      <select
                        id="deliveryBasis"
                        name="deliveryBasis"
                        value={formData.deliveryBasis}
                        onChange={handleChange}
                      >
                        <option value="NOT SPECIFIED">{isAr ? 'غير محدد (NOT SPECIFIED)' : 'NOT SPECIFIED'}</option>
                        <option value="EXW">EXW (Ex Works)</option>
                        <option value="FOB">FOB (Free on Board)</option>
                        <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                        <option value="DDP">DDP (Delivered Duty Paid)</option>
                        <option value="DAP">DAP (Delivered at Place)</option>
                      </select>
                    </div>

                    <div className="rfq-themed-field">
                      <label htmlFor="currency">{isAr ? 'العملة' : 'Currency'}</label>
                      <select
                        id="currency"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                      >
                        <option value="SAR">SAR (Saudi Riyal)</option>
                        <option value="USD">USD (US Dollar)</option>
                        <option value="EUR">EUR (Euro)</option>
                        <option value="AED">AED (UAE Dirham)</option>
                      </select>
                    </div>
                  </div>

                  <div className="rfq-themed-field rfq-full-span">
                    <label htmlFor="deliveryAddress">{isAr ? 'عنوان التسليم' : 'Delivery address'}</label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      rows="3"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      placeholder={isAr ? 'عنوان المستودع التفصيلي أو موقع المشروع...' : 'Specific warehouse address or site location...'}
                    />
                  </div>

                  <div className="rfq-checkbox-pill-box">
                    <label className="rfq-custom-checkbox-label">
                      <input
                        type="checkbox"
                        name="approvedVendorListRequired"
                        checked={formData.approvedVendorListRequired}
                        onChange={handleChange}
                      />
                      <span className="checkbox-custom-mark" />
                      <span>{isAr ? 'مطلوب قائمة الموردين المعتمدين (AVL)' : 'Approved vendor list required'}</span>
                    </label>
                  </div>

                  <div className="rfq-themed-field rfq-full-span">
                    <label htmlFor="certificationRequirements">{isAr ? 'متطلبات الشهادات والاعتمادات' : 'Certification requirements'}</label>
                    <textarea
                      id="certificationRequirements"
                      name="certificationRequirements"
                      rows="3"
                      value={formData.certificationRequirements}
                      onChange={handleChange}
                      placeholder={isAr ? 'مثل: شهادات ISO 9001، اعتمادات SASO، الكود السعودي، أو اعتمادات أرامكو / سابك...' : 'e.g. ISO 9001 certificates, SASO compliance, Aramco/SABIC approval docs...'}
                    />
                  </div>

                  <div className="rfq-themed-field rfq-full-span">
                    <label htmlFor="technicalNotes">{isAr ? 'الملاحظات والاشتراطات الفنية' : 'Technical notes'}</label>
                    <textarea
                      id="technicalNotes"
                      name="technicalNotes"
                      rows="3"
                      value={formData.technicalNotes}
                      onChange={handleChange}
                      placeholder={isAr ? 'المواصفات الفنية التفصيلية، أرقام القطع MPN، فئات الجهد الكهربائي، أو ملاحظات BOQ...' : 'Detailed technical specs, MPN model numbers, voltage ratings, or BOQ notes...'}
                    />
                  </div>

                  <div className="rfq-themed-field rfq-full-span">
                    <label htmlFor="commercialNotes">{isAr ? 'الملاحظات والشروط التجارية' : 'Commercial notes'}</label>
                    <textarea
                      id="commercialNotes"
                      name="commercialNotes"
                      rows="3"
                      value={formData.commercialNotes}
                      onChange={handleChange}
                      placeholder={isAr ? 'شروط الدفع، فترات الضمان المطلوبة، شروط الاعتماد المستندي (LC)...' : 'Payment terms, required warranty period, milestones, LC terms...'}
                    />
                  </div>
                </div>

                {/* SECTION 3: CONSENT & SUBMIT */}
                <div className="rfq-consent-gold-box">
                  <label className="rfq-custom-checkbox-label rfq-consent-text">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <span>
                      {isAr
                        ? 'أوافق على استخدام شركة IBF لهذه البيانات لمعالجة طلب عرض السعر التجاري (RFQ).'
                        : 'I consent to IBF using this information to process this commercial RFQ.'}
                    </span>
                  </label>
                </div>

                <div className="rfq-submit-hero-row">
                  <button type="submit" className="btn-rfq-submit-navy" disabled={loading}>
                    <span>{loading ? (isAr ? 'جاري إرسال الطلب...' : 'Submitting RFQ Request...') : (isAr ? 'إرسال طلب عرض السعر (RFQ)' : 'Submit RFQ Request')}</span>
                    <Send size={18} className="submit-arrow-icon" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR: WORKFLOW & DIRECT CHANNELS */}
          <div className="rfq-sidebar-col">
            {/* WORKFLOW STEPS TILE */}
            <div className="rfq-side-tile rfq-workflow-tile">
              <div className="side-tile-head">
                <span className="gold-subtitle-sm">{isAr ? 'مسار عمل طلب العرض' : 'RFQ WORKFLOW'}</span>
                <h3>{isAr ? 'خطوات المشتريات' : 'Procurement Steps'}</h3>
              </div>
              <div className="rfq-side-steps">
                {rfqSteps.map((step) => (
                  <div className="rfq-side-step-item" key={step.num}>
                    <div className="step-num-badge">{step.num}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIRECT COMMERCIAL CONTACT TILE */}
            <div className="rfq-side-tile rfq-contact-tile">
              <div className="side-tile-head">
                <BadgeCheck size={22} className="gold-icon" />
                <div>
                  <h3>{isAr ? 'مكتب طلبات عروض الأسعار' : 'Direct RFQ Desk'}</h3>
                  <p>{isAr ? 'المقر الرئيسي بجدة · المملكة العربية السعودية' : 'Jeddah HQ · Kingdom of Saudi Arabia'}</p>
                </div>
              </div>

              <div className="side-contact-list">
                <a href={`mailto:${company.email}`} className="side-contact-row">
                  <Mail size={16} />
                  <span>{company.email}</span>
                </a>
                <a href={company.phoneHref} className="side-contact-row">
                  <Phone size={16} />
                  <span className="ltr-num">{company.phone}</span>
                </a>
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="side-contact-row">
                  <MessageCircle size={16} />
                  <span className="ltr-num">+966 55 757 1816</span>
                </a>
                <div className="side-contact-row">
                  <Clock size={16} />
                  <span>{isAr ? 'الأحد إلى الخميس (8:00 صباحاً إلى 5:00 مساءً)' : 'Sun to Thu: 8:00 AM to 5:00 PM'}</span>
                </div>
                <div className="side-contact-row">
                  <ShieldCheck size={16} />
                  <span className="ltr-num">CR: {company.cr} · VAT: {company.vat}</span>
                </div>
              </div>
            </div>

            {/* TRUST & CONFIDENTIALITY TILE */}
            <div className="rfq-side-tile rfq-trust-tile">
              <div className="trust-tile-inner">
                <Lock size={20} className="gold-icon" />
                <div>
                  <h4>{isAr ? 'سرية ومعلومات الشركات الصارمة' : 'Strict Corporate Confidentiality'}</h4>
                  <p>
                    {isAr
                      ? 'تضمن IBF عدم الإفصاح والسرية التامة لجميع ملفات الكميات (BOQ) والمواصفات.'
                      : 'IBF guarantees full non-disclosure and privacy for all BOQ files and specifications.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
