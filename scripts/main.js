let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myHeading.textContent = 'Hello World!';

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Reading with the speed of light, ' + storedName + '!';
}

myImage.onclick = function() {
    if(myImage.getAttribute('src') === 'images/logo-docker.png') {
        myImage.setAttribute('src', 'images/speed-meter.png');
        myImage.setAttribute('alt', 'image speed meter');
    } else {
        myImage.setAttribute('src', 'images/logo-docker.png');
        myImage.setAttribute('alt', 'logo docker');
    }
}

function setUserName() {
    let myName = prompt('What\'s your name?');
    if(!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Reading with the speed of light, ' + myName + '!';
    }
}

myButton.onclick = function() {
    setUserName();
}