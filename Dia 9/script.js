document.getElementById("boton").addEventListener("input", ver);
document.getElementById("next").addEventListener("click", siguiente);
document.getElementById("prev").addEventListener("click", anterior);

// Variable para almacenar el ID actual del Pokémon mostrado
let current = null;

// Función que se ejecuta cuando el usuario escribe en el input
function ver() {
    // Obtiene el valor del input
    var e = document.getElementById("boton").value;
    // Construye la URL para la API de PokeAPI con el valor del input
    var revisar = "https://pokeapi.co/api/v2/pokemon/" + e;
    // Llama a la función leer con la URL construida
    leer(revisar);
}

// Función que realiza la solicitud a la API y actualiza el contenido de la página
function leer(revisar) {
    // Realiza una solicitud fetch a la URL proporcionada
    fetch(revisar)
        .then(res => res.json()) // Convierte la respuesta a JSON
        .then(data => {
            // Almacena el ID del Pokémon actual
            current = data.id;
            // Obtiene la URL de la imagen del Pokémon
            let pasos = data.sprites.other.showdown.front_default;
            // Obtiene el nombre del Pokémon
            let Name = data.name;
            // Obtiene el ID del Pokémon
            let id = data.id;
            // Limpia el contenido del elemento con id "output"
            document.getElementById("output").innerHTML = "";
            // Añade la imagen, el nombre y el ID del Pokémon al elemento con id "output"
            document.getElementById("output").innerHTML += `
                <img src="${pasos}">
                <audio autoplay src="${data.cries.latest}"></audio>
                <h3>${Name}</h3>
                <p>${id}</p>
            `;
        })
        .catch(error => console.error("Error:", error)); // Maneja cualquier error que ocurra durante la solicitud
}

// Función que se ejecuta cuando se hace clic en el botón "Next"
function siguiente() {
    if (current !== null) { // Verifica que haya un ID actual
        let nextId = current + 1; // Incrementa el ID actual en 1
        var revisar = "https://pokeapi.co/api/v2/pokemon/" + nextId; // Construye la URL para el siguiente Pokémon
        leer(revisar); // Llama a la función leer con la nueva URL
    }
}

// Función que se ejecuta cuando se hace clic en el botón "Prev"
function anterior() {
    if (current !== null && current > 1) { // Verifica que haya un ID actual y que sea mayor que 1
        let prevId = current - 1; // Decrementa el ID actual en 1
        var revisar = "https://pokeapi.co/api/v2/pokemon/" + prevId; // Construye la URL para el Pokémon anterior
        leer(revisar); // Llama a la función leer con la nueva URL
    }
}

//Desarrollado por Alejandra Machuca Molina, estudiante de CampusLands Grupo T2