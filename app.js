function getColorCode() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  let color = getColorCode();
  document.getElementById("color_code").innerHTML = color;
  document.body.style.background = color;
  document.getElementById("button").style.color = color;
}


