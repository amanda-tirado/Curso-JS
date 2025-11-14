// condicional switch
let myBreakfast = 3;
switch(myBreakfast){
    case 1: 
        console.log('American breakfast: eggs overeasy w avocado toats')
        break;
    case 2: 
        console.log('Pancakes breakfast: pancakes w peanut butter')
        break;
    case 3:
        console.log('Spanish Breakfast: tomatoe toast w ham & latte milk')
        break;
}
let myBreakfastName = 'Español';
switch(myBreakfastName){
    case 'English': 
        console.log('English breakfast: eggs overeasy w avocado toats')
        break;
    case 'Americano': 
        console.log('Pancakes breakfast: pancakes w peanut butter')
        break;
    case 'Español':
        console.log('Spanish Breakfast: tomatoe toast w ham & latte milk')
        break;
    default: 
        console.log('Cafe con leche')
}
//se puede hacer lo mismo con if con switch pero en casos concretos es mas tedioso;
if(myBreakfastName == 'Español'){
    console.log('Spanish Breakfast: tomatoe toast w ham & latte milk')
}else if(myBreakfastName == 'Americano'){
    console.log('Pancakes breakfast: pancakes w peanut butter')
}else if(myBreakfastName == 'English'){
    console.log('English breakfast: eggs overeasy w avocado toats')
}else{
    console.log('Cafe con leche')
}

// condicional ternario 
let alumn = 'Juan Tirado';
let age = 17;
let result = (age >= 18) ? 'es mayor de edad' : 'es menor de edad';
console.log(alumn , result);

// diferencia entre var y let (ámbito / bloque)
let curso = 'Máster en React';

if('hola' == 'hola'){
    let curso = 'Máster en JS '
    console.log(curso);
}

console.log(curso);

// las variables var son accesibles globalmente, las variables let son dependientes del bloque en el que se as ha definido;
