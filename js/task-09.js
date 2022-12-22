function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

const onBodyChangeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener("click", onBodyChangeColor);
