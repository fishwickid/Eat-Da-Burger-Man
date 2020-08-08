$(function() {
	$(".btn-devour").on("click", function(event) {
		let id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: {
				id: id,
				devoured: 1
			}
		}).then(function() {
			console.log("Burger devoured!");
			location.reload();
		});
	});
	$(".burger-form").on("submit", function(event) {
		event.preventDefault();
		if(validateForm()) {
			let newBurger = {
				burger_name: $("#burgerName").val().trim()
			};
			$.ajax("/api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {
				console.log("New burger has been added!");
				location.reload();
			});
		}
	});
});

function validateForm() {
	let validated = true;
	$(".form-group").removeClass("has-error");
	$("#helpBlock").hide();
	if($("#burgerName").val() === "") {
		$("#burgerName").parent().addClass("has-error");
		$("#helpBlock").show();
		validated = false;
	}
	return validated;
}