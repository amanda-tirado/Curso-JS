/*
Ejericio 13:
Tengo un kanguro que salta 3 metros cada vez.
Has un programa que me diga cuantos saltos ha dado el kanguro..
y cual es la distancia total recorrida tras 17 saltos.
*/

let distanceByJump = 3;
let jumps = 17;
let distance = 0;

for(let i = 1; i <= jumps; i++){
    distance += distanceByJump;
    console.log(`El kanguro ha dado ${i} saltos y ha recorrido ${distance} metros`);
}


