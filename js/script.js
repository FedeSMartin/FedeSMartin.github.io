const experienciaEstudios = document.getElementById("experienciaEstudios");
const pagina2 = document.getElementById("pagina2");
const volver = document.getElementById("volver");

experienciaEstudios.addEventListener("click", ()=>{
    pagina2.classList.add("visible");
});

volver.addEventListener("click", ()=>{
    pagina2.classList.remove("visible");
});