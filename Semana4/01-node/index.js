const axios = require("axios");

console.log("Hola mundo desde Nodemon!");

let nombre = "Jorge";

console.log(nombre);

const hacerPeticion = async() => {
    try {
        let rpta = await axios.get("https://reqres.in/api/users?page=2")
        console.log(rpta)
    } catch (error) {
        console.log(error)
    }
}
hacerPeticion();
