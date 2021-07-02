$(document).ready(function () {
    $('.topButton').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },400);
    });
    $('.menu a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul.dropdown').slideUp();
        $(this).parent().find('ul.dropdown').stop().slideToggle(500);
    });
    $('.header .menuButton').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.topMenu').stop().slideToggle(200);
    });
    $('.topMenu a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul.dropdown').stop().slideToggle(500);
    });

});