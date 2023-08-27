// select elements

const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");
const successMessage = document.querySelector("#success-message");

// --- EMAIL REGULAR EXPRESSION --
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// ---

emailInput.addEventListener("blur", () => {
  if (!EMAIL_REGEX.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    emailError.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
    emailError.classList.remove("invalid");
  }
});

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("main").style.display = "none";
  successMessage.style.display = "flex";
});
