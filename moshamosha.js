'use strict';

let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 =document.getElementById('line3');
let navi = document.getElementById('navi');
let burger = document.getElementById('hamburger')

function hamburger() {
  line1.classList.toggle('line_1');
  line2.classList.toggle('line_2');
  line3.classList.toggle('line_3')

  // line1.classList.add('line_1');
  // line2.classList.add('line_2');
  // line3.classList.add('line_3');




  navi.classList.toggle('in');

  document.getElementById('popupCover').classList.toggle('black-out');





  // burger.classList.add('change-into-white');
  // burger.classList.remove('hamburger')
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );

console.log('もしゃもしゃ')