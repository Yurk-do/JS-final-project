import { exampleCarousel } from "./carousel.js";

export function startCarousel() {
  exampleCarousel.setControls();
  exampleCarousel.setNav();
  exampleCarousel.setInitialState();
  exampleCarousel.useControls();
}
