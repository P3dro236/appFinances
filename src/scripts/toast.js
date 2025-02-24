export function showToast(){
    const toastBoots = new bootstrap.Toast($("#toast")[0])
    toastBoots.show();
    setTimeout(function() {
        toastBoots.hide();
    }, 2000);
}