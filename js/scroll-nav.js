$(function() {
    $(document).scroll(function() {
        //  Get y scroll position
        var yPos = $(this).scrollTop();
        //  Increase or decrease y scroll variable to adjust functionality
        yPos += 150;
        // Get the x and y pixel position of each div.
        var pPos_1 = $('#about').offset();
        var pPos_2 = $('#portfolio').offset();
        var pPos_3 = $('#blog').offset();
        var pPos_4 = $('#contact').offset();

        //  Use the top(y) pixel value of divs and compare them to scroll position
        if ((pPos_1.top < yPos) && (pPos_2.top > yPos)) {
            $('#about-link').addClass('active');
        } else {
            $('#about-link').removeClass('active');
        }
        if ((pPos_2.top < yPos) && (pPos_3.top > yPos)) {
            $('#portfolio-link').addClass('active');
        } else {
            $('#portfolio-link').removeClass('active');
        }
        if ((pPos_3.top < yPos) && (pPos_4.top > yPos)) {
            $('#blog-link').addClass('active');
        } else {
            $('#blog-link').removeClass('active');
        }
        if (pPos_4.top < yPos) {
            $('#contact-link').addClass('active');
        } else {
            $('#contact-link').removeClass('active');
        }
    });
});
