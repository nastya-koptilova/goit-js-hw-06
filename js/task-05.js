const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const onNameInputAdd = () => {
  if (nameInputEl.value !== "") {
    nameOutputEl.textContent = nameInputEl.value;
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
};

nameInputEl.addEventListener("input", onNameInputAdd);
