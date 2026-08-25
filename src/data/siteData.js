import {
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Cpu,
  Database,
  FileCheck2,
  Globe2,
  Handshake,
  HardDrive,
  Layers3,
  LineChart,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import nexerpDashboard from '../assets/nexerp-dashboard.png'
import siemensMeter from '../assets/siemens-meter.png'
import eatonUps from '../assets/eaton-ups.png'
import prodElectrical from '../assets/prod-electrical.jpg'
import prodBatteries from '../assets/prod-batteries.jpg'
import prodRectifiers from '../assets/prod-rectifiers.jpg'
import prodControl from '../assets/prod-control.jpg'
import prodCables from '../assets/prod-cables.jpg'
import prodMeters from '../assets/prod-meters.jpg'
import partnerSiemens from '../assets/partner-siemens.svg'
import partnerEaton from '../assets/partner-eaton.svg'
import partnerSchneider from '../assets/partner-schneider.svg'
import partnerAbb from '../assets/partner-abb.svg'
import partnerHuawei from '../assets/partner-huawei.svg'
import partnerDell from '../assets/partner-dell.svg'
import partnerApc from '../assets/partner-apc.svg'
import partnerCisco from '../assets/partner-cisco.svg'
import prodMiningBattery from '../assets/prod-mining-battery.png'
import prodOpzsFlooded from '../assets/prod-opzs-flooded.png'
import prodOpzvGel from '../assets/prod-opzv-gel.png'
import prodMotivePower from '../assets/prod-motive-power.png'
import prod2vAgmVrla from '../assets/prod-2v-agm-vrla.png'
import prodRailBattery from '../assets/prod-rail-battery.png'

export const company = {
  name: 'International Business Front',
  tagline: 'Your Business Front in Saudi Arabia',
  location: 'Jeddah, Kingdom of Saudi Arabia',
  phone: '+966 55 757 1816',
  phoneHref: 'tel:+966557571816',
  whatsapp: 'https://wa.me/966557571816',
  email: 'ms@ibf.com.sa',
  cr: '7023268134',
  vat: '310921625400003',
}

export const navLinks = [
  { label: 'Home', href: '/en' },
  { label: 'Catalogue', href: '/en/catalogue' },
  { label: 'Search', href: '/en/search' },
  { label: 'Industries', href: '/en/industries' },
  { label: 'Request Quote', href: '/en/request-a-quote' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
]

export const navLinksAr = [
  { label: 'الرئيسية', href: '/ar' },
  { label: 'الكتالوج', href: '/ar/catalogue' },
  { label: 'البحث', href: '/ar/search' },
  { label: 'القطاعات', href: '/ar/industries' },
  { label: 'طلب عرض سعر', href: '/ar/request-a-quote' },
  { label: 'عن IBF', href: '/ar/about' },
  { label: 'اتصل بنا', href: '/ar/contact' },
]


export const solutions = [
  {
    label: 'Trading & Procurement',
    href: '/en/solutions/trading-procurement',
    icon: PackageCheck,
    summary: 'Industrial electrical, automation, UPS, batteries and more',
    heading: 'Industrial sourcing, supplier coordination and delivery support from Saudi Arabia.',
    features: ['Product sourcing', 'Supplier coordination', 'Documentation support', 'Delivery management'],
  },
  {
    label: 'AI, IoT & Digital Solutions',
    href: '/en/solutions/ai-digital-solutions',
    icon: Cpu,
    summary: 'Smart automation, IoT platforms and digital transformation',
    heading: 'AI, IoT and workflow systems for practical digital operations.',
    features: ['IoT dashboards', 'AI-assisted reporting', 'Portal implementation', 'Workflow automation'],
  },
  {
    label: 'Saudi Market Entry',
    href: '/en/solutions/saudi-market-entry',
    icon: Handshake,
    summary: 'Business setup coordination and local partnerships',
    heading: 'A Saudi-facing front for overseas companies entering the Kingdom.',
    features: ['Local coordination', 'Vendor registration', 'Stakeholder readiness', 'Partner discovery'],
  },
  {
    label: 'ISO & Compliance',
    href: '/en/solutions/iso-compliance',
    icon: FileCheck2,
    summary: 'ISO implementation, audits and regulatory compliance',
    heading: 'Compliance-aware documentation and process support.',
    features: ['ISO readiness', 'Audit documentation', 'Policy coordination', 'Regulatory alignment'],
  },
  {
    label: 'Technology Services',
    href: '/en/solutions/technology-services',
    icon: Cloud,
    summary: 'IT infrastructure, cloud, cybersecurity and managed services',
    heading: 'Corporate technology services for secure operating environments.',
    features: ['Cloud deployment', 'Cybersecurity support', 'Managed services', 'Infrastructure planning'],
  },
]

export const products = [
  {
    brand: 'NexERP',
    model: 'NexERP Enterprise Platform',
    slug: 'nexerp-enterprise-platform',
    mpn: 'NEXERP-SAIP-2026',
    category: 'Enterprise Software · ERP & AI Ecosystem',
    price: 'SaaS subscription / quote',
    priceNote: 'SAIP registered trademark · ZATCA Phase 2 ready · Saudi deployment support',
    moq: '1 implementation scope',
    leadTime: 'Discovery workshop and implementation plan',
    warranty: 'Support SLA by proposal',
    origin: 'Saudi Arabia',
    hsCode: 'Software service classification by scope',
    icon: Layers3,
    accent: 'software',
    image: nexerpDashboard,
  },
  {
    brand: 'Siemens',
    model: '7KM PAC3200 Power Monitoring Device',
    slug: 'siemens-7km-pac3200-power-monitoring-device',
    mpn: '7KM2112-0BA00-3AA0',
    category: 'Electrical & Automation · Power Monitoring',
    price: 'SAR 2,400 to SAR 3,100',
    priceNote: 'Indicative, excl. VAT · Valid to 2026-08-31',
    moq: '1',
    leadTime: '2-5 weeks after supplier confirmation',
    warranty: '12 months subject to supplier terms',
    origin: 'Germany / EU supply chain',
    hsCode: '9030.33 (indicative)',
    tiers: '1 unit: SAR 3,100 · 5 units: SAR 2,850 · 10 units: SAR 2,650',
    icon: BarChart3,
    accent: 'meter',
    image: siemensMeter,
  },
  {
    brand: 'Eaton',
    model: '9PX3000IRTN Online UPS',
    slug: 'eaton-9px3000irtn-online-ups',
    mpn: '9PX3000IRTN',
    category: 'UPS & DC Power · Online UPS',
    price: 'Price on request',
    priceNote: 'Excl. VAT · Supplier confirmation required',
    moq: '1',
    leadTime: 'Supplier confirmation required',
    warranty: '12-24 months subject to supplier and region',
    origin: 'Supplier confirmed',
    hsCode: '8504.40 (indicative)',
    icon: HardDrive,
    accent: 'ups',
    image: eatonUps,
  },
  {
    brand: 'Schneider / ABB',
    model: 'Electrical & Industrial Equipment',
    slug: 'electrical-industrial-equipment',
    mpn: 'IND-ELEC-8000',
    category: 'Electrical & Industrial Equipment',
    price: 'Price on request',
    priceNote: 'Excl. VAT · Tailored project quotes',
    moq: '1 batch',
    leadTime: '1-3 weeks upon PO',
    warranty: '12-24 months warranty',
    origin: 'Global authorized manufacturers',
    hsCode: '8536.20',
    icon: Zap,
    accent: 'electrical',
    image: prodElectrical,
  },
  {
    brand: 'Eaton / Hoppecke',
    model: 'Industrial Batteries & Power Backups',
    slug: 'industrial-batteries-power-backups',
    mpn: 'BAT-IND-4000',
    category: 'Industrial Batteries',
    price: 'Price on request',
    priceNote: 'VRLA, AGM & Gel industrial batteries',
    moq: '1 set',
    leadTime: '2-4 weeks',
    warranty: '24-36 months warranty',
    origin: 'Authorized OEM suppliers',
    hsCode: '8507.20',
    icon: HardDrive,
    accent: 'batteries',
    image: prodBatteries,
  },
  {
    brand: 'AEG / Vertiv',
    model: 'Rectifiers & DC Power Systems',
    slug: 'rectifiers-dc-power-systems',
    mpn: 'RECT-DC-9000',
    category: 'UPS & DC Power Systems',
    price: 'Price on request',
    priceNote: 'Industrial grade 110V/220V DC systems',
    moq: '1 system',
    leadTime: '3-6 weeks',
    warranty: '24 months',
    origin: 'EU / Global supply chain',
    hsCode: '8504.40',
    icon: Cpu,
    accent: 'rectifiers',
    image: prodRectifiers,
  },
  {
    brand: 'Siemens / Schneider',
    model: 'Control & Protection Equipment',
    slug: 'control-protection-equipment',
    mpn: 'CTRL-PROT-5000',
    category: 'Control & Protection Equipment',
    price: 'Price on request',
    priceNote: 'Relays, PLCs & motor protection units',
    moq: '1 unit',
    leadTime: '1-2 weeks',
    warranty: '12-24 months',
    origin: 'Germany / France',
    hsCode: '8537.10',
    icon: ShieldCheck,
    accent: 'control',
    image: prodControl,
  },
  {
    brand: 'Prysmian / Nexans',
    model: 'Structured Power & Data Cables (Cabling & Wiring)',
    slug: 'structured-power-data-cabling',
    mpn: 'CBL-PWR-DATA-7000',
    category: 'Cables, Cabling & Infrastructure',
    tags: ['cables', 'cable', 'cabling', 'wiring', 'power cables', 'fiber optic'],
    price: 'Price on request',
    priceNote: 'Armored power, control & fiber optic cables',
    moq: '1 drum (500m)',
    leadTime: '1-2 weeks',
    warranty: '10 years manufacturer warranty',
    origin: 'Saudi Arabia / EU',
    hsCode: '8544.49',
    icon: Zap,
    accent: 'cables',
    image: prodCables,
  },
  {
    brand: 'Fluke / Megger',
    model: 'Digital Meters & Testing Instruments',
    slug: 'digital-meters-testing-instruments',
    mpn: 'MTR-TST-3000',
    category: 'Testing & Measuring Meters',
    price: 'Price on request',
    priceNote: 'Multimeters, insulation testers & power analyzers',
    moq: '1 unit',
    leadTime: 'Immediate from stock',
    warranty: '3 years Fluke warranty',
    origin: 'USA / UK',
    hsCode: '9030.31',
    icon: BarChart3,
    accent: 'meters',
    image: prodMeters,
  },
  {
    brand: 'Microtex',
    model: 'Mining Traction Battery Pack',
    slug: 'microtex-mining-traction-battery',
    mpn: 'MTX-MINE-TRAC-01',
    category: 'Industrial Batteries · Mining Traction',
    price: 'Price on request',
    priceNote: 'Vented lead-acid increased-safety packs for underground fleets',
    moq: '1 pack (with matched charger)',
    leadTime: '4-8 weeks',
    warranty: '15+ years operational life',
    origin: 'India',
    hsCode: '8507.10',
    icon: HardDrive,
    accent: 'batteries',
    image: prodMiningBattery,
  },
  {
    brand: 'Microtex',
    model: 'OPzS Flooded Tubular Cells',
    slug: 'microtex-opzs-flooded-tubular-cells',
    mpn: 'MTX-OPZS-2V-3000',
    category: 'Industrial Batteries · OPzS Flooded',
    price: 'Price on request',
    priceNote: '2V flooded tubular cells, 100 to 3000 Ah, IEEE Std 344 seismic qualified',
    moq: '1 bank (minimum 24 cells)',
    leadTime: '6-10 weeks',
    warranty: '20+ years design life',
    origin: 'India (C5 tested at CPRI)',
    hsCode: '8507.20',
    icon: HardDrive,
    accent: 'batteries',
    image: prodOpzsFlooded,
  },
  {
    brand: 'Microtex',
    model: 'OPzV Gel Tubular Battery',
    slug: 'microtex-opzv-gel-tubular-battery',
    mpn: 'MTX-OPZV-GEL-2V',
    category: 'Industrial Batteries · OPzV Gel',
    price: 'Price on request',
    priceNote: 'Sealed tubular gel for solar, telecom, oil & gas standby',
    moq: '1 cell',
    leadTime: '4-8 weeks',
    warranty: '18+ years design life',
    origin: 'India',
    hsCode: '8507.20',
    icon: HardDrive,
    accent: 'batteries',
    image: prodOpzvGel,
  },
  {
    brand: 'Microtex',
    model: 'Motive Power Traction Battery',
    slug: 'microtex-motive-power-traction-battery',
    mpn: 'MTX-MOT-TRAC-DIN',
    category: 'Industrial Batteries · Motive Power',
    price: 'Price on request',
    priceNote: 'Deep-cycle tubular cells for forklifts, golf carts, access platforms',
    moq: '1 pack',
    leadTime: '4-6 weeks',
    warranty: 'C5 tested at CPRI, built for 3rd year minimum',
    origin: 'India',
    hsCode: '8507.10',
    icon: HardDrive,
    accent: 'batteries',
    image: prodMotivePower,
  },
  {
    brand: 'Microtex',
    model: '2V AGM VRLA Sealed Cells',
    slug: 'microtex-2v-agm-vrla-sealed-cells',
    mpn: 'MTX-2V-AGM-5000',
    category: 'Industrial Batteries · 2V AGM VRLA',
    price: 'Price on request',
    priceNote: 'Sealed 2V cells up to 5,000 Ah for UPS, hospitals, control rooms',
    moq: '1 bank',
    leadTime: '6-10 weeks',
    warranty: 'High-rate, rack-mounted, 200 to 5,000 Ah approval pedigree',
    origin: 'India',
    hsCode: '8507.20',
    icon: HardDrive,
    accent: 'batteries',
    image: prod2vAgmVrla,
  },
  {
    brand: 'Microtex',
    model: 'Rail Signalling & Locomotive Battery',
    slug: 'microtex-rail-signalling-locomotive-battery',
    mpn: 'MTX-RAIL-SIG-01',
    category: 'Industrial Batteries · Rail',
    price: 'Price on request',
    priceNote: 'Indian Railways approved: signalling, coach, and locomotive starter batteries',
    moq: '1 set',
    leadTime: '4-8 weeks',
    warranty: 'Indian Railways duty-bred design',
    origin: 'India',
    hsCode: '8507.10',
    icon: HardDrive,
    accent: 'batteries',
    image: prodRailBattery,
  },
]

export const helpCards = [
  {
    icon: Database,
    title: 'Product discovery',
    text: 'Browse product records with model numbers, part numbers, specifications, documents, applications, origin, warranty and lead-time guidance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Structured Quote Requests',
    text: 'Share product details, quantities, drawings or BOQ files through a direct quote request to IBF.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial follow-up',
    text: 'IBF reviews requirements, documentation needs, delivery location and supplier availability before preparing the next commercial step.',
  },
]

export const industries = [
  'Government and semi-government organizations',
  'Industrial companies and manufacturers',
  'Utilities and infrastructure operators',
  'Research institutions and laboratories',
  'International manufacturers entering Saudi Arabia',
  'EPC contractors and procurement departments',
  'Technology companies seeking a Saudi partner',
]

export const stats = [
  { label: 'Products Available', value: '10K+', icon: Search },
  { label: 'Trusted Customers', value: '500+', icon: Users },
  { label: 'On-time Delivery', value: '98%', icon: Truck },
  { label: 'Support Available', value: '24/7', icon: Phone },
]

export const trustItems = [
  { title: 'Saudi Based', text: 'Jeddah, Saudi Arabia', icon: MapPin },
  { title: 'Trusted Partner', text: 'For enterprises & contractors', icon: Handshake },
  { title: 'Quality Assured', text: 'Authentic & reliable products', icon: BadgeCheck },
  { title: 'On-time Delivery', text: 'Across Saudi Arabia', icon: Truck },
]

export const nexerpModules = [
  { title: 'Finance & Accounting', icon: LineChart, text: 'General ledger, AR/AP, bank reconciliation and ZATCA Phase 2 e-invoicing compliance.' },
  { title: 'AI & Business Intelligence', icon: Cpu, text: 'Predictive forecasting, anomaly detection and real-time executive decision dashboards.' },
  { title: 'Workflow Automation', icon: Workflow, text: 'Approval engines, multi-stage task routing, digital playbooks and rule triggers.' },
  { title: 'Procurement & Inventory', icon: ShoppingCart, text: 'Requisition approvals, stock management, batch tracking and purchase orders.' },
  { title: 'CRM & Sales Pipeline', icon: Users, text: 'Lead attribution, quotation generator, deal pipeline tracking and customer SLA desk.' },
  { title: 'HR & Payroll', icon: CheckCircle2, text: 'Employee self-service, attendance, payroll and GOSI/WPS operating requirements.' },
]

export const whyChoose = [
  'Saudi-based operations with local market knowledge',
  'Trusted by contractors, consultants and enterprises',
  'Genuine products from authorized global brands',
  'Competitive pricing with transparent quotations',
  'Technical documentation and compliance support',
  'Flexible delivery across Saudi Arabia',
  'After-sales support and warranty assistance',
  'Long-term partner for growth and transformation',
]

export const recentActivity = [
  ['Siemens 7KM PAC3200 added to catalogue', 'Aug 04, 2026'],
  ['Eaton 9PX3000IRTN updated', 'Aug 03, 2026'],
  ['New rectifier and battery models available', 'Aug 02, 2026'],
  ['NexERP platform now available', 'Aug 01, 2026'],
]

export const partners = [
  { name: 'SIEMENS', logo: partnerSiemens },
  { name: 'EATON', logo: partnerEaton },
  { name: 'Schneider Electric', logo: partnerSchneider },
  { name: 'ABB', logo: partnerAbb },
  { name: 'Huawei', logo: partnerHuawei },
  { name: 'Dell Technologies', logo: partnerDell },
  { name: 'APC', logo: partnerApc },
  { name: 'Cisco', logo: partnerCisco },
]

export const ctaCopy = {
  label: 'Start a structured conversation',
  heading: 'Need a Saudi partner for a commercial or technology requirement?',
  text: 'Share your RFQ, market-entry requirement, compliance scope, or digital implementation brief. IBF will respond with a practical next step.',
}

export const saipClasses = [
  ['Class 9', 'Software & AI Engines', 'Recorded computer software, ERP engines, AI analytics software, e-invoicing applications, and cloud-connected enterprise tools.'],
  ['Class 42', 'SaaS & Cloud Services', 'Software as a Service, cloud hosting, digital transformation consulting, platform integrations and IT security services.'],
  ['Class 35', 'Business Administration', 'Enterprise administration, automated inventory and procurement management services, and business analytics processing.'],
]

export const productSearchTerms = products.map((product) =>
  `${product.brand} ${product.model} ${product.mpn} ${product.category} ${product.price}`.toLowerCase(),
)
