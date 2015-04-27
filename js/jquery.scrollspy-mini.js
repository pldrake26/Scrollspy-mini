/* Scroll-Nav copyright 2015 Phillip L. Drake, MIT License  */

$.fn.scrollspy = function() {
    $(document).scroll(function() {
        //  Get y axis (vertical) scroll position.
        var yPos = $(this).scrollTop();
        //  Increase or decrease the scroll variable (y axis) to fine tune functionality.
        yPos += 60;
        // Get the top and left pixel position of each div by getting their offset coordinates.  Must be an offset variable for each section on your webpage.
        var div_1 = $('#about').offset();
        var div_2 = $('#portfolio').offset();
        var div_3 = $('#blog').offset();
        var div_4 = $('#contact').offset();

        //  Use the top property pixel value of each div offset variable and compare them to y axis scroll position variable.
        if ((div_1.top < yPos) && (div_2.top > yPos)) {
            $('#about-link').addClass('active');
        } else {
            $('#about-link').removeClass('active');
        }
        if ((div_2.top < yPos) && (div_3.top > yPos)) {
            $('#portfolio-link').addClass('active');
        } else {
            $('#portfolio-link').removeClass('active');
        }
        if ((div_3.top < yPos) && (div_4.top > yPos)) {
            $('#blog-link').addClass('active');
        } else {
            $('#blog-link').removeClass('active');
        }
        if (div_4.top < yPos) {
            $('#contact-link').addClass('active');
        } else {
            $('#contact-link').removeClass('active');
        }
    });
};
