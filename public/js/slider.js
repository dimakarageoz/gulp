'use strict';

var leftButton = document.getElementById('left-slider-button');
var rightButton = document.getElementById('right-slider-button');
var slider = document.getElementById('content');
var imgArray = ['http://www.daoulaba.com/i/2017/05/city-night-wallpapers-high-quality.jpg', 'https://images6.alphacoders.com/343/343054.jpg', 'http://pre09.deviantart.net/9c8c/th/pre/f/2008/320/c/5/pug___mops_wallpaper_by_hapz86.jpg', 'http://drobs.ru/opyat/27/vid_sverhu_na_nochnoy_gorod_1600x1200.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/62/1b/96/621b966ee8979974ae43cfbe316cb224.jpg'];
imgArray.forEach(function (item) {
  var img = document.createElement('img');
  img.src = item;
  img.style.width = '800px';
  img.style.height = '470px';
  slider.appendChild(img);
});
var position = 0;
leftButton.addEventListener('click', function () {
  var newPosition = position + 800;
  var drawPlus = function drawPlus() {
    if (position < 0) position += 20;
    slider.style.left = position + 'px';
  };
  var move = setInterval(function () {
    if (position >= newPosition) {
      clearInterval(move);
      return;
    }
    drawPlus();
  }, 10);
});

rightButton.addEventListener('click', function () {
  var newPosition = position - 800;
  var drawMinus = function drawMinus() {
    if (position > -(imgArray.length - 1) * 800) position -= 20;
    slider.style.left = position + 'px';
  };
  var move = setInterval(function () {
    if (position <= newPosition) {
      clearInterval(move);
      return;
    }
    drawMinus();
  }, 10);
});