// selecionamos elementos dom

const inputs = document.getElementsByTagName('input');
const ps = document.getElementsByTagName('p');
const body = document.getElementsByTagName('body');


// funcion que actualiza el texto de los p y del background al valor de los inpus

function actualizarColores() {
    for(let i = 0; i < ps.length; i++){
        //ponemos los p al valor de los inputs
        ps[i].innerText = inputs[i].value;
        // actualizamos el background color en funcion del valor de los inputs
        const colorRGB=`rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
        body[0].style.backgroundColor = colorRGB;

        //esta es otra forma de hacerlo: 
        //body[0].style.backgroundColor = '#'+inputs[0].value+inputs[1].value+inputs[2].value;
    }
}

// añadimos este event listener para que cuando carge se actualizen el color y el texto

addEventListener('load', actualizarColores);

// añadimos un Event listener a los inputs

for(let i = 0; i < ps.length; i++){
   inputs[i].addEventListener('mousemove', actualizarColores);
}

// HAY UN EVENTO (LO USA EN EL CURSO) QUE ES 'CHANGE' QUE ACTUA ANTE UN CAMBIO EN EL ELEMENTO, EN ESTE CASO ANTE UN CAMBIO EN EL VALOR DEL INPUT


