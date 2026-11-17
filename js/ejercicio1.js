let listaNombres = [];

let inputNombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

function resetInputState() {
    inputNombre.classList.remove("input-error", "input-success");
}

function marcarInputError() {
    resetInputState();
    inputNombre.classList.add("input-error");
}

function marcarInputExito() {
    resetInputState();
    inputNombre.classList.add("input-success");
}

function agregarNombre() {
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese el nombre");
        marcarInputError();
        inputNombre.focus();
        return;
    }

    if (listaNombres.includes(nombre)) {
        alert(`El nombre ${nombre} ya está registrado`);
        inputNombre.value = "";
        marcarInputError();
        inputNombre.focus();
        return;
    }

    marcarInputExito();
    listaNombres.push(nombre);
    inputNombre.value = "";
    inputNombre.focus();
    mostrarNombre();
}

function mostrarNombre() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total nombres: ${listaNombres.length}`;
}