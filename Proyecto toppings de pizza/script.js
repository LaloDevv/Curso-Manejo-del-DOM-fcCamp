/*

                    SELECCIONAR ELEMENTOS DEL DOM CON JS

*/
    
    /* document.getElementById: nos permite seleccionar un elemento a traves de su id */
const contenedor = document.getElementById('contenedor');
// nos devuelve el div con el id 'contenedor'
console.log(contenedor);

    /* .innerHTML: nos da acceso a la estructura html contenida dentro del elemento */
console.log(contenedor.innerHTML);

    /* typeof nos indica de que tipo es algo */
console.log(typeof contenedor.innerHTML);
const titulo = document.getElementById('titulo');
console.log(titulo);

// .getElementoById nos devuelve el elemento como un Objeto, con lo que eso implica
console.log(typeof titulo);

    /* .innerText: retorna el texto contenido dentro de ese elemento */
console.log(titulo.innerText);
console.log(typeof titulo.innerText);

    /* .tagNme: retorna el nombre de la etiqueta de ese elemento */
console.log(titulo.tagName);

    /* .getElementByClassName(): seleccionar todos los elementos que tengan la misma clase */
const toppings = document.getElementsByClassName('topping');
// nos devuelve una HTML-COLLECTION, que es parecido a un array, solo que contiene objetos obtenidos a traves del DOM
console.log(toppings);
console.log(toppings.length);
// se puede acceder a los distintos objetos con su indice
console.log(toppings[0]);
// al ser objeto tienen atributos y puedo acceder a ellas
// estos atributos se pueden ver inspeccionando el elemento desde el browser
console.log(toppings[0].id);

    /*.getElementsByTagName(): seleccionar elementos segun etiquetas HTML */
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

    /* .querySelector(): selecciona el primer elemento en base a un criterio. Puede ser mucho mas especifico que todo lo anteriormente visto */
    /* nos permite combinar criterior para seleccionar elementos mucho mas concreto */
    /* nos permite usar selectores CSS */

const primer_top_naranja = document.querySelector('ul li.fondo-naranja');
console.log(primer_top_naranja);
console.log(primer_top_naranja.innerText);

//ejemplo para encontrar elementos no fondo-marron

const primer_top_noMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primer_top_noMarron);
console.log(primer_top_noMarron.innerText);

    /* .querySelectorAll(): selecciona todos elementos en base a un criterio. Devuelve una NodeList, parecido a un array */
const top_naranja = document.querySelectorAll('ul li.fondo-naranja');
console.log(top_naranja);
console.log(top_naranja.length);
console.log(top_naranja[0]);

/*

                    ASIGNAR ESTILOS CON JS

*/

//seleccionamos el primer topping de la lista

const primer_top = document.querySelector('.topping');

// se le pueden asignar estilos a los elementos usando notacion de punto
// todos los elementos tienen la propiedad .style, que permite modificar su estilo

//así podremos ver casi todas las prop CSS que se le pueden asignar a un elemento y su valor actual
console.log(primer_top.style);

//con el console.log anterior podemos buscar la sintaxis de la propiedad que queramos modificar

function changeOpacity(id) {
    const topping = document.getElementById(id);

    // si la opacidad no es 0.5 (es la default, ponlo a 0.5, si es 0.5, ponlo a 1
    topping.style.opacity != 0.5 ? topping.style.opacity = 0.5 : topping.style.opacity = 1;
    
    // se puede transformar el texto tambien

    topping.style.textTransform = 'upperCase';

}

/*

                    ACCEDER AL TEXTO CON JS

*/

const listaDeToppings = document.getElementById('lista-toppings');
// dentro del atributo NodeList tenemos los distintos elementos
console.log(listaDeToppings);
console.log('inner text: ' + listaDeToppings.innerText);
console.log('text Content: ' + listaDeToppings.textContent);
console.log('inner HTML: ' + listaDeToppings.innerHTML);


/*
innerText: devuelve el texto sin formato
textContent: devuelve el texto con todos los elementos del HTML, como por ejemplo los espacios identados
innerHTML: devuelve la estructura HTML en formato texto
*/

/*

                    MODIFICAR EL TEXTO CON JS

*/

//const titulo2 = document.getElementById('titulo');

//titulo2.innerText = 'He cambiado el titulo y me la pela';   

/*

                    MODIFICAR ATRIBUTOS CON JS

*/

const enlace = document.getElementsByTagName('a');
console.log(enlace);

// con .getAttribute() podemos ver el valor de los atributos de un objeto

console.log(enlace[0].getAttribute('href'));

// .removeAtribute() para eliminar atributo

    // enlace[0].removeAttribute('href');

// para añadir un atributo .setAttribute()

    // el primer argumento es el atributo a añadir/modificar
    // el segundo es el valor que quieres que adquiera dicho atributo
enlace[0].setAttribute('href', 'https://github.com/');
enlace[0].textContent = 'GitHub';

/*

                  AGREGAR Y/O  MODIFICAR UNA CLASE CON JS

*/

//seleccionamos el primer topping de la lista

const primer_top2 = document.querySelector('.topping');

// .classList.add('<text>') para añadir una clase

primer_top2.classList.add('mi-clase');

// .classList muestra todas las clases que tiene el elemento

console.log(primer_top2.classList);

// .classList.contains('<text>') booleano que indica si tiene la clase

console.log(primer_top2.classList.contains('fondo-flamenco'));


// .classList.remove('<text>') para eliminar la clase

primer_top2.classList.remove('mi-clase');

/*

                  CREAR O AGREGAR UN ELEMENTO CON JS

*/

// primero necesitamos una referencia del elemento donde queremos incluir el elemento nuevo

const listaToppings = document.getElementById('lista-toppings');

// .document.createElement('<text>') para crear un elemento del tipo especificado

const toppingNuevo = document.createElement('li');

// le agregamos clase y contenido

toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText = 'Queso extra';

// .append() para agregar un elemento nuevo al elemento original
// .append() sirve tanto para elementos como para texto

// .appendChild() agrega elementos HTML

listaToppings.append(toppingNuevo);

/*

                  ELIMINAR UN ELEMENTO CON JS

*/

toppingNuevo.remove();

/*

                  RECORRER EL DOM

*/


const listaToppings2 = document.getElementById('lista-toppings');


// .parentElement nos devuelve el elemento padre del elementoq que llama al atributo
// .parentNode nos devuelve el nodo padre del elementoq que llama al atributo

console.log(listaToppings2.parentElement);

// se pueden concatenar

console.log(listaToppings2.parentElement.parentElement);

// .children nos devuelve una HTML-COLLECTION con los elementos hijos

console.log(listaToppings2.children);
// firstElementChildtrabaja 
console.log(listaToppings2.firstElementChild);
console.log(listaToppings2.lastElementChild);

// .previousElementSibling para obtener el hermano

console.log(listaToppings2.previousElementSibling);



