// 1. Función para el botón Buscar del header
function mostrarCorreo() {
    const inputBusqueda = document.querySelector("#correo");
    if (inputBusqueda.value.trim() === "") {
        alert("Escribe algo para buscar en los servicios.");
    } else {
        alert("Buscando: " + inputBusqueda.value);
    }
}

// 2. Carrusel básico
const slides = [
    { img: "static/images/imgtec.jpg", text: "Soporte técnico en terreno" },
    { img: "static/images/redes.jfif", text: "Redes y conectividad" },
    { img: "static/images/software.jfif", text: "Desarrollo web y software" }
];

let currentIndex = 0;
const imagenPrincipal = document.querySelector("#imagen-principal");
const descripcionCarrusel = document.querySelector(".descripcion-carrusel");
const puntos = document.querySelectorAll(".punto");
const btnAnterior = document.querySelector(".btn-carrusel.anterior");
const btnSiguiente = document.querySelector(".btn-carrusel.siguiente");

function actualizarSlide(index) {
    if (imagenPrincipal) {
        imagenPrincipal.src = slides[index].img;
        descripcionCarrusel.textContent = slides[index].text;
        puntos.forEach((punto, i) => {
            if (i === index) {
                punto.classList.add("activo");
            } else {
                punto.classList.remove("activo");
            }
        });
    }
}

if (btnSiguiente) {
    btnSiguiente.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        actualizarSlide(currentIndex);
    });
}

if (btnAnterior) {
    btnAnterior.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        actualizarSlide(currentIndex);
    });
}

// 3. Contador de Me gusta
const botonesMeGusta = document.querySelectorAll(".boton-me-gusta");
botonesMeGusta.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.stopPropagation();
        const contadorLikes = boton.querySelector(".contador-likes");
        let contador = parseInt(contadorLikes.textContent);
        
        if (boton.classList.contains("liked")) {
            boton.classList.remove("liked");
            contadorLikes.textContent = contador - 1;
        } else {
            boton.classList.add("liked");
            contadorLikes.textContent = contador + 1;
        }
    });
});

// 4. Modal para detalles de proyectos
const modalProyecto = document.querySelector("#modal-proyecto");
const tarjetasProyecto = document.querySelectorAll(".tarjeta-proyecto");
const cerrarModal = document.querySelector(".cerrar-modal");
const tituloModal = document.querySelector("#titulo-modal");
const descripcionModal = document.querySelector("#descripcion-modal");

tarjetasProyecto.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const titulo = tarjeta.getAttribute("data-titulo");
        const descripcion = tarjeta.getAttribute("data-desc");
        
        tituloModal.textContent = titulo;
        descripcionModal.textContent = descripcion;
        modalProyecto.style.display = "flex";
    });
});

if (cerrarModal) {
    cerrarModal.addEventListener("click", () => {
        modalProyecto.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modalProyecto) {
        modalProyecto.style.display = "none";
    }
});