function increaseWidth() {
  var img = document.getElementById("myImage");
  var width = parseInt(img.style.width) || img.width;
  img.style.width = (width + 100) + "px";
}

function decreaseWidth() {
  var img = document.getElementById("myImage");
  var width = parseInt(img.style.width) || img.width;
  img.style.width = (width - 100) + "px";
}