
const sections = document.querySelectorAll('.anim')
const headLinks = document.querySelectorAll('.headLink')

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

////
// console.log(headLinks)
////

// get element
const hal = document.querySelector('#hal')
const largeHal = document.querySelector('#largeHal')
const contact = document.querySelector('.contact')
const sectionTwo = document.querySelector('#section-two')
const sectionThree = document.querySelector('#section-three')
const sectionFour = document.querySelector('#section-four')
const footer = document.querySelector('#footer')

//callback function
function showMe() {
    hal.classList.replace('hide','show')
}
function showMe2() {
    largeHal.classList.replace('hide','largeHal')
}
function showContact() {
    contact.classList.replace('hide','contact')
}
function showSectionTwo() {
    sectionTwo.classList.add('section-two')
}
function showSectionThree() {
    sectionThree.classList.add('section-three')
}
function showSectionFour() {
    sectionFour.classList.add('section-four')
}
function showFooter() {
    footer.classList.add('footer')
}

// set timeout
setTimeout(showMe, 1000)
setTimeout(showMe2, 1000)
setTimeout(showContact, 1500)
setTimeout(showSectionTwo, 2000)
setTimeout(showSectionThree, 2500)
setTimeout(showSectionFour, 3000)
setTimeout(showFooter, 3500)

// Nav small screens open/close
const navSmall = document.querySelector('.nav-small-hide')

// Burger transition
const cont = document.querySelector('.container')
const burg1 = document.querySelector('.burger1')
const burg2 = document.querySelector('.burger2')
const burg3 = document.querySelector('.burger3')

cont.addEventListener('click', () => {
  burg1.classList.toggle('burger1-clicked')
  burg2.classList.toggle('burger2-clicked')
  burg3.classList.toggle('burger3-clicked')

  navSmall.classList.toggle('nav-small-show')
})
