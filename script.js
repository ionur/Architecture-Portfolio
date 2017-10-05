var clicked = false;

$(document).ready(function() {
    $("#menuItems").hide();  
    $("#menuBar").click( function () {
        menuBarF();
     });
    
    function menuBarF() {
        if (!clicked) {
           $("#menuItems").fadeIn();
            clicked = true;
        } else {
            $("#menuItems").fadeOut();
             clicked = false;
        }
    }
});