console.log("1. estamos jugando un juego de mesa");

const pedirRappi = (callback) => {
    setTimeout(() => {
        console.log("2. Pedimos el RAPPI y esperamos");
        //al final
        callback();
    }, 2000);
};

const comer = () => {
    console.log("3. Llega el RAPPI y comemos");
};

pedirRappi(comer);
