let listaEstudiantes = [
    {nombre: "Ana Torres", edad: 14, curso: "9A"},
    {nombre: "Mateo Ruiz", edad: 15, curso: "10B"},
    {nombre: "Lucía Gómez", edad: 13, curso: "8A"},
    {nombre: "Samuel Díaz", edad: 16, curso: "11A"},
    {nombre: "Valentina Cruz", edad: 14, curso: "9B"}
];

let nombre = document.getElementById("nombre");
let resultado = document.getElementById("resultado");

function mostrarResultadoEstado(mensaje, tipo) {
    resultado.textContent = mensaje;
    resultado.classList.remove("resultado-exito", "resultado-error");

    if (tipo === "error") {
        resultado.classList.add("resultado-error");
    } else if (tipo === "exito") {
        resultado.classList.add("resultado-exito");
    }
}

function buscarEstudiante() {
    let nombreBuscar = nombre.value.trim().toLowerCase();

    if (nombreBuscar === "") {
        mostrarResultadoEstado("Por favor ingrese un nombre", "error");
        nombre.classList.add("input-error");
        return;
    }

    nombre.classList.remove("input-error");
    let encontrado = false;

    for (let i = 0; i < listaEstudiantes.length; i++) {
        let estudianteActual = listaEstudiantes[i];

        if (estudianteActual.nombre.toLowerCase() === nombreBuscar) {
            resultado.innerHTML =
                "<strong>Nombre:</strong> " + estudianteActual.nombre + "<br>" +
                "<strong>Edad:</strong> " + estudianteActual.edad + " años<br>" +
                "<strong>Curso:</strong> " + estudianteActual.curso;

            resultado.classList.remove("resultado-error");
            resultado.classList.add("resultado-exito");
            encontrado = true;
            break;
        }
    }

    if (encontrado === false) {
        resultado.innerHTML = "";
        mostrarResultadoEstado("Estudiante no encontrado", "error");
    }
}