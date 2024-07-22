/*

                  EVENTOS

*/

    // CONCEPTOS IMPORTANTES

// ELEMENTO TARGET: elemento que va a recibir el evento
// TRIGGER: desencadenante del evento, por ejemplo hacer clic
// EVENT HANDLER: funcion que gestiona el evento ejecutandose cuando este ocurre
// EVENT LISTENER: asociacion entre un evento una una funcion (event handler) para que cuando ocurra el evento ocurra la funcion

/*

                  EVENTOS EN HTML

*/

// HTML: <li onclick="mostrarClic()" class="topping fondo-naranja" id="">Cebolla</li>

//probar con liveServer para que se vea en consola
/*
function mostrarClic() {
    console.log('Hizo clic')
}
*/

/*

                   .addEventListener()

*/

// obtenemos referencia del elemento

const albahaca = document.getElementById('albahaca');

function mostrarClic() {
    console.log('Hizo clic')
}

function mostrarEvento(e) {
    //usamos las propiedades de e
    console.log(e.target.innerText)
}

// .addEventListener(<tipo de evento>, <funcion que la gestiona sin parentesis>)

albahaca.addEventListener('click', mostrarClic)
//si la funcion tiene un elemento, este se trata como un objeto
albahaca.addEventListener('click', mostrarEvento)


// ahora vamos a hacerlo con una coleccion

const todos_toppings= document.getElementsByClassName('topping');

for(let i = 0; i < todos_toppings.length; i++){
    todos_toppings[i].addEventListener('click', mostrarEvento)
}

// se puede definir la funcion directamente en el addEventListener usando una funcion flecha

albahaca.addEventListener('click', (e) => {console.log('Funcion flecha')} );