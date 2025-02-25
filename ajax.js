// Importação da função que mostra o toast em caso de erro
import { showToast } from "./toast";

// Exportação do ajax para inserção de um gasto no noobDb
export function ajaxAddTransaction(){
    $.ajax({
        url: 'http://192.168.1.6:5500/users/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            name: $("#transactionName").val(),
            email: "pedrohq238@gmail.com",
            cpf: 1234567,
            amount: parseFloat($("#transactionAmount").val()),
            username: "p3dro236",
            password: "123"
        }),
        success: function(response) {
            $('#addTransactionModal').modal('hide');
        },
        error: function(xhr, status, error) {
            showToast()
        }
    });
}
// Exportação do ajax para inserção de fundos no noobDb
// export function ajaxAddFunds(){
//     $.ajax({
//         url: 'http://192.168.1.6:5500/users/create',
//         method: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify({
//             amount: parseFloat($("#transactionAmount").val()),
//         }),
//         success: function(response) {
//             $('#addFundsModal').modal('hide');
//         },
//         error: function(xhr, status, error) {

//         }
//     });
// }