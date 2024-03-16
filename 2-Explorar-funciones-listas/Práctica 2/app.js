//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a 
//partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

//Formula IMC= peso(kg)/altura^2
function calcularIMC(peso, altura) {
    let formulaIMC= peso / (altura * altura);
    return formulaIMC;
    }
    calcularIMC (73,1.71);
    
//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

//formula: n! =n(n-1)
let n= 3
let resultado = calcularFactorial (n);
console.log(`El número factorial de ${n} es ${resultado}`);

function calcularFactorial (n) {
    if(n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial (n-1);
    }
   }

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y 
//devuelva el valor equivalente en pesos. (17.22MXN = 1USD)

function tipoDeCambio (dolares) {
    const pesos = 17.22
    let conversion = dolares * pesos;
    return conversion;
}
tipoDeCambio (5);

//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function rectangulo (b,h) {
    let rectanguloArea = b*h;
    let rectanguloPerimetro = 2* (b+h);
    return `el área de este rectángulo es ${rectanguloArea} y su perímetro es de ${rectanguloPerimetro}`;
}
rectangulo (5,4);

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function circulo (radio) {
    const pi = 3.14;
    let circuloArea = pi * radio*radio;
    let circuloPerimetro = 2 * radio * pi;
    return `el área de este rectángulo es ${circuloArea} y su perímetro es de ${circuloPerimetro}`;
}
circulo (1);

//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let numero = 6
multiplicaciones (numero);

function multiplicaciones (numero) {
    for (var mult = 1; mult <= 10; mult++) {
    var resultado = numero * mult;
    console.log(`${mult} x ${numero} = ${resultado}`);
}
}