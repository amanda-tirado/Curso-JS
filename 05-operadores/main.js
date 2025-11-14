let numberOne = 12;
let numberTwo = 44;

let suma = numberOne + numberTwo;
let resta = numberOne - numberTwo;
let multi = numberOne * numberTwo;
let division = numberOne / numberTwo;
let resto = numberOne / numberTwo;
let potencia = numberOne ** 2;

console.log('Suma', suma);
console.log('Resta', resta);
console.log('Multi', multi);
console.log('Division', division);
console.log('Resto', resto);
console.log('Potencia', potencia);

//Operadores de ASIGNACIÓN

let littleNumber = 17;

// littleNumber = 17 + 3; //20

littleNumber += 3;
// littleNumber -= 3;
// littleNumber %= 3;
// littleNumber /= 3;

console.log(littleNumber);
// console.warn(littleNumber);
// console.error(littleNumber);

//Operadores de COMPARACIÓN - > Nos permiten comparar valores y nos devuelven un boleano, es decir, true o false.

let biggerNumber = 31;
console.log(biggerNumber == '31'); //true, no compara el tipo de dato
console.log(biggerNumber === '31'); //false,  compara el tipo de dato
console.log(biggerNumber != 31); //false,  solo da true si es igual al valor
console.log(biggerNumber != '31'); //false,  solo da true si es igual al valor
console.log(biggerNumber !== 31); //false,  solo da true si es igual al valor y mimso tipo de valor
console.log(biggerNumber !== '31'); //false,  solo da true si es igual al valor y mimso tipo de valor
// != es distinto -> true, es igual -> false

console.log(biggerNumber > 7); //false,  solo da true si es igual al valor y mimso tipo de valor
console.log(biggerNumber > 55); //false,  solo da true si es igual al valor y mimso tipo de valor
console.log(biggerNumber >= 32); //false,  solo da true si es igual al valor y mimso tipo de valor
console.log(biggerNumber < 55); //false,  solo da true si es igual al valor y mimso tipo de valor
console.log(biggerNumber <= 31); //false,  solo da true si es igual al valor y mimso tipo de valor

//Operadores logicos -> Nos permiten saber si dos condiciones son verdaderas
let mayorDeEdad = false;

let tieneEntrada = false;

console.warn('Acceso', mayorDeEdad && tieneEntrada); //las dos condiciones se cumplen
//operador O
console.warn('Or', mayorDeEdad || tieneEntrada); //las dos condiciones se cumplen

//operador lógico NOT u operador de negación lógica -> Su función es invertir el valor booleano de una expresión.

console.warn('Es mayor de edad', !mayorDeEdad ); //las dos condiciones se cumplen

let loggedIn = false;

if (!loggedIn) {
  console.log("El usuario no ha iniciado sesión.");
}

//concatenacion de cadenas

let messageOne = 'Hey';
let messageTwo = 'Whats app?';
messageTwo = messageTwo.toLowerCase();

let messageTotal = messageOne + ', ' + messageTwo;
messageTotal += '. ' + 'Soy Amandix.';
console.log(messageTotal);

//Operadores de incremento y decremento

let cifra = 1200;
//operador de incremento
// cifra = cifra + 1;
// cifra += 1;
cifra ++; //se usa mucho en bucles
cifra++;
cifra++;
//operador de decremento
cifra--;
cifra--;
cifra--;
console.log(cifra);

//operador/condicional ternario