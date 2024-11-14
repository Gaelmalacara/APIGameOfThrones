//Verificando de que el archivo se este cargando 
console.log("Script app.MensajesGitHub.js cargando");

const API_URL = 'https://gamesofthronesquotes.xyz/v1/random';

function fetchQuote() {
    //Verificación de que se llama a la función
    console.log("Intentando obtener una cita...");

    fetch(API_URL)
    .then(response => {
        //Mostrar la respuesta en consola
        console.log("Respuesta recibida:", response);
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }
        return response.json();
    })
    .then(data =>{
        //Mostrar datos obtenidos en consola
        console.log("Datos Obtenidos:", data);
        displayQuote(data);
    })
    .catch(error => console.error(`Error al obtener la cita:`, error));
}

function displayQuote(quoteData) {
    const container = document.getElementById('games-container');
    container.innerHTML = `<p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>`;
    console.log("Cita Mostrada Correctamente");
}

//Llamar a la función al cargar la página
fetchQuote();