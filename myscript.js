// JavaScript code for the hamburger menu
document.addEventListener("DOMContentLoaded", () => {
   const hamburger = document.querySelector(".hamburger");
   const menu = document.querySelector(".menu");

   hamburger.addEventListener("click", () => {
      menu.classList.toggle("active"); // Lägg till eller ta bort "active"-klassen
   });
});
