$(function(){

    $("body").hide();
    
    
    // Dragable item Code
    $(".data-item").draggable();
    
    // Removing a object
    $("#drop").droppable({
        drop : function(event, ui){
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
    })
});