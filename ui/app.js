<<<<<<< HEAD
=======
// Variables
var count = 0
var max = 20
var low = 0

var images = 
{
    ["burger"] : "pictures/bacon-burger.png",
    ["coca-cola"] : "pictures/coca-cola.png",
    ["weed_pouch"] : "pictures/weed_pouch.png"
}

>>>>>>> 4517a81967d36d3c29e98c06619f39136cab509a
$(function(){
    // Base settings
    //$("html").hide();
    $("#right-grid").hide();
    window.addEventListener("message", function(event)
    {
        if(event.data.action == "display")
        {
            $("html").fadeIn(1000);
        }
    })

<<<<<<< HEAD


    document.addEventListener("keydown", (e) =>
    {
        if(e.key == "k")
        {
            $.post('http://inventory/exit_focus', JSON.stringify({}));
            $("html").fadeOut(1000);
=======
    window.addEventListener("message", function(event)
    {
        if(event.data.showing == true)
        {
            $("body").fadeIn(500);
        }
        else if(event.data.showing == false) 
        {
            $("body").fadeOut(500);
            $.post('http://inventory/disable_nui_focus', JSON.stringify({}));
        }
        else if(event.data.add_and_remove = true)
        {
            if (count <= max)
            {
                count += 1;
                $(".data-container").append("<div class='data-item'><img class='image' src='" + images[event.data.image] + "'/><div class='container'><p>"+ event.data.text +"</p></div></div>");
            }
            else
            {
                console.log("Inventory is full!");
            }
        }
        else if(event.data.add_and_remove = false)
        {
            if (count >= low)
            {
                count -= 1;
                // add remove object code here!
            }
            else
            {
                console.log("Inventory is empty!");
            }
        }
        else 
        {
            print("Invalid Syntax at removing or adding inventory items.") 
>>>>>>> 4517a81967d36d3c29e98c06619f39136cab509a
        }
    })


    // Search filtering
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".inventory-item").filter(function() 
        {
            // Add code for filtering
        });
    });
});