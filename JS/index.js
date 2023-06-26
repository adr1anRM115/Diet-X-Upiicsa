//Variables para guardar la seccion actual
let here_section1 = false;
let here_section2 = false;

//funcion para cambiar el color del texto del header cuandop pase a la seccion de color claro
window.addEventListener('scroll', function () {
    let secondSection = document.getElementById('seccion2');

    //Primera seccion
    if (secondSection.getBoundingClientRect().top > 0 && here_section2) {
        $('#header').removeClass('header_2do_estilo');
        here_section1 = true;
        here_section2 = false;
    }


    //Aqui estamos en la segunda seccion, se cambia el estilo del header
    if (secondSection.getBoundingClientRect().top <= 0 && !here_section2) {
        $('#header').addClass('header_2do_estilo');
        here_section2 = true;
        here_section1 = false;
    }

});



