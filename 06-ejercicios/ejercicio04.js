/*
Ejercicio 4:
Tenemos una jirafa en el zoo que pesa 1.120kg.
Y le damos de comer 141kg de horas frescas.
¿Cuánto epsa ahora la jirafa?
*/

let giraffWeight = 1120;
let foodWeight = 141;

let giraffWeightAfterLunch = giraffWeight + foodWeight;

// console.log('La jirafa pesa ' + giraffWeightAfterLunch + ' kilos después de comer' + foodWeight + 'kilos de hojas frescas.');

//Template Strings

// let resultTs = 'La jirafa pesa ' + giraffWeightAfterLunch + ' kilos después de comer ' + foodWeight + ' kilos de hojas frescas.';
let resultTs = `La jirafa pesa ${giraffWeightAfterLunch} kilos después de comer ${foodWeight} kilos de hojas frescas.`;

console.log(resultTs);