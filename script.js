const form = document.querySelector('.register-form');

const firstName = document.querySelector('.first-name-field');
const lastName = document.querySelector('.last-name-field');
const email = document.querySelector('.email-field');
const password = document.querySelector('.password-field');

const inputArr = [firstName, lastName, password];



// Check input length
function validateLength(inputArr) {
  inputArr.forEach(input => {
    const parentField = input.parentElement;

    if (!input.value.length) {
      const errorMessage = input.nextSibling.nextSibling;
      errorMessage.innerHTML = `${input.placeholder} cannot be empty`;

      parentField.classList.add('failed');
    } else {
      parentField.classList.remove('failed');
    }
  });
}

// Check email validity
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const parentField = email.parentElement;

  if (!re.test(String(email.value.trim()).toLowerCase())) {
    const errorMessage = email.nextSibling.nextSibling;
    errorMessage.innerHTML = 'Looks like this is not an email';

    parentField.classList.add('failed');
  } else {
    parentField.classList.remove('failed');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  validateLength(inputArr);
  validateEmail(email);
});
