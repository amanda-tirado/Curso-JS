/*
Ejercicio 18:
Tenemos una colección de números del 1 al 17.
Y el usuario tiene que adivinar cuál es el elegido.
Haz un programa para que pueda adivinar el número.
*/

// OPCIÓN 1
// const numeroAadivinar = 7;
// let intento;

// while(intento != numeroAadivinar ){
//     intento = parseInt(prompt('Adivina qué número es el elegido del 1 al 17', 1));
//     if(numeroAadivinar == intento){
//         console.log('has adivinado el numero en el intento número', intento);
//     }else{
//         console.log('Keep trying it!', intento);
//     }
// }

// OPCIÓN 2

const numeroAadivinar = 7;
let intento = 0;
let adivina;

while(adivina != numeroAadivinar ){
    adivina = parseInt(prompt('Adivina qué número es el elegido del 1 al 17', 1))
    if(numeroAadivinar == adivina){
        //si el numero es 7
        intento++;
        if(intento > 1){
            console.log('¡Correcto! El número elegido es ',numeroAadivinar);
            console.log('Has adivinado el número tras ',intento,' intentos.');
        }else{
            console.log('¡Correcto! El número elegido es ',numeroAadivinar);
            console.log('Has adivinado el número tras ',intento,' intento.');
        }
    }else{
        intento++;
        if(intento > 1){
            console.log('Keep trying it! Llevas ', intento, 'intentos.');
        }else{
            console.log('Keep trying it! Llevas ', intento, 'intento.');
        }
    }
}
