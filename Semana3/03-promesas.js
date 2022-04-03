const hornearTorta = () => {
    return new Promise((resolve, reject) => {
        //la tarea que va a demorar
        setTimeout(() => {
            let estado = true;
            if (estado === true) {
                //va bien
                resolve("La torta esta Ready");
            } else {
                reject("Tienes Rappi, tengo hambre");
            }
        }, 4000);
    });
};

const prepararGlaseado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let estado = false;
            if (estado === true) {
                resolve("El chocolate esta listo");
            } else {
                reject("Quemamos el microondas");
            }
        }, 3000);
    });
};

hornearTorta()
    .then((resPositivo) => {
        //vaya bien
        console.log(resPositivo);
        return prepararGlaseado(); //nueva promesa
    })
    .then((resPosGlaseado) => {
        console.log(resPosGlaseado);
    })
    .catch((resNegativo) => {
        //solamente necesitamos un catch
        //va mal
        console.log(resNegativo);
    });
