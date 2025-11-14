/*
Ejercicio 6:
En mi tienda de videojuegos tenemos una oferta.
Si compras un juego de 50€ o más, te hacemosun 20% de descuento.
Si un cliente compra el Tekken 15 que cuesta 50€, ¿en cuánto se le queda?
*/

// const discount >= 50;
let videogame = 50;
let discount = videogame * .2;
let finalPrice;
let show; 
if(videogame >= 50 ){
    finalPrice = videogame - discount;
    show = `El precio del videojuego tras aplicar el descuento es ${finalPrice}€`;
    console.log(show);
}
console.log(videogame >= 50);
