// Variables
var count = 0
var max = 20
var low = 0

var images = 
{
    ["burger"] : "pictures/bacon-burger.png",
    ["coca-cola"] : "pictures/coca-cola.png",
}

$(function(){

    $("body").hide();
    
    // Dragable item Code
    $(".data-item").draggable();
    
    // Removing a object
    $("#drop").droppable({
        drop : function(event, ui)
        {
            ui.draggable.remove();
        }
    })



    window.addEventListener("message", function(event)
    {
        if(event.data.showing == true)
        {
            $("body").fadeIn(500);
            
            
            
        }
        else if(event.data.showing == false) 
        {
            $("body").fadeOut(500);
        }
        else if(event.data.add_and_remove = true)
        {
            if (count <= max)
            {
                count += 1;
                console.log("here still")
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
            }
            else
            {
                console.log("Inventory is empty!");
            }
        }
        else 
        {
            print("Invalid Syntax at removing or adding inventory items.") 
        }
    })
});