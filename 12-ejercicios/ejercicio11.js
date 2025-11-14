/*
Ejercicio 11:
Nuestros usuarios tienen perros.
Y quieren saber que edad de perro tienen sus mascotas. 
Un año de humano equivale a siete de perro.
Pregunta a los usuarios que edad tiene su perro y dile la edad canina.
*/

let age = prompt('¿Cuántos años tiene tu perro?');
let humanDogAge = age * 7;
console.log(humanDogAge);
alert(`Tu perro tiene ${humanDogAge} años caninos.`);