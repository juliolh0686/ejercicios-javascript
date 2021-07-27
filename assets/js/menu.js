const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header__menu");

navToggle.addEventListener("click",()=>{
   navMenu.classList.toggle("nav-menu_visible");

   if(navMenu.classList.contains("nav-menu_visible")){
       navToggle.setAttribute("aria-label","Cerrar Menú");
   }else{
       navToggle.setAttribute("aria-label","Abrir Menú");
   }
})