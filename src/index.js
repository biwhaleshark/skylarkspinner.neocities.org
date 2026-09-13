import "./main.scss"; // loads all css

let spaceInclude = include('header');
spaceInclude = include('sidebar1');
spaceInclude = include('sidebar2');
spaceInclude = include('footer');

function include(space) {
  fetch('/blocks/' + space + '.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load ' + space + '.html');
      return response.text(); // Get content as text
    })
    .then(html => {
      document.getElementById(space + '-container').innerHTML = html; // Insert content
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById(space + '-container').innerHTML = '<p>' + space + ' failed to load.</p>';
    });
}

// Code from https://www.lynxbee.com/javascript-display-random-image-refresh/
const images = [
    './assets/images/masthead/boat.png',
    './assets/images/masthead/girl.png',
    './assets/images/masthead/lillies.png',
    './assets/images/masthead/river.png',
    './assets/images/masthead/sphinx.png',
    './assets/images/masthead/temple.png',
    './assets/images/masthead/temple2.png',
    './assets/images/masthead/water.png'
];
 
window.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const mastheadImage = document.getElementById('masthead');
    if (mastheadImage) {
        mastheadImage.src = images[randomIndex];
    }
});