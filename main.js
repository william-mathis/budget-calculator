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

// NUMBERS ARE INTEGERS.
$(document).ready(function () {
	totalBudget = parseInt($(".defense").text());

	// COMMAS.
	function formatNumber(newBudget) {
		return newBudget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	// GET READY FOR MATH. WE'RE USING CHECKBOXES, SO DON'T PREVENT DEFAULT.
	$("input[type='checkbox']").on("change", function (e) {
		var total = 0;
		var newBudget = totalBudget;

		// WHEN YOU CLICK A CHECKBOX THAT'S NOT OF THE CLASS select_all, PERFORM MATH.
		$("input[type='checkbox']:checked:not(.select_all)").each(function () {
			var checkbox = $(this);
			var value = parseInt(checkbox.data("cut"));
			total = total + value;
			// $("input[type='checkbox']:checked").addClass("checked");
		});

		// FIGURE OUT THE AMOUNT YOU'VE CUT OUT OF 54BN, CONVERT IT TO A PERCENTAGE, AND APPLY IT TO THE WIDTH OF "BAR"
		var pct = (total / totalBudget) * 100;
		newBudget = newBudget - total;
		$(".defense").text(newBudget);
		$(".bar").css({ width: pct + "%" });

		//MAKE PROGRESS BAR GREEN FOR BALANCED BUDGETS.
		if (newBudget < 0) {
			console.log('less than zero');
			// $(".bar").css({ "background-color: green" });
		}
	});

	// ALLOW DEPARTMENT CHECKBOXES TO CHECK SUB-CHECKBOXES.
	$(".select_all").on("click", function (e) {
		var checkbox = $(this);
		var name = checkbox.attr("name");

		// ADD "CHECKED" TO THE INPUT NAME IN HTML IF THE BOX IS CHECKED. I THINK. I KIND OF FORGET WHY WE DID THIS.
		if (checkbox.is(":checked")) {
			$("input[name='" + name + "']").prop("checked", true);
		} else {
			$("input[name='" + name + "']").prop("checked", false);
		}
	});

	// CHECK THE DEPARTMENT BOX IF ALL ITS SUB-BOXES ARE CHECKED.

	// UNCHECK THE DEPARTMENT BOX IF ONE OF ITS SUB-BOXES IS UNCHECKED.

	// RESET BUTTON CHANGES ANY CHECKED BOX TO UNCHECKED.
	$("#reset").on("click", function (e) {
		e.preventDefault();

		$("[type='checkbox']").prop("checked", false).trigger("change");
	})
});


//When you click a checkbox you need it to find that amount and then subtract it from the total. //
