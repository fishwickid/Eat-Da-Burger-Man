$(() => {
    // Add a new burger
    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // $(".eatTheBurger").on("click", (event) => {
    //     // Make sure to preventDefault on a submit event
    //     event.preventDefault();

    //     let id = $(this).data("id");
    //     let devouredState = {
    //         devoured: 1
    //     };

    //     // Send the PUT request
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: devouredState
    //     }).then(() => {
    //         console.log("Burger devoured!");
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    $(".eatTheBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    // $(".deleteBurger").on("click", (event) => {
    //     event.preventDefault();

    //     let id = $(this).data("id");

    //     // Send the DELETE request
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(() => {
    //         console.log("Deleted burger!", id);
    //         location.reload();
    //     });
    // });

    $(".deleteBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

});