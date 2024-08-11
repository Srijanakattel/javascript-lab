const form = document.getElementById("registration-form");
const validationMessage = document.getElementById("validation-message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const studentID = document.getElementById("student-id").value;
  const studentName = document.getElementById("student-name").value;
  const address = document.getElementById("address").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked');
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;

  let errorMessage = "";

  // Validate student ID (number)
  if (isNaN(studentID)) {
    errorMessage += "Student ID must be a number. <br>";
  }

  // Validate name and address (required)
  if (studentName === "" || address === "") {
    errorMessage += "Name and Address are required fields. <br>";
  }

  // Validate age (non-negative number)
  if (age < 0 || isNaN(age)) {
    errorMessage += "Age must be a non-negative number. <br>";
  }

  // Validate gender (checked)
  if (!gender) {
    errorMessage += "Please select gender. <br>";
  }

  // Validate contact (regular expression)
  const contactRegex = /^\d{10}$/;
  if (!contactRegex.test(contact)) {
    errorMessage += "Invalid contact number format (10 digits). <br>";
  }

  // Validate email (regular expression)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage += "Invalid email format. <br>";
  }

  // Display validation message (if any)
  validationMessage.innerHTML = errorMessage;

  // Submit form if no errors
  if (errorMessage === "") {
    // Simulate form submission (replace with actual submission logic)
    alert("Student registration successful!");
  }
});
