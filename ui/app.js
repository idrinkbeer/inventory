$(function(){
    
    $(".data-item").draggable();
    
    // Removing a object
    $("#drop").droppable({
        drop : function(event, ui){
            ui.draggable.remove();
        }
    })
});