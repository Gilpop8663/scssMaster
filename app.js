const header = document.querySelector("header");

function handleMenu() {
  let currentH = window.scrollY;
  if (currentH > 100) {
    header.classList.add("scrollHeader");
  } else {
    header.classList.remove("scrollHeader");
  }
}

window.addEventListener("scroll", handleMenu);
