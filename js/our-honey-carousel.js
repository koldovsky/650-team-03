(function() {
    const slidesItems = [
        `<div class="item">
        <a href="#">
            <div class="item-img">
                <img src="img/wildflower-honey-img.jpg" alt="Wildflower Honey">
            </div>
        </a>
        <a href="#">
            <h4 class="name-of-goods">Wildflower Honey</h4>
        </a>
        <div class="item-price">
            <p>$7,00USD</p>
        </div>
        <div class="store-item-button">
            <button class="item-buy button">Buy Now</button>


        </div>

    </div>`,
    `<div class="item">
    <a href="#">
        <div class="item-img">
            <img src="img/blossom-honey.jpg" alt="blossom honey">
        </div>
    </a>
    <a href="#">
        <h4 class="name-of-goods">Blossom honey</h4>
    </a>
    <div class="item-price">
        <p>$20,00USD</p>
    </div>
    <div class="store-item-button">
        <button class="item-buy button">Buy Now</button>


    </div>

    </div>`,
    `<div class="item">
    <a href="#">
        <div class="item-img">
            <img src="img/lover-honey.jpg" alt="Lover Honey">
        </div>
    </a>
    <a href="#">
        <h4 class="name-of-goods">Lover Honey</h4>
    </a>
    <div class="item-price">
        <p>$8,00USD</p>
    </div>
    <div class="store-item-button">
        <button class="item-buy button">Buy Now</button>


    </div>

</div>`,
` <div class="item">
<a href="#">
    <div class="item-img">
        <img src="img/buckwheat-honey.jpg" alt="Buckwheat Honey">
    </div>
</a>
<a href="#">
    <h4 class="name-of-goods">Buckwheat Honey</h4>
</a>
<div class="item-price">
    <p>$10,00USD</p>
</div>
<div class="store-item-button">
    <button class="item-buy button">Buy Now</button>


</div>

</div>`
    ];

let currentSlideIdx = 0;

function renderOrderSlides(){
    const slidesContainer = document.querySelector('.order-slides-conteiner');
    slidesContainer.innerHTML = slidesItems[currentSlideIdx];
}

function nextSlide(){
    currentSlideIdx++;
    if (currentSlideIdx >= slidesItems.length) currentSlideIdx = 0;
    renderOrderSlides();
} 
setInterval(nextSlide,3000);
renderOrderSlides();



})();