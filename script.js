let burgerOpened = false;
let itemOpened = false;

// Animation for Hero text
window.addEventListener("load", () => {
    document.querySelector("h1").classList.add("loaded"); 
});

// Simple hamburger menu handler
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

// Upon clicking on an item open a modal window containing a webpage about the item that was clicked on.
function openItem(itemId, itemName) {
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

            itemTitle = document.createElement('h1');
            itemTitle.setAttribute('class', 'margin-l-16')
            itemTitle.innerHTML = itemName;

            closeItemImg = document.createElement('img');
            closeItemImg.setAttribute('tabindex', '1');
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
            topBarDiv.appendChild(itemTitle);
            openItemDiv.appendChild(pageIframe);
            setTimeout(function() {
                openItemDiv.setAttribute('class', 'itemOpened');
            }, 1);

            // Close modal window using tab and pressing enter
            closeItemImg.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    openItem();
                }
            });
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

// Close modal window upon pressing escape (doesn't work if the focus is in iframe)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (itemOpened === true) {
        itemOpened = false;
            fullscreenItemDiv = document.getElementById('fullscreenItemDiv');
            openItemDiv = document.getElementById('openItemDiv');
            openItemDiv.classList.remove('itemOpened');
            setTimeout(function() {
                document.body.removeChild(fullscreenItemDiv);
            }, 350);
      }
    }
});