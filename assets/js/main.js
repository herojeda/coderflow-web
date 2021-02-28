
!(function ($) {

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 600,
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);
