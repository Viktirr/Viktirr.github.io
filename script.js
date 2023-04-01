let burgerOpen = false;

window.addEventListener("load", () => {
    document.querySelector("h1").classList.add("loaded"); 
});

function isBurgerOpen() {
    element = document.querySelector("nav");
    burgerElement = document.getElementById("burger-menu");
    switch(burgerOpen) {
        case false:
            burgerElement.classList.add("burgerOpen")
            element.classList.add("burgerOpen");
            burgerOpen = true;
            break;
        case true:
            burgerElement.classList.remove("burgerOpen")
            element.classList.remove("burgerOpen");
            burgerOpen = false;
            break;
    }
}