/*
Ejercicio 16:

Escribe un programa que muestre la tabla de multiplicar del número que te diga el usuario.

*/

let numero = parseInt(prompt('Dime un número váido', 1));
let string = 'TABLA DEL ' + numero;

if(isNaN(numero)){
    console.log('hey', numero);
    numero = parseInt(prompt('Dime un número váido'));
}else{
    console.log('ES UN NUMERO');
    for(let i = 1; i <= 10 ; i++){
        let multiplicacion = numero * i;
        // console.log(numero, 'x' ,i ,' = ', multiplicacion);
        string += '\n' + i + 'x' + numero + '=' + multiplicacion;
    }
}
console.log(string);