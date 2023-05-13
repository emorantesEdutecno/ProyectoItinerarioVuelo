function enviarSeccionOrigen(){
    let valorListaOrigenString = document.getElementById('listaOrigen').value;
    let valorListaOrigenInt = parseInt(valorListaOrigenString);
    let elParrafoOrigen = document.getElementById('parrafoOrigen');
    elParrafoOrigen.classList.add('text-warning');
    elParrafoOrigen.classList.add('fs-3');

    switch(valorListaOrigenInt){
        case 1:
            elParrafoOrigen.innerText = 'Chile';
            break;
        case 2:
            elParrafoOrigen.innerText = 'México';
            break;
        case 3:
            elParrafoOrigen.innerText = 'Colombia';
            break;
        case 4:
            elParrafoOrigen.innerText = 'Perú';
            break;
        case 5:
            elParrafoOrigen.innerText = 'España';
            break;
        case 6:
            elParrafoOrigen.innerText = 'Venezuela';
            break;
    }


    validacionEscalas();


}


function enviarFechaOrigen(){
    let valorFechaOrigen = document.getElementById('fechaOrigen').value;
    let elParrafoFechaOrigen = document.getElementById('parrafoFechaOrigen');
    elParrafoFechaOrigen.innerText = valorFechaOrigen;
    elParrafoFechaOrigen.classList.add('text-warning');
    elParrafoFechaOrigen.classList.add('fs-3');
}

function enviarFechaDestino(){
    let valorFechaDestino = document.getElementById('fechaDestino').value;
    let elParrafoFechaDestino = document.getElementById('parrafoFechaDestino');
    elParrafoFechaDestino.innerText = valorFechaDestino;
    elParrafoFechaDestino.classList.add('text-danger');
    elParrafoFechaDestino.classList.add('text-end');
    elParrafoFechaDestino.classList.add('fs-3');
}


function enviarSeccionDestino(){
    let valorListaDestinoString = document.getElementById('listaDestino').value;
    let valorListaDestinoInt = parseInt(valorListaDestinoString);
    let elParrafoDestino = document.getElementById('parrafoDestino');
    elParrafoDestino.classList.add('text-danger');
    elParrafoDestino.classList.add('text-end');
    elParrafoDestino.classList.add('fs-3');


    switch(valorListaDestinoInt){
        case 1:
            elParrafoDestino.innerText = 'Chile';
            break;
        case 2:
            elParrafoDestino.innerText = 'México';
            break;
        case 3:
            elParrafoDestino.innerText = 'Colombia';
            break;
        case 4:
            elParrafoDestino.innerText = 'Perú';
            break;
        case 5:
            elParrafoDestino.innerText = 'España';
            break;
        case 6:
            elParrafoDestino.innerText = 'Venezuela';
            break;
    }

    validacionEscalas();
}

function validacionEscalas(){
    let valorListaOrigenString = document.getElementById('listaOrigen').value;
    let valorListaDestinoString = document.getElementById('listaDestino').value;
    let elParrafoNotificacion = document.getElementById('parrafoNotificacion');

    let tieneEscala = 
    (
        (valorListaOrigenString == '1' && valorListaDestinoString == '5') ||
        (valorListaOrigenString == '5' && valorListaDestinoString == '1') ||
        (valorListaOrigenString == '4' && valorListaDestinoString == '2') ||
        (valorListaOrigenString == '2' && valorListaDestinoString == '4')

    ) ? true:false;

    if(tieneEscala == true){
        let mensaje = 'EL VUELO TIENE ESCALA';
        elParrafoNotificacion.innerText = mensaje;
        elParrafoNotificacion.classList.add('text-light');
        elParrafoNotificacion.classList.add('text-center');
        elParrafoNotificacion.classList.add('fs-1');

    }
    else{
        let mensaje = '';
        elParrafoNotificacion.innerText = mensaje;
        elParrafoNotificacion.classList.add('text-light');
        elParrafoNotificacion.classList.add('text-center');
        elParrafoNotificacion.classList.add('fs-1');
    }
  

}


function asignarEventos(){
    let laListaOrigen = document.getElementById('listaOrigen');
    laListaOrigen.addEventListener('change', enviarSeccionOrigen);

    let laListaDestino = document.getElementById('listaDestino');
    laListaDestino.addEventListener('change', enviarSeccionDestino );

    let laFechaOrigen = document.getElementById('fechaOrigen');
    laFechaOrigen.addEventListener('change', enviarFechaOrigen);

    let laFechaDestino = document.getElementById('fechaDestino');
    laFechaDestino.addEventListener('change', enviarFechaDestino);
    
}