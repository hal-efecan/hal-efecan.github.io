
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
console.log(headLinks)
////

// get element
const hal = document.querySelector('#hal')
//callback function
function showMe() {
    hal.classList.replace('hide','show')
}
// set timeout
setTimeout(showMe, 1000)
