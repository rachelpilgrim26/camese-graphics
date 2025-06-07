// Smooth scroll and auto-fill message when "Order Now" is clicked
const orderButtons = document.querySelectorAll(".order-btn");
const messageBox = document.querySelector('textarea[name="message"]');
const contactSection = document.querySelector(".contact");

orderButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const shirtName = button.getAttribute("data-shirt");
    messageBox.value = `I would like to order \"${shirtName}\", size: `;
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
