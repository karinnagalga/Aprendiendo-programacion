//1. Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.

//2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: 
//"Hora del Desafío".
let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora del desafío";

//3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
//siempre que se presione el botón "Console".
function clicConsole () {
    console.log ("El botón fue clicado");
}
//5. Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el 
//mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
let nombreCiudad = 0
function clicPrompt () {
    nombreCiudad = prompt("Inserta el nombre de una ciudad de México");
    alert (`Estuve en ${nombreCiudad} y me acordé de ti <3`);
}
//6. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre 
//que se presione el botón "Alerta".
function clicAlerta () {
    alert(" Yo amo JS");
}
//7. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
let numeroUno;
let numeroDos;
function clicSuma () {
    numeroUno = parseInt(prompt("Inserta primer número para la suma, por favor"));
    numeroDos = parseInt(prompt("inserta segundo número para la suma, por favor"));
    let resultado = numeroUno + numeroDos;
    alert(`El resultado de la suma de ${numeroUno} y ${numeroDos} es igual a ${resultado}`);
}