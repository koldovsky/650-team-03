(async function () {

    const response = await fetch('our-honey-products.json');
     const products = await response.json();

    function ProductList(products) {
        const productContainer = [];
        for (let product of products) {
            productContainer.push(
                `<div class="item">
        <a href="#">
            <div class="item-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
        </a>
        <a href="#">
            <h4 class="name-of-goods">${product.title}</h4>
        </a>
        <div class="item-price">
            <p>$ ${product.price}</p>
        </div>
        <div class="store-item-button">
            <button class="item-buy button">Buy Now</button>
        </div>
    </div>`
            );
        }
        return productContainer;
    }

    const slidesItems = ProductList(products);


    //     const slidesItems = [
    //         `<div class="item">
    //         <a href="#">
    //             <div class="item-img">
    //                 <img src="img/wildflower-honey-img.jpg" alt="Wildflower Honey">
    //             </div>
    //         </a>
    //         <a href="#">
    //             <h4 class="name-of-goods">Wildflower Honey</h4>
    //         </a>
    //         <div class="item-price">
    //             <p>$7,00USD</p>
    //         </div>
    //         <div class="store-item-button">
    //             <button class="item-buy button">Buy Now</button>


    //         </div>

    //     </div>`,
    //     `<div class="item">
    //     <a href="#">
    //         <div class="item-img">
    //             <img src="img/blossom-honey.jpg" alt="blossom honey">
    //         </div>
    //     </a>
    //     <a href="#">
    //         <h4 class="name-of-goods">Blossom honey</h4>
    //     </a>
    //     <div class="item-price">
    //         <p>$20,00USD</p>
    //     </div>
    //     <div class="store-item-button">
    //         <button class="item-buy button">Buy Now</button>


    //     </div>

    //     </div>`,
    //     `<div class="item">
    //     <a href="#">
    //         <div class="item-img">
    //             <img src="img/lover-honey.jpg" alt="Lover Honey">
    //         </div>
    //     </a>
    //     <a href="#">
    //         <h4 class="name-of-goods">Lover Honey</h4>
    //     </a>
    //     <div class="item-price">
    //         <p>$8,00USD</p>
    //     </div>
    //     <div class="store-item-button">
    //         <button class="item-buy button">Buy Now</button>


    //     </div>

    // </div>`,
    // ` <div class="item">
    // <a href="#">
    //     <div class="item-img">
    //         <img src="img/buckwheat-honey.jpg" alt="Buckwheat Honey">
    //     </div>
    // </a>
    // <a href="#">
    //     <h4 class="name-of-goods">Buckwheat Honey</h4>
    // </a>
    // <div class="item-price">
    //     <p>$10,00USD</p>
    // </div>
    // <div class="store-item-button">
    //     <button class="item-buy button">Buy Now</button>


    // </div>

    // </div>`,
    // ` <div class="item">
    // <a href="#">
    //     <div class="item-img">
    //         <img src="img/orange-blossom-honey.jpg" alt="Citrus Blossom Honey">
    //     </div>
    // </a>
    // <a href="#">
    //     <h4 class="name-of-goods">Citrus Blossom Honey</h4>
    // </a>
    // <div class="item-price">
    //     <p>$15,00USD</p>
    // </div>
    // <div class="store-item-button">
    //     <button class="item-buy button">Buy Now</button>


    // </div>

    // </div>`
    //     ];

    let currentSlideIdx = 0;

    function renderOrderSlides() {
        const slidesContainer = document.querySelector('.order-slides-conteiner');
        slidesContainer.innerHTML = slidesItems[currentSlideIdx];
        if (window.innerWidth > 770) {
            const slide2Idx = currentSlideIdx + 1 >= slidesItems.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slidesItems[slide2Idx];
            if (window.innerWidth > 991) {
                const slide3Idx = slide2Idx + 1 >= slidesItems.length ? 0 : slide2Idx + 1;
                const slide4Idx = slide3Idx + 1 >= slidesItems.length ? 0 : slide3Idx + 1;
                slidesContainer.innerHTML += slidesItems[slide3Idx];
                slidesContainer.innerHTML += slidesItems[slide4Idx];
            }
        }
    }


    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slidesItems.length) currentSlideIdx = 0;
        renderOrderSlides();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slidesItems.length - 1;
        renderOrderSlides();
    }
    document.querySelector('.prev-view').addEventListener('click', prevSlide);
    document.querySelector('.next-view').addEventListener('click', nextSlide);



    setInterval(nextSlide,3000);
    renderOrderSlides();

    window.addEventListener('resize', renderOrderSlides);







})();