let featureListEl = document.getElementById("featureListWrapperID")

document.getElementById("signUp").addEventListener("click", function(){

    featureListEl.classList.toggle("featureListWrapperForHover")
    console.log("toggling class")
  });

let hideMenu = document.querySelector('.subMenu')

document.querySelector(".mobileMenu").addEventListener("click", function(){
  hideMenu.setAttribute("class", "hideMenu")
  hideMenu.click()
});


// function toggleMenu() {
//   var menuBox = document.getElementById('menuForMobile');    
//   if(menuBox.style.display === "flex") { // if is menuBox displayed, hide it
//     menuBox.style.display = "none";
//   }
//   else { // if is menuBox hidden, display it
//     menuBox.style.display = "flex";
//   }
// }