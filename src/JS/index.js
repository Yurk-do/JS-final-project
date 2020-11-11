import { createBurger } from "../JS/burger.js";
import { startCarousel } from "../JS/slider-carousel.js/carousel-start.js";
import { dateFooter } from "../JS/date-footer.js";
import { startTimer } from "../JS/offer-timer.js";
import { startPagination } from "../JS/paginator/pagination.js";
import { createTabs } from "../JS/tabs.js";
import { getSliderPreOrder } from "../JS/slider-pre-order/slider.js";
import { getScroll } from "../JS/scroll.js";

export function getStarted() {
  console.log("hello");
  createBurger();
  startCarousel();
  dateFooter();
  startTimer();
  startPagination();
  createTabs();
  getSliderPreOrder();
  getScroll();
}
