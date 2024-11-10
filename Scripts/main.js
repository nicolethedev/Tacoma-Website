// Define Variables

const menu = document.querySelector('.nav-menu-links');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-menu');
const menuIcon = document.querySelector('.menuIcon');

// Add function

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);


menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  }
);

// When the user taps on hamburger, the menu will open and the hamburger icon will change to an X. When the user taps on the X, the menu will close and the X will change back to a hamburger icon.