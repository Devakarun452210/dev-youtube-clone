var menuIcon = document.querySelector(".menuIcon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

function smallSidebar() {
  sidebar.classList.toggle("smallSidebar");
  container.classList.toggle("largeContainer");
}
