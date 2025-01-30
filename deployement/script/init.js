const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

function resizeCanvas() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
}

window.onresize = resizeCanvas;
window.onload = setTimeout(() => {
  resizeCanvas();
}, 500);
