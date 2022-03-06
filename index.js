function toggleMobileMenu(menu) {
    var x = document.getElementById("content");
    if(menu.classList.toggle('open')) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
      }
}