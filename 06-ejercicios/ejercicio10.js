/*
Ejercicio 10:
El otro día fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.
Yo me comí 2, pepe se comío 3 y Manolo, como es culturista se comió 6.
¿Cuántas hamburguesas nos comimos en total?
Y...¿Es cierto que yo comí menos que pepe?
Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let burgersAmandix = 2;
let burgersPepe = 3;
let burgersManolo = 6;
// let esCierto = burgersAmandix < burgersPepe; //devolvería true
let totalBurgers = burgersAmandix + burgersPepe + burgersManolo;
console.log('Entre todos nos comimos un total de ', totalBurgers, 'hamburguesas.');
console.log(burgersAmandix < burgersPepe ? 'cierto' : 'falso');