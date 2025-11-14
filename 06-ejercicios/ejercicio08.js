/*
Ejercicio 8:
Tengo una heladeria y cada bola de helado vale 1.8€.
¿Cuánto cuestan los cucuruchos de 1, 2 y 3 bolas?
Ten en cuenta que el barquillo cuesta 50 centimos de euros
*/

let barquillo = .5;
let eachBola = 1.8;
let totalPriceIce;
let pricePerIcecream;

function resolvePrices(ballNumber){
    return totalPriceIce = (eachBola * ballNumber) + barquillo;
}

console.log(resolvePrices(1));
console.log(resolvePrices(2));
console.log(resolvePrices(3));

let precioBola = 1.8;
let precioBarquillo = .5;
let precioUnaBola = ( precioBola * 1) + precioBarquillo;
let precioDosBolas = ( precioBola * 2) + precioBarquillo;
let precioTresBolas = ( precioBola * 3) + precioBarquillo;

console.log(
    'Cucurucho de una bola: ',  precioUnaBola,
    'Cucurucho de dos bolas: ', precioDosBolas,
    'Cucurucho de tres bolas: ',  precioTresBolas,
)