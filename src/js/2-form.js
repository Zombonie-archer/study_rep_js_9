const localStorageKey = 'feedback-form-state';
let savedData = localStorage.getItem(localStorageKey);
try {
  savedData = JSON.parse(savedData);
} catch (error) {}
const form = document.querySelector('.feedback-form');
const formData = {
  email: savedData?.email ?? '',
  message: savedData?.message ?? '',
};

const email = form.elements.email;
email.value = formData.email;

const message = form.elements.message;
message.value = formData.message;

form.addEventListener('input', evt => {
  const email = form.elements.email;
  const message = form.elements.message;
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: formData.email,
      message: formData.message,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(localStorageKey);
  form.reset();
});
