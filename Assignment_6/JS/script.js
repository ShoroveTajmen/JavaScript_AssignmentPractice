// Set default and minimum date for the date input
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const dateInput = document.getElementById("date");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("value", formattedDate);
  dateInput.setAttribute("min", formattedDate);
});

// Show/Hide Password
const passwordInput = document.getElementById("password");
const showHideBtn = document.getElementById("showHideBtn");

showHideBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showHideBtn.textContent = "Hide";
  } else {
      passwordInput.type = "password";
      showHideBtn.textContent = "Show";
  }
});

// Form Validation
const form = document.getElementById("registrationForm");
const errorContainer = document.getElementById("errorContainer");
const studentNumberRegEx = /^a0[0-9]{7}$/i;

form.addEventListener("submit", (event) => {
  let isValid = true;
  let errorMessages = [];

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  errorContainer.innerHTML = ""; // Clear previous error messages

  // Validate Firstname
  const firstname = document.getElementById("firstname");
  if (!firstname.value.trim()) {
      highlightError(firstname);
      errorMessages.push("❌ Firstname is required.");
      isValid = false;
  }

  // Validate Lastname
  const lastname = document.getElementById("lastname");
  if (!lastname.value.trim()) {
      highlightError(lastname);
      errorMessages.push("❌ Lastname is required.");
      isValid = false;
  }

  // Validate Student ID
  const studentId = document.getElementById("studentId");
  if (!studentId.value.trim()) {
      highlightError(studentId);
      errorMessages.push("❌ Student ID is required.");
      isValid = false;
  } else if (!studentNumberRegEx.test(studentId.value)) {
      highlightError(studentId);
      errorMessages.push("❌ Invalid Student ID. Format: A0nnnnnnn.");
      isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password");
  if (!password.value.trim()) {
      highlightError(password);
      errorMessages.push("❌ Password cannot be empty.");
      isValid = false;
  }

  // Validate Course Selection
  const courses = document.getElementById("courses");
  if (courses.value === "") {
      highlightError(courses);
      errorMessages.push("❌ Please select a course.");
      isValid = false;
  }

  // If there are errors, prevent form submission and display messages
  if (!isValid) {
      event.preventDefault();
      displayErrorMessages(errorMessages);
  }
});

// Function to highlight the error field
function highlightError(element) {
  element.classList.add("error");
}

// Function to display error messages below the form
function displayErrorMessages(messages) {
  let errorBox = document.createElement("div");
  errorBox.classList.add("error-message-container");

  let errorTitle = document.createElement("p");
  errorTitle.textContent = "⚠️ Please fix the following errors before submitting:";
  errorTitle.style.fontWeight = "bold";
  errorBox.appendChild(errorTitle);

  let errorList = document.createElement("ul");
  messages.forEach(msg => {
      let listItem = document.createElement("li");
      listItem.textContent = msg;
      errorList.appendChild(listItem);
  });

  errorBox.appendChild(errorList);
  errorContainer.appendChild(errorBox);
}
