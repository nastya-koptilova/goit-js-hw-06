const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredientsList = function () {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  return ingredientsItem;
};

const ingredientsAddEl = ingredients.map(() => makeIngredientsList());

const ingredientsAddText = function () {
  for (let i = 0; i < ingredients.length; i += 1) {
    ingredientsAddEl[i].textContent = ingredients[i];
  }
  return ingredientsAddEl;
};

ingredientsAddText();

ingredientsEl.append(...ingredientsAddEl);
