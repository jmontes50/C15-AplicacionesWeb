let pikachuOriginal = {
    vida: 100,
    fuerza: 80
}

//REFERENCIA
let pikachuAzul = pikachuOriginal;

//SPREAD OPERATOR
let pikachuNaranja = { ...pikachuOriginal }

let pikachuVerde = { ...pikachuOriginal, toxicidad: 50, fuerza: 90 }

pikachuAzul.vida = 60;

// console.log({pikachuAzul:pikachuAzul})
console.table({ pikachuAzul })
console.table({ pikachuOriginal })

console.table({ pikachuNaranja })
console.table({ pikachuVerde })

let alumnos = ["Mijail","Gustavo","Jose Antonio"]

let matriculados = [...alumnos, "Estefani"]

console.table({matriculados})

// DESESTRUCTURACIÓN

let mascota = {
    nombre:"Luna",
    color:"blanca",
    edad:4,
}

console.log(mascota.color)

let {color, nombre} = mascota;

console.log(color)

let frutas = ["Piña","Naranja","Uva","Lima"];

console.log(frutas[1]);

let [fruta1, fruta2, fruta3, fruta4] = frutas;

console.log(fruta4)