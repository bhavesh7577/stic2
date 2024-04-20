document.addEventListener("DOMContentLoaded", function() {
    const submenuLinks = document.querySelectorAll("nav ul > li");
  
    submenuLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const submenu = this.nextElementSibling;
        submenu.classList.toggle("active");
      });
    });
  });