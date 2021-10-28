const header = document.querySelector("header");
const span = document.querySelector("header nav span");

function scrollHeader() {
  let currentH = window.scrollY;
  console.log(currentH);
  if (currentH > 100) {
    header.className = "hideHeader";
    span.innerText = "Schwartz Media";
  } else if (currentH <= 100) {
    header.className = "";
    span.innerText = "Schwartz";
  }
}

window.addEventListener("scroll", scrollHeader);
