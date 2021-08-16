function getTimeRemaining(endtime) {
   var t = Date.parse(endtime) - Date.parse(new Date())
   var seconds = Math.floor((t / 1000) % 60)
   var minutes = Math.floor((t / 1000 / 60) % 60)
   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
   }
}

function initializeClock(id, endtime) {
   var clock = document.getElementById(id)
   var hoursSpan = clock.querySelector('.hours')
   var minutesSpan = clock.querySelector('.minutes')
   var secondsSpan = clock.querySelector('.seconds')

   function updateClock() {
      var t = getTimeRemaining(endtime)

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

      if (t.total <= 0) {
         clearInterval(timeinterval)
      }
   }

   updateClock()
   var timeinterval = setInterval(updateClock, 1000)
}

var deadline = new Date(Date.parse(new Date()) + 23 * 60 * 60 * 1000) // for endless timer

initializeClock('countdown', deadline)

AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
   
 
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 800, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
 
 });




function trackScroll() {
     var scrolled = window.pageYOffset;
     var coords = document.documentElement.clientHeight;
}
   function backToTop() {
     if (window.pageYOffset > 0) {
       window.scrollBy(0, -30);
       setTimeout(backToTop, 0);
     }
   }
var goTopBtn = document.querySelector('.btn-up');
 
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
 
   
document.querySelectorAll('a[href^="#"').forEach(link => {

      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          let href = this.getAttribute('href').substring(1);
  
          const scrollTarget = document.getElementById(href);
  
          const topOffset = 0
          // const topOffset = 0; // если не нужен отступ сверху 
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;
  
          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
  });

let popupCloseBtn = document.querySelector('.popup__leave-close');
let popupLeave = document.querySelector('.popup__leave')

popupCloseBtn.onclick = function(){
   popupLeave.style.display = 'none';
}

$('.magnific-popup').magnificPopup();




$(document).mouseleave(function(e){
   if (e.clientY < 10) {
       $(".popup__leave").fadeIn("fast");
   }    
});

$(document).click(function(e) {
   if (($(".popup__leave").is(':visible')) && (!$(e.target).closest(".popup__leave .popap__leave-body").length)) {
       $(".popup__leave").remove();
   }
});