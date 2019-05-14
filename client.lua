-- Variables
local toggled = false;

-- Main Code
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


-- Test commands
RegisterCommand("add_test", function(source, args, raw)
    TriggerEvent("inventory:add_and_remove", args[1], "Hamburger", true);
end)

RegisterCommand("remove_test", function(source, args, raw)
    TriggerEvent("inventory:add_and_remove", args[1], "Hamburger", false);
end)

--[[
    NUI CALLBACKS
]]

RegisterNUICallback("disable_nui_focus", function(data, cb)
end)