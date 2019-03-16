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

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };
        console.log(newBurger);

        $.post("/api/burgers", newBurger, function (data){
            console.log(data);
        }).done(function(data){
            console.log("Done! New Burger Added!");
            res.render("/", data);
            location.reload();

            
        })
    })
})

