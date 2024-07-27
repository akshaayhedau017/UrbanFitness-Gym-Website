/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*==MENU SHOW===*/
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ===MENU HIDDEN===
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link,we remove the show-menu class

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click' , linkAction)) 

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the scroll - header class to the header tag
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')

}

window.addEventListener('scroll', scrollHeader)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
            sectionTop  = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
       
    if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }        
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp= () => {
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the show- scroll class to a tag with the scroll

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)
 


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr=ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img, .WA_Chat_Widget`, { delay: 700, origin: 'bottom'})
sr.reveal(`.program__card, .pricing__card , .gallery` ,{interval: 100})
sr.reveal(`.choose__img, #backBtn`, {origin: 'left'})
sr.reveal(`.choose__content, #nextBtn,`, {origin: 'right'})

/*=============== CALCULATE JS ===============*/

/*=============== EMAIL JS ===============*/
const contactForm= document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message'),  
      contactUser=document.getElementById('contact-user')

const sendEmail = (e) => {
  e.preventDefault()
// Check if the field has a value
if(contactUser.value ===''){
  // Add and remove color
  contactMessage.classList.remove('color-green')
  contactMessage.classList.add('color-red')

  // Show message
  contactMessage.textContent = 'You must enter your email🙌'

  // Remove message three seconds
  setTimeout(() =>{
    contactMessage.textContent = ''
  },3000)
}    else{
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_0synp0w','template_q0mtnpd','#contact-form','tw9GemOnXLy6XMwFj')
  .then(() => {
    //show message and color
    contactMessage.classList.add('color-green')
    contactMessage.textContent = 'You registered successfully👍'
   //Remove message after 3 seconds
   setTimeout(() =>{
    contactMessage.textContent = ''
  },3000)

  },(error) =>{
    //Mail sending error
    alert('OOPS! SOMETHING HAS FAILED...', error)
  })

  //to clear the input field
  contactUser.value = '' 
}

}
    
contactForm.addEventListener('submit',sendEmail)
