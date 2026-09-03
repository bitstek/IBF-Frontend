import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, User } from 'lucide-react'
import Logo from './Logo'
import footerWorldMap from '../assets/footer-world-map.png'

export default function Footer() {
  const location = useLocation()
  const isAr = location.pathname.startsWith('/ar')
  const basePath = isAr ? '/ar' : '/en'

  return (
    <footer className="template-footer">
      <div className="shell footer-main-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-brand-col">
          <Logo inverted isAr={isAr} />
          <p className="footer-tagline-template">
            {isAr ? (
              <>
                حلول تربط الصناعات.
                <br />
                تكنولوجيا تقود النمو.
                <br />
                شراكات تحقق القيمة.
              </>
            ) : (
              <>
                Solutions that connect industries.
                <br />
                Technology that drives growth.
                <br />
                Partnerships that deliver value.
              </>
            )}
          </p>
          <div className="footer-social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              in
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
              X
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon">
              ▶
            </a>
          </div>
        </div>

        {/* Column 2: QUICK LINKS */}
        <div className="footer-links-col">
          <h4>{isAr ? 'روابط سريعة' : 'QUICK LINKS'}</h4>
          <ul>
            <li><Link to={`${basePath}`}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
            <li><Link to={`${basePath}/services`}>{isAr ? 'الخدمات' : 'Services'}</Link></li>
            <li><Link to={`${basePath}/catalogue`}>{isAr ? 'المنتجات' : 'Products'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'القطاعات' : 'Industries'}</Link></li>
            <li><Link to={`${basePath}/about`}>{isAr ? 'عن الشركة' : 'About'}</Link></li>
            <li><Link to={`${basePath}/contact`}>{isAr ? 'اتصل بنا' : 'Contact'}</Link></li>
          </ul>
        </div>

        {/* Column 3: COMPANY */}
        <div className="footer-links-col">
          <h4>{isAr ? 'الشركة' : 'COMPANY'}</h4>
          <ul>
            <li><Link to={`${basePath}/about`}>{isAr ? 'عن الشركة' : 'About Us'}</Link></li>
            <li><Link to={`${basePath}/about`}>{isAr ? 'نهجنا' : 'Our Approach'}</Link></li>
            <li><Link to={`${basePath}/about`}>{isAr ? 'الوظائف' : 'Careers'}</Link></li>
          </ul>
        </div>

        {/* Column 4: PRODUCTS */}
        <div className="footer-links-col">
          <h4>{isAr ? 'المنتجات' : 'PRODUCTS'}</h4>
          <ul>
            <li><Link to={`${basePath}/catalogue`}>{isAr ? 'نظرة عامة على المنتجات' : 'Products Overview'}</Link></li>
            <li><Link to={`${basePath}/catalogue`}>{isAr ? 'فئات المنتجات' : 'Product Categories'}</Link></li>
            <li><Link to={`${basePath}/catalogue`}>{isAr ? 'الوصلات الجديدة' : 'New Arrivals'}</Link></li>
          </ul>
        </div>

        {/* Column 5: INDUSTRIES */}
        <div className="footer-links-col">
          <h4>{isAr ? 'القطاعات' : 'INDUSTRIES'}</h4>
          <ul>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'النفط والغاز' : 'Oil & Gas'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'الطاقة' : 'Energy'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'القطاع الحكومي' : 'Government'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'البناء والإنشاءات' : 'Construction'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'التصنيع' : 'Manufacturing'}</Link></li>
            <li><Link to={`${basePath}/industries`}>{isAr ? 'الرعاية الصحية' : 'Healthcare'}</Link></li>
          </ul>
        </div>

        {/* Column 6: CONTACT & World Map */}
        <div className="footer-contact-col">
          <h4>{isAr ? 'التواصل' : 'CONTACT'}</h4>
          <ul className="contact-list">
            <li>
              <Link to={`${basePath}/request-a-quote`} className="contact-link-item">
                <User size={14} className="contact-icon" /> <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
              </Link>
            </li>
            <li>
              <Link to={`${basePath}/contact`} className="contact-link-item">
                <Mail size={14} className="contact-icon" /> <span>{isAr ? 'اتصل بـ IBF' : 'Contact IBF'}</span>
              </Link>
            </li>
            <li>
              <Link to={`${basePath}/contact`} className="contact-link-item">
                <MapPin size={14} className="contact-icon" /> <span>{isAr ? 'مواقع المكاتب' : 'Office Locations'}</span>
              </Link>
            </li>
          </ul>
          
          {/* Global Network World Map Image */}
          <div className="footer-world-map">
            <img src={footerWorldMap} alt="IBF Global Network Connections Map" className="world-map-img" />
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom-bar">
        <div className="shell footer-bottom-inner">
          <span className="copyright-text">
            {isAr ? '© 2025 IBF العالمية. جميع الحقوق محفوظة.' : '© 2025 IBF Global. All rights reserved.'}
          </span>
          <div className="footer-legal-links">
            <Link to={`${basePath}/privacy-policy`}>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            <span className="legal-divider">|</span>
            <Link to={`${basePath}/terms-of-use`}>{isAr ? 'شروط الاستخدام' : 'Terms of Use'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


