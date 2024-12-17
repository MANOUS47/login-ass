var loginContainer = document.getElementById("login-container");
var registerContainer = document.getElementById("register-container");
var welcomeContainer = document.getElementById("welcome-container");
var registerLink = document.getElementById("register-link");
var loginLink = document.getElementById("login-link");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var logoutButton = document.getElementById("logout-button");
var welcomeMessage = document.getElementById("welcome-message");

registerLink.addEventListener("click", () => {
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
});

loginLink.addEventListener("click", () => {
  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    loginContainer.style.display = "none";
    welcomeContainer.style.display = "block";
    welcomeMessage.textContent = `Welcome! ${username}`;
  } else {
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var newUsername = document.getElementById("new-username").value;
  var newPassword = document.getElementById("new-password").value;

  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);

  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  welcomeContainer.style.display = "none";
  loginContainer.style.display = "block";
});

