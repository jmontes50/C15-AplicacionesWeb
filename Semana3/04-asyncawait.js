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
        return "READY";
    } else {
        throw "RAPPIIIIIIII";
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

const prepararGlaseado = async () => {
    setTimeout(() => {
        let resultado = true;
        if (resultado) {
            return "Glaseado listo"; //resolve
        } else {
            throw "Quemamos el microondas";
        }
    }, 4000);
};

const ejecutarProceso = async () => {
    try {
        let resultado = await hornearTorta(); //
        let resGlaseado = await prepararGlaseado();
        console.log(resultado);
        console.log(resGlaseado);
    } catch (error) {
        console.log(error);
    }
};

ejecutarProceso();
