import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { productSearchTerms, products } from '../data/siteData'

export default function SearchPage({ lang = 'en' }) {
  const isAr = lang === 'ar'
  const basePath = isAr ? '/ar' : '/en'
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return products
    return products.filter((_, index) => productSearchTerms[index].includes(normalized))
  }, [query])

  return (
    <main>
      <PageHero
        label={isAr ? 'البحث' : 'Search'}
        title={isAr ? 'البحث عن المنتجات برقم الموديل، العلامة التجارية، رقم القطعة، أو الكلمات المفتاحية.' : 'Find products by model number, brand, part number, or keyword.'}
        text={isAr ? 'ابحث عبر كتالوج IBF حسب الموديل، رقم القطعة، العلامة التجارية أو الكلمات المفتاحية.' : 'Search across the IBF catalogue by model, MPN, brand or keyword.'}
      />
      <section className="shell search-section">
        <label className="search-box">
          <Search size={20} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={isAr ? 'ابحث عن Siemens, Eaton, NexERP, 9PX3000IRTN...' : 'Search Siemens, Eaton, NexERP, 9PX3000IRTN...'}
            autoFocus
          />
        </label>
        <div className="catalogue-grid">
          {results.map((product) => (
            <ProductCard key={product.slug} product={product} lang={lang} />
          ))}
        </div>
        {results.length === 0 && (
          <p className="empty-state">
            {isAr ? 'لم يتم العثور على منتجات مطابقة. جرب البحث بموديل آخر أو كلمة رئيسية.' : 'No matching products found. Try a model, brand, MPN, or category keyword.'}
          </p>
        )}
        <div className="search-footer" style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ color: 'var(--steel)', marginBottom: '12px' }}>
            {isAr ? 'هل تريد تصفح الكتالوج بالكامل؟' : 'Want to browse the full catalogue?'}
          </p>
          <a href={`${basePath}/catalogue`} className="button secondary">
            {isAr ? 'تصفح الكتالوج بالكامل' : 'Browse the full catalogue'}
          </a>
        </div>
      </section>
    </main>
  )
}
