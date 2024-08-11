const imageContainer = document.getElementById("image-container");
const description = document.getElementById("description");

const defaultDescription = "This is the default description.";
const hoverDescription = "This is the description displayed on hover.";

imageContainer.addEventListener("mouseover", function() {
  description.textContent = hoverDescription;
});

imageContainer.addEventListener("mouseout", function() {
  description.textContent = defaultDescription;
});
