//! Debug Things
const debugDiv = document.querySelector(".debug");

setInterval(()=>{
  debugDiv.innerHTML = window.innerWidth + " x " + window.innerHeight;
}, 1000);


//! Scroll Handle
// Get all elements with class "js-scroll"
const scrollElements = document.querySelectorAll(".js-scroll");

// Get boolean value if elementInView
const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Get boolean value if elementOutView
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Add class scrolled on an element
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// Hide class scrolled on an element
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
      
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


//! Scroll to top
window.onscroll = function(){
  const header = document.querySelector('#navbar');
  const nav = header.offsetTop + 10;
  const toTop = document.querySelector('#goHome');

  if(window.pageYOffset > nav){
    toTop.classList.remove('-bottom-10');
    toTop.classList.add('bottom-4');
  } else {
    toTop.classList.remove('bottom-4');
    toTop.classList.add('-bottom-10');
  }
}
