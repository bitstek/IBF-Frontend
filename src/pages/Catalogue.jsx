import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ChevronRight,
  Cpu,
  Database,
  Filter,
  HardDrive,
  Layers3,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/siteData'
import catalogueHeroBg from '../assets/catalogue-hero-bg.jpg'

export default function Catalogue({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const productTypes = isAr
    ? [
        {
          id: 'Enterprise Software',
          title: 'البرمجيات المؤسسية والذكاء الاصطناعي',
          desc: 'منصات ERP المؤسسية، برمجيات الذكاء الاصطناعي، ونظم الفوترة والامتثال ZATCA.',
          icon: Database,
          categoryKey: 'البرمجيات المؤسسية والذكاء الاصطناعي',
        },
        {
          id: 'Industrial Electrical',
          title: 'الكهرباء الصناعية',
          desc: 'أجهزة قياس ومراقبة الطاقة، محولات ومعدات الحماية والجهد الكهربائي.',
          icon: Zap,
          categoryKey: 'الكهرباء الصناعية',
        },
        {
          id: 'Batteries & Power Systems',
          title: 'أنظمة البطاريات والطاقة',
          desc: 'بطاريات VRLA، AGM، الجل، البطاريات الصناعية الثابتة، وبنوك الطاقة ذات السعات العالية.',
          icon: HardDrive,
          categoryKey: 'أنظمة البطاريات والطاقة',
        },
        {
          id: 'Rectifiers & Chargers',
          title: 'المقومات والشواحن',
          desc: 'مقومات التيار المستمر DC، شواحن البطاريات الصناعية، وأنظمة تحويل الطاقة الكهربائية.',
          icon: Cpu,
          categoryKey: 'المقومات والشواحن',
        },
        {
          id: 'Control & Automation',
          title: 'التحكم والتحكم الآلي',
          desc: 'مرحلات الحماية، أجهزة الـ PLC، ولوحات التحكم الآلي للمحركات والمصانع.',
          icon: ShieldCheck,
          categoryKey: 'التحكم والتحكم الآلي',
        },
        {
          id: 'Cables & Accessories',
          title: 'الكابلات والملحقات',
          desc: 'كابلات الطاقة المدرعة، تمديدات التحكم، النهايات والكابلات والألياف البصرية الصناعية.',
          icon: Layers3,
          categoryKey: 'الكابلات والملحقات',
        },
        {
          id: 'Test & Measurement',
          title: 'الاختبار والقياس',
          desc: 'أجهزة قياس الجهد، أجهزة فحص العازلية، ومحللات الطاقة الرقمية وأدوات المعايرة الدقيقة.',
          icon: BarChart3,
          categoryKey: 'الاختبار والقياس',
        },
      ]
    : [
        {
          id: 'Enterprise Software',
          title: 'Enterprise Software & AI',
          desc: 'Enterprise ERP systems, AI decision modules, SAIP compliance & ZATCA e-invoicing platforms.',
          icon: Database,
          categoryKey: 'Enterprise Software & AI',
        },
        {
          id: 'Industrial Electrical',
          title: 'Industrial Electrical',
          desc: 'High-precision power monitoring devices, protection gear, and industrial electrical equipment.',
          icon: Zap,
          categoryKey: 'Industrial Electrical',
        },
        {
          id: 'Batteries & Power Systems',
          title: 'Batteries & Power Systems',
          desc: 'VRLA, AGM, Gel, OpzS/OpzV industrial batteries, motive power, and high-capacity battery banks.',
          icon: HardDrive,
          categoryKey: 'Batteries & Power Systems',
        },
        {
          id: 'Rectifiers & Chargers',
          title: 'Rectifiers & Chargers',
          desc: 'Industrial DC rectifiers, battery chargers, uninterruptible power supplies (UPS), and power conversion systems.',
          icon: Cpu,
          categoryKey: 'Rectifiers & Chargers',
        },
        {
          id: 'Control & Automation',
          title: 'Control & Automation',
          desc: 'Relays, PLCs, motor protection units, and automated industrial control machinery.',
          icon: ShieldCheck,
          categoryKey: 'Control & Automation',
        },
        {
          id: 'Cables & Accessories',
          title: 'Cables & Accessories',
          desc: 'Armored power cables, structured control wiring, and high-speed industrial fiber optic lines.',
          icon: Layers3,
          categoryKey: 'Cables & Accessories',
        },
        {
          id: 'Test & Measurement',
          title: 'Test & Measurement',
          desc: 'Digital multimeters, insulation resistance testers, and portable power quality analyzers.',
          icon: BarChart3,
          categoryKey: 'Test & Measurement',
        },
      ]

  const categories = isAr
    ? ['جميع الأقسام', 'البرمجيات المؤسسية والذكاء الاصطناعي', 'الكهرباء الصناعية', 'أنظمة البطاريات والطاقة', 'المقومات والشواحن', 'التحكم والتحكم الآلي', 'الكابلات والملحقات', 'الاختبار والقياس']
    : ['All Categories', 'Enterprise Software & AI', 'Industrial Electrical', 'Batteries & Power Systems', 'Rectifiers & Chargers', 'Control & Automation', 'Cables & Accessories', 'Test & Measurement']

  useEffect(() => {
    const searchParam = searchParams.get('search')
    if (searchParam) {
      setSearchQuery(searchParam)
    }

    const q = searchParams.get('category')
    if (q) {
      const qLower = q.toLowerCase()
      if (qLower === 'software' || qLower === 'erp' || qLower === 'nexerp') {
        setSelectedCategory(isAr ? 'البرمجيات المؤسسية والذكاء الاصطناعي' : 'Enterprise Software & AI')
      } else if (qLower === 'electrical') {
        setSelectedCategory(isAr ? 'الكهرباء الصناعية' : 'Industrial Electrical')
      } else if (qLower === 'power' || qLower === 'batteries') {
        setSelectedCategory(isAr ? 'أنظمة البطاريات والطاقة' : 'Batteries & Power Systems')
      } else if (qLower === 'rectifiers' || qLower === 'chargers' || qLower === 'ups') {
        setSelectedCategory(isAr ? 'المقومات والشواحن' : 'Rectifiers & Chargers')
      } else if (qLower === 'control' || qLower === 'automation') {
        setSelectedCategory(isAr ? 'التحكم والتحكم الآلي' : 'Control & Automation')
      } else if (qLower === 'cabling' || qLower === 'cables' || qLower === 'accessories') {
        setSelectedCategory(isAr ? 'الكابلات والملحقات' : 'Cables & Accessories')
      } else if (qLower === 'testing' || qLower === 'meters' || qLower === 'measurement') {
        setSelectedCategory(isAr ? 'الاختبار والقياس' : 'Test & Measurement')
      } else if (qLower === 'all') {
        setSelectedCategory(isAr ? 'جميع الأقسام' : 'All Categories')
      }
    }

    if (searchParam || q) {
      const timer = setTimeout(() => {
        const el = document.getElementById('catalogue-grid-section')
        if (el) {
          const yOffset = -90
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
        }
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [searchParams, isAr])

  const filteredProducts = products.filter((product) => {
    const rawQuery = searchQuery.trim().toLowerCase()
    let matchesSearch = true

    if (rawQuery !== '') {
      const searchTerms = rawQuery.split(/\s+/).filter(Boolean)
      const searchableText = [
        product.brand,
        product.model,
        product.category,
        product.mpn,
        product.slug,
        product.priceNote || '',
        product.origin || '',
        product.accent || '',
        ...(product.tags || []),
      ].join(' ').toLowerCase()

      matchesSearch = searchTerms.every((term) => {
        if (searchableText.includes(term)) return true

        if (term === 'cable' || term === 'cables') {
          return searchableText.includes('cabl') || searchableText.includes('wire')
        }
        if (term === 'battery' || term === 'batteries') {
          return searchableText.includes('bat') || searchableText.includes('power')
        }
        if (term === 'meter' || term === 'meters' || term === 'testing') {
          return searchableText.includes('met') || searchableText.includes('test') || searchableText.includes('measur') || searchableText.includes('monit')
        }
        if (term === 'power' || term === 'ups') {
          return searchableText.includes('pwr') || searchableText.includes('power') || searchableText.includes('ups') || searchableText.includes('rect')
        }
        if (term === 'control' || term === 'automation') {
          return searchableText.includes('ctrl') || searchableText.includes('control') || searchableText.includes('auto')
        }
        if (term === 'software' || term === 'erp') {
          return searchableText.includes('soft') || searchableText.includes('erp') || searchableText.includes('app')
        }
        return false
      })
    }

    if (!selectedCategory || selectedCategory === 'All Categories' || selectedCategory === 'جميع الأقسام') return matchesSearch

    if (selectedCategory === 'Enterprise Software & AI' || selectedCategory === 'البرمجيات المؤسسية والذكاء الاصطناعي' || selectedCategory === 'Enterprise Software' || selectedCategory === 'البرمجيات المؤسسية') {
      return matchesSearch && (product.category.includes('Software') || product.slug.includes('nexerp') || product.category.includes('ERP') || product.category.includes('AI'))
    }
    if (selectedCategory === 'Industrial Electrical' || selectedCategory === 'الكهرباء الصناعية') {
      return matchesSearch && (product.category.includes('Electrical') || product.slug.includes('electrical') || product.category.includes('Automation'))
    }
    if (selectedCategory === 'Batteries & Power Systems' || selectedCategory === 'أنظمة البطاريات والطاقة') {
      return matchesSearch && (product.category.includes('Batter') || product.slug.includes('batter') || product.slug.includes('power-backup') || product.category.includes('Power Systems'))
    }
    if (selectedCategory === 'Rectifiers & Chargers' || selectedCategory === 'المقومات والشواحن') {
      return matchesSearch && (product.category.includes('Rectifier') || product.category.includes('UPS') || product.slug.includes('rectifier') || product.slug.includes('ups') || product.category.includes('DC Power'))
    }
    if (selectedCategory === 'Control & Automation' || selectedCategory === 'التحكم والتحكم الآلي') {
      return matchesSearch && (product.category.includes('Control') || product.slug.includes('control') || product.category.includes('Automation'))
    }
    if (selectedCategory === 'Cables & Accessories' || selectedCategory === 'الكابلات والملحقات') {
      return matchesSearch && (product.category.includes('Cabl') || product.slug.includes('cabling') || product.slug.includes('cables') || product.tags?.includes('cables'))
    }
    if (selectedCategory === 'Test & Measurement' || selectedCategory === 'الاختبار والقياس') {
      return matchesSearch && (product.category.includes('Meters') || product.category.includes('Testing') || product.category.includes('Monitoring') || product.slug.includes('meters') || product.slug.includes('testing'))
    }

    return matchesSearch
  })

  const isShowingProducts = selectedCategory !== null || searchQuery.trim() !== ''

  return (
    <main className="catalogue-page">
      <SEO lang={lang} pageKey="catalogue" />
      {/* HERO SECTION WITH CATALOGUE BACKGROUND IMAGE */}
      <section className="catalogue-hero-section">
        <div className="hero-bg-container">
          <img src={catalogueHeroBg} alt="Industrial Warehouse & Products Logistics" className="hero-bg-img" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="shell hero-container-inner">
          {/* BREADCRUMB NAV OVER HERO BACKGROUND */}
          <div className="breadcrumb-bar">
            <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">{isAr ? 'المنتجات' : 'Products'}</span>
          </div>

          <div className="hero-left-content reveal-up">
            <p className="hero-gold-badge">
              {isAr ? 'كتالوج المنتجات والسجلات الفنية' : 'PRODUCT CATALOGUE & TECHNICAL RECORDS'}
            </p>
            <h1 className="hero-headline">
              {isAr ? 'المنتجات الصناعية والتقنية' : 'Industrial & Technology Products'}
            </h1>
            <p className="hero-lead-text">
              {isAr
                ? 'استكشف معدات كهربائية موثوقة، أنظمة UPS للطاقة، أجهزة قياس ومراقبة الجهد، لوحات التحكم، الكابلات، ومنصات البرمجيات المؤسسية.'
                : 'Explore authentic industrial electrical equipment, UPS systems, power monitoring meters, control panels, cables, and enterprise software platforms.'}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section id="catalogue-grid-section" className="shell section-spacing reveal-up">
        {!isShowingProducts ? (
          /* 1. PRODUCT TYPES / CATEGORIES VIEW (MATCHING SERVICES GRID) */
          <div className="product-types-view">
            <div className="section-head-flex" style={{ marginBottom: '32px' }}>
              <div className="section-head-left">
                <p className="gold-subtitle">{isAr ? 'أقسام المنتجات' : 'PRODUCT CATEGORIES & TYPES'}</p>
                <h2 className="section-main-heading">
                  {isAr ? 'اختر قسم المنتجات للاطلاع على الموديلات' : 'Explore Products by Category & Equipment Type'}
                </h2>
              </div>
              <p className="section-head-desc">
                {isAr
                  ? 'اختر نوع المنتجات أدناه لتصفح المعدات المتاحة والمواصفات الفنية والأسعار ورقم القطعة.'
                  : 'Select a product category below to view authentic equipment models, technical specifications, pricing, and availability.'}
              </p>
            </div>

            <div className="services-template-grid">
              {productTypes.map((type) => {
                const IconComp = type.icon
                return (
                  <article
                    className="services-template-card product-type-card"
                    key={type.id}
                    onClick={() => {
                      setSelectedCategory(type.categoryKey)
                      const el = document.getElementById('catalogue-grid-section')
                      if (el) {
                        const yOffset = -90
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="service-card-top-row">
                      <div className="service-card-icon">
                        <IconComp size={24} />
                      </div>
                    </div>
                    <h3>{type.title}</h3>
                    <p>{type.desc}</p>
                    <div className="service-card-link">
                      <span>{isAr ? 'استعرض المنتجات' : 'View Related Products'}</span>
                      <ArrowRight size={14} />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ) : (
          /* 2. REVEALED PRODUCTS GRID VIEW */
          <div className="revealed-products-view">
            {/* BACK TO CATEGORIES HEADER BAR */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <button
                type="button"
                className="btn-secondary-white"
                onClick={() => {
                  setSelectedCategory(null)
                  setSearchQuery('')
                  setSearchParams({})
                }}
                style={{ cursor: 'pointer', gap: '8px' }}
              >
                <ArrowLeft size={16} />
                <span>{isAr ? 'العودة إلى أقسام المنتجات' : '← Back to All Product Categories'}</span>
              </button>

              <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b' }}>
                {isAr ? `عرض منتجات: ${selectedCategory || searchQuery}` : `Viewing category: ${selectedCategory || searchQuery}`}
              </div>
            </div>

            {/* FILTER & SEARCH CONTROL BAR */}
            <div className="catalogue-filter-bar">
              <div className="category-pills-row">
                <Filter size={16} className="gold-check-icon" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(cat)
                      setSearchParams({})
                      const el = document.getElementById('catalogue-grid-section')
                      if (el) {
                        const yOffset = -90
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="catalogue-search-box">
                <Search size={16} className="search-box-icon" />
                <input
                  type="text"
                  placeholder={isAr ? 'البحث عن منتج، موديل، أو علامة تجارية...' : 'Search product, model, or brand...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* PRODUCTS GRID (3 COLUMNS) */}
            <div className="catalogue-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} lang={lang} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products-found">
                <p>{isAr ? 'لم يتم العثور على منتجات تطابق بحثك.' : 'No products found matching your search.'}</p>
                <button type="button" className="btn-secondary-white" onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}>
                  {isAr ? 'إعادة ضبط والعودة للأقسام' : 'Reset & Back to Categories'}
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

