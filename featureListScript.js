let featureListEl = document.getElementById("featureListWrapperID");
const menuForMobile = document.getElementById("toggleMenu");
const visibleMenus = document.getElementsByClassName("visibleMenu");
const formSubmitButton = document.getElementById("submitButton");

let backOutButton = document.querySelector('.backOutButton')

if (checkIfFormWasFilled() === 'true') {
  hideForm()
  console.log('hiding form')
}

document.getElementById("signUp").addEventListener("click", function () {
  featureListEl.classList.toggle("featureListWrapperForHover");
  console.log("toggling class");
});

menuForMobile.addEventListener("click", function () {
  for (let index = 0; index < visibleMenus.length; index++) {
    const visibleMenu = visibleMenus[index];

    visibleMenu.classList.toggle("hideMenu");
    console.log("toggling class");
  }
});

formSubmitButton.addEventListener("click", function () {
  if (checkIfFormIsValid()) {
    let formPopUpBackground = document.querySelector(".formPopUpBackgroundOff");

    formPopUpBackground.classList.remove("formPopUpBackgroundOff");
    formPopUpBackground.classList.add("formPopUpBackground");

    hideForm()
  }
});

backOutButton.addEventListener('click', function () {

  let formPopUpBackground = document.querySelector(".formPopUpBackground")

  formPopUpBackground.classList.remove("formPopUpBackground")
  formPopUpBackground.classList.add("formPopUpBackgroundOff")

})

function checkIfFormIsValid() {
  return document.getElementById("emailForm").checkValidity();
}

function addUserToLocalStorage() {
  return localStorage.setItem('formSent', true)
}

function checkIfFormWasFilled() {
  return localStorage.getItem('formSent')
}

function hideForm() {

  let form = document.querySelector('.form')
  let formWasFilled = document.querySelector('.formWasFilledHidden')
  let formWrapper = document.querySelector('.formWrapper')

  form.classList.remove('form')
  form.classList.add('formHidden')

  formWrapper.append(formWasFilled)
  formWasFilled.classList.remove('formWasFilledHidden')
  formWasFilled.classList.add('formWasFilled')

  addUserToLocalStorage()

}