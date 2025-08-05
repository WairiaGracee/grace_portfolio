// script.js

const menuToggle = document.getElementById('menu-toggle');
const closeToggle = document.getElementById('close-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.style.display = 'flex';
});

closeToggle.addEventListener('click', () => {
  nav.style.display = 'none';
});


