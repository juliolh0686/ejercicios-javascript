const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header__menu");

navToggle.addEventListener("click",()=>{
   navMenu.classList.toggle("nav-menu_visible");

   if(navMenu.classList.contains("nav-menu_visible")){
       navToggle.setAttribute("aria-label","Cerrar Menú");
   }else{
       navToggle.setAttribute("aria-label","Abrir Menú");
   }
});


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //Guardamos el modo en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode','true');
    }else{
        localStorage.setItem('dark-mode','false');
    }
});

//obtenemos el modo actual

if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}