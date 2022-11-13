let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle('move');
}
window.onscroll = () => {
  navbar.classList.remove('open-menu')
  menu.classList.remove('move');
}

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');


  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_8qg1fnp", "template_eclwwxv", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No...!",
    text: "Fields cannot be empty!",
    icon: "error"
  });
}

function success() {
  swal({
    title: "Email sent successfully!",
    text: "We will answer you after 24 hours!",
    icon: "success"
  });
}

// header background
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
})

// Scroll top
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
})

// 

wow = new WOW(
  {
    boxClass: 'wow',      
    animateClass: 'animated', 
    offset: 0,          
    mobile: true,       
    live: true        
  }
)
wow.init();