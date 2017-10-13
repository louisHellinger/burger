$(function() {
  $(".change-eaten").on("click", function(event) {


    console.log("button_pressed"); 
    console.log(this);
    var id = $(this).data("id");
    var hasBeenEaten = $(this).data("eaten");

    console.log(hasBeenEaten);

    var eaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("changed sleep to", eaten);
        // Reload the page to get the updated list

        location.reload();
      
      }
    );
  });

  });

$(function() {
  $(".reset-all").on("click", function(event) {

    $(".change-eaten").data("eaten")
    console.log("reset_pressed"); 
   
    console.log("Resetting all burgers");

    var eaten = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/", {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("changed sleep to", eaten);
        // Reload the page to get the updated list

        location.reload();
      
      }
    );
  });

  });
