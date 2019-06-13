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

// let hideMenu = document.querySelector('.subMenu')

// document.querySelector(".mobileMenu").addEventListener("click", function(){
//   hideMenu.setAttribute("class", "hideMenu")
// });

// document.getElementById("signUp").addEventListener("click",
// function toggleMenu() {
//   var menuBox = document.getElementById('menuForMobile');    
//   if(menuBox.style.display === "flex") { // if is menuBox displayed, hide it
//     menuBox.style.display = "none";
//   }
//   else { // if is menuBox hidden, display it
//     menuBox.style.display = "flex";
//   }
// }

// window.nav = {
//   status: false,
//   menu: function(){
//     if (nav.status){
//       // here put class when menu is open - eg:
//       document.getElementById("menu-box").className = "menu-box menuopen";
//       nav.status = false;
//     } else {
//       // here put class when menu is closed - eg:
//       document.getElementById("menu-box").className = "menu-box";
//       nav.status = true;
//     } 
//   }
// }