function myFunction() {
  var x = document.getElementById("navbar-instance");
  if (x.className === "navbar-container") {
    x.className += " responsive";
  } else {
    x.className = "navbar-container";
  }
}