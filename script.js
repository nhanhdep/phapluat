/**
 * SCRIPT FOR DEVILOPEMENT.
 *
 * @ajax URL: myAjax.ajaxurl = admin-ajax.php.
 * ***********************************************************/

( function( $ ) {
/** Start jQuery Scripts **/
    
    /** == TOGGLE PANEL == **/
    
    $(document).ready(function() {

        $(function() {
            $('nav#menu').mmenu({
                "navbar": {
                    'title': '<img class="mm-logo" src="'+ $('.logo img').attr('src') +'" />',
                }
            });
        });

        $("#toTop").click(function () {
            //1 second of animation time
            //html works for FFX but not Chrome
            //body works for Chrome but not FFX
            //This strange selector seems to work universally
            $("html, body").animate({scrollTop: 0}, 1000);
        });
        $('.videos').hover(function () {
            $('.news').removeClass('active')
        });
        $('.videos,.news').mouseleave(function () {
            $('.news').addClass('active')
        });



        $(".mobile").click(function() {
                       
            if($(this).next("ul.menu").is(":visible")){
                $(this).next("ul.menu").slideUp();
                $(this).removeClass("current");
            } 
            else {
                $(".mobile").next("ul.menu").slideUp();
                $(this).next("ul.menu").slideToggle();
                $(this).addClass("current");
            };
        });

    });

/** End jQuery Scripts **/ 
} )( jQuery );