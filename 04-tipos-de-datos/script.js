/*
🧩 Tipos de datos primitivos (los más básicos)

Son valores simples, no tienen métodos ni propiedades.

Tipo	Descripción	Ejemplo
String	Texto o cadenas de caracteres	"Hola" 'Amanda' `Hola ${nombre}`
Number	Números (enteros o decimales)	42, 3.14, -10
Boolean	Valores lógicos	true, false
Undefined	Variable declarada pero sin valor	let x; console.log(x); // undefined
Null	Valor vacío intencionado	let y = null;
Symbol	Identificadores únicos (poco usados)	const id = Symbol("id");
BigInt	Números muy grandes (más que los Number normales)	const n = 9007199254740991n;
🧠 Tipos de datos no primitivos (estructurados)

Estos almacenan colecciones o estructuras de datos.

Tipo	Descripción	Ejemplo
Object	Colección de pares clave–valor	{ nombre: "Amanda", edad: 25 }
Array	Lista ordenada de valores	[1, 2, 3, 4]
Function	Bloque de código que se puede ejecutar	function saludar() { console.log("Hola"); }
*/

let phrase = 'Hey its me';
let year = 2025;
let interes = 2.4;

let mayorEdad = true;
let empty; //
let nule = null;

let frutas = ['fresa', 'sandia']; //array

let heroe = {
    name: 'Batman',
    universe : 'marvel'
}
heroe.city = 'madrid';
console.log(heroe.city,',',heroe.name);

/*
🧮 1️⃣ Operadores aritméticos

👉 Se usan para realizar operaciones matemáticas.

Operador	Descripción	Ejemplo	Resultado
+	Suma	5 + 2	7
-	Resta	5 - 2	3
*	Multiplicación	5 * 2	10
/	División	5 / 2	2.5
%	Módulo (resto)	5 % 2	1
**	Potencia	2 ** 3	8
++	Incremento	x++	Aumenta en 1
--	Decremento	x--	Resta 1
💡 2️⃣ Operadores de asignación

👉 Asignan valores a variables.

Operador	Ejemplo	Equivale a
=	x = 10	—
+=	x += 2	x = x + 2
-=	x -= 2	x = x - 2
*=	x *= 2	x = x * 2
/=	x /= 2	x = x / 2
%=	x %= 2	x = x % 2
🔍 3️⃣ Operadores de comparación

👉 Compara valores y devuelve true o false.

Operador	Descripción	Ejemplo	Resultado
==	Igual (compara solo valor)	5 == "5"	✅ true
===	Estrictamente igual (valor y tipo)	5 === "5"	❌ false
!=	Distinto (solo valor)	5 != "5"	❌ false
!==	Estrictamente distinto	5 !== "5"	✅ true
>	Mayor que	8 > 5	true
<	Menor que	3 < 5	true
>=	Mayor o igual	5 >= 5	true
<=	Menor o igual	3 <= 2	false
⚙️ 4️⃣ Operadores lógicos

👉 Se usan para combinar condiciones booleanas.

Operador	Descripción	Ejemplo	Resultado
&&	AND (y)	true && false	false
`		`	OR (o)
!	NOT (niega)	!true	false
🔤 5️⃣ Operadores de concatenación

👉 Sirven para unir strings (textos).

let nombre = "Amanda";
let saludo = "Hola " + nombre + "!";
console.log(saludo); // "Hola Amanda!"


(El operador + une textos si uno de los valores es string.)

❓ 6️⃣ Operador ternario

👉 Es un if corto en una sola línea.

let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor";
console.log(mensaje); // "Eres mayor de edad"

🧠 7️⃣ Operadores de tipo (type)

👉 Identifican el tipo de dato.

Operador	Uso	Ejemplo	Resultado
typeof	Tipo de dato	typeof "Hola"	"string"
instanceof	Verifica si un objeto pertenece a una clase	obj instanceof Object	true
📚 Resumen general
Categoría	Ejemplo	Uso principal
Aritméticos	+ - * / % **	Operaciones matemáticas
Asignación	= += -=	Asignar o actualizar valores
Comparación	== === > <	Comparar valores
Lógicos	`&&	
Concatenación	"Hola" + nombre	Unir textos
Ternario	condición ? X : Y	If corto
Tipo	typeof, instanceof	Saber tipo de dato
*/

console.log(typeof phrase);
console.log(typeof mayorEdad);
console.log(typeof nule);
// console.log(typeof frutas);
console.log(Array.isArray(frutas) );
console.log(typeof heroe);


//operadores aritmeticos
let numeroUno = 10;
let numeroDos = 2;

let suma = numeroUno + numeroDos;
console.log('suma' , suma);

let resta = numeroUno - numeroDos;
console.log('resta' , resta);

let division = numeroUno / numeroDos;
console.log('division' , division);

let resto = numeroUno % numeroDos;
console.log('resto' , resto);

