const categoriesEL = document.querySelector("#categories");
const categoriesChild = categoriesEL.children;

console.log("Number of categories:", categoriesChild.length);

const numberOfEl = function (arr) {
  for (const el of arr) {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.lastElementChild.children.length);
  }
};

numberOfEl(categoriesChild);
