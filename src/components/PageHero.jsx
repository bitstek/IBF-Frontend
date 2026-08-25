export default function PageHero({ label, title, text, children }) {
  return (
    <section className="page-hero motion-lines">
      <div className="shell reveal-up">
        <p className="eyebrow gold">{label}</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  )
}
