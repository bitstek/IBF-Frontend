// Lightweight scroll reveal using IntersectionObserver
export default function initScrollReveal(options = {}) {
  const root = options.root || null
  const rootMargin = options.rootMargin || '0px 0px -8% 0px'
  const threshold = options.threshold || 0.06

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        if (!entry.target.classList.contains('reveal-persist')) {
          observer.unobserve(entry.target)
        }
      }
    })
  }, { root, rootMargin, threshold })
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
    // compute optional delay from classes like `reveal-delay-1`, `reveal-delay-2`
    try {
      const delayMatch = [...el.classList].map(c => c.match(/^reveal-delay-(\d+)$/)).find(Boolean)
      let delayMs = 0
      if (delayMatch && delayMatch[1]) {
        delayMs = parseInt(delayMatch[1], 10) * 120
      }
      if (delayMs) {
        el.style.transitionDelay = `${delayMs}ms`
        el.style.animationDelay = `${delayMs}ms`
      }
      // if element is already mostly visible, reveal immediately
      const r = el.getBoundingClientRect()
      if (r.top < (window.innerHeight || document.documentElement.clientHeight) * 0.95) {
        el.classList.add('is-revealed')
        return
      }
    } catch (e) {
      // ignore
    }
    observer.observe(el)
  })
}

