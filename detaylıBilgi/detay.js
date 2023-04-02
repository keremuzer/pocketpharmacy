function increaseFontSize() {
  var p = document.getElementById("text");
  var currentFontSize = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var currentFontSizeNum = parseFloat(currentFontSize);
  p.style.fontSize = (currentFontSizeNum + 2) + 'px';
}

function decreaseFontSize() {
  var p = document.getElementById("text");
  var currentFontSize = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var currentFontSizeNum = parseFloat(currentFontSize);
  p.style.fontSize = (currentFontSizeNum - 2) + 'px';
}