// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaElement = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    const resultadoLi = document.createElement("li");
    resultadoLi.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
    resultadoElement.appendChild(resultadoLi);
}