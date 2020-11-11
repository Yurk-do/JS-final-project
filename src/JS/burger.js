export function createBurger() {
  const burger = document.getElementById("navbar-toggle");
  const navbarLinks = document.querySelector(".navbar-links");

  burger.addEventListener("click", () => {
    navbarLinks.classList.toggle("show-navbar-links");
  });
}
