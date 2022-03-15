// utilizando var, no recomendable
var nombre = "Jorge";

// let, que es identico a var pero más seguro
//si es que van a cambiar el valor de la variable
let apellido = "Montesinos";

//const, que no permite la modificación de la variable
//casi cualquier cosa se puede asignar a una variable
const pi = 3.1415;

// let nombre = "Osmar";

// console.log(nombre);

apellido = "Aramayo";

console.log(apellido);

// pi = 42;

console.log(pi);

//---------------------------------------

let edad = 31;

console.log(edad);

edad = "treinta y uno";

console.log(typeof edad);

let llueve = false; //true

console.log(llueve);

let noDefinido; //cuando algo no existe

console.log(noDefinido);

let nulo = null;

console.log(nulo);

console.log(25 / "pollos");

//ARREGLOS

let nombresAlumnos = ["Andre", "Guido", "Aldo", "Nikoll", "Junior"];

console.log(nombresAlumnos[4]);

//push para agregar
nombresAlumnos.push("Klebert");

console.log(nombresAlumnos);

//pop
nombresAlumnos.pop();

console.log(nombresAlumnos);

//objetos
let persona = {
    // clave:valor
    // propiedad: valor
    nombre: "Osmar",
    apellido: "Montesinos",
    edad: 31,
    hobbies: ["Programar", "Escuchar Música", "Ver películas"],
};

console.log(persona.nombre);

console.log(persona.hobbies[2]);

// funciones
//clásica
function sumar(a, b) {
    // console.log(this);
    return a + b;
}

console.log(sumar(10, 15));

//función flecha
const restar = (a, b) => {
    // console.log(this);
    return a - b;
};

console.log(restar(10, 15));

let mascota = {
    nombre: "Backus",
    //this es como self de python
    // ladrar: function () {
    //     console.log(this);
    //     console.log("arf!");
    // },
    //Window hace referencia al navegador
    ladrar: () => {
        console.log(this);
        console.log("arf!");
    },
};

// mascota.ladrar();
//puedo reducir automaticamente a una línea
let saludar = (texto = "Hola!!!") => texto;

console.log(saludar("Buenas Tardes"));

//Estructura condicional

let lesQuiere = true;

// un solo = es asignación, esto es igual que
// == estan comparando el contenido
console.log("solo con dos =", 1 == "1");
// === estoy comparando el contenido y el tipo de dato
console.log("con tres =", 1 === "1");
// !== DIFERENTE DE

lesQuiere = "Estamos conociendonos";

if (lesQuiere === true) {
    console.log("Felicidades!!!!");
} else if (typeof lesQuiere !== "boolean") {
    console.log("Parece complicado", typeof lesQuiere);
} else {
    console.log("Vamos por una salchipapa");
}
