const controlInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = controlInputEl.value + "px";

const addControleValue = () => {
  textEl.style.fontSize = controlInputEl.value + "px";
};

controlInputEl.addEventListener("input", addControleValue);
