const img = document.querySelector(".center-image img");
const menu = document.querySelector(".menu");

const what = document.querySelector(".what");

const ten = document.querySelector(".ten");
const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");

let start = true;

let over;

function changeTen() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138542723-6877e517-26fb-4966-8b33-11a4640f018a.png";
}

function changeNine() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138542760-8aef47b0-cb4e-4ae1-ba86-202853fc3177.png";
}
function changeEight() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543049-b481d2c0-95cd-4518-b4e3-135f1e8ac4ce.png";
}
function changeSeven() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543057-6b018509-7f2b-44af-a00f-a56cc105239f.png";
}
function changeSix() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543095-dfe38ce2-75e2-4746-b63f-ca205cbf2c18.png";
}
function changeFive() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543102-046c662d-5791-489b-a484-c77f18fafd2a.png";
}
function changeFour() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543057-6b018509-7f2b-44af-a00f-a56cc105239f.png";
}
function changeThree() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543126-4e2e861e-4f2b-4f66-99eb-139da6b66a95.png";
}
function changeTwo() {
  img.src =
    "https://user-images.githubusercontent.com/80146176/138543136-7ddb06ca-5624-46e2-be88-17641403d4d9.png";
}
function aoao() {
  setTimeout(() => {
    img.src =
      "https://user-images.githubusercontent.com/80146176/138543995-7c36671e-42e6-4406-9cca-155997fc073f.png";
  }, 200);
  setTimeout(() => {
    img.src =
      "https://user-images.githubusercontent.com/80146176/138543136-7ddb06ca-5624-46e2-be88-17641403d4d9.png";
  }, 400);
  setTimeout(() => {
    img.src =
      "https://user-images.githubusercontent.com/80146176/138543126-4e2e861e-4f2b-4f66-99eb-139da6b66a95.png";
  }, 600);
}
function changeOne() {
  if (!over) {
    over = setInterval(aoao, 600);
    console.log(over);
  }
}

function openMenu() {
  if (start === true) {
    start = false;
    menu.innerText = "Close";
    menu.classList.add("open");
  } else if (start === false) {
    start = true;
    menu.innerText = "MENU";
    menu.classList.remove("open");
  }
}

function leaveOne() {
  clearInterval(over);
  over = null;
  console.log(over);
}

ten.addEventListener("mouseover", changeTen);
nine.addEventListener("mouseover", changeNine);
eight.addEventListener("mouseover", changeEight);
seven.addEventListener("mouseover", changeSeven);
six.addEventListener("mouseover", changeSix);
five.addEventListener("mouseover", changeFive);
four.addEventListener("mouseover", changeFour);
three.addEventListener("mouseover", changeThree);
two.addEventListener("mouseover", changeTwo);
one.addEventListener("mouseenter", changeOne);
one.addEventListener("mouseout", leaveOne);

menu.addEventListener("click", openMenu);
