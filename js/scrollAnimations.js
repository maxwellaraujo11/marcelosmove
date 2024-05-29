
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
})

const slideleft = document.querySelectorAll(".slider-left")


slideleft.forEach((element) => myObserver.observe(element))


// ------------------------------------------------------------------//



const secondanimation = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show2')
    } else {
      entry.target.classList.remove('show2')
    }
  })
})

const slideright = document.querySelectorAll(".slider-right")


slideright.forEach((element) => secondanimation.observe(element))