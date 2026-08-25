import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, Moon, Search, Sun, User, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [headerSearchQuery, setHeaderSearchQuery] = useState('')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const location = useLocation()
  const navigate = useNavigate()
  const isAr = location.pathname.startsWith('/ar')
  const basePath = isAr ? '/ar' : '/en'

  const handleHeaderSearchSubmit = (e) => {
    e.preventDefault()
    if (headerSearchQuery.trim()) {
      navigate(`${basePath}/catalogue?search=${encodeURIComponent(headerSearchQuery.trim())}`)
      setHeaderSearchQuery('')
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Compute opposite language URL for switcher button
  const currentPath = location.pathname
  const targetLangPath = isAr
    ? currentPath.replace(/^\/ar/, '/en')
    : currentPath.replace(/^\/en/, '/ar')

  const isServicesActive = currentPath.includes('/services') || currentPath.includes('/solutions')
  const isProductsActive = currentPath.includes('/catalogue')

  const servicesMenu = isAr
    ? [
        { label: 'التجارة والمشتريات', href: `${basePath}/solutions/trading-procurement` },
        { label: 'الذكاء الاصطناعي والحلول الرقمية', href: `${basePath}/solutions/ai-digital-solutions` },
        { label: 'حلول إنترنت الأشياء (IoT)', href: `${basePath}/solutions/iot-solutions` },
        { label: 'خدمات تكنولوجيا المعلومات', href: `${basePath}/solutions/it-services` },
        { label: 'دخول السوق السعودي', href: `${basePath}/solutions/saudi-market-entry` },
        { label: 'الآيزو والامتثال', href: `${basePath}/solutions/iso-compliance` },
        { label: 'الخدمات التقنية', href: `${basePath}/solutions/technology-services` },
      ]
    : [
        { label: 'Trading & Procurement', href: `${basePath}/solutions/trading-procurement` },
        { label: 'AI & Digital Solutions', href: `${basePath}/solutions/ai-digital-solutions` },
        { label: 'IoT Solutions', href: `${basePath}/solutions/iot-solutions` },
        { label: 'IT Services', href: `${basePath}/solutions/it-services` },
        { label: 'Saudi Market Entry', href: `${basePath}/solutions/saudi-market-entry` },
        { label: 'ISO & Compliance', href: `${basePath}/solutions/iso-compliance` },
        { label: 'Technology Services', href: `${basePath}/solutions/technology-services` },
      ]

  const productsMenu = isAr
    ? [
        { label: 'البرمجيات المؤسسية والذكاء الاصطناعي', href: `${basePath}/catalogue?category=software` },
        { label: 'الكهرباء الصناعية', href: `${basePath}/catalogue?category=electrical` },
        { label: 'أنظمة البطاريات والطاقة', href: `${basePath}/catalogue?category=power` },
        { label: 'المقومات والشواحن', href: `${basePath}/catalogue?category=rectifiers` },
        { label: 'التحكم والتحكم الآلي', href: `${basePath}/catalogue?category=control` },
        { label: 'الكابلات والملحقات', href: `${basePath}/catalogue?category=cables` },
        { label: 'الاختبار والقياس', href: `${basePath}/catalogue?category=testing` },
      ]
    : [
        { label: 'Enterprise Software & AI', href: `${basePath}/catalogue?category=software` },
        { label: 'Industrial Electrical', href: `${basePath}/catalogue?category=electrical` },
        { label: 'Batteries & Power Systems', href: `${basePath}/catalogue?category=power` },
        { label: 'Rectifiers & Chargers', href: `${basePath}/catalogue?category=rectifiers` },
        { label: 'Control & Automation', href: `${basePath}/catalogue?category=control` },
        { label: 'Cables & Accessories', href: `${basePath}/catalogue?category=cables` },
        { label: 'Test & Measurement', href: `${basePath}/catalogue?category=testing` },
      ]

  const industriesMenu = isAr
    ? [
        { label: 'القطاع الحكومي وشبه الحكومي', href: `${basePath}/industries` },
        { label: 'التصنيع والقطاع الصناعي', href: `${basePath}/industries` },
        { label: 'المرافق والبنية التحتية', href: `${basePath}/industries` },
        { label: 'الأبحاث والمختبرات', href: `${basePath}/industries` },
        { label: 'الهندسة والمشتريات والبناء', href: `${basePath}/industries` },
        { label: 'شركات التكنولوجيا', href: `${basePath}/industries` },
        { label: 'الشركات الدولية', href: `${basePath}/industries` },
      ]
    : [
        { label: 'Government & Semi-Government', href: `${basePath}/industries` },
        { label: 'Manufacturing & Industrial', href: `${basePath}/industries` },
        { label: 'Utilities & Infrastructure', href: `${basePath}/industries` },
        { label: 'Research & Laboratories', href: `${basePath}/industries` },
        { label: 'EPC & Procurement', href: `${basePath}/industries` },
        { label: 'Technology Companies', href: `${basePath}/industries` },
        { label: 'International Businesses', href: `${basePath}/industries` },
      ]

  return (
    <header className="template-header">
      <div className="shell header-inner">
        <Logo isAr={isAr} />

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to={`${basePath}`} end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {isAr ? 'الرئيسية' : 'Home'}
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to={`${basePath}/services`} className={`nav-link dropdown-trigger ${isServicesActive ? 'active' : ''}`}>
              {isAr ? 'الخدمات' : 'Services'} <ChevronDown size={13} className="dropdown-caret" />
            </Link>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu reveal-dropdown">
                {servicesMenu.map((item) => (
                  <Link key={item.label} to={item.href} className="dropdown-item">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to={`${basePath}/catalogue`} className={`nav-link dropdown-trigger ${isProductsActive ? 'active' : ''}`}>
              {isAr ? 'المنتجات' : 'Products'} <ChevronDown size={13} className="dropdown-caret" />
            </Link>
            {activeDropdown === 'products' && (
              <div className="dropdown-menu reveal-dropdown">
                {productsMenu.map((item) => (
                  <Link key={item.label} to={item.href} className="dropdown-item">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to={`${basePath}/industries`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {isAr ? 'القطاعات' : 'Industries'}
          </NavLink>

          <NavLink to={`${basePath}/about`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {isAr ? 'عن الشركة' : 'About'}
          </NavLink>

          <NavLink to={`${basePath}/contact`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {isAr ? 'اتصل بنا' : 'Contact'}
          </NavLink>
        </nav>

        <div className="header-actions">
          <form onSubmit={handleHeaderSearchSubmit} className="header-search-form">
            <input
              type="text"
              placeholder={isAr ? 'بحث عن منتج...' : 'Search product...'}
              value={headerSearchQuery}
              onChange={(e) => setHeaderSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button type="submit" className="header-search-btn" aria-label="Search">
              <Search size={14} />
            </button>
          </form>

          <Link to={`${basePath}/request-a-quote`} className="btn-request-quote-template">
            <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
            <User size={15} className="user-icon-quote" />
          </Link>
          <Link to={targetLangPath || (isAr ? '/en' : '/ar')} className="lang-pill-template" aria-label="Switch language">
            {isAr ? 'EN' : 'AR'}
          </Link>
          <button
            type="button"
            className="theme-toggle-pill"
            onClick={toggleTheme}
            aria-label={isAr ? 'تبديل المظهر' : 'Toggle theme'}
            title={theme === 'dark' ? (isAr ? 'الوضع الفاتح' : 'Switch to Light Mode') : (isAr ? 'الوضع الداكن' : 'Switch to Dark Mode')}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="sun-icon" />
                <span className="theme-toggle-label">{isAr ? 'فاتح' : 'Light'}</span>
              </>
            ) : (
              <>
                <Moon size={15} className="moon-icon" />
                <span className="theme-toggle-label">{isAr ? 'داكن' : 'Dark'}</span>
              </>
            )}
          </button>
          <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-panel" aria-label="Mobile navigation">
          <form
            onSubmit={(e) => {
              handleHeaderSearchSubmit(e)
              setOpen(false)
            }}
            className="mobile-search-form"
          >
            <input
              type="text"
              placeholder={isAr ? 'بحث عن منتج...' : 'Search product...'}
              value={headerSearchQuery}
              onChange={(e) => setHeaderSearchQuery(e.target.value)}
              className="mobile-search-input"
            />
            <button type="submit" className="mobile-search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </form>

          <NavLink to={`${basePath}`} onClick={() => setOpen(false)}>
            {isAr ? 'الرئيسية' : 'Home'}
          </NavLink>
          <div className="mobile-subgroup">
            <span className="mobile-subgroup-title">{isAr ? 'الخدمات' : 'Services'}</span>
            {servicesMenu.map((item) => (
              <NavLink key={item.label} to={item.href} onClick={() => setOpen(false)}>
                › {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mobile-subgroup">
            <span className="mobile-subgroup-title">{isAr ? 'المنتجات' : 'Products'}</span>
            {productsMenu.map((item) => (
              <NavLink key={item.label} to={item.href} onClick={() => setOpen(false)}>
                › {item.label}
              </NavLink>
            ))}
          </div>
          <NavLink to={`${basePath}/industries`} onClick={() => setOpen(false)}>
            {isAr ? 'القطاعات' : 'Industries'}
          </NavLink>
          <NavLink to={`${basePath}/about`} onClick={() => setOpen(false)}>
            {isAr ? 'عن الشركة' : 'About'}
          </NavLink>
          <NavLink to={`${basePath}/contact`} onClick={() => setOpen(false)}>
            {isAr ? 'اتصل بنا' : 'Contact'}
          </NavLink>
          <div className="mobile-theme-row">
            <span>{isAr ? 'المظهر:' : 'Theme:'}</span>
            <button
              type="button"
              className="theme-toggle-pill mobile-theme-btn"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={15} className="sun-icon" />
                  <span>{isAr ? 'الوضع الفاتح' : 'Light Mode'}</span>
                </>
              ) : (
                <>
                  <Moon size={15} className="moon-icon" />
                  <span>{isAr ? 'الوضع الداكن' : 'Dark Mode'}</span>
                </>
              )}
            </button>
          </div>
          <NavLink to={`${basePath}/request-a-quote`} className="mobile-rfq-btn" onClick={() => setOpen(false)}>
            <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
            <User size={15} />
          </NavLink>
        </nav>
      )}
    </header>
  )
}

