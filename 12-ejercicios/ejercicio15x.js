/*
Ejercicio 15:
Muestra la suma y la media de los números introducidos hasta introducir un número negativo y ahi mostrar el resultado

modificamos el enunciado para practicar x2

Pide al usuario números (uno por uno) y termina cuando escriba fin (en cualquier mayúsculas/minúsculas) o deje el campo vacío.

Si el usuario introduce texto no numérico, muestra un aviso y sigue pidiendo (no lo cuentes).

Al terminar, muestra por consola la suma y la media de todos los números válidos introducidos.

Si no se introdujo ningún número válido, indica ese caso.

Nota: acepta números con decimales y con espacios al principio o final.
*/

let suma = 0;
let contador = 0;
let entrada;
let seguir = true;

do{
    entrada = prompt('Dime un número (o "fin" para terminar)');

    if(entrada === null){
        seguir = false;
        console.log('Has cancelado el ejercicio');
    }else{
        const s = entrada.trim();
        
        if(/^fin$/i.test(s)){ //
            seguir = false;
        }else if( s === '' ){
            alert('Entrada vacía. Escribe un número o "fin".');
        }else{
            // Intentar convertir a número
            const n = Number(s);

            if (Number.isNaN(n)) {
                // Texto no numérico → avisar y seguir pidiendo
                alert('No es un número válido. Intenta de nuevo.');
            } else {
                // Número válido → acumular
                suma += n;
                contador += 1;
            }
        }
    }
}while(seguir)

console.log('suma', suma);
console.log('media', (suma/contador));