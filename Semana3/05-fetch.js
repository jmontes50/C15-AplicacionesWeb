//GET
fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        // console.log(respuesta.json());
        return respuesta.json();
    })
    .then((datos) => {
        console.log(datos);
    })
    .catch((err) => {
        console.error(err);
    });

let mascota = {
    nombre: "Backus",
    edad: 14,
    color: "blanco",
};

console.log(typeof JSON.stringify(mascota));

let nuevoUsuario = {
    name: "Alfredo Saire",
    job: "BOSS",
};

let configuracion = {
    method: "POST", //Método HTTP: POST, PUT, DELETE, GET
    headers: {
        //tipo de información que estamos enviando
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario), //data pero en JSON
};

//fetch(endpoint, configuración)
fetch("https://reqres.in/api/users", configuracion)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((usuarioCreado) => {
        console.log(usuarioCreado);
    })
    .catch((err) => console.log(err));
