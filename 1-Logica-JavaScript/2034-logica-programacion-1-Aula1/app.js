//Variables
let numeroMaximoPosible = 15
let numeroSecreto = Math.floor(Math.random()* numeroMaximoPosible)+1;
let numeroUsuario = 0
let intentos = 1
let maximosIntento = 3
/*let palabraVeces = "vez"*/

//Esta iteración se repetirá siempre y cuando NO sean iguales los números
while(numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`¿Me indicas un número, entre 1 y ${numeroMaximoPosible} por favor?`);
    console.log(numeroUsuario);
//Acertamomos si al compararlos son iguales
if (numeroUsuario == numeroSecreto) {
      alert(`¡Enhorabuena, acertaste! El número correcto es ${numeroUsuario}. Número de intentos: ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
} else { 
    if (numeroUsuario > numeroSecreto) {
        alert("El número secreto es menor");
    } else {
        alert("El número secreto es mayor");
    }
    //Si no se acierta, sumaremos 1 al valor de intentos
    intentos++
    //Si no se acerta a la primera se sustituyes vez por veces
    /*palabraVeces = "veces"
    */
    if(intentos > maximosIntento) {
        alert(`Lo siento, llegaste al número máximo ${maximosIntento} de intentos`);
        break;
    }
}
}
//alert("Número incorrecto, suerte para la próxima :(")