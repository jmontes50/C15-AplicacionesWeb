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

const ejecutarProceso = async () => {
    try {
        let resultado = await hornearTorta(); //
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

ejecutarProceso();
