/*
Ejercicio 20:
En base al numero que nos de el usuario,
Decirle si es par o impar.
*/

let number;

while(isNaN(number)){
    number = parseInt(prompt('Dime un número para saber si es par o impar', 0));
}
if(number % 2 === 0){
    console.log(`El número ${number} es par`);
}else{
    console.log(`El número ${number} es impar`);
}
