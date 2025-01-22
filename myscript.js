// JavaScript code for the hamburger menu
document.addEventListener("DOMContentLoaded", () => {
   const hamburger = document.querySelector(".hamburger");
   const menu = document.querySelector(".menu");
   const icon = hamburger.querySelector("i"); // Select the icon inside the button

   hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");

      // Toggle between icons
      if (menu.classList.contains("active")) {
         icon.classList.remove("fa-bars");
         icon.classList.add("fa-xmark");
      } else {
         icon.classList.remove("fa-xmark");
         icon.classList.add("fa-bars");
      }
   });
});
