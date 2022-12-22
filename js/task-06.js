const validationInputEl = document.querySelector("#validation-input");

const onvalidationInputBlur = () => {
  if (validationInputEl.value.length === Number(validationInputEl.getAttribute("data-length"))) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else if (validationInputEl.value.length !== Number(validationInputEl.getAttribute("data-length"))) {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
};

validationInputEl.addEventListener("blur", onvalidationInputBlur);
