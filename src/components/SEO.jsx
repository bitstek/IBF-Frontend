import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoPagesData, siteMetadata } from '../data/seoData'

export default function SEO({
  lang = 'en',
  pageKey = 'home',
  customTitle,
  customDescription,
  customCanonical,
  type = 'website',
  productData,
  serviceData,
  faqs: customFaqs,
}) {
  const location = useLocation()
  const isAr = lang === 'ar'
  const currentLangData = seoPagesData[isAr ? 'ar' : 'en'] || seoPagesData.en
  const pageMeta = currentLangData[pageKey] || currentLangData.home || {}

  const title = customTitle || pageMeta.title || siteMetadata.siteName
  const description = customDescription || pageMeta.description || ''
  const keywords = pageMeta.keywords || ''
  const canonicalPath = customCanonical || pageMeta.canonical || location.pathname
  const canonicalUrl = `${siteMetadata.domain}${canonicalPath}`

  // Opposite language url for hreflang
  const currentPath = location.pathname
  const enUrl = `${siteMetadata.domain}${currentPath.replace(/^\/ar/, '/en')}`
  const arUrl = `${siteMetadata.domain}${currentPath.startsWith('/ar') ? currentPath : '/ar' + currentPath.replace(/^\/en/, '')}`

  const faqs = customFaqs || pageMeta.faqs || []

  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // Helper to update or set meta tag
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper to update or set link tag
    const setLinkTag = (rel, href, extraProps = {}) => {
      let selector = `link[rel="${rel}"]`
      if (extraProps.hreflang) {
        selector += `[hreflang="${extraProps.hreflang}"]`
      }
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        if (extraProps.hreflang) element.setAttribute('hreflang', extraProps.hreflang)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // 2. SEO Primary Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description)
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords)
    }
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // 3. OpenGraph / GEO Metadata
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type)
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', siteMetadata.siteName)
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', isAr ? 'ar_SA' : 'en_US')
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', siteMetadata.defaultOgImage)

    // 4. Twitter Card Metadata
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', siteMetadata.defaultOgImage)

    // 5. Canonical & Hreflang Tags
    setLinkTag('canonical', canonicalUrl)
    setLinkTag('alternate', enUrl, { hreflang: 'en' })
    setLinkTag('alternate', arUrl, { hreflang: 'ar' })
    setLinkTag('alternate', enUrl, { hreflang: 'x-default' })

    // 6. JSON-LD Schemas (GEO & AEO Answer Engine Optimization)
    const jsonLdScripts = []

    // Schema A: Organization & LocalBusiness (GEO - Generative Engine Optimization)
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness', 'Corporation'],
      '@id': `${siteMetadata.domain}/#organization`,
      name: siteMetadata.organization.name,
      alternateName: siteMetadata.organization.alternateName,
      legalName: siteMetadata.organization.legalName,
      url: siteMetadata.domain,
      logo: siteMetadata.organization.logo,
      email: siteMetadata.organization.email,
      telephone: siteMetadata.organization.phone,
      address: {
        '@type': 'PostalAddress',
        ...siteMetadata.organization.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        ...siteMetadata.organization.geo,
      },
      sameAs: siteMetadata.organization.sameAs,
      areaServed: {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
      knowsAbout: [
        'Industrial Electrical Procurement',
        'AI & Digital Solutions',
        'Industrial IoT Telemetry',
        'Managed IT Services',
        'Saudi Market Entry & MISA Licensing',
        'ISO Certification & Regulatory Compliance',
      ],
    }

    // Schema B: WebSite & SearchAction
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteMetadata.domain}/#website`,
      url: siteMetadata.domain,
      name: siteMetadata.siteName,
      publisher: { '@id': `${siteMetadata.domain}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteMetadata.domain}/${isAr ? 'ar' : 'en'}/catalogue?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }

    // Schema C: BreadcrumbList
    const pathSegments = currentPath.split('/').filter(Boolean)
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const itemUrl = `${siteMetadata.domain}/${pathSegments.slice(0, index + 1).join('/')}`
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: itemUrl,
      }
    })
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    }

    jsonLdScripts.push(orgSchema, webSiteSchema, breadcrumbSchema)

    // Schema D: AEO FAQPage Schema (Answer Engine Optimization for ChatGPT/Perplexity/Copilot)
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
      jsonLdScripts.push(faqSchema)
    }

    // Schema E: Product Schema if provided
    if (productData) {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name || title,
        description: productData.desc || description,
        image: productData.img || siteMetadata.defaultOgImage,
        brand: {
          '@type': 'Brand',
          name: productData.brand || 'IBF Global',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'SAR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: canonicalUrl,
        },
      }
      jsonLdScripts.push(productSchema)
    }

    // Schema F: Service Schema if provided
    if (serviceData) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceData.title || title,
        description: serviceData.desc || description,
        provider: { '@id': `${siteMetadata.domain}/#organization` },
        areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
      }
      jsonLdScripts.push(serviceSchema)
    }

    // Inject JSON-LD Script Tags into Document Head
    const scriptId = 'ibf-jsonld-schemas'
    let existingScript = document.head.querySelector(`#${scriptId}`)
    if (!existingScript) {
      existingScript = document.createElement('script')
      existingScript.id = scriptId
      existingScript.type = 'application/ld+json'
      document.head.appendChild(existingScript)
    }
    existingScript.textContent = JSON.stringify(jsonLdScripts, null, 2)
  }, [title, description, keywords, canonicalUrl, isAr, type, faqs, productData, serviceData, enUrl, arUrl])

  return null
}
