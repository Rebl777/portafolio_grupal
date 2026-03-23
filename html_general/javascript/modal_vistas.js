let proyectos = document.querySelectorAll(".imagen_proyecto");
let modal = document.getElementById("modal_proyecto");

let modalImg = modal.querySelector(".modal_img");
let modalTitulo = modal.querySelector(".modal_titulo");
let modalDesc = modal.querySelector(".modal_desc");

// abrir modal
proyectos.forEach(proyecto => {
    proyecto.addEventListener("click", function() {
        let img = proyecto.querySelector("img");
        let titulo = proyecto.querySelector(".titulo").textContent;
        let descripcion = proyecto.querySelector(".descripcion").textContent;

        modalImg.src = img.src;
        modalTitulo.textContent = titulo;
        modalDesc.textContent = descripcion;

        modal.showModal();
    });
});

// cerrar modal
modal.querySelector(".cerrar").addEventListener("click", () => {
    modal.close();
});