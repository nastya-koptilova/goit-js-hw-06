const valueEl = document.querySelector("#value");
const removeBtn = document.querySelector('[data-action="decrement"]');
const addBtn = document.querySelector('[data-action="increment"]');

let counterValue = (valueEl.textContent = 0);

const onAddBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  return valueEl;
};

const removeAddBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  return valueEl;
};

addBtn.addEventListener("click", onAddBtnClick);
removeBtn.addEventListener("click", removeAddBtnClick);
