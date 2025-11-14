/*
Ejercicio 14:
Un DJ no sabe que género musical poner en la fiesta...
Pregúntale al usuario que género quiere (pop, rock o rap)
Según lo que prefiera, devuelve un mensaje diferente.
*/


let genero = prompt('¿Qué género de música te gustaría escuchar? (rap, pop o rock) ');

switch(genero){
    case 'pop':
        console.log('Has elegido pop');
        break;
    case 'rap':
        console.log('Has elegido rap');
        break;
    case 'rock':
        console.log('Has elegido rock');
        break;
    default:
        console.log('No hay musica de la que quieres');
}