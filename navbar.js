let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let isActive = false;

bars.addEventListener("click", function(){
  if(isActive == true){
    navbar.style.display = ("none");
    isActive = false;
  }
  else if(isActive == false){
    navbar.style.display = ("flex");
    isActive = true;
  }
});