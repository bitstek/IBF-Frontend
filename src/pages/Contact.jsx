import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  Building2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
} from 'lucide-react'
import { company } from '../data/siteData'
import contactHeroBg from '../assets/contact-hero-bg.jpg'
import { API_BASE_URL } from '../config/api'

export default function Contact({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    serviceTopic: 'Trading & Procurement',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
        setErrorMessage(data.message || (isAr ? 'حدث خطأ أثناء إرسال الرسالة.' : 'Failed to send message.'))
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
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
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactCards = [
    {
      title: isAr ? 'المقر الرئيسي بجدة' : 'Jeddah Headquarters',
      content: isAr ? 'جدة، المملكة العربية السعودية' : company.location,
      sub: isAr ? 'ساعات العمل: الأحد إلى الخميس (8:00 صباحاً إلى 5:00 مساءً)' : 'Office Hours: Sun to Thu, 8:00 AM to 5:00 PM',
      icon: MapPin,
      href: null,
    },
    {
      title: isAr ? 'الهاتف المباشر' : 'Direct Phone',
      content: company.phone,
      sub: isAr ? 'استفسارات عروض الأسعار والتنسيق' : 'RFQ Inquiries & Commercial Coordination',
      icon: Phone,
      href: company.phoneHref,
    },
    {
      title: isAr ? 'قناة واتساب الرسمية' : 'Official WhatsApp',
      content: '+966 55 757 1816',
      sub: isAr ? 'محادثة سريعة وتنسيق مباشر' : 'Fast Inquiry & Instant Messaging',
      icon: MessageCircle,
      href: company.whatsapp,
    },
    {
      title: isAr ? 'البريد الإلكتروني التجاري' : 'Commercial Email',
      content: company.email,
      sub: isAr ? 'إرسال طلبات المناقصات وملفات BOQ' : 'Submit RFQ Briefs & Technical BOQ Files',
      icon: Mail,
      href: `mailto:${company.email}`,
    },
    {
      title: isAr ? 'التسجيل التجاري والضريبي' : 'CR & VAT Registration',
      content: `CR: ${company.cr} · VAT: ${company.vat}`,
      sub: isAr ? 'جهة سعودية معتمدة ومسجلة نظامياً' : 'Officially Registered Saudi Corporate Entity',
      icon: ShieldCheck,
      href: null,
    },
  ]

  return (
    <main className="contact-template-page">
      {/* HERO SECTION WITH CONTACT BACKGROUND IMAGE */}
      <section className="contact-hero-section">
        <div className="hero-bg-container">
          <img src={contactHeroBg} alt="IBF Corporate Headquarters Jeddah Office" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'اتصل بنا' : 'Contact'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'التواصل التجاري والفني المباشر' : 'DIRECT COMMERCIAL & TECHNICAL ENGAGEMENT'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'اتصل بـ IBF' : 'Contact IBF'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'تواصل مع فريقنا التجاري والفني في جدة، المملكة العربية السعودية للحصول على عروض أسعار منظمة، تنفيذ NexERP، دعم دخول السوق، أو التنسيق الموجه للامتثال.'
                : 'Connect with our commercial and technical team in Jeddah, Saudi Arabia for RFQ inquiries, market-entry representation, NexERP platform implementations, or compliance requirements.'}
            </p>
            <div className="hero-actions-row">
              <Link to={`${basePath}/request-a-quote`} className="btn-primary-navy">
                <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span> <ChevronRight size={16} />
              </Link>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary-white">
                <MessageCircle size={16} className="gold-check-icon" />
                <span>{isAr ? 'واتساب مباشر' : 'Direct WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: CONTACT CARDS & FORM (2 COLUMNS) */}
      <section className="shell section-spacing reveal-up">
        <div className="contact-layout-grid">
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="contact-cards-col">
            <div className="section-head-sm">
              <p className="gold-subtitle-sm">{isAr ? 'قنوات التواصل' : 'CONTACT CHANNELS'}</p>
              <h2>{isAr ? 'تواصل مع مكتبنا في جدة' : 'Reach our Jeddah Office'}</h2>
            </div>

            <div className="contact-cards-list">
              {contactCards.map((card) => {
                const IconComponent = card.icon
                const isNumField = card.title.includes('الهاتف') || card.title.includes('Phone') || card.title.includes('واتساب') || card.title.includes('WhatsApp') || card.title.includes('التسجيل') || card.title.includes('CR')
                return (
                  <article className="contact-tile-card" key={card.title}>
                    <div className="contact-tile-icon">
                      <IconComponent size={22} />
                    </div>
                    <div className="contact-tile-text">
                      <h3>{card.title}</h3>
                      {card.href ? (
                        <a href={card.href} className="contact-tile-link ltr-num" dir="ltr">
                          {card.content}
                        </a>
                      ) : (
                        <strong className={`contact-tile-val ${isNumField ? 'ltr-num' : ''}`} dir={isNumField ? 'ltr' : undefined}>
                          {card.content}
                        </strong>
                      )}
                      <p>{card.sub}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: INQUIRY FORM */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3>{isAr ? 'إرسال استفسار مباشر' : 'Send a Direct Message'}</h3>
                <p>{isAr ? 'سيجيب فريقنا الفني والتجاري خلال 24 ساعة عمل.' : 'Our technical & commercial team will respond within 24 business hours.'}</p>
              </div>

              {submitted ? (
                <div className="contact-success-box">
                  <ShieldCheck size={42} className="success-icon" />
                  <h4>{isAr ? 'تم استلام رسالتك بنجاح' : 'Message Sent Successfully!'}</h4>
                  <p>
                    {isAr
                      ? 'شكراً لتواصلك مع IBF. قام فريقنا بتسجيل استفسارك وسيتم التواصل معك بخطوة عملية قادمة.'
                      : 'Thank you for reaching out to IBF. Our team has received your message and will respond shortly with a practical next step.'}
                  </p>
                  <button type="button" className="btn-primary-navy" onClick={() => setSubmitted(false)}>
                    {isAr ? 'إرسال استفسار آخر' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  {errorMessage && (
                    <div style={{ padding: '12px 16px', backgroundColor: '#fff0f0', border: '1px solid #ffcdd2', borderRadius: '6px', color: '#c62828', fontSize: '0.9rem', marginBottom: '15px' }}>
                      ⚠️ {errorMessage}
                    </div>
                  )}
                  <div className="form-row-2col">
                    <div className="form-field-group">
                      <label htmlFor="fullName">{isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder={isAr ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="email">{isAr ? 'البريد الإلكتروني التجاري *' : 'Business Email *'}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={isAr ? 'name@company.com.sa' : 'name@company.com'}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-field-group">
                      <label htmlFor="companyName">{isAr ? 'اسم المنشأة / الشركة' : 'Company / Organization'}</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder={isAr ? 'اسم الشركة أو الجهة' : 'Company name'}
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="phone">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+966 5X XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="serviceTopic">{isAr ? 'موضوع الاستفسار / الخدمة المطلوب' : 'Service / Inquiry Topic'}</label>
                    <select
                      id="serviceTopic"
                      name="serviceTopic"
                      value={formData.serviceTopic}
                      onChange={handleChange}
                    >
                      <option value="Trading & Procurement">{isAr ? 'التجارة والمشتريات الصناعية' : 'Trading & Industrial Procurement'}</option>
                      <option value="NexERP Enterprise Platform">{isAr ? 'منظومة NexERP والبرمجيات' : 'NexERP Enterprise Software'}</option>
                      <option value="AI & Digital Solutions">{isAr ? 'الذكاء الاصطناعي والحلول الرقمية' : 'AI & Digital Solutions'}</option>
                      <option value="Industrial IoT Solutions">{isAr ? 'حلول إنترنت الأشياء الصناعي' : 'Industrial IoT Solutions'}</option>
                      <option value="IT Services & Cloud">{isAr ? 'خدمات تكنولوجيا المعلومات والسحابية' : 'IT Infrastructure & Managed Services'}</option>
                      <option value="Saudi Market Entry">{isAr ? 'دعم دخول السوق السعودي' : 'Saudi Market Entry Support'}</option>
                      <option value="ISO & Compliance">{isAr ? 'ISO والامتثال والتوثيق' : 'ISO & Compliance Readiness'}</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="message">{isAr ? 'تفاصيل الاستفسار أو المتطلبات *' : 'Message / Requirement Details *'}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={isAr ? 'اكتب تفاصيل طلبك، المواصفات، الكميات، أو المتطلبات الفنية...' : 'Share your project scope, specifications, RFQ files, or technical requirements...'}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary-navy submit-btn" disabled={loading}>
                    <Send size={16} /> <span>{loading ? (isAr ? 'جاري الإرسال...' : 'Sending Message...') : (isAr ? 'إرسال الاستفسار' : 'Submit Message')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
