let hoy = new Date();

console.log(hoy);

console.log("día", hoy.getDate());

// en cuanto al mes Date lo maneja comenzando desde 0
console.log("mes", hoy.getMonth());

console.log("Año", hoy.getFullYear());

let navidad = new Date(2022, 11, 25);

console.log(navidad);

console.log(navidad.toISOString());

// TIMESTAMP - milisegundos
// Cuantos milisegundos han transcurrido desde 01 de enero de 1970
console.log(hoy.getTime());

//-----------------------

// math

let raiz = Math.sqrt(16);

console.log(raiz);

let pi = Math.PI;

console.log(pi);

// valor aletorio entre 0 y 1
console.log(Math.random());

// arreglos

let alumnos = ["Andre", "Mijael", "Viktor", "Nikoll"];

alumnos.forEach((item) => {
    console.log(item);
    //no retorna nada
});

let saludosAlumnos = alumnos.map((alum, indice) => {
    return `${indice} Hola ${alum}`;
});

console.log("Saludos alumnos", saludosAlumnos);

console.log(alumnos);

// copia por referencia y copia de datos
/**
let pikachu = {
    vida: 50,
    ataque: 100,
};

// DON'T DO THAT
let pikachuverde = pikachu;

let pikachuAzul = { ...pikachu };

console.log(pikachuverde);

pikachuverde.vida = 20;

console.log({ pikachu });

console.log({ pikachuAzul });
 */

let notas = [20, 17, 14, 12, 11, 8, 10, 13, 10, 17, 5];

let aprobados = notas.filter((nota) => {
    return nota >= 11;
});

// console.log({ aprobados: aprobados });
console.log({ aprobados });
