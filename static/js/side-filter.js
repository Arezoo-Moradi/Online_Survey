// ------------------ filter accordion
$('.toggle').click(function (e) {
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideToggle(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


// -------------------------- Product --------------------------- 
// ------------------ productgroup filters 
$("#productgroup_tab").hide();
$("#productgroup").click(function () {
    if ($("#productgroup:checked").length > 0)
        $('#productgroup_tab').slideDown()
    else
        $('#productgroup_tab').slideUp()
});

count_productgroup = $("#productgroup_tab input:checked").length;
if (count_productgroup > 0) {
    $("#productgroup_tab").slideDown();
    $('#productgroup').prop('checked', true);
}

// ------------------ product filters 
$("#product_tab").hide();
$("#product").click(function () {
    if ($("#product:checked").length > 0)
        $('#product_tab').slideDown()
    else
        $('#product_tab').slideUp()
});

count_product = $("#product_tab input:checked").length;
if (count_product > 0) {
    $("#product_tab").slideDown();
    $('#product').prop('checked', true);
}


// -------------------------- Information --------------------------- 
// ------------------ brands filters 
$("#brand_tab").hide();
$("#brand").click(function () {
    if ($("#brand:checked").length > 0)
        $('#brand_tab').slideDown()
    else
        $('#brand_tab').slideUp()
});

count_brand = $("#brand_tab input:checked").length;
if (count_brand > 0) {
    $("#brand_tab").slideDown();
    $('#brand').prop('checked', true);
}

// ------------------ weights filters 
$("#weight_tab").hide();
$("#weight").click(function () {
    if ($("#weight:checked").length > 0)
        $('#weight_tab').slideDown()
    else
        $('#weight_tab').slideUp()
});

count_weight = $("#weight_tab input:checked").length;
if (count_weight > 0) {
    $("#weight_tab").slideDown();
    $('#weight').prop('checked', true);
}

// ------------------ packagetypes filters 
$("#packagetype_tab").hide();
$("#packagetype").click(function () {
    if ($("#packagetype:checked").length > 0)
        $('#packagetype_tab').slideDown()
    else
        $('#packagetype_tab').slideUp()
});

count_packagetype = $("#packagetype_tab input:checked").length;
if (count_packagetype > 0) {
    $("#packagetype_tab").slideDown();
    $('#packagetype').prop('checked', true);
}
 

// -------------------------- Price --------------------------- 
// ------------------ ConsumerPrice filters 
$("#consumerprice_tab").hide();
$("#consumerprice").click(function () {
    if ($("#consumerprice:checked").length > 0)
        $('#consumerprice_tab').slideDown()
    else
        $('#consumerprice_tab').slideUp()
});

if ($("#consumerprice:checked").length > 0)
    $('#consumerprice_tab').slideDown()



// ------------------ FactoryPrice filters 
$("#factoryprice_tab").hide();
$("#factoryprice").click(function () {
    if ($("#factoryprice:checked").length > 0)
        $('#factoryprice_tab').slideDown()
    else
        $('#factoryprice_tab').slideUp()
});

if ($("#factoryprice:checked").length > 0)
    $('#factoryprice_tab').slideDown()


// ------------------ AdjustedPrice filters 
$("#adjustedprice_tab").hide();
$("#adjustedprice").click(function () {
    if ($("#adjustedprice:checked").length > 0)
        $('#adjustedprice_tab').slideDown()
    else
        $('#adjustedprice_tab').slideUp()
});

if ($("#adjustedprice:checked").length > 0)
    $('#adjustedprice_tab').slideDown()


// ------------------ AdjustedConsumerPrice filters 
$("#adjustedconsumerprice_tab").hide();
$("#adjustedconsumerprice").click(function () {
    if ($("#adjustedconsumerprice:checked").length > 0)
        $('#adjustedconsumerprice_tab').slideDown()
    else
        $('#adjustedconsumerprice_tab').slideUp()
});

if ($("#adjustedconsumerprice:checked").length > 0)
    $('#adjustedconsumerprice_tab').slideDown()



// -------------------------------------------------------------------
//delete group filter then form submit
$(".side_filter_submitBtn_remove").click(function (e) {
    // e.preventDefault()
    $(this).parents().eq(4).find('input').prop('checked', false);
    $("#side_filter_form").submit(); // Submit the form
})

$('#side_filter_submitBtn_date_remove').click(function () {
    $(this).parents().eq(4).find('option:selected').removeAttr("selected");
})


// Form Submition
$("#side_filter_submitBtn").click(function () {
    $("#side_filter_form").submit(); // Submit the form
});
