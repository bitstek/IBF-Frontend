import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  HardDrive,
  ShieldCheck,
  ShoppingCart,
  Tag,
  User,
} from 'lucide-react'
import ProductVisual from '../components/ProductVisual'
import { products } from '../data/siteData'

export default function ProductDetail({ lang = 'en' }) {
  const { slug } = useParams()
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <main className="shell not-found">
        <h1>{isAr ? 'المنتج غير موجود' : 'Product not found'}</h1>
        <Link to={`${basePath}/catalogue`} className="button secondary">
          <ArrowLeft size={16} /> {isAr ? 'العودة إلى الكتالوج' : 'Back to catalogue'}
        </Link>
      </main>
    )
  }

  return (
    <main className="product-detail-page">
      {/* BREADCRUMB NAV */}
      <div className="shell breadcrumb-bar">
        <Link to={basePath}>{isAr ? 'الرئيسية' : 'Home'}</Link>
        <ChevronRight size={14} className="breadcrumb-arrow" />
        <Link to={`${basePath}/catalogue`}>{isAr ? 'المنتجات' : 'Products'}</Link>
        <ChevronRight size={14} className="breadcrumb-arrow" />
        <span className="breadcrumb-current">{product.model}</span>
      </div>

      <section className="shell product-detail-section reveal-up">
        <div className="product-detail-layout">
          {/* PRODUCT VISUAL IMAGE BOX */}
          <div className="product-detail-visual-box">
            <ProductVisual product={product} />
          </div>

          {/* PRODUCT SPECIFICATIONS AND INFO */}
          <div className="product-detail-content">
            <span className="product-detail-brand-badge">{product.brand}</span>
            <h1 className="product-detail-title">{product.model}</h1>
            <p className="product-detail-category">{product.category}</p>

            <div className="product-detail-price-card">
              <div className="detail-price-val">{product.price}</div>
              {product.priceNote && <div className="detail-price-sub">{product.priceNote}</div>}
            </div>

            <div className="product-detail-specs-grid">
              <div className="spec-tile">
                <Tag size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'رقم القطعة (MPN)' : 'MPN / Part Number'}</small>
                  <strong>{product.mpn}</strong>
                </div>
              </div>
              <div className="spec-tile">
                <User size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'أدنى كمية طلب (MOQ)' : 'Minimum Order Quantity'}</small>
                  <strong>{product.moq}</strong>
                </div>
              </div>
              <div className="spec-tile">
                <Clock size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'مدة التوريد' : 'Lead Time'}</small>
                  <strong>{product.leadTime}</strong>
                </div>
              </div>
              <div className="spec-tile">
                <ShieldCheck size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'الضمان' : 'Warranty Standard'}</small>
                  <strong>{product.warranty}</strong>
                </div>
              </div>
              <div className="spec-tile">
                <Globe2 size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'بلد المنشأ' : 'Country of Origin'}</small>
                  <strong>{product.origin}</strong>
                </div>
              </div>
              <div className="spec-tile">
                <HardDrive size={16} className="spec-icon" />
                <div>
                  <small>{isAr ? 'رمز النظام المنسق' : 'HS Code'}</small>
                  <strong>{product.hsCode}</strong>
                </div>
              </div>
            </div>

            {product.tiers && (
              <div className="product-tier-box">
                <FileText size={16} className="gold-check-icon" />
                <span>{product.tiers}</span>
              </div>
            )}

            <div className="product-detail-actions">
              <Link to={`${basePath}/request-a-quote?product=${product.slug}`} className="btn-primary-navy">
                <ShoppingCart size={17} /> <span>{isAr ? 'طلب عرض سعر رسمي' : 'Request Official Quote'}</span> <ArrowRight size={16} />
              </Link>
              <Link to={`${basePath}/catalogue`} className="btn-secondary-white">
                <ArrowLeft size={16} /> <span>{isAr ? 'العودة إلى الكتالوج' : 'Back to Catalogue'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
