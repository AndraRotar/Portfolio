var firstNameError = document.querySelector("#firstname-error");
var lastNameError = document.querySelector("#lastname-error");
var phoneError = document.querySelector("#phone-error");
var emailError = document.querySelector("#email-error");
var messageError = document.querySelector("#message-error");
var submitError = document.querySelector("#submit-error");
var submitField = document.querySelector("#submit-form");

// First name validation
var firstNameField = document.getElementById("first-name");
firstNameField.addEventListener("input", validateFirstName);

function validateFirstName() {
  var firstName = document.getElementById("first-name").value;
  var letters = /^[A-Za-z]+$/;

  if (firstName == 0) {
    firstNameError.innerHTML = "First name is required";
    firstNameField.classList.add("input-error");
    firstNameField.classList.remove("input-valid");
    return false;
  }

  if (!firstName.match(letters)) {
    firstNameError.innerHTML = "First name is invalid";
    firstNameField.classList.add("input-error");
    firstNameField.classList.remove("input-valid");
    return false;
  }

  firstNameError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  firstNameField.classList.remove("input-error");
  firstNameField.classList.add("input-valid");
  return true;
}

//Last name validation
var lastNameField = document.getElementById("last-name");
lastNameField.addEventListener("input", validateLastName);

function validateLastName() {
  var lastName = document.getElementById("last-name").value;
  var letters = /^[A-Za-z]+$/;

  if (lastName == 0) {
    lastNameError.innerHTML = "Last name is required";
    lastNameField.classList.add("input-error");
    lastNameField.classList.remove("input-valid");
    return false;
  }

  if (!lastName.match(letters)) {
    lastNameError.innerHTML = "Last name is invalid";
    lastNameField.classList.add("input-error");
    lastNameField.classList.remove("input-valid");
    return false;
  }

  lastNameError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  lastNameField.classList.remove("input-error");
  lastNameField.classList.add("input-valid");
  return true;
}

//  Phone number validation
var phoneNumberField = document.getElementById("phone-number");
phoneNumberField.addEventListener("input", validatePhoneNumber);

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone-number").value;
  var numbers = /^[0-9]{10}$/;

  if (phoneNumber == 0) {
    phoneError.innerHTML = "Telephone number is required";
    phoneNumberField.classList.add("input-error");
    phoneNumberField.classList.remove("input-valid");
    return false;
  }

  if (!phoneNumber.match(numbers)) {
    phoneError.innerHTML = "Telephone number is invalid";
    phoneNumberField.classList.add("input-error");
    phoneNumberField.classList.remove("input-valid");
    return false;
  }

  phoneError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  phoneNumberField.classList.remove("input-error");
  phoneNumberField.classList.add("input-valid");
  return true;
}

//  Email validation

var emailField = document.getElementById("email");
emailField.addEventListener("input", validateEmail);

function validateEmail() {
  var email = document.getElementById("email").value;
  var correctEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == 0) {
    emailError.innerHTML = "Email is required";
    emailField.classList.add("input-error");
    emailField.classList.remove("input-valid");
    return false;
  }

  if (!email.match(correctEmailFormat)) {
    emailError.innerHTML = "Email is invalid";
    emailField.classList.add("input-error");
    emailField.classList.remove("input-valid");
    return false;
  }

  emailError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  emailField.classList.remove("input-error");
  emailField.classList.add("input-valid");
  return true;
}

// Message validation
var messageField = document.getElementById("contact-message");
var messageCounterField = document.getElementById("message-counter");
var maxNumberOfCharacters = 200;

messageField.addEventListener("input", validateMessage);

function validateMessage() {
  var messageText = document.getElementById("contact-message").value;
  var charactersLeft = maxNumberOfCharacters - messageText.length;
  messageCounterField.innerHTML = charactersLeft + " remining characters";

  if (messageText == 0) {
    messageError.innerHTML = "Please type your message";
    messageField.classList.add("input-error");
    messageField.classList.remove("input-valid");
    return false;
  }

  if (charactersLeft <= 10) {
    messageCounterField.style.color = "red";
  } else if (charactersLeft <= 50) {
    messageCounterField.style.color = "orange";
  }

  messageError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  messageField.classList.remove("input-error");
  messageField.classList.add("input-valid");
  return true;
}

// Form validation
var formValidation = document.getElementById("form");
formValidation.addEventListener("submit", validateForm);
var submitCorrect = document.getElementById("submit-correct");

function registerForm() {
  var firstName = document.getElementById("first-name").value;
  console.log(firstName);
  var lastName = document.getElementById("last-name").value;
  console.log(lastName);
  var phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);
  var email = document.getElementById("email").value;
  console.log(email);
  var messageText = document.getElementById("contact-message").value;
  console.log(messageText);
}

function fieldReset() {
  firstNameField.classList.remove("input-valid");
  firstNameError.innerHTML = "";
  lastNameField.classList.remove("input-valid");
  lastNameError.innerHTML = "";
  phoneNumberField.classList.remove("input-valid");
  phoneError.innerHTML = "";
  emailField.classList.remove("input-valid");
  emailError.innerHTML = "";
  messageField.classList.remove("input-valid");
  messageError.innerHTML = "";
  messageCounterField.innerHTML =
    maxNumberOfCharacters + " remining characters";
  messageCounterField.style.color = "#2f8886";
}

function validateForm(e) {
  e.preventDefault();
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validatePhoneNumber() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.innerHTML = "Correct the form information to submit";
    submitCorrect.innerHTML = "";
    submitCorrect.classList.remove("submit-correct");
    return false;
  } else {
    var firstName = document.getElementById("first-name").value;
    submitError.innerHTML = "";
    submitCorrect.classList.add("submit-correct");
    submitCorrect.innerHTML = "Thank you for your message, " + firstName + " !";
    registerForm();
    form.reset();
    fieldReset();
    return true;
  }
}
