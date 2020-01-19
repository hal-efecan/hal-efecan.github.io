const sections = document.querySelectorAll('.anim')
const navLinks = document.querySelectorAll('.navigation__ul__link')

let observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {
            entry.target.style.animation = `move 700ms forwards ease-in-out`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`
        }
    })
})

sections.forEach(section => {
    observer.observe(section)
})

// Burger transition
const burgerMenu = document.querySelector('.burger')
const burg1 = document.querySelector('.burger__burger1')
const burg2 = document.querySelector('.burger__burger2')
const burg3 = document.querySelector('.burger__burger3')

// Navigation
const nav = document.querySelector('#nav')
const overlay = document.querySelector('#overlay')
// Burger click
burgerMenu.addEventListener('click', () => {
    burg1.classList.toggle('burger__burger1-clicked')
    burg2.classList.toggle('burger__burger2-clicked')
    burg3.classList.toggle('burger__burger3-clicked')
  
    nav.classList.toggle('navigation');
    overlay.classList.toggle('overlay');
  })

// || SectionOne fadeIns ||

// Hal sml screens
const hal = document.querySelector('#smlHal')
function showMe() {
    hal.classList.replace('hide','section-one__showHal')
}
setTimeout(showMe, 1000)

// Hal lrg screens
const largeHal = document.querySelector('#lrgHal')
function showMe2() {
    largeHal.classList.replace('hide','section-one__showLrgHal')
}
setTimeout(showMe2, 1000)

// Contact
const contact = document.querySelector('#contact')
function showContact() {
    contact.classList.replace('hide','section-one__contact')
}
setTimeout(showContact, 1500)

// || SectionTwo fadeIns ||
const sectionTwo = document.querySelector('#section-two')
function showSectionTwo() {
    sectionTwo.classList.replace('hide','section-two')
}
setTimeout(showSectionTwo, 2000)

// || SectionThree fadeIns ||
const sectionThree = document.querySelector('#section-three')
function showSectionThree() {
    sectionThree.classList.replace('hide','section-three')
}
setTimeout(showSectionThree, 2500)

// || SectionFour fadeIns ||
const sectionFour = document.querySelector('#section-four')
function showSectionFour() {
    sectionFour.classList.add('section-four')
}
setTimeout(showSectionFour, 3000)

// || footer fadeIns ||
const footer = document.querySelector('#footer')
function showFooter() {
    footer.classList.add('footer')
}
setTimeout(showFooter, 3500)