const hornearTorta = async () => {
    // try {
    //     //intenta esto //va bien //resolve
    //     return "La torta esta ready";
    // } catch (error) {
    //     //si hay error ejecuta esto otro //va mal
    //     throw "pide rappi nomas"; //reject
    // }
    let resultado = true;
    if (resultado) {
        return "READY"; //Resolve
    } else {
        throw "RAPPIIIIIIII"; //Reject
    }
};

// hornearTorta()
//     .then((resPositivo) => {
//         //vaya bien
//         console.log(resPositivo);
//     })
//     .catch((resNegativo) => {
//         //solamente necesitamos un catch
//         //va mal
//         console.log(resNegativo);
//     });

const prepararGlaseado = () => {
    let glaseado = true;
    if (glaseado) {
        return "glaseado Listo";
    } else {
        throw "quemamos el microondas";
    }
};

const ejecutarProceso = async () => {
    try {
        let resultado = await hornearTorta(); //
        let resultado2 = await prepararGlaseado();

        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
};

ejecutarProceso();
