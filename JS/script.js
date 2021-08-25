jQuery(document).ready(function($) {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#text_block').fadeOut();
            $('.camry_img').width(1300);
            $('.camry_img').height(700);
            $('.camry_img').css('backgroundImage', 'url(img/camry3.png)');
            $('.feature').fadeIn();
            $('.title').fadeIn();
            $('.conditions').css('display', 'flex');
        }

    });
});