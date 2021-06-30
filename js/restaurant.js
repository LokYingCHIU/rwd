$(document).ready(function () {
    $('.topButton').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },400);
    });
});