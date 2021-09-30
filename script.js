document.addEventListener("DOMContentLoaded", () => {
  const icoNav = document.querySelector("div#menu-icon")
  const divMenu = document.querySelector("ul#menu")

  icoNav.addEventListener("click", myNav)

  window.addEventListener('resize', reportWindowSize);

  function myNav(){
    if( divMenu.style.display === "block" )
      divMenu.style.display = "none"
    else
      divMenu.style.display = "block"
  }

  function reportWindowSize() {
    if(window.innerWidth > 600 ){
      divMenu.style.display = "inline-flex";
      icoNav.style.display = "none"
    }else{
      divMenu.style.display = "none"
      icoNav.style.display = "block"
    }
  }
})