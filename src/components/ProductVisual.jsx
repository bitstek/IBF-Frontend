export default function ProductVisual({ product, compact = false }) {
  if (product.image) {
    return (
      <div className={`product-visual image-visual ${product.accent} ${compact ? 'compact' : ''}`}>
        <img src={product.image} alt={`${product.brand} ${product.model}`} />
      </div>
    )
  }

  return (
    <div className={`product-visual ${product.accent} ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-glow" />
      {product.accent === 'meter' && (
        <div className="meter-device">
          <div className="meter-screen">
            <span>230.1</span>
            <span>50.0</span>
            <span>0.98</span>
          </div>
          <div className="meter-buttons"><i /><i /><i /></div>
        </div>
      )}
      {product.accent === 'ups' && (
        <div className="ups-device">
          <div className="ups-top" />
          <div className="ups-display" />
          <div className="ups-vents">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
        </div>
      )}
      {product.accent === 'software' && (
        <div className="software-device">
          <div className="screen-bar" />
          <div className="chart-lines"><i /><i /><i /></div>
          <div className="module-dots"><i /><i /><i /><i /></div>
        </div>
      )}
    </div>
  )
}
