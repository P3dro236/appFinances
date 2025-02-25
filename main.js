// Importa a função de ajax para a adição do gasto no noobDb
import { ajaxAddTransaction } from "./ajax.js"; 

//  Nova linha a ser adicionada para ajax de adição de fundos e de gasto no noobDb
// import { ajaxAddTransaction, ajaxAddFunds } from "./ajax.js";

// Importa as funções que esconde o valor do saldo
import { hideValue } from "./buttons.js";

// Importa a função de que mostra o toast
import { showToast } from "./toast.js";
// Importa a função de atualização da tabela
import { updateTable } from "./update.js";

// Importa a variável de quantidade de gastos
import { amount } from "./items.js";

// Função que é executada quando o documento é carregado
$(document).ready(function() {
    // Atualiza a tabela com os valores logo na inicialização da página
    updateTable($("#tableBody"))


    const newAmount = `<strong>${amount}</strong>`
    $("#amount").append(newAmount)

    // Função que insere um novo gasto no noobDb
    $("#saveValue").on("click", function(){
        ajaxAddTransaction()
    })

    // Função que mostra e esconde o valor do saldo
    $("#toggleHide").on("click", function() {
        hideValue(amount)
    });

    // Função que mostra o toast
    $("#test").on("click", function(){
        showToast()
    })
});
