// PRODUCTOS base
const productos = [
    {
        nombre: "Croquetas premium perro",
        mascota: "perro",
        categoria: "alimentos",
        precio: 280,
        img: "./img/CroquetaPremium.jpg"
    },
    {
        nombre: "Juguete para gato",
        mascota: "gato",
        categoria: "juguetes",
        precio: 87,
        img: "./img/jugueteGato.jpg"
    },
    {
        nombre: "Shampoo para perro",
        mascota: "perro",
        categoria: "higiene",
        precio: 167,
        img: "./img/shampooPerro.jpg"
    },
    {
        nombre: "Arena para gato",
        mascota: "gato",
        categoria: "higiene",
        precio: 173,
        img: "./img/arenaGato.jpg"
    }
];

let carrito = [];
const lista = document.getElementById("listaProductos");

// Mostrar productos
function cargarProductos(fMascota = "", fCategoria = "") {
    lista.innerHTML = "";

    productos
        .filter(p => (!fMascota || p.mascota === fMascota) && (!fCategoria || p.categoria === fCategoria))
        .forEach(p => {
            lista.innerHTML += `
                <div class="col-md-3 mb-4">
                    <div class="card shadow-sm h-100">
                        <img src="${p.img}" class="card-img-top">
                        <div class="card-body text-center">
                            <h5>${p.nombre}</h5>
                            <p class="fw-bold">C$ ${p.precio}.00</p>
                            <button class="btn btn-primary" onclick="agregarCarrito('${p.nombre}')">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
}

cargarProductos();

// Filtros
document.getElementById("filtroMascota").addEventListener("change", e => {
    cargarProductos(e.target.value, document.getElementById("filtroCategoria").value);
});
document.getElementById("filtroCategoria").addEventListener("change", e => {
    cargarProductos(document.getElementById("filtroMascota").value, e.target.value);
});

// Carrito
function agregarCarrito(nombre) {
    carrito.push(nombre);
    alert("Producto agregado: " + nombre);
}

// Reservas
document.querySelectorAll(".reservar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const servicio = btn.dataset.servicio;
        const hora = prompt(`¿Qué hora deseas reservar para el servicio de ${servicio}?`);
        if (hora) alert(`Reserva confirmada para las ${hora}`);
    });
});

//contacto

    document.getElementById("btnEnviar").addEventListener("click", function () {

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let respuesta = document.getElementById("respuesta");

        // Validación simple
        if (nombre === "" || correo === "" || mensaje === "") {
            respuesta.innerHTML = "⚠️ Por favor, completa todos los campos.";
            respuesta.style.color = "red";
            return;
        }

        // Mensaje de confirmación
        respuesta.innerHTML = "✔ Tu mensaje fue enviado correctamente. ¡Gracias por contactarnos!";
        respuesta.style.color = "green";

        // Limpiar campos
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("mensaje").value = "";
    });

