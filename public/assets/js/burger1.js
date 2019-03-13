$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevoured = {
            devoured: devoured
        };

        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            console.log("Devoured:", devoured);
            location.reload();
        })
    })

    $(".addBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger [name=burger_name]").val().trim()
        }
        console.log(newBurger.name);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added New Burger");
            location.reload();
        })
    })
})

