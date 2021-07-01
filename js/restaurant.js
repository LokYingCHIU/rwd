$(document).ready(function () {
    $('.topButton').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },400);
    });
    $('.menu a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul.dropdown').stop().slideToggle(500);
    });
});