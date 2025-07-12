
// Show alert for cart button
document.querySelector(".cart-btn").addEventListener("click", function () {
  alert("Redirecting to cart...");
});

// Modal logic
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const loginFrame = document.getElementById("loginFrame");
const closeBtn = document.getElementById("closeBtn");

// Show modal with login page
loginBtn.addEventListener("click", () => {
  loginFrame.src = "login.html"; // load login page in iframe
  loginModal.style.display = "flex";
});

// Hide modal when close button is clicked
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});
