const form = document.getElementById("form-sign-up");
const btnSubmit = document.querySelector(".form__btn");

function renderError(input, message) {
  const divError = document.createElement("div");
  divError.classList.add("form__error");
  divError.innerHTML = `${message} cannot be empty`;
  input.insertAdjacentElement("afterend", divError);
  input.classList.add("form__input--error");
}

const validateState = (e) => {
  const input = e.target;
  if (input.classList.contains("form__input--error")) {
    input.classList.remove("form__input--error");
    input.nextSibling.remove();
  }
};

for (let input of form) {
  input.addEventListener("input", validateState);
}

function deleteErrors() {
  const errors = document.querySelectorAll(".form__error");

  errors.forEach((error) => error.remove());
}

const validateForm = (e) => {
  e.preventDefault();

  deleteErrors();

  for (let input of form) {
    if (input.value == "") {
      renderError(input, input.placeholder);
    }
  }
  const expression = /([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|([\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])\.([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/i
  const emailCorrect = expression.test(String(form['email'].value).toLowerCase());

  if(form['email'].value != '' && !emailCorrect){
    renderError(form['email'], 'Looks like this is not an email');
  }

  const errors = document.querySelectorAll(".form__error");
  if(errors.length === 0){
    const div = document.createElement('div');
    div.classList.add('form__congratulations')
    div.innerHTML = `Thanks, please check your email`;
    form.innerHTML = '';
    form.appendChild(div);
  }
};

form.addEventListener("submit", validateForm);