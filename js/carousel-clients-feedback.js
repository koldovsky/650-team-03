(function() {
    const slides = [
      `<div class="column-feedback-responce">
      <img src="img/happy-facee.webp" alt="happy-face-Jessika-Peterson">
      <h3 class="feedback">Jessica Peterson</h3>
      <p class="feedback-text">“This is great honey, 100% natural! It is not the first time I order honey
     from this company, and every time I know that I will get delicious, high-quality, not crystallized honey. I use honey
     as a topping for pancakes, various desserts, and marinades. It is delicious and my children also like
     this honey!"</p>
       <p class="date">October 28, 2020</p>
       </div>`,

      `<div class="column-feedback-responce">
                     <img src="img/happy-faceee.webp" alt="happy-face-Nilson">
                     <h3 class="feedback">Dean Nillstom</h3>
                     <p class="feedback-text">“Nowadays it is not so easy to find really good, tasty, and natural honey.
                    I first tried the HoneyBee honey several years ago, and since then I have been a regular customer of this producer. I know
                    for sure that these guys work with feeling and sell real honey from their swaths. I am always happy with
                    the product I receive."</p>
                     <p class="date">February 12, 2021</p>
                 </div>`,

      `<div class="column-feedback-responce">
      <img src="img/happy-face.webp" alt="happy-face-Diana">
      <h3 class="feedback">Diana Fergusson</h3>
      <p class="feedback-text"> “Having tasted this honey once, I no longer needed alternatives. This is
       the tastiest honey I've ever tried! I buy different types of honey, from clover to buckwheat. Each jar of honey is a
        real triumph of taste. This is real honey — thick, aromatic, dark, and moderately sweet. Exactly what
        I need!"</p>
         <p class="date"> April 18, 2021</p>
         </div>`
    ];

let currentSlideIdx = 0;
function renderSlides () {
const slidesContainer = document.querySelector(".section-clients-feedback .carousel-clients-feedback");
slidesContainer.innerHTML = slides[currentSlideIdx];

if(window.innerWidth > 500) {
  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  slidesContainer.innerHTML += slides[slide2Idx];
  /*if(window.innerWidth > 800) {
    const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
    slidesContainer.innerHTML += slides[slide3Idx];
    }*/
  }

}

function nextSlide() {
currentSlideIdx++;
if( currentSlideIdx >= slides.length) currentSlideIdx = 0;
renderSlides();
}

function prevSlide() {
currentSlideIdx--;
if( currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
renderSlides();
}

setInterval(nextSlide, 5000);

/*document.querySelector('.container-carousel-clients-feedback .prevSlideFeedback).addEventListener('click', prevSlide);
document.querySelector('.container-carousel-clients-feedback .nextSlideFeedback).addEventListener('click', nextSlide);*/
renderSlides();


} )();