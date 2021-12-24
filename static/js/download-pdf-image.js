$(".result-filters").hide()
$('.menu-print').hide();

// menu print (bottom print - all page)
$('#printMenu').on('click', function () {
    $('.menu-print').fadeToggle();
})


// capture full page  
$("#captureFullscreen").click(function () {
    // $('')
    // alert('hi')
$(".result-filters").show()
$(".result-filters").removeClass('hidden')
$('.carousel-indicators').hide();
$('#carousel-index').hide();

var forImage=document.querySelector("#carouselExampleIndicators")
// forImage.width=2000
// forImage.height=2000
// 

    var h = $("#carouselExampleIndicators").height();
    var w = $("#carouselExampleIndicators").width();

// alert(h)
html2canvas(forImage,{height:h+100 ,width:w+100,y:120}).then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        });



$('.carousel-indicators').show();
$('#carousel-index').show();
$(".result-filters").addClass('hidden')
$(".result-filters").hide()

// $('.highcharts-no-tooltip').show();

});


// to pdf all page
$("#pdfFullscreen").click(function () {
    // $('')
    // alert('hi')
$('#carousel-index').hide()
$('.carousel-indicators').hide();
$('#carousel-index').hide();
$(".result-filters").removeClass('hidden')
$(".result-filters").show()

// $('.highcharts-no-tooltip').hide();


// $('b').css('white-space','unset');
// $('b').css('letter-spacing','0');
// $('b').css("stroke-width", "1px");
// $('b').css("font-family", "initial");
// $('b').css("font-weight", "normal");
// $('b').css('text-align','left');
// letterRendering:true
// $('b').css('word','arial');
var forImage=document.querySelector("#carouselExampleIndicators")
// forImage.width=2000
// forImage.height=2000
// 

    var h = $("#carouselExampleIndicators").height();
    var w = $("#carouselExampleIndicators").width();
html2canvas(forImage,{height:h+300 ,width:w+300,y:120}).then(canvas => {
          var context = canvas.getContext('2d');

// draw a blue cloud
// context.beginPath();
// context.moveTo(170, 80);
// context.bezierCurveTo(130, 100, 130, 150, 230, 150);
// context.bezierCurveTo(250, 180, 320, 180, 340, 150);
// context.bezierCurveTo(420, 150, 420, 120, 390, 100);
// context.bezierCurveTo(430, 40, 370, 30, 340, 50);
// context.bezierCurveTo(320, 5, 250, 20, 250, 50);
// context.bezierCurveTo(200, 5, 150, 20, 170, 80);
// context.closePath();
// context.lineWidth = 5;
context.fillStyle = '#8ED6FF';
context.fill();
context.strokeStyle = '#0000ff';
context.stroke();

// download.addEventListener("click", function() {
  // only jpeg is supported by jsPDF
$('#carousel-index').show()
$(".result-filters").addClass('hidden')
$(".result-filters").hide()
  
  var imgData = canvas.toDataURL("image/jpeg", 100);
  var pdf = new jsPDF("p",'mm',[300, 300]);
  pdf.addImage(imgData, 'JPEG',30,0,300,300);
  pdf.save("download.pdf");
// }, false);
        });


$('.carousel-indicators').show();
$('#carousel-index').show();
// $('.highcharts-no-tooltip').show();

})