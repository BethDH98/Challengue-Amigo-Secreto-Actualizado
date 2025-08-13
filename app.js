// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return 
    

    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}
    //Mostrar lista 
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";

     amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });


    
}
//sortear amigo

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];


    //Resultado

    const li =document.createElement("li");
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);

    
}

function reiniciarLista() {
    amigos =[];

    //Limpia la lista visible y el resultado

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    alert("Lista reiniciada, puedes comenzar de nuevo");
}


const input = document.getElementById("amigo");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});



