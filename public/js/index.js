'use strict';

var leftButton = document.getElementById('left-slider-button');
var rightButton = document.getElementById('right-slider-button');
var slider = document.getElementById('content');
var cont = document.getElementById('slider-box');
var imgArray = ['http://www.daoulaba.com/i/2017/05/city-night-wallpapers-high-quality.jpg', 'https://images6.alphacoders.com/343/343054.jpg', 'http://pre09.deviantart.net/9c8c/th/pre/f/2008/320/c/5/pug___mops_wallpaper_by_hapz86.jpg', 'http://drobs.ru/opyat/27/vid_sverhu_na_nochnoy_gorod_1600x1200.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/62/1b/96/621b966ee8979974ae43cfbe316cb224.jpg'];
imgArray.forEach(function (item, index) {
  var img = document.createElement('img');
  img.src = item;
  img.classList.add('slider__img');
  img.id = index;
  slider.appendChild(img);
});
var position = 0;
leftButton.addEventListener('click', function () {
  // let width = document.getElementById('0').style.width;
  // let height = document.getElementById('0').style.height;
  // width = parseInt(width.split('px')[0]);
  // height = parseInt(height.split('px')[0]);
  var newPosition = position + 800;
  var drawPlus = function drawPlus() {
    if (position < 0) position += 20;
    slider.style.left = position + 'px';
  };
  var move = function move() {
    if (position <= newPosition) {
      drawPlus();
      requestAnimationFrame(move);
    }
  };
  move();
});

rightButton.addEventListener('click', function () {
  var newPosition = position - 800;
  var drawMinus = function drawMinus() {
    if (position > -(imgArray.length - 1) * 800) position -= 20;
    slider.style.left = position + 'px';
  };
  var move = function move() {
    if (position >= newPosition) {
      drawMinus();
      requestAnimationFrame(move);
    }
  };
  move();
});
'use strict';

var doc = document.getElementById('container');
var button = document.createElement('div');
// button.classList.add('up-button');
// button.classList.add('hidden');
button.id = 'upButton';

button.addEventListener('click', function () {
    var animation = function animation() {
        document.body.scrollTop -= 70;
        document.documentElement.scrollTop -= 70;
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            requestAnimationFrame(animation);
        }
    };
    animation();
});

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        button.classList.remove('hidden');
        button.classList.add('up-button');
    } else {
        button.classList.remove('up-button');
        button.classList.add('hidden');
    }
});

doc.appendChild(button);
'use strict';

document.getElementById('header').style.backgroundImage = 'url(https://i2.wp.com/www.utianet.org/wp-content/uploads/2015/09/Utah-Translators-and-Interpreters-Association.jpg?fit=4288%2C2848)';
document.getElementById('form').style.backgroundImage = 'url(https://lh3.googleusercontent.com/nPwg9sY-LRMCp3uP5DDs_85aBgxS7S7hRd47Fyl6jnltKPPv9b06UUwR7sx-SNFo4w=h1264)';