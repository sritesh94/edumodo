$(document).ready(function(){
    $(".toggle").click(function(){
        $("#navmenu").show();
        $(".times").show();
        $(".toggle").hide();

    });
    $(".times").click(function(){
        $("#navmenu").hide();
        $(".times").hide();
        $(".toggle").show();
    })
})