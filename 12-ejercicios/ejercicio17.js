/*
Ejercicio 17:
Mostrar todos los numeros impares que hay entre dos numeros que nos da el usuario
*/

let numeroUno = parseInt(prompt('Dame un número válido', 0));
let numeroDos = parseInt(prompt('Dame otro número válido', 0));

// 1, 2
// 2, 4
// 3, 5
// 3, 6

while(numeroUno < numeroDos){
    numeroUno++;
    if(numeroUno % 2 != 0){
        console.log(`El ${numeroUno} es impar`);
    }else{
        // console.log(`El ${numeroUno} es par`);
    }
}