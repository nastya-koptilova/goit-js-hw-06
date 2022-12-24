function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const addBoxes = (width, height) => `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;

const createBoxes = () => {
  const arr = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    width += 10;
    height += 10;
    arr.push(addBoxes(width, height));
  }
  boxesEl.insertAdjacentHTML("beforeend", arr.join(""));
};

const destroyBoxes = () => (boxesEl.innerHTML = "");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
