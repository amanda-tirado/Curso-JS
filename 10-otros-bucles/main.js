/*
El while repite un bloque de código mientras una condición sea verdadera.
Un bucle while en JavaScript sirve para repetir un bloque de código mientras se cumpla una condición.
A diferencia del for, no sabes cuántas veces se repetirá — depende de cuándo deje de cumplirse la condición.
*/
// let counter = 0;
// while( ){
//     //si se cumple, se ejecuta indefinidamente
//     contador++;
// }

let year = 1990;
let objective = 2177;
// let interference = 2117
// while(year <= objective){
//     console.log('Estamos en el año' , year);
//     if(year === 2117){
//         break;
//     }
//     year++;
// }

/*
Bucle tipo do while
    El bucle do...while en JavaScript es muy parecido al while,
    pero con una diferencia importante:
    👉 se ejecuta al menos una vez, incluso si la condición es falsa desde el principio.
*/
let numbers = 47;

do{
    console.log(numbers);
    numbers --;
}while(numbers >= 0 );
// }while(numbers >= 77 ); //se ejecuta una vez cuando sigue siendo falso
