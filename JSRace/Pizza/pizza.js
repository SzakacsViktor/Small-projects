function prepza() {
	$("#orderheading").text("This pizza is " + $("input[name=crust]:checked").val() + ", " + $("input[name=size]:checked").val() + " and will have:");
	$("input[name=toppingcheck]:checked").each(function() {
		$("#orderheading").append('<p id="newelement' + $(this).val() + '">' + $(this).val() + '</p>');
	});
	return false;
	}

function flip(pizzatype) {
	if (pizzatype.value == "Veggie Special") {
		$("#topping1").prop("checked", false);
		$("#topping2").prop("checked", false);
		$("#topping3").prop("checked", false);
		$("#topping4").prop("checked", true);
		$("#topping5").prop("checked", true);
		$("#topping6").prop("checked", true);
		$("#topping7").prop("checked", false);
	} else if (pizzatype.value == "Meat Special") {
		$("#topping1").prop("checked", true);
		$("#topping2").prop("checked", true);
		$("#topping3").prop("checked", true);
		$("#topping4").prop("checked", false);
		$("#topping5").prop("checked", false);
		$("#topping6").prop("checked", false);
		$("#topping7").prop("checked", false);
	} else if (pizzatype.value == "Hawaiian") {
		$("#topping1").prop("checked", false);
		$("#topping2").prop("checked", false);
		$("#topping3").prop("checked", true);
		$("#topping4").prop("checked", false);
		$("#topping5").prop("checked", false);
		$("#topping6").prop("checked", false);
		$("#topping7").prop("checked", true);
	}
}