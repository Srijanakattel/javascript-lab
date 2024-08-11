const form = document.getElementById("sum-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  const sum = num1 + num2;

  alert(`The sum is ${sum}`);
});

