// seleccionamos los elementos del dom

const boton = document.getElementById('boton-color');
const color = document.getElementById('color');
const body = document.getElementsByTagName('body');

function generalColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        let num = Math.floor(Math.random() * 16);
        color += digitos[num];
    }

    return color;
}

/* Añadirmos el Event Listener al boton */

boton.addEventListener('click', function() {
    //generamos el color
    let colorRandom = generalColorHexAleatorio();
    //cambiamos el texto al color nuevo
    color.textContent = colorRandom;
    //cambiamos el color del background
    // la const body es una coleccion por eso debemos indicar la posicion, aunque solo tenga una
    body[0].style.backgroundColor = colorRandom;
} );


