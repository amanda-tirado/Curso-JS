/*
Ejercicio 15:
Muestra la suma y la media de los números introducidos hasta introducir un número negativo y ahi mostrar el resultado
*/

let suma = 0;
let number = 0;
let contador = 0;

do {
    number = parseInt(prompt('Introduce un número hasta que sea negativo', 0));
    if(isNaN(number)){
        number = 0;
    }else if(number >= 0){
        suma += number;
        contador ++;
    }
} while (number >= 0);

let media = suma / contador;

alert('La suma de los numeros es ' + suma);
alert('La media de los numeros es ' + media);

/*
Notes:

¿Qué significa is?
isNaN() es una función que comprueba si un valor NO es un número válido.
isNaN(5)          // false  → 5 es un número
isNaN("123")      // false  → "123" se puede convertir a 123
isNaN("hola")     // true   → "hola" no se puede convertir a número
isNaN(NaN)        // true   → NaN significa "Not a Number"

Devuelve:
- true → cuando el valor no es un número (o no se puede convertir a número).
- false → cuando el valor sí es un número (o se puede convertir a número).

2. ¿Qué significa if (isNaN(number)) { ... }?

Es una condición if que dice:
“Si number no es un número válido, entonces ejecuta este bloque de código”.

Ejemplo típico:
const input = "hola";

if (isNaN(input)) {
  console.log("El valor no es un número");
} else {
  console.log("El valor es un número");
}

En este caso, como "hola" no es un número, se ejecutaría:

El valor no es un número

Sirve mucho para validar formularios o datos que vienen del usuario antes de hacer operaciones matemáticas.

isNaN primero convierte a número, y luego mira si el resultado es NaN.

Por eso cosas que no parecen un número acaban siendo 0, 1, etc.

Number(false)  // → 0
isNaN(0)       // → false

En JS:
false → 0
true → 1
Son conversiones estándar de booleano a número.

Number(true)  // → 1
isNaN(1)      // → false
Como 1 es un número válido, isNaN(true) devuelve false.

lo mismo con..

Number(null)  // → 0
isNaN(0)      // → false

Number(" ")  // → 0
isNaN(0)     // → false
isNaN(undefined)// isNaN(NaN)→ true

isNaN({})-> true 
new Date("2025-01-01") → ms numéricos → no es NaN.

Truco útil: Number(...) para entenderlo
Cuando dudes de por qué isNaN(algo) te da true o false, piensa:
“¿A qué número se convierte esto con Number(...)?”
console.log(Number(false));
console.log(Number(true));
console.log(Number(null));
console.log(Number(" "));
console.log(Number("hola"));

RESUMEN VISUAL

*/



/*
En decimal (base 10) las posiciones valen: …, 1000, 100, 10, 1.

En hexadecimal (base 16) las posiciones valen: …, 16², 16¹, 16⁰.

En hex usamos dígitos 0–9 y también A–F, donde:

A=10, B=11, C=12, D=13, E=14, F=15.

🧠 Test
A) ¿Qué devuelve Number(...)?

Responde con el número o NaN.

Number("0x2A") -> 42 (hex)

Number("0xG1") -> NaN (G no es dígito hex)

Number("0b1010") -> NaN (Number no entiende 0b en cadenas)
 
Number("0o10") -> NaN (Number no entiende 0o en cadenas)

Number("010") -> 10 (string decimal con cero inicial → 10)

Number(" 0x1f ") -> 31


B) ¿Qué devuelve isNaN(...)?

Responde true/false.

isNaN("0x10") -> 

isNaN("0b11")

isNaN("0o7")

isNaN("FF")

isNaN(0x10) (literal numérico, no string)

isNaN(0b101) (literal numérico, no string)


**Explicación 
parseInt en JavaScript:
- Convierte una cadena (o valor) en un entero según una base (radix).
- string: texto a convertir (se ignoran espacios iniciales).
radix: base entre 2 y 36. Si no lo pones:
    - Si empieza por 0x/0X → hex (base 16).
    - En otros casos → base 10 (en JS moderno).

Reglas clave
- Lee desde el inicio y se detiene en el primer carácter no válido.
- Si no hay ningún dígito válido al inicio ⇒ NaN.
- Acepta signos +/- al principio.
- No convierte decimales: parseInt("12.7") → 12.

C) parseInt (ojo al radix)
Escribe el resultado numérico.

parseInt("0x10") -> 16 , radix 
parseInt("0b1010") -> 0 , radix 
parseInt("0b1010", 2) -> 0 , radix 2 ()
parseInt("0o10") -> 0 , radix no
parseInt("0o10", 8) -> 8 , radix 8
parseInt("10", 2) -> 2 , radix 2
parseInt("0x10", 10) -> 10 , radix 10
parseInt("2A", 16) -> 42 , radix 16 (2·16 + 10 = 32 + 10 = 42)
parseInt("08") -> 8 , radix 8
parseInt("  0x1f  ", 16) -> 31 , radix 16 (1·16 + 15 = 31.)

Pistas útiles:


Number("...") solo reconoce decimal y hex con 0x/0X. No reconoce 0b/0o en cadenas.


isNaN(x) hace Number(x) y luego comprueba.


parseInt(str) sin radix: si empieza por 0x → hex; si no, base 10 (en JS moderno).


Siempre que dudes, especifica radix: parseInt(str, base).




🧩 Ejercicio práctico
Crea una función parseSmart(str) que:


Acepte strings en decimal normal (p. ej. "42"), hex con 0x, bin con 0b, octal con 0o.


Devuelva un número si el formato es válido, o NaN si no lo es.


Ignora espacios alrededor (trim).


Ejemplos esperados:
parseSmart(" 42 ")      // 42
parseSmart("0x2A")      // 42
parseSmart("0b1010")    // 10
parseSmart("0o10")      // 8
parseSmart("2A")        // NaN
parseSmart("0xG1")      // NaN


// La misma “forma” de dígitos, en distintas bases:
parseInt("1010", 2) ->  10
parseInt("1010", 8) -> 520
parseInt("1010", 10) -> 1010 
parseInt("1010", 16) -> 4112

Practica exprés (responde si quieres):

parseInt("111", 2) = 7

parseInt("1f", 16) = 31

parseInt("077", 8) = 63

parseInt("100", 3) = 9

parseInt("2", 2) = NaN

🧠 Test (responde sin calcular con calculadora)

parseInt("7F", 16) = 127

parseInt("1a3", 16) = 256 + 160 + 3 = 419

parseInt("1207", 8) = 512 + 128 + 0 + 7 -> 647

parseInt("10102", 2) = ? (pista: hay un “2”) 10

isNaN(Number("0o77")) = ? (true/false) true

🧩 Ejercicio práctico

Completa toDecimal(str) para aceptar strings en:

binario con "0b",

octal con "0o",

hex con "0x",

o decimal “normal”.
Si no cuadra el formato → devuelve NaN.
*/