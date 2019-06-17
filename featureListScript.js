let featureListEl = document.getElementById("featureListWrapperID")

document.getElementById("signUp").addEventListener("click", function () {

  featureListEl.classList.toggle("featureListWrapperForHover")
  console.log("toggling class")
});

const menuForMobile = document.getElementById("toggleMenu")
const visibleMenus = document.getElementsByClassName('visibleMenu')

menuForMobile.addEventListener("click", function () {
  for (let index = 0; index < visibleMenus.length; index++) {
    const visibleMenu = visibleMenus[index];

    visibleMenu.classList.toggle("hideMenu")
    console.log("toggling class")
  }
});