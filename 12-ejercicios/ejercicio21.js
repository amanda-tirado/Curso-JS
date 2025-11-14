/*
Ejercicio 21:

Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal, que nos lo vuelva a pedir
- En una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/

let numberOne = parseInt(prompt('Dame un número'));
let numberTwo = parseInt(prompt('Dame otro número'));
let suma = numberOne + numberTwo;
let resta = numberOne - numberTwo;
let multiplicacion = numberOne * numberTwo;
let division = numberOne / numberTwo;


while( numberOne < 0 || numberTwo < 0 || isNaN(numberOne) || isNaN(numberTwo)){
    numberOne = parseInt(prompt('Dame un número'));
    numberTwo = parseInt(prompt('Dame otro número'));    
}

let result =`
Suma: ${numberOne + numberTwo}
Resta: ${numberOne - numberTwo}
Multiplicación: ${numberOne * numberTwo}
División: ${numberOne / numberTwo}
Resto: ${numberOne % numberTwo}
`;

alert(result);
console.log(result);



//OPCIÓN 2
// let numberOne;
// let numberTwo;
// let suma = numberOne + numberTwo;
// let resta = numberOne - numberTwo;
// let multiplicacion = numberOne * numberTwo;
// let division = numberOne / numberTwo;

// if(isNaN(numberOne)){
//     numberOne = prompt('Dame un número');
// }else if(isNaN(numberTwo)){
//     numberTwo = prompt('Dame otro número');
// }else{
//     console.log('suma', suma);
//     console.log('resta',resta); 
//     console.log('multiplicacion',multiplicacion); 
//     console.log('division',division);
// }