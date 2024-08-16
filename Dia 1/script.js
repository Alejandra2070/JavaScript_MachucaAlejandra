//Ejercicio 1
function imprimir(frase){
    document.write(frase)
}

var edad; año=2023;

edad=prompt("Ingresa tu edad: ");

console.log("Hii");
console.log("Eres del año: "+(año-edad));

//Ejercicio 2

function convertir(celsius){
    document.write(celsius)
}

cels=prompt("Ingresa los grados Celsius: ");

var fahrenheit;
fahrenheit=(9*(cels/5))+32;

console.log("Los grados Celsius en Fahrenheit son: "+(fahrenheit))

//Ejercicio 3

function promo(descuento){
    document.write(descuento)
}

desc=prompt("Cuál es tu posición entre los clientes?: ")
if (desc<20){
    console.log("Tienes descuento de 30%")
}
if (desc>20){
    console.log("Tienes un descuento de 10%")
}

//Tipos de variables
//Var

function varT(){
    var x = 1;
    {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
varT();

//Let

function letT(){
    let x = 1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
letT();

//Const

const foo = { bar:10, baz:12 }
const { bar } = foo; 
console.log(bar); // 10

const gg = ['23', 34];
const [ num1, num2 ] = gg;
console.log(num2); // 34