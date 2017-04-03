$(document).ready(function () {
	$("#calculate-button").on("click", function (e) {
		e.preventDefault();
		console.log("click worked")
		if (document.getElementById("#waste-water-loan").checked) {
			$("#big-number").val(agPlus)
		} else {
			$("#big-number").val(bigNumber)

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


//When you click a checkbox you need it to find that amount and then subtract it from the total. //
