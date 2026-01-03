/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'service_vqi4yue',      
        'template_f48d3ho',     
        '#contact-form',        
        'mTeFyM1rVUxCn2GBW'     
    )
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
    .catch((error) => {
        console.error('EmailJS Error:', error)
        contactMessage.textContent = 'Message not sent ❌ '
    })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350
        ? scrollup.classList.add('show-scroll')
        : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false   // keeps animation once (more professional)
})

sr.reveal('.perfil, .contact')
sr.reveal('.info', { origin: 'left', delay: 700 })
sr.reveal('.skills', { origin: 'left', delay: 900 })
sr.reveal('.about', { origin: 'left', delay: 1100 })
sr.reveal('.project__card, .services__card, .experience__card', { interval: 120 })
