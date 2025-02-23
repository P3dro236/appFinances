$(document).ready(function() {
    $("#saveValue").on("click", function(){
        $.ajax({
            url: 'http://192.168.1.6:5500/users/create',
            method: 'POST',
            contentType: 'application/json', // Define o tipo de conteúdo
            data: JSON.stringify({ // Converte os dados para JSON
                name: $("#transactionName").val(),
                email: "pedrohq238@gmail.com",
                cpf: 1234567,
                amount: parseFloat($("#transactionAmount").val()),
                username: "p3dro236",
                password: "123"
            }),
            success: function(response) {
                $('#addTransactionModal').modal('hide'); // Close the modal
            },
            error: function(xhr, status, error) {
                showToast()
            }
        });
    })
    let amount = $("#amount").text();
    $("#toggleHide").on("click", function() {
        $("#amount").toggleClass("hide")
        if($("#amount").hasClass("hide")) {
            $("#amount").text("R$ -------")
            $("#toggleHide i").removeClass("bi-eye");
            $("#toggleHide i").addClass("bi-eye-slash");
        }else{
            $("#amount").text(amount)
            $("#toggleHide i").addClass("bi-eye");
            $("#toggleHide i").removeClass("bi-eye-slash");
        }
    });
    function showToast() {
        var toastElement = document.getElementById('toast');
        if (toastElement) {
            var toast = new bootstrap.Toast(toastElement, {
                delay: 10000
            });
            toast.show();
        } else {
            console.error('Toast element not found');
        }
        toast.show()
    }
});
