$(document).ready(function () {
	// Load producttypes, brands and weights and packagetypes when ProductGroup filtering
	$("#id_productgroups").on("select2:select select2:unselect", function (e) {
		var url = '/filters/product-groups/'
		var productgroups_val = $(this).val();
		var products_val = "";
		var brands_val = "";
		var weights_val = "";

		$.ajax({
			url: url,
			data: {
				'productgroups': productgroups_val
			},
			success: function (data) {
				console.log("ProductGroups Ajax Done!!")
				$("#id_products").html(data.producttypes);
				$("#id_brands").html(data.brands);
				$("#id_weights").html(data.weights);
				$("#id_packagetypes").html(data.packagetypes);
			},
			error: function () {
				console.log('ProductGroups Ajax Failed - Error500')
			},
		}).done(function (response) {
			// Load brands and weights and packagetypes when ProductType filtering
			$("#id_products").on("select2:select select2:unselect", function (e) {
				var url = '/filters/product-types/'
				products_val = $(this).val();
				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': products_val
					},
					success: function (data) {
						console.log("ProductTypes Ajax Done!!")
						$("#id_brands").html(data.brands);
						$("#id_weights").html(data.weights);
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('ProductTypes Ajax Failed- Error500')
					},
				});

			});
		}).done(function (response) {
			// Load weights and packagetypes when Brand filtering
			$("#id_brands").on("select2:select select2:unselect", function (e) {
				var url = '/filters/brands/'
				brands_val = $(this).val();

				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': $('#id_products').val(),
						'brands': brands_val,
					},
					success: function (data) {
						console.log("Brands Ajax Done!!")
						$("#id_weights").html(data.weights);
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('Brands Ajax Failed- Error500')
					},
				});

			});
		}).done(function (response) {
			// Load packagetypes when Weight filtering
			$("#id_weights").on("select2:select select2:unselect", function (e) {
				var url = '/filters/weights/'
				weights_val = $(this).val();

				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': $('#id_products').val(),
						'brands': $('#id_brands').val(),
						'weights': weights_val
					},
					success: function (data) {
						console.log("Weights Ajax Done!!")
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('Weights Ajax Failed - Error500')
					},
				});

			});
		});

	});

	// Load brands and weights and packagetypes when ProductType filtering
	$("#id_products").on("select2:select select2:unselect", function (e) {
		var url = '/filters/product-types/'
		products_val = $(this).val();
		$.ajax({
			url: url,
			data: {
				'productgroups': $('#id_productgroups').val(),
				'products': products_val
			},
			success: function (data) {
				console.log("ProductTypes Ajax Done!!")
				$("#id_brands").html(data.brands);
				$("#id_weights").html(data.weights);
				$("#id_packagetypes").html(data.packagetypes);
			},
			error: function () {
				console.log('ProductTypes Ajax Failed- Error500')
			},
		}).done(function (response) {
			// Load weights and packagetypes when Brand filtering
			$("#id_brands").on("select2:select select2:unselect", function (e) {
				var url = '/filters/brands/'
				brands_val = $(this).val();

				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': $('#id_products').val(),
						'brands': brands_val,
					},
					success: function (data) {
						console.log("Brands Ajax Done!!")
						$("#id_weights").html(data.weights);
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('Brands Ajax Failed- Error500')
					},
				});

			});
		}).done(function (response) {
			// Load packagetypes when Weight filtering
			$("#id_weights").on("select2:select select2:unselect", function (e) {
				var url = '/filters/weights/'
				weights_val = $(this).val();

				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': $('#id_products').val(),
						'brands': $('#id_brands').val(),
						'weights': weights_val
					},
					success: function (data) {
						console.log("Weights Ajax Done!!")
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('Weights Ajax Failed - Error500')
					},
				});

			});
		});

	});



	// Load weights and packagetypes when Brand filtering
	$("#id_brands").on("select2:select select2:unselect", function (e) {
		var url = '/filters/brands/'
		brands_val = $(this).val();

		$.ajax({
			url: url,
			data: {
				'productgroups': $('#id_productgroups').val(),
				'products': $('#id_products').val(),
				'brands': brands_val,
			},
			success: function (data) {
				console.log("Brands Ajax Done!!")
				$("#id_weights").html(data.weights);
				$("#id_packagetypes").html(data.packagetypes);
			},
			error: function () {
				console.log('Brands Ajax Failed- Error500')
			},
		}).done(function (response) {
			// Load packagetypes when Weight filtering
			$("#id_weights").on("select2:select select2:unselect", function (e) {
				var url = '/filters/weights/'
				weights_val = $(this).val();

				$.ajax({
					url: url,
					data: {
						'productgroups': $('#id_productgroups').val(),
						'products': $('#id_products').val(),
						'brands': $('#id_brands').val(),
						'weights': weights_val
					},
					success: function (data) {
						console.log("Weights Ajax Done!!")
						$("#id_packagetypes").html(data.packagetypes);
					},
					error: function () {
						console.log('Weights Ajax Failed - Error500')
					},
				});

			});
		});

	});


	// Load packagetypes when Weight filtering
	$("#id_weights").on("select2:select select2:unselect", function (e) {
		var url = '/filters/weights/'
		weights_val = $(this).val();

		$.ajax({
			url: url,
			data: {
				'productgroups': $('#id_productgroups').val(),
				'products': $('#id_products').val(),
				'brands': $('#id_brands').val(),
				'weights': weights_val
			},
			success: function (data) {
				console.log("Weights Ajax Done!!")
				$("#id_packagetypes").html(data.packagetypes);
			},
			error: function () {
				console.log('Weights Ajax Failed - Error500')
			},
		});

	});
});