const hamburger = document.querySelector('.hamburger');
const span = document.querySelector('span');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  nav.classList.toggle('container');

  console.log('hi');
});
