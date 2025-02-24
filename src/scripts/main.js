import { ajaxAddTransaction } from "./ajax.js";
// import { ajaxAddTransaction, ajaxAddFunds } from "./ajax.js"; Nova linha a ser adicionada
import { hideValue } from "./buttons.js";
import { showToast } from "./toast.js";
import { updateTable } from "./update.js";
$(document).ready(function() {
    updateTable($("#tableBody"))
    const amount = 1211.23
    const newAmount = `<stron>${amount}</strong>`
    $("#amount").append(newAmount)
    $("#saveValue").on("click", function(){
        ajaxAddTransaction()
    })
    $("#toggleHide").on("click", function() {
        hideValue(amount)
    });
    $("#test").on("click", function(){
        showToast()
    })
});
