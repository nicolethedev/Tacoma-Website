// Define Variables

const hamburger = document.querySelector('hamburger-menu');
const close = document.querySelector('close-menu');
const links = document.querySelector('nav-menu-links');

// Add Event Listeners

hamburger.addEventListener('click', () => {
  links.classList.toggle('open');
});

let hamburgerOpen = false;
hamburger.addEventListener('click', () => {
  if (!hamburgerOpen) {
    hamburger.classList.add('open');
    hamburgerOpen = true;
  } else {
    hamburger.classList.remove('open');
    hamburgerOpen = false;
  }
});