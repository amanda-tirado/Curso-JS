/*
Ejercicio 12:
Programa que pida dos numeros y que nos diga cual es el mayor, el menor, y si son iguales 
PLUS: Si los números no son un número o son menores o iguales a cero, nos los vuelva a pedir.
*/



let numberOne = parseInt(prompt('Dame el primer número', 0));
let numberTwo = parseInt(prompt('Dame el segundo número', 0));

while(numberOne <= 0 || numberTwo <= 0 || isNaN(numberOne) ||isNaN(numberTwo) ){
    numberOne = parseInt(prompt('Dame el primer número', 0));
    numberTwo = parseInt(prompt('Dame el segundo número', 0));
}
    
if(numberOne < numberTwo){
    alert(`${numberOne} es menor que ${numberTwo}`);
}else if(numberOne > numberTwo ){
    alert(`${numberOne} es mayor que ${numberTwo}`);
}else if(numberOne === numberTwo ){
    alert(`${numberOne} es exactamente igual que ${numberTwo}`);
}else{
    alert('No has metido bien los números');
}



