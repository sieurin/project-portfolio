function setRedMode() {
    document.body.classList.add('red');
  }

function setLightMode() {
    document.body.classList.remove('red');
}

// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects a "section", and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle
document.getElementById("section5").onclick = toggle
document.getElementById("section6").onclick = toggle
document.getElementById("section7").onclick = toggle
document.getElementById("section8").onclick = toggle
document.getElementById("section9").onclick = toggle
document.getElementById("section10").onclick = toggle

