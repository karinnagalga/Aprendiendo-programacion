//Variables
let numeroSecreto = 0;
let intentos = 0;
let numerosJugados = [];
let numeroMaximo = 10;

condicionesIniciales ();

//Funciones
//Inicio del juego
function condicionesIniciales () {
    //Título
    elementoTexto ('h1', "Juego del número secreto");
    //Instrucciones
    elementoTexto ('p', `Introduce un número entre 1 y ${numeroMaximo}`);
    //Generación de un nuevo número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Reiniciar el contador de intentos
    intentos = 1;
    return;
}
//Limpiar cuadro donde ponemos el número
function limpiarNumero () {
    document.querySelector('#valorUsuario').value = "";
}
//Dar un formato automatizado a los elementos en la página HTML
function elementoTexto (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Generar número aleatorio
function generarNumeroSecreto () {
    let numeroAleatorio = Math.floor(Math.random()*(numeroMaximo))+1;
    //Si ya se jugaron todos los números
    if (numerosJugados.length == numeroMaximo) {
        elementoTexto ('p', "Ya se utilizaron todos los números posibles (presiona F5)");
    //Sino se juega el juego
    } else {
    //si el número ya ha sido jugado, se ecoge otro
    if (numerosJugados.includes (numeroAleatorio)) {
        return generarNumeroSecreto ();
    } else {
    //Sino, se juega con ese número
        numerosJugados.push(numeroAleatorio);
        return numeroAleatorio;
    }
}
}
//Verificar el número introducido.
function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Si el número introducido es igual al secreto
    if (numeroUsuario === numeroSecreto) {
        elementoTexto ('p', `¡Felicidades, acertaste el número en ${intentos} ${(intentos===1) ? "vez" : "veces"}!`);
    //Desbloqueamos el botón de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Si no, se dan pistas de si es menor o mayor el número
        if (numeroUsuario > numeroSecreto) {
            elementoTexto ('p', "El número secreto es menor")
        } else {
            if (numeroUsuario < numeroSecreto) {
                elementoTexto ('p', "El número secreto es mayor")
            }
        }
        //Se agrega 1 al contador de intentos
        intentos++;
        limpiarNumero ();
    }
    return;
}
//Instrucciones para el botón de nuevo juego
function nuevoJuego () {
    limpiarNumero ();
    condicionesIniciales ();
    //Desactivamos el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute ('disabled','true');
return;    
}

