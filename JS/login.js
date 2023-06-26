$(document).ready(function() {




    $("#submit").click(function(event) {

        var correo = $("#correo").val();
        var pass = $("#pass").val();

        // Realizar la solicitud AJAX
        $.ajax({
            url: "../PHP/login.php",
            type: "GET",
            data: {
                correo: correo,
                pass: pass
            },
            success: function(response) {
                // Aquí puedes manejar la respuesta de la solicitud AJAX
                console.log(response);

                if (response==1){
                    // Redirigir a una página específica
                    window.location.href = "../Web Pages/planes.html";

                }else {
                    alert("Credenciales Incorrectas");
                }
            }
        });
    });
});