$(document).ready(function () {
	// Load producttypes and brands when ProductGroup filtering
	$("#id_productgroups").on("change", function (e) {
		var url = '/filters/product-groups/2/'
		var productgroup_val = $(this).val();
		var product_val = "";

		$.ajax({
			url: url,
			data: {
				'productgroup': productgroup_val
			},
			success: function (data) {
				console.log("ProductGroups Ajax Done!!")
				$("#id_products").html(data.producttypes);
				$("#id_brands").html(data.brands);
			},
			error: function () {
				console.log('ProductGroups Ajax Failed - Error500')
			},
		}).done(function (response) {
			// Load brands when ProductType filtering
			$("#id_products").on("select2:select select2:unselect", function (e) {
				var url = '/filters/product-types/2/'
				product_val = $(this).val();
				$.ajax({
					url: url,
					data: {
						'productgroup': $('#id_productgroups').val(),
						'product': product_val
					},
					success: function (data) {
						console.log("ProductTypes Ajax Done!!")
						$("#id_brands").html(data.brands);
					},
					error: function () {
						console.log('ProductTypes Ajax Failed- Error500')
					},
				});

			});
		});

	});

	// Load brands when ProductType filtering
	$("#id_products").on("select2:select select2:unselect", function (e) {
		var url = '/filters/product-types/2/'
		product_val = $(this).val();
		$.ajax({
			url: url,
			data: {
				'productgroup': $('#id_productgroups').val(),
				'product': product_val
			},
			success: function (data) {
				console.log("ProductTypes Ajax Done!!")
				$("#id_brands").html(data.brands);
			},
			error: function () {
				console.log('ProductTypes Ajax Failed- Error500')
			},
		});

	});
	
});