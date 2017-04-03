$(document).ready(function () {
	$("#calculate-button").on("click", function (e) {
		e.preventDefault();
		console.log("click worked")
		if ($("#waste-water-loan"))
			$("#big-number").val(bigNumber);
	});
});

function myFunction() {
	var x = document.getElementById("myRadio");
	x.checked = true;
}


var bigNumber = 54000000000 //total defense spending increase//

var wastewater = 498000000




//When you click a radio you need it to find that amount and then subtract it from the total. //
