// ------------------ carousel pagination settings
var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;
$('#carousel-index').html('' + currentIndex + ' از ' + totalItems + '');

$('.carousel').carousel({
    interval: false
});

$('.carousel').bind('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('#carousel-index').html('' + currentIndex + ' از ' + totalItems + '');
    $(window).resize()
});

if (totalItems < 2) {
    $('#carousel_page2').hide()
}

// Lazy Loading
$(function() {
    $('.lazy').lazy();
});



// costum-mobile-collapse
$("#open-mobile-collapse").click(function(){
    $("#sidebar").removeClass("closed");
    $("#sidebar").addClass("mob-open");
  });

  $("#close-mobile-collapse").click(function(){
    $("#sidebar").addClass("closed");
    $("#sidebar").removeClass("mob-open");
  });