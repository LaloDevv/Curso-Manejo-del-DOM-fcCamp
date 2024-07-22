const p_cita = document.getElementById('cita');
const p_autor = document.getElementById('autor');
const boton = document.getElementById('boton-cambiar-cita');


function cambiar_cita(){
    let num_random = Math.floor( Math.random() * citas.length  );
    p_cita.innerText = `"${citas[num_random].texto}"`;
    p_autor.innerText = `"${citas[num_random].autor}"`;
}

//para que al cargar haya alguna cinta predeterminada

addEventListener('load', cambiar_cita);

// añado el evento al boton

boton.addEventListener('click', cambiar_cita);

// con funcion flecha:

/*
boton.addEventListener('click', () => {
    let num_random = Math.floor( Math.random() * citas.length  );
    p_cita.innerText = citas[num_random].texto;
    p_autor.innerText = citas[num_random].autor;
}
);
*/