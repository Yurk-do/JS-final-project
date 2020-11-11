const linksContainer = document.querySelector(".navbar-links");

const topLink = document.querySelector(".top-link");

export function getScroll() {
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });

  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      let position = element.offsetTop;
      window.scrollTo({
        left: 0,
        top: position,
      });
      linksContainer.style.height = 0;
    });
  });
}
