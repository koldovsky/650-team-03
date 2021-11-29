(function() {
    const iconBurger = document.querySelector(".header__burger");
    const navigationsBody = document.querySelector(".menu-header");
    iconBurger.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        iconBurger.classList.toggle("active");
        navigationsBody.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".menu-header-elements");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
        });
    });
})();