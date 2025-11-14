/*
Ejercicio 22:
Tenemos una bolsa con 37 caramelos.
Cada vez que te comes uno, quedan menos.
Haz una simulacion de esto con un bucle
*/

// OPCIÓN 1
let caramelos = 37;

while(caramelos > 0){
    caramelos --;
    console.log(`Te acabas de comer un caramelo, quedan ${caramelos} caramelos`);
}

// OPCIÓN 2
// let caramelos = 37;

// for(let i = 1; i < caramelos; i++){
//     let quedanXcaramelos = i;
//     if(i <= 1){
//         console.log(`Te has comido ${quedanXcaramelos} caramelo, quedan ${caramelos} caramelos`);
//     }else{
//         console.log(`Te has comido ${quedanXcaramelos} caramelos, quedan ${caramelos} caramelos`);
//     }
// }