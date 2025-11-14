/*
Ejercicio 5:
Tengo una tarta de queso con 16 porciones.
Cada porción vale 3.8€.
Si vendo todas las porciones, ¿cuánto dinero gano en total?
*/

const portions = 16;

let pricePerPortion = 3.8;

let totalPrice = portions * pricePerPortion;

// totalPrice = Math.ceil(totalPrice); -> si quremos redondear

let messageCakes = `Si vendo las ${portions} porciones, por un precio de ${pricePerPortion} por porción, habré ganado un total de ${totalPrice} €.`;

console.log(messageCakes);
