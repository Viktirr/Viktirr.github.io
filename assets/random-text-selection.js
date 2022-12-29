// Random text for hero

let message1 = "Work in progress";
let message2 = "Coming soon";
let message3 = "Getting ready";

let randomNumber = Math.floor(Math.random() * 3)

let selectedString;
switch(randomNumber) {
  case 0:
    selectedString = message1;
    break;
  case 1:
    selectedString = message2;
    break;
  default:
    selectedString = message3;
    break;
}

document.getElementById("wip-text").innerHTML = selectedString;