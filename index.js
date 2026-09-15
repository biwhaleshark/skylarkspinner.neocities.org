import "./main.scss"; // loads all css

import { holidays } from "/js/todayHoliday";

const tabTitle = document.title; 
if (tabTitle !== "skylark grotto") { 
	document.title = tabTitle + " ● skylark grotto"; 
}

// Code from https://www.lynxbee.com/javascript-display-random-image-refresh/
const images = [
    '../img/masthead/boat.png',
    '../img/masthead/girl.png',
    '../img/masthead/lillies.png',
    '../img/masthead/river.png',
    '../img/masthead/sphinx.png',
    '../img/masthead/temple.png',
    '../img/masthead/temple2.png',
    '../img/masthead/water.png'
];
 
window.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const mastheadImage = document.getElementById('masthead');
    if (mastheadImage) {
        mastheadImage.src = images[randomIndex];
    }
});