const form = document.getElementById("registration-form");
const validationMessage = document.getElementById("validation-message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const hobbiesChecked = document.querySelectorAll('input[name="hobbies[]"]:checked');

  let errorMessage = "";

  // Validate username (required, length 5)
  if (username === "" || username.length !== 5) {
    errorMessage += "Username is required and must be 5 characters long. <br>";
  }

  // Validate password (required)
  if (password === "") {
    errorMessage += "Password is required. <br>";
  }

  // Validate gender (checked)
  if (!genderChecked) {
    errorMessage += "Please select your gender. <br>";
  }

  // Validate hobbies (at least one checked)
  if (hobbiesChecked.length === 0) {
    errorMessage += "Please select at least one hobby. <br>";
  }

  // Display validation message (if any)
  validationMessage.innerHTML = errorMessage;

  // Submit form if no errors
  if (errorMessage === "") {
    // Simulate form submission (replace with actual submission logic)
    alert("Registration successful!");
  }
});
