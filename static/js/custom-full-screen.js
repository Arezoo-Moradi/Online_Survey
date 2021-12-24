// Full Screen Settings
$("#closeFullscreen").hide();

$("#openFullscreen").click(function () {
	$(window).resize()

	$("#openFullscreen").hide();
	$("#closeFullscreen").show();

	$("#sidebar").removeClass();
	$("#sidebar").addClass('d-none');
	$(".pcoded-main-container").css("margin-right", "0");

	$("#topFilter").removeClass();
	$("#topFilter").addClass('d-none');

	$("#topFilterResults").removeClass();
	$("#topFilterResults").addClass('col-12');

	$("#sideFilter").removeClass();
	$("#sideFilter").addClass('d-none');

	$("#leftBox").removeClass('col-lg-10');
	$("#leftBox").addClass('col-lg-12 pr-0');

	$("#the_top_filter").removeClass('col-lg-12');
	$("#the_top_filter").addClass('col-lg-12');

});

$("#closeFullscreen").click(function () {
	$(window).resize()

	$("#closeFullscreen").hide();
	$("#openFullscreen").show();

	$("#sidebar").removeClass();
	$("#sidebar").addClass('pcoded-navbar navbar-collapsed closed');
	$(".pcoded-main-container").removeAttr("style");

	$("#topFilter").removeClass();
	$("#topFilter").addClass('col-lg-3 col-12 bg-white custom-shadow cursor-pointer relative d-flex align-items-center p-0');

	$("#topFilterResults").removeClass();
	$("#topFilterResults").addClass('col-lg-9 col-12 pl-lg-0');

	$("#sideFilter").removeClass();
	$("#sideFilter").addClass('container ml-3 d-flex flex-column');

	$("#leftBox").removeClass('col-lg-12 pr-0');
	$("#leftBox").addClass('col-lg-10');

	$("#the_top_filter").removeClass('col-lg-12');
	$("#the_top_filter").addClass('col-lg-12');
});

var elem = document.documentElement;

function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();

	} else if (elem.mozRequestFullScreen) {
		/* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Chrome, Safari & Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE/Edge */
		elem.msRequestFullscreen();
	}
}

function closeFullscreen() {

	if (document.exitFullscreen) {
		document.exitFullscreen()
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}