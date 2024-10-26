// Get all the open popup buttons
const openPopupButtons = document.querySelectorAll(".open-popup");

// Get all the close popup buttons
const closePopupButtons = document.querySelectorAll(".close-popup");

// Get all return buttons
const returnButtons = document.querySelectorAll(".return-btn");

// Add event listener to open buttons
openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.getAttribute("data-popup");
    document.getElementById(popupId).classList.add("active");
  });
});

// Add event listener to close buttons
closePopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    button.closest(".popup-overlay").classList.remove("active");
  });
});

// Add event listener to return buttons
returnButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    button.closest(".popup-overlay").classList.remove("active");
  });
});

// Optional: Close the popup when clicking outside the popup-content
document.querySelectorAll(".popup-overlay").forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
