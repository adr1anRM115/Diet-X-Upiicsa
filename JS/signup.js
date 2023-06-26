$(document).ready(function() {



    $("#create").click(function(event) {

        var name = $("#name").val();
        var correo = $("#correo").val();
        var pass = $("#pass").val();

        // Realizar la solicitud AJAX
        $.ajax({
            url: "../PHP/signup.php",
            type: "GET",
            data: {
                correo: correo,
                pass: pass,
                name:name
            },
            success: function(response) {
                // Aquí puedes manejar la respuesta de la solicitud AJAX
                console.log(response);

                if (response==1){
                    // Redirigir a una página específica
                    window.location.href = "../Web Pages/login.html";

                }else if (response==0) {
                    alert("El correo ya existe, no se registro el correo");
                }else {
                    alert("Error en el sistema")
                }
            }
        });
    });
});