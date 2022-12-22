const loginFormEl = document.querySelector(".login-form");
const mailFormEl = loginFormEl.elements.email;
const passwordFormEl = loginFormEl.elements.password;

const submitLoginForm = (event) => {
  if (mailFormEl.value === "" || passwordFormEl.value === "") {
    alert("Please fill out all filds!");
  } else {
    const userData = {
      email: mailFormEl.value,
      password: passwordFormEl.value,
    };
    console.log(userData);
    loginFormEl.reset();
  }
  event.preventDefault();
};

loginFormEl.addEventListener("submit", submitLoginForm);
