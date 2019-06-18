let featureListEl = document.getElementById("featureListWrapperID");
const menuForMobile = document.getElementById("toggleMenu");
const visibleMenus = document.getElementsByClassName("visibleMenu");
const formSubmitButton = document.getElementById("submitButton");

document.getElementById("signUp").addEventListener("click", function() {
  featureListEl.classList.toggle("featureListWrapperForHover");
  console.log("toggling class");
});

menuForMobile.addEventListener("click", function() {
  for (let index = 0; index < visibleMenus.length; index++) {
    const visibleMenu = visibleMenus[index];

    visibleMenu.classList.toggle("hideMenu");
    console.log("toggling class");
  }
});

formSubmitButton.addEventListener("click", function() {
  if (checkIfFormIsValid()) {
    let formPopUpBackground = document.querySelector(".formPopUpBackgroundOff");

    formPopUpBackground.classList.remove("formPopUpBackgroundOff");
    formPopUpBackground.classList.add("formPopUpBackground");
    
    let toGameButton = document.querySelector('.toGameButton')
    let backOutButton = 
//TODO
  }
});

function checkIfFormIsValid() {
  return document.getElementById("emailForm").checkValidity();
}
