export function hideValue(value){
    $("#amount").toggleClass("hide")
        if($("#amount").hasClass("hide")) {
            $("#amount").text("-----")
            $("#toggleHide i").removeClass("bi-eye");
            $("#toggleHide i").addClass("bi-eye-slash");
        }else{
            $("#amount").text(value)
            $("#toggleHide i").addClass("bi-eye");
            $("#toggleHide i").removeClass("bi-eye-slash");
        }
}