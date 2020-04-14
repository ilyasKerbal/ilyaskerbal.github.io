$(document).ready(function () {
    $('#menu-icon-shape').on('click', function() {
        $('#menu-icon-shape').toggleClass('active');
        $('#top, #middle, #bottom').toggleClass('active');
        $('#overlay-nav').toggleClass('active');
    });
});