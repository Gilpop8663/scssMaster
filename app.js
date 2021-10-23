const header = document.querySelector("header");

const scaleHeader = 100;
const body = document.querySelector("body");

function getCurrentScroll() {
  let currentScroll = window.scrollY;
  if (currentScroll >= scaleHeader) {
    header.className = "hideHeader";
  } else {
    header.classList.remove("hideHeader");
  }
  console.log("event");
}

window.addEventListener("scroll", getCurrentScroll);
