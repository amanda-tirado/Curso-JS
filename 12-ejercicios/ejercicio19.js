/*
Ejercicio 19:
Muestra todos los numeros divisores de un numero que se introduce desde un prompt
*/

let number = parseInt(prompt('Introduce un número para saber sus divisores'));;

//¿cual es el divisor del número?

for(let i = 1; i <= number; i++){
    // if((number / i) % 2 === 0){
    if(number % i == 0){
        // console.log(i, 'es divisor del número', number);
        console.log(`El ${i} es divisor de ${number}`);
    }
}

//Un numero es divisor de otro numero cuando la division de ese numero % su divisor da de de resto 0;


// if(!isNaN(number)){
// }else{
// }20
