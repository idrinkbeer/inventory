local toggled = false;

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(IsControlJustPressed(0, 318)) then
            toggled = not toggled;
            SendNUIMessage({showing = toggled});
        end
    end
end)


-- Add inventory item event
RegisterNetEvent("inventory:add_and_remove") 
AddEventHandler("inventory:add_and_remove", function(_image, _text, _add_and_remove)
    SendNUIMessage({
        image = _image,
        text = _text,
        add_and_remove = _add_and_remove
    });
end)