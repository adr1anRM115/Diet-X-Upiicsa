$(document).ready(consultar_planes(1));


// Obtener referencia al elemento select
var selectElement = document.getElementById("miSelect");

// Agregar evento change para detectar la selección
function load() {
    // Obtener el valor de la opción seleccionada
    var selectedOption = selectElement.value;

    // Realizar acciones en función de la opción seleccionada
    if (selectedOption === "1") {
        consultar_planes(1);
    } else if (selectedOption === "2") {
        consultar_planes(2);
    } else if (selectedOption === "3") {
        consultar_planes(3);
    } else if (selectedOption === "4") {
        consultar_planes(4);
    }
}

selectElement.addEventListener("change", load);


$('body').on('click', '.icons span', function () {


    var icono = $(this).attr('class');
    icono = icono.substr(25)
    var ID_plan = $(this).parent().next().children('.hidden').text();

    console.log(ID_plan);

    switch (icono) {
        case "mostrar":
            $.ajax({
                url: "../PHP/mostrar.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
            break;
        case "ocultar":
            $.ajax({
                url: "../PHP/ocultar.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
            break;
        case "favorito":
            $.ajax({
                url: "../PHP/Like.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
            break;
        case "follow":
            $.ajax({
                url: "../PHP/follow.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
            break;
        case "siguiendo":
            $.ajax({
                url: "../PHP/dis_follow.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
            break;
        default:
            $.ajax({
                url: "../PHP/dis_Like.php",
                type: "GET",
                data: {ID_plan: ID_plan}, // Pasar el parámetro en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            load();
    }

});


function consultar_planes(opcion) {
    $.ajax({
        url: "../PHP/Planes.php",
        type: "GET",
        data: {opcion: opcion}, // Pasar el parámetro en la solicitud AJAX
        dataType: "json",
        success: function (data) {
            console.log(data);
            // Los datos se han recibido correctamente en formato JSON
            // Generar el HTML con los datos recibidos
            var html = "";
            for (var i = 0; i < data.length; i++) {
                var plan = data[i];
                var imgSrc = plan.img_url ? plan.img_url : "../media/img/default.jpg"; // Si img_url es nulo, se usa una imagen por defecto

                html += '<div class="plan_contenedor">';
                html += '  <div class="icons">';
                if (plan.follow == 1) {
                    html += '    <span class="material-symbols-rounded siguiendo">verified</span>';
                } else {
                    html += '    <span class="material-symbols-rounded follow">person_add</span>';
                }
                html += '    <span class="material-symbols-rounded favorito' + (plan.like == 1 ? ' like_active' : '') + '">favorite</span>';
                if (plan.visible == 1) {
                    html += '    <span class="material-symbols-rounded ocultar">block</span>';
                } else {
                    html += '    <span class="material-symbols-rounded mostrar">visibility</span>';
                }
                html += '  </div>';
                html += '  <div class="box plan">';
                html += '    <div class="nombre">' + plan.nombre_plan + '</div>';
                html += '    <div class="descripcion scroll">' + plan.descripcion + '</div>';
                html += '    <div class="hidden">' + plan.ID_plan + '</div>';
                html += '  </div>';
                html += '  <img src="' + imgSrc + '"/>';
                html += '</div>';
            }

            // Insertar el HTML generado en el elemento con id "cuerpo"
            $("#cuerpo").html(html);
            $("#cuerpo_oculto").empty();

        },
        error: function (xhr, status, error) {
            $("#cuerpo").empty();
            $("#cuerpo_oculto").text("Vacio");

            console.log("Error: " + error);
        }
    });
}



