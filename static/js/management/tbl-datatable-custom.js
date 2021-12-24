'use strict';
$(document).ready(function() {
	// ------------------------------- Users -------------------------------
    $('#users').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        var data = row.data();
                        return 'جزئیات ' + data[1] + ' ' + data[2];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },

		"language": {
			"decimal": "",
			"emptyTable": "هیچ کاربری یافت نشد!",
			"info": "_END_  کاربر",
			"infoEmpty": "0 کاربر",
			"infoFiltered": "(فیلترشده بین _MAX_ کاربر)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "نمایش: _MENU_ ",
			"loadingRecords": "درحال بارگذاری ...",
			"processing": "درحال پردازش ...",
			"search": 'جستجو:',
			// "searchPlaceholder": "جست و جو کنید",
			"zeroRecords": "هیچ کاربری یافت نشد!",
			"paginate": {
				"first": "اولین",
				"last": "آخرین",
				"next": "بعدی",
				"previous": "قبلی"
			},
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			}
		},
		"order": [],
		"bPaginate": true,
		"bInfo": true,
		"stripeClasses": [],
		"lengthMenu": [
			[5, 20, 50, 100, -1],
			[5, 20, 50, 100, "همه"]
		],
		"pageLength": 20,
    });


	// ------------------------------- Organizations -------------------------------
	$('#organizations').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        var data = row.data();
                        return + data[1] + ' ' + data[2];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },

		"language": {
			"decimal": "",
			"emptyTable": "هیچ سازمانی یافت نشد!",
			"info": "_END_  سازمان",
			"infoEmpty": "0 سازمان",
			"infoFiltered": "(فیلترشده بین _MAX_ سازمان)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "نمایش: _MENU_ ",
			"loadingRecords": "درحال بارگذاری ...",
			"processing": "درحال پردازش ...",
			"search": 'جستجو:',
			// "searchPlaceholder": "جست و جو کنید",
			"zeroRecords": "هیچ سازمانی یافت نشد!",
			"paginate": {
				"first": "اولین",
				"last": "آخرین",
				"next": "بعدی",
				"previous": "قبلی"
			},
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			}
		},
		"order": [],
		"bPaginate": true,
		"bInfo": true,
		"stripeClasses": [],
		"lengthMenu": [
			[5, 20, 50, 100, -1],
			[5, 20, 50, 100, "همه"]
		],
		"pageLength": 20,
    });

	// ------------------------------- Products -------------------------------
	$('#products').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        var data = row.data();
                        return 'جزئیات ' + data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },


		"language": {
			"decimal": "",
			"emptyTable": "هیچ محصولی یافت نشد!",
			"info": "_END_ محصول",
			"infoEmpty": "0 محصول",
			"infoFiltered": "(فیلترشده بین _MAX_ محصول)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "نمایش: _MENU_ ",
			"loadingRecords": "درحال بارگذاری ...",
			"processing": "درحال پردازش ...",
			"search": 'جستجو:',
			// "searchPlaceholder": "جست و جو کنید",
			"zeroRecords": "هیچ محصولی یافت نشد!",
			"paginate": {
				"first": "اولین",
				"last": "آخرین",
				"next": "بعدی",
				"previous": "قبلی"
			},
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			}
		},
		"order": [],
		"bPaginate": true,
		"bInfo": true,
		"stripeClasses": [],
		"lengthMenu": [
			[5, 20, 50, 100, -1],
			[5, 20, 50, 100, "همه"]
		],
		"pageLength": 5,
    });

	$('#custom_e_table').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        var data = row.data();
                        return 'مشخصات کامل';
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },

		"language": {
			"decimal": "",
			"emptyTable": "هیچ موردی یافت نشد!",
			"info": "_END_ مورد در این صفحه",
			"infoEmpty": "0 مورد",
			"infoFiltered": "(فیلترشده بین _MAX_ مورد)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "نمایش: _MENU_ ",
			"loadingRecords": "درحال بارگذاری ...",
			"processing": "درحال پردازش ...",
			"search": '',
			"searchPlaceholder": 'جستجو دراین صفحه ...',
			// "searchPlaceholder": "جست و جو کنید",
			"zeroRecords": "هیچ موردی یافت نشد!",
			"paginate": {
				"first": "اولین",
				"last": "آخرین",
				"next": "بعدی",
				"previous": "قبلی"
			},
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			}
		},
		"order": [],
		"bPaginate": false,
		"bInfo": true,
		"stripeClasses": [],
		
    });

});