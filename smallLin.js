let tool__search = document.querySelector('.tool__search');
tool__search.addEventListener('click', function() {
    location.href = 'https://www.google.com.tw/?hl=zh_TW';

});
$(document).ready(function() {
    $('.dropDown').hide();
    $('.dropDown__full').hide();

    $('.ham').on('click', function() {
        $('header').addClass('none');
        console.log(111);
        $('.mobileMenu').addClass('open');


    });


    $('.subMenu ').hover(function() {
        $('.dropDown').slideDown(200);

    }, function() {
        $('.dropDown').toggle();

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