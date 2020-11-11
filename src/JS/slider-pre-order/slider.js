import { booksListPreOrder } from "../slider-pre-order/data.js";

const img = document.getElementById("img-book-pre-order");
const name = document.getElementById("name-book-pre-order");
const series = document.getElementById("series-book-pre-order");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-button");

let currentBookPreOrder = 0;

function showBookPreOrder() {
  const item = booksListPreOrder[currentBookPreOrder];
  img.src = item.img;
  name.innerHTML = item.name;
  series.innerHTML = item.series;
}

export function getSliderPreOrder() {
  nextBtn.addEventListener("click", function () {
    currentBookPreOrder += 1;
    if (currentBookPreOrder > booksListPreOrder.length - 1) {
      currentBookPreOrder = 0;
    }
    showBookPreOrder();
  });

  prevBtn.addEventListener("click", function () {
    currentBookPreOrder -= 1;
    if (currentBookPreOrder < 0) {
      currentBookPreOrder = booksListPreOrder.length - 1;
    }
    showBookPreOrder();
  });

  randomBtn.addEventListener("click", function () {
    currentBookPreOrder = Math.floor(Math.random() * booksListPreOrder.length);
    showBookPreOrder();
  });

  window.addEventListener("DOMContentLoaded", function () {});
  showBookPreOrder();
}
