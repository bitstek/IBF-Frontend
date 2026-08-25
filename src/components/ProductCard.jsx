import { Link } from 'react-router-dom'
import { ChevronRight, Clock, ShieldCheck, ShoppingCart, User } from 'lucide-react'

export default function ProductCard({ product, lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const url = product.slug === 'nexerp-enterprise-platform' ? `${basePath}/catalogue/nexerp` : `${basePath}/catalogue/${product.slug}`

  return (
    <article className="template-product-card">
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="product-card-img-box">
        <img src={product.image} alt={`${product.brand} ${product.model}`} />
        <span className="product-card-brand-badge">{product.brand}</span>
      </div>

      {/* PRODUCT CONTENT */}
      <div className="product-card-info">
        <h3 className="product-model-name">{product.model}</h3>
        <div className="product-mpn-text">
          <span>MPN:</span> <strong className="ltr-num">{product.mpn}</strong>
        </div>
        <div className="product-category-text">{product.category}</div>

        <div className="product-price-section">
          <div className="price-val ltr-num">{product.price}</div>
          {product.priceNote && <div className="price-note">{product.priceNote}</div>}
        </div>

        <div className="product-spec-inline">
          <span className="spec-item"><User size={12} /> MOQ: <strong className="ltr-num">{product.moq}</strong></span>
          <span className="spec-item"><Clock size={12} /> {product.leadTime}</span>
          <span className="spec-item"><ShieldCheck size={12} /> {product.warranty}</span>
        </div>

        {/* PROPER ACTION BUTTONS */}
        <div className="product-card-buttons">
          <Link to={url} className="btn-card-outline">
            <span>{isAr ? 'عرض التفاصيل' : 'View Product'}</span>
            <ChevronRight size={14} className="arrow-icon" />
          </Link>
          <Link to={`${basePath}/request-a-quote?product=${product.slug}`} className="btn-card-navy">
            <ShoppingCart size={14} />
            <span>{isAr ? 'طلب عرض سعر' : 'Request Quote'}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
