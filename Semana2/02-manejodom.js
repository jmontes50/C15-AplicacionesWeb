console.log("Info Navegador", window.navigator.userAgent);

console.log(
    "Posición",
    navigator.geolocation.getCurrentPosition((ubicacion) => {
        console.log(ubicacion);
    })
);

console.log(document);

// querySelector
let miBody = document.querySelector("body");

console.log(miBody);

// como si fuera un string
miBody.innerHTML = "<h1>Nuevo Título</h1>";

let miTitulo = document.querySelector("h1");

miTitulo.innerHTML = "<code>Segundo Título</code>";

let parrafo = document.createElement("p");

console.log(parrafo);

parrafo.innerText = "Hola mundo!";

miBody.appendChild(parrafo);

let imagen = document.createElement("img");

imagen.setAttribute("src", "https://picsum.photos/400");

miBody.appendChild(imagen);

miBody.style.backgroundColor = "steelblue";
