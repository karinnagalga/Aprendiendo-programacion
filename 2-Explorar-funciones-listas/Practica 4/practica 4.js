//1. Crea una lista vacía llamada 'listaGenerica'.
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada 'lenguagesDeProgramacion 
//con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

  let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']; 

//3. Agrega a la lista 'lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista 'lenguagesDeProgramacion.

function mostrarLista () {
  for (var lista = 0; lista <= lenguajesDeProgramacion.length; lista++) {
console.log(lenguajesDeProgramacion[lista]);
}
}
mostrarLista ();

//5. Crea una función que muestre en la consola todos los elementos de la lista 
//'lenguagesDeProgramacion en orden inverso.

function mostrarListaReves () { 
for (var lista = lenguajesDeProgramacion.length; lista >= 0; lista --) { 
console.log(lenguajesDeProgramacion[lista]); 
}
} 
mostrarListaReves ();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [8,12,10];
let promedio = calcularPromedio(lista); 
calcularPromedio (listaNumeros);
console.log(`Promedio: ${promedio}`);

function calcularPromedio (lista) { 
let totalSuma = 0 
for (var i = 0; i < lista.length; i++) { 
totalSuma+= (lista[i]); 
}
return totalSuma/lista.length;
} 

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

mostrarMaxMin(listaNumeros);

function mostrarMaxMin(lista) {
  let numMax = lista[0];
  let numMin = lista[0];

  for (var i = 1; i < lista.length; i++) {
    if (lista[i] > numMax) {
      numMax = lista[i];
    }
    if (lista[i] < numMin) {
      numMin = lista[i];
    }
  }
  console.log(`El número mayor es ${numMax} y el número menor es ${numMin}`);
}

//8. Crea una función que devuelva la suma de todos los elementos en una lista.

let resultadoSuma = sumarLista(lista); 
console.log(`Suma: ${resultadoSuma}`);

function sumarLista (listaNumeros) {
    let totalSuma = 0 
for (var i = 0; i < lista.length; i++) { 
totalSuma+= (lista[i]); 
}
return totalSuma
}

//9. Crea una función que devuelva la posición en la lista donde se encuentra un 
//elemento pasado como parámetro, o -1 si no existe en la lista.

mostrarElemento (lenguajesDeProgramacion, 'Java');

 function mostrarElemento (lista, elemento) {
  for (var i = 1; i < lista.length; i++) {
  if (elemento === lista[i]) {
    return i;
  }
  }
  return -1;
 }
 
//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva 
//una nueva lista con la suma de los elementos uno a uno.
let lista1 = [1, 2, 3, 4];
let lista2 = [5, 6, 7, 8];
let lista3 = [];

function terceraLista (a, b) {
  for (var i = 0; i < a.length; i++) {
    lista3[i] = a[i] + b[i];
  }
return lista3.push();
}

terceraLista (lista1, lista2);
console.log(lista3);

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con 
//el cuadrado de cada número.
let numeroCuadrado = [];

function mostrarCuadrado (lista) {
  for (var i = 0; i < lista.length; i++) {
    numeroCuadrado[i] = lista[i] * lista[i];
  }
return numeroCuadrado.push();
}

mostrarCuadrado (listaNumeros);
console.log(numeroCuadrado);