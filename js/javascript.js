//MENU HAMBURGUESA
let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();


//MODO CLARO/SOCURO
const boton = document.getElementById("toggleTema");

boton.addEventListener("click",oscuro);

function oscuro(){
    document.body.classList.toggle("oscuro");
}