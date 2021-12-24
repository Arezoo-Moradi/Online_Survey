// ------------------ Category filter
$('#group-product').on('click', function () {
    $('.menu-group-product').slideToggle()
})

$('#topFilter input').on('change', function () {
    $('.result-filter p').remove()
    topFilterChecked = $('#topFilter input:checked');
    if (topFilterChecked.length == 0)
        $('.added-filter').hide();
    else
        $('.added-filter').show();

    topFilterChecked.each(function () {
        $this = $(this)
        $('.result-filter').append("<p>" + $this.val() + "</p>")
    })
})

topFilterChecked = $('#topFilter input:checked');
if (topFilterChecked.length == 0)
    $('.added-filter').hide();
else
    $('.added-filter').show();


topFilterChecked.each(function () {
    $this = $(this)
    $('.result-filter').append("<p>" + $this.val() + "</p>")
})
