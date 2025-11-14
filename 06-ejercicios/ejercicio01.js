/*
Ejercicio 1:

    Calcula cuantas horas de llevaría llegar a la luna a una nave espacial y guarda el resultado en una variable.

    La distancia desde la tierra hasta la luna es de 384.400 km.

    La velocidad de la nave es de 1225 km/h.

*/

let distanceToTheMoon = 384400;

let speedByHour = 1225;

let totalTime = distanceToTheMoon / speedByHour;

console.log(totalTime);

totalTime = Math.ceil(totalTime); //redondea 

let message = 'La nave tardará ' + totalTime + ' horas en alcanzar la luna.';

console.log(message);



