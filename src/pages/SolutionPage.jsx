import { useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import { solutions } from '../data/siteData'

export default function SolutionPage({ lang = 'en' }) {
  const { slug } = useParams()
  const isAr = lang === 'ar'
  const solution = solutions.find((item) => item.href.endsWith(slug)) || solutions[0]
  const Icon = solution.icon

  return (
    <main>
      <PageHero label={solution.label} title={solution.heading} text={solution.summary} />
      <section className="shell serve-grid solution-feature-grid">
        {solution.features.map((feature) => (
          <article className="border-card interactive-card reveal-up" key={feature}>
            <Icon size={25} />
            <h3>{feature}</h3>
            <p>
              {isAr
                ? 'تنسق IBF نطاق العمل والمستندات وأصحاب المصلحة والإجراءات التجارية التالية وفقًا لسياق المشروع.'
                : 'IBF coordinates scope, documents, stakeholders, and next commercial actions according to the project context.'}
            </p>
          </article>
        ))}
      </section>
      <div className="shell"><CTASection lang={lang} /></div>
    </main>
  )
}
