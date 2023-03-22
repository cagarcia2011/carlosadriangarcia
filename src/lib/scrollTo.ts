

export function scrollTo(to: string, from: string | null = null) {
    const scrollToSection = document.querySelector(to)
    const scrollFromSection = document.querySelector(from ? from : 'body')
    let fromTop = scrollFromSection ? scrollFromSection.getBoundingClientRect().top : 0

    if (fromTop < 0) fromTop = -fromTop
    
    window.scrollTo({
      top: scrollToSection?.getBoundingClientRect().top + fromTop,
      left: 0,
      behavior: 'smooth'
    })
}