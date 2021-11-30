(function() {
    const slides = [
      `<div class="colomn-learn-more">
      <img class="colomn-img" src="img/jar-of-honey.webp" alt="honey1">
      <h3> FEBRUARY 7, 2021</h3>
      <h5 class="colomn-title-">What is Natural Honey?</h5>
      <p class="colomn-text"> Let's see how to distinguish natural honey from artificial honey.</p>
      </div>`,

      `<div class="colomn-learn-more">
       <img class="colomn-img" src="img/bee-tamers.webp" alt="bee tamers">
        <h3>MARCH 10, 2021</h3>
         <h5 class="colomn-title-">New Seasons is Here!</h5>
         <p class="colomn-text">After winter, work in our Californian swaths is in full swing again.</p>
         </div> `,

      `<div class="colomn-learn-more">
        <img class="colomn-img" src="img/jars-of-honey.webp" alt="honey">
        <h3>MARCH 17, 2021</h3>
        <h5 class="colomn-title-">Honey in Jars</h5>
        <p class="colomn-text">Why is honey usually sold in glass jars? Our expert explains.</p>
        </div>`,

      `<div class="colomn-learn-more">
        <img class="colomn-img" src="img/bee-tamer.webp" alt="Bee Tamer">
         <h3>APRIL 12, 2021</h3>
        <h5 class="colomn-title-">How is Honey Harvested?</h5>
         <p class="colomn-text">Learn about how our beekeepers harvest honey from honeycomb frames.</p>
         </div>`
    ];

let currentSlideIdx = 0;
function renderSlides () {
const slidesContainer = document.querySelector(".section-about-honeybee .slides-container-learn-more");
slidesContainer.innerHTML = slides[currentSlideIdx];

if(window.innerWidth > 500) {
  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  slidesContainer.innerHTML += slides[slide2Idx];
  if(window.innerWidth > 800) {
    const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
    slidesContainer.innerHTML += slides[slide3Idx];
    }
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

document.querySelector('.container-learn-more .previous-slide-learn').addEventListener('click', prevSlide);
document.querySelector('.container-learn-more .next-slide-learn').addEventListener('click', nextSlide);
renderSlides();


} )();
