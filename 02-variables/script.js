/*
Variables 
    Caja para almacenar información: cualquier tipo de dato, 
    Hay 3 formas para definir una variable:
    1. var 
        - Se puede re-declarar y re-asignar (mala práctica).
        - Tiene ámbito de función (no respeta los bloques { }).
    2. let
        - Se puede re-asignar, pero no re-declarar.
        - Tiene ámbito de bloque (solo vive dentro de { } donde se declara).
    3. const
        - No se puede re-asignar ni re-declarar.
        - También tiene ámbito de bloque. 
        - Pero si es un objeto o array, puedes modificar su contenido interno.
*/

var name = 'Amanda'; //manera clásica de definir funciones
let lastnames = 'Robles'; // Es la forma moderna y flexible de declarar variables.
const nacionality = 'Madrid'; //👉 Se usa para variables constantes, que no cambian de valor.

let hero = 'Batman';
let universe = 'MARVEL';
let edad = 35;

// let hero_and_universe = hero + ', ' + universe;
let hero_and_universe = hero + ' es un superheroe de la marca ' + universe;

hero = 'Spiderman';
universe = 'DC';

console.log(hero_and_universe);
