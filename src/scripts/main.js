import { ajax } from "./ajax.js";
import { hideValue } from "./buttons.js";
import { showToast } from "./toast.js";
import { updateTable } from "./update.js";
$(document).ready(function() {
    updateTable($("#tableBody"))
    const amount = 121
    const newAmount = `<stron>${amount}</strong>`
    $("#amount").append(newAmount)
    $("#saveValue").on("click", function(){
        ajax()
    })
    $("#toggleHide").on("click", function() {
        hideValue(amount)
    });
    $("#test").on("click", function(){
        showToast()
    })
});
