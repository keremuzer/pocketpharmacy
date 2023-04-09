let img = document.getElementById("myImage");
let slideIndex = 1;
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener("click", function(){
  if(slideIndex < 10) {
    slideIndex++;
  }
  else {
  slideIndex = 1;
  }
  img.src = `../images/kullanımTalimatı/${slideIndex}.png`;
});

prev.addEventListener("click", function(){
  if(slideIndex > 1) slideIndex--;
  else slideIndex = 10;
  img.src = `../images/kullanımTalimatı/${slideIndex}.png`;
});