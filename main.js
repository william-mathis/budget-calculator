$(document).ready(function () {
	$("#calculate-button").on("click", function (e) {
		e.preventDefault();
		console.log("click worked")
		if (document.getElementById("#waste-water-loan").checked) {
			$("#big-number").val(agPlus)
		} else {
			$("#big-number").val(bigNumber)
			$("#waste-water-loan").css("text-decoration", "line-through")
		};
		$("#big-number").val(bigNumber);
	});
	var agPlus = agriculture + bigNumber;
});

function myFunction() {
	var x = document.getElementById("myCheckbox");
	x.checked = true;
}


var bigNumber = 54000000000 //total defense spending increase//

var wastewater = 498000000

function agriculture(a, b, c, d) {
	var ag = 498000000 + 95000000 + 195000000 + 3912000000;
	return ag;
}

$(document).ready(function () {
	var $window = $(window),
		$stickyEl = $('#big-number'),
		elTop = $stickyEl.offset().top;

	$window.scroll(function () {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);

	});
});


//When you click a checkbox you need it to find that amount and then subtract it from the total. //
