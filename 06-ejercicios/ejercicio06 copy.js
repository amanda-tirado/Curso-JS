/*
Ejercicio 6:
En mi tienda de videojuegos tenemos una oferta.
Si compras un juego de 50€ o más, te hacemosun 20% de descuento.
Si un cliente compra el Tekken 15 que cuesta 50€, ¿en cuánto se le queda?
*/

// Mi forma de hacerlo a la primera

// const discount >= 50;
let videogame = 50;
let offer;
let resultVideogame;

const discount = 20;

if(videogame >= 50 ){
    console.log('Tiene una oferta');
    offer = videogame % discount;
    resultVideogame = videogame - offer;
    let showInConsole = `El videojuego costará un total de ${resultVideogame} € con un descuento del ${discount}%, es decir, ${offer}€ de descuento sobre los ${videogame}€ del precio inicial`;
    console.log(resultVideogame);
    console.log(showInConsole);
}

console.log(videogame >= 50);
