document.addEventListener("DOMContentLoaded", () => {
  // Initialize flatpickr on the date input
  flatpickr("#date", {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
      // Update the value of the input when a date is selected
      document.getElementById("date").value = dateStr;
    }
  });

  // Set the default date to today's date
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  document.getElementById("date").value = formattedDate;

  // Add event listener for the clear button
  document.getElementById("clearDate").addEventListener("click", () => {
    // When the clear button is clicked, set the date to today's date
    document.getElementById("date").value = formattedDate;
    // Trigger the change event to update the flatpickr instance
    const fp = flatpickr.getInstance(document.getElementById("date"));
    if (fp) {
      fp.setDate(formattedDate);
    }
  });
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
      errorMessages.push(" Firstname is required.");
      isValid = false;
  }

  // Validate Lastname
  const lastname = document.getElementById("lastname");
  if (!lastname.value.trim()) {
      highlightError(lastname);
      errorMessages.push(" Lastname is required.");
      isValid = false;
  }

  // Validate Student ID
  const studentId = document.getElementById("studentId");
  if (!studentId.value.trim()) {
      highlightError(studentId);
      errorMessages.push("Seriously? You should know you need to provide a student number.");
      isValid = false;
  } else if (!studentNumberRegEx.test(studentId.value)) {
      highlightError(studentId);
      errorMessages.push(" Invalid Student ID. Format: A0nnnnnnn.");
      isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password");
  if (!password.value.trim() || password.value === "") {
      highlightError(password);
      errorMessages.push(" Password cannot be empty.");
      isValid = false;
  }

  // Validate Course Selection
  const courses = document.getElementById("courses");
  if (courses.value === "") {
      highlightError(courses);
      errorMessages.push(" Please choose a course from the drop down list.");
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
  errorTitle.innerHTML = '<span class="warning-text">❕Warning</span> Form Submission Failed!';
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
