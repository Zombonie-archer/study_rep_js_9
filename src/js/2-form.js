
const localStorageKey = "feedback-form-state";
let savedData = localStorage.getItem(localStorageKey);
try {
  savedData = JSON.parse(savedData);
} catch (error) {}
const form = document.querySelector(".feedback-form");
const formData = { email: savedData?.email ?? "", message: savedData?.message ?? "" };

const email = form.elements.email;
email.value = formData.email;

const message = form.elements.message;
message.value = formData.message;

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, JSON.stringify({
    email: form.elements.email.value,
    message: form.elements.message.value
  }));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});