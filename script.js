let burgerOpened = false;
let itemOpened = false;

window.addEventListener("load", () => {
    document.querySelector("h1").classList.add("loaded"); 
});

function isBurgerOpen() {
    element = document.querySelector("nav");
    burgerElement = document.getElementById("burger-menu");
    switch(burgerOpened) {
        case false:
            burgerElement.classList.add("burgerOpen")
            element.classList.add("burgerOpen");
            burgerOpened = true;
            break;
        case true:
            burgerElement.classList.remove("burgerOpen")
            element.classList.remove("burgerOpen");
            burgerOpened = false;
            break;
    }
}

function openItem(itemId) {
    switch (itemOpened) {
        case false:
            itemOpened = true;
            fullscreenItemDiv = document.createElement('div')
            fullscreenItemDiv.setAttribute('id', 'fullscreenItemDiv');

            openItemDiv = document.createElement('div');
            openItemDiv.setAttribute('id', 'openItemDiv');

            topBarDiv = document.createElement('div');
            topBarDiv.setAttribute('id', 'topBarDiv');
            topBarDiv.style.margin = '16px';

            closeItemImg = document.createElement('img');
            closeItemImg.setAttribute('width', '36');
            closeItemImg.setAttribute('height', '36');
            closeItemImg.setAttribute('viewBox', '0 0 36 36');
            closeItemImg.setAttribute('src', 'assets/x.svg');
            closeItemImg.setAttribute('onclick', 'openItem()');
            closeItemImg.style.cursor = 'pointer';

            pageIframe = document.createElement('iframe');
            pageIframe.setAttribute('id', 'pageIframe');
            pageIframe.setAttribute('src', 'items/' + itemId + '.html');

            document.body.appendChild(fullscreenItemDiv);
            fullscreenItemDiv.appendChild(openItemDiv);
            openItemDiv.appendChild(topBarDiv);
            topBarDiv.appendChild(closeItemImg);
            openItemDiv.appendChild(pageIframe);
            setTimeout(function() {
                openItemDiv.setAttribute('class', 'itemOpened');
            }, 1);
            break;

        case true:
            itemOpened = false;
            fullscreenItemDiv = document.getElementById('fullscreenItemDiv');
            openItemDiv = document.getElementById('openItemDiv');
            openItemDiv.classList.remove('itemOpened');
            setTimeout(function() {
                document.body.removeChild(fullscreenItemDiv);
            }, 350);
            break;
    }
}