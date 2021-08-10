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


    $('.ad').hover(function() {
        $('.ad img').css('width', '200');

    }, function() {
        $('.ad img').css('width', '100');

    })

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


$(document).ready(function() {
    jQuery(function($) {
        /* 手機選單開合 */
        $(".header__mobileBtn").click(function() {
            $(".header__mobileMenu").addClass("open");
        });
        $(".searchBar__cancel").click(function() {
            $(".header__mobileMenu").removeClass("open");
        });

        /* 手機二級選單展開 */
        $(".menu--have-sub").click(function() {
            $(this).toggleClass("open");
            $('.menu--have-sub + .menu--sub').toggleClass("open");
        });


        var i = 0; // 輪播圖index
        var carouselMain = $(".carousel__main") // 主要區塊
        var arrowLeft = $(".carousel__arrow--left") // 左鍵
        var arrowRight = $(".carousel__arrow--right") // 左鍵


        /* 複製第一張圖 */
        var clone_fisrt = $(".carousel__img:first-child").clone();
        // var clone_fisrt = $(".carousel__img:nth-child(3)").clone();

        carouselMain.append(clone_fisrt);


        /* 計算圖片數量 */
        var sliderNum = $(".carousel__img").length;

        carouselMain.css("width", sliderNum * 100 + "vw");

        /* 新增圓點 */
        for (var j = 0; j < sliderNum - 1; j++) {
            $(".carousel__dots").append("<span class='dot'></span>");
        }

        // 更改原點的位置
        function dotShow(index) {
            $(".dot").eq(index).addClass("full").siblings().removeClass("full");
        }

        dotShow(0);

        function sliderRight() {
            //每次按右的時候，i會加1
            i++;

            //向右移動i * 100vw
            carouselMain.animate({ left: i * -100 + "vw" }, 550, function() {
                if (i == sliderNum - 1) {
                    // 當移動到最後一張複製的圖(i等於總數 - 1)，瞬間移回left=0，將i改回0    
                    carouselMain.css("left", 0);
                    i = 0;

                    dotShow(0);

                } else {

                    dotShow(i);

                }
            });
        }

        function sliderLeft() {
            // 當圖片為第一張圖(i=0)，點擊左鍵會先瞬間跳到最後一張複製圖(i等於總數 - 1)，
            // 再向左移動(i等於總數 - 2) * 100vw
            if (i == 0) {
                carouselMain
                    .css("left", (sliderNum - 1) * -100 + "vw")
                    .animate({ left: (sliderNum - 2) * -100 + "vw" }, 550)

                // i回到倒數第二張圖(i等於總數 - 2)
                i = sliderNum - 2
            } else {
                i--;

                carouselMain
                    .animate({ left: i * -100 + "vw" }, 550)

            }
            dotShow(i);

        }

        //  自動輪播 每3秒執行sliderRight
        setInterval(sliderRight, 3000);


        /* 點擊左鍵 */
        arrowLeft.click(function() {
            sliderLeft();
        });
        /* 點擊右鍵 */
        arrowRight.click(function() {
            sliderRight();
        });
    });
});