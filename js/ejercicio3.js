let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

function marcarValidacion(input, estado) {
    input.classList.remove("input-error", "input-success");
    if (estado === "error") {
        input.classList.add("input-error");
    } else if (estado === "success") {
        input.classList.add("input-success");
    }
}

function agregarProducto() {
    if (!formulario.reportValidity()) {
        marcarValidacion(producto, "error");
        marcarValidacion(precio, "error");
        marcarValidacion(cantidad, "error");
        return;
    }

    listaProductos.push({
        nombre: producto.value.trim(),
        precio: parseFloat(precio.value),
        cantidad: parseInt(cantidad.value, 10)
    });

    marcarValidacion(producto, "success");
    marcarValidacion(precio, "success");
    marcarValidacion(cantidad, "success");

    formulario.reset();
    mostrar();
}

function mostrar() {
    let totalNuevo = 0;
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let productoActual = listaProductos[i];
        let subtotal = productoActual.precio * productoActual.cantidad;
        totalNuevo += subtotal;

        tabla.innerHTML += `<tr>
            <td>${productoActual.nombre}</td>
            <td>$${productoActual.precio.toFixed(2)}</td>
            <td>${productoActual.cantidad}</td>
            <td>$${subtotal.toFixed(2)}</td>
        </tr>`;
    }

    total.textContent = `Total: $${totalNuevo.toFixed(2)}`;
}