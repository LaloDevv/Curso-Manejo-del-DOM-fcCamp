const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');


//asignamos variables de la siguiente forma:

let [horas, minutos, segundos] = [0,0,0];

//esta var nos va a permitir q el crono se actualice cada segundo
let intervaloTiempo;
let estadoCrono = 'pausado';




function actualizarCrono(){
    segundos++;

    if(segundos / 60 == 1){
        segundos = 0;
        minutos++;

        if(minutos / 60 == 1){
            minutos = 0;
            horas++;
        }
    }

    const segundosFormat= asignarFormato(segundos);
    const minutosFormat= asignarFormato(minutos);
    const horasFormat= asignarFormato(horas);

    cronometro.innerText = `${horasFormat}:${minutosFormat}:${segundosFormat}`;
}

function asignarFormato(unidadTiempo){
    //si la unidad es menor a 10 la retorna con un 0 a la izq
    return unidadTiempo < 10 ? '0'+unidadTiempo : unidadTiempo;
}

//actualiza el boton y el estado cuando está en estado activo
function dePlayAPause(e){
    //actualizamos el icono que aparece en el boton una vez lo pulsamos:
    e.innerHTML =  '<i class="bi bi-pause-fill"></i>';

    //eliminamos la clase iniciar y añadimos la clase pausar al boton

    e.classList.remove('iniciar');
    e.classList.add('pausar');
    estadoCrono= 'activo';
}

//actualiza el boton y el estado cuando está en estado pausado
function dePauseAPlay(e){
    //actualizamos el icono que aparece en el boton una vez lo pulsamos:
    e.innerHTML =  '<i class="bi bi-play-fill"></i>';

    //eliminamos la clase iniciar y añadimos la clase pausar al boton

    e.classList.remove('pausar');
    e.classList.add('iniciar');
    estadoCrono= 'pausado';
}

botonInicioPausa.addEventListener('click', function(){
    if(estadoCrono=='pausado'){
        //setInterval llama a la funcion del primer argumento en los milisegundos que se especifiques en el 2 argumento
        intervaloTiempo = window.setInterval(actualizarCrono, 1000);

        //actualizamos el boton
        dePlayAPause(botonInicioPausa);
   
    } else{
        //quitamos la llamada cada 1s a la funcion
        window.clearInterval(intervaloTiempo);

        //actualizamos el boton
        dePauseAPlay(botonInicioPausa);
    }
})

botonReiniciar.addEventListener('click', function(){
    //eliminamos el intervalo para que se detenga:
    window.clearInterval(intervaloTiempo);

    [horas, minutos, segundos] = [0,0,0]
    cronometro.innerText = '00:00:00';

    //reseteamos los botones y el estado del crono

    dePauseAPlay(botonInicioPausa);
    
})