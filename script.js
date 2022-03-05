// timeout-function for spinner
setTimeout(function () {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".main");
  loader.style.animation = "shrink 2s forwards";
  content.style.display = "block";
}, 4000);
