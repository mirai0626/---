const hamburger = document.querySelector('.hamburger');
const span = document.querySelector('span');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  nav.classList.toggle('container');

  console.log('hi');
});

// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('glow');
    } else {
      $(this).removeClass('glow');
    }
  });
}
