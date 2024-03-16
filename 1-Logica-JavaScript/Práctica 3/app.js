/*
//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 
//'while'. Muestra cada número.
let contador = 1;

while (contador <= 10) {
    alert(`Número de contador: ${contador}`);
contador = contador + 1
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;

while (contador >= 0) {
    alert(`Número de contador: ${contador}`);
contador = contador - 1
}

//3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let contador = 0
let numeroUsuario = prompt("Por favor ingresa un número entre 1 y 10");

console.log(numeroUsuario);

while(contador <= numeroUsuario){
     alert(`Número de contador: ${contador}`)
     contador = contador + 1 
}
*/

//4. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
let numeroUsuario = prompt("Por favor ingresa un número entre 1 y 10");
let contador = numeroUsuario

console.log(numeroUsuario);

while(contador >= 0) {
    alert(`Número de contador: ${contador}`);
    contador = contador - 1
}