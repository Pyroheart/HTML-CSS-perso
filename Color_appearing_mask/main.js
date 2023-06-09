const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");
const maskedBird = document.querySelector(".piaf-image");

resetButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 10);

  maskedBird.classList.remove("mask-animation");
  setTimeout(() => maskedBird.classList.add("mask-animation"), 10);
});
