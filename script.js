

function mobile() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.position = "fixed";
    } else {
      x.style.display = "none";
      x.style.position = "static";
    }
  }
