$(document).ready(function () {
    $(document).on("click",".btn-map-more", function(){
        $('body, html').animate({scrollTop: $('#mapdiv').offset().top});
    });
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    });
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    $(".Slider2").slider(
        {
            from: 0,
            to: 100000000,
            step: 1000000,
            round: 1,
            dimension: '&nbsp;',
            skin: 'round'
        }
    );
    $('.slider_feature').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider_booking').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider_partner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.dropdown-submenu a.submenu i').on("click", function (e) {
        $(this).parent().next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.single_address .address_name').click(function () {
        $(this).parent().parent().children().removeClass('active');
        $(this).parent().addClass('active');

        $('#google_map').html()

    });
    $('.icon_up').click(function () {
        $(this).parent().parent().toggleClass('open');
        if ($(this).text() == "Xem thêm ") {
            $(this).html('Ẩn đi <i class="fa fa-arrow-left" aria-hidden="true"></i>');
        } else {
            $(this).html('Xem thêm <i class="fa fa-arrow-right" aria-hidden="true"></i>');
        }
    })
});
