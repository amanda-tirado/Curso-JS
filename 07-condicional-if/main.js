/*
Condicional IF -> Si a = b -> haz algo.
*/

let estaLloviendo = true;

if(estaLloviendo){ // || if(estaLloviendo == true){ || if(estaLloviendo === true){
    console.log('Me llevo mi paraguas.');
}else{
    console.log('No esta lloviendo asi que no me llevo mi paraguas.');
}

//ejemplo 2
let quieroCebolla = false;
//var tipo booleano
if(!quieroCebolla){ //if(quieroCebolla != true){ || if(quieroCebolla == false){ || if(quieroCebolla === false){
    console.log('tu burger no lleva cebolla')
}else{
    console.log('tu burger lleva cebolla')
}

//ejemplo 3

let alumn = 'Joaquin Perez';
let age = 33;
if(age >= 18 ){
    //es mayor de edad
    console.log(alumn + ' tiene ' + age +' años y es mayor de edad');
    if(age <= 20){
        console.log(`y es un adolescente`);
    }else if(age >= 70){
        console.log(`y es un anciano`);
    }else{
        console.log(`y es un adulto`); 
    }
}else{
    //no es mayor de edad
    console.log(`${alumn} que tiene ${age} años y es menor de edad`);
}

//ejemplo 4

let buenTiempo = true;

if(buenTiempo){
    console.log('Nos vamos al parque a pasear.')
}else{
    console.log('Nos quedamos en casa.')
}

//ejemplo 5

let year = 2028;

//2000-30 -> era actual, 

if(year >= 2000 && year <= 2030){
    console.log('Estamos en la era MODERNA');
}else if(year > 2030){
    console.log('Estamos en la era POST MODERNA');
}else{
    console.log('Estamos en la era ANTIGUA');
}

//EJEMPLO 6

// comprobar si el año en el que estamos acaba en7
if(year == 2007 || year == 2017 || year == 2027 || year == 2037){
    console.log('el year acaba en 7');
}else{
    console.log('el year no acaba en 7');
}
