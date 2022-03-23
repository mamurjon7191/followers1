"use strict";
let a = 0;

let scype = document.querySelector(".scype");
let youTube = document.querySelector(".youTube");
let facebook = document.querySelector(".facebook");

let first = setInterval(function () {
  scype.textContent = a++;
  if (a == 400) {
    clearInterval(first);
  }
}, 0.01);

let first1 = setInterval(function () {
  youTube.textContent = a++;
  if (a > 500) {
    clearInterval(first1);
  }
}, 0.01);

let first2 = setInterval(function () {
  facebook.textContent = a++;
  if (a > 600) {
    clearInterval(first2);
  }
}, 0.01);
