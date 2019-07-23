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



    document.addEventListener("keydown", (e) =>
    {
        if(e.key == "k")
        {
            $.post('http://inventory/exit_focus', JSON.stringify({}));
            $("html").fadeOut(1000);
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