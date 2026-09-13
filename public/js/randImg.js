// Code from https://www.lynxbee.com/javascript-display-random-image-refresh/

const images = [
    '/images/masthead/boat.png',
    '/images/masthead/girl.png',
    '/images/masthead/lillies.png',
    '/images/masthead/river.png',
    '/images/masthead/sphinx.png',
    '/images/masthead/temple.png',
    '/images/masthead/temple2.png',
    '/images/masthead/water.png'
];
 
window.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const mastheadImage = document.getElementById('masthead');
    if (mastheadImage) {
        mastheadImage.src = images[randomIndex];
    }
});