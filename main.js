// $(document).ready(function () {
// 	$("#calculate-button").on("click", function (e) {
// 		e.preventDefault();
// 		console.log("click worked")
// 		if (document.getElementById("#waste-water-loan").checked) {
// 			$("#big-number").val(agPlus)
// 		} else {
// 			$("#big-number").val(bigNumber)
// 			$("#waste-water-loan").css("text-decoration", "line-through")
// 		};
// 		$("#big-number").val(bigNumber);
// 	});
// 	var agPlus = agriculture + bigNumber;
// });
//
// function myFunction() {
// 	var x = document.getElementById("myCheckbox");
// 	x.checked = true;
// }
//
//
// var bigNumber = 54000000000 //total defense spending increase//
//
// var wastewater = 498000000
//
// function agriculture(a, b, c, d) {
// 	var ag = 498000000 + 95000000 + 195000000 + 3912000000;
// 	return ag;
// }

var totalBudget;

// $(document).ready(function () {
// 	var $window = $(window),
// 		$stickyEl = $('#results'),
// 		elTop = $stickyEl.offset().top;
//
// 	$window.scroll(function () {
// 		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
//
// 	});
// });

$(document).ready(function () {
	totalBudget = parseInt($(".defense").text());

	$("input[type='checkbox']").on("change", function (e) {
		var total = 0;
		var newBudget = totalBudget;

		$("input[type='checkbox']:checked:not(.select_all)").each(function () {
			var checkbox = $(this);
			var value = parseInt(checkbox.data("cut"));
			total = total + value;

			// $("input[type='checkbox']:checked").addClass("checked");
		});

		var pct = (total / totalBudget) * 100;
		newBudget = newBudget - total;
		$(".defense").text(newBudget);
		$(".bar").css({ width: pct + "%" });
	});

	$(".select_all").on("click", function (e) {
		var checkbox = $(this);
		var name = checkbox.attr("name");

		if (checkbox.is(":checked")) {
			$("input[name='" + name + "']").prop("checked", true);
		} else {
			$("input[name='" + name + "']").prop("checked", false);
		}
	});

	$("#reset").on("click", function (e) {
		e.preventDefault();

		$("[type='checkbox']").prop("checked", false).trigger("change");
	})
});


//When you click a checkbox you need it to find that amount and then subtract it from the total. //
