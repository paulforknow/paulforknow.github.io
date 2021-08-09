let tool__search = document.querySelector('.tool__search');
tool__search.addEventListener('click', function() {
    location.href = 'https://www.google.com.tw/?hl=zh_TW';

});
$(document).ready(function() {
    $('.dropDown__class').hide();
    $('.dropDown__service').hide();

    $('.dropDown__full').hide();



    $('.express').hover(function() {
        $(this).children('i').eq(0).addClass('hover_bigger');

        console.log(123465)
    }, function() {
        $(this).children('i').eq(0).removeClass('hover_bigger');

    });


    $('.ham').on('click', function() {
        $('header').addClass('none');
        console.log(111);
        $('.mobileMenu').addClass('open');


    });


    $('.subMenu ').hover(function() {
        // $('.dropDown').slideDown(200);
        $(this).children('div').eq(0).slideDown(200);




    }, function() {
        $(this).children('div').eq(0).toggle();

    });

    $('.tool__member').hover(function() {
        $('.tool__member').addClass('background-gredient ');
    }, function() {
        $('.tool__member').removeClass('background-gredient ');
    });
    $('.tool__kart').hover(function() {
        $('.tool__kart').addClass('background-gredient-2 ');
    }, function() {
        $('.tool__kart').removeClass('background-gredient-2 ');
    });

    $('.ecommerce').hover(function() {
        $('.dropDown__full').slideDown(200);

    }, function() {
        $('.dropDown__full').toggle();

    });


});


function open() {
    $('.mobileMenu').addClass('open');
};




$(document).ready(function() {
    $('.ham').on('click', open);
    $('mobileMenu-cancel').click(function() {
        $('mobileMenu').removeClass('open');
    })
});