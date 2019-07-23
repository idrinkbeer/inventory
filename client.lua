<<<<<<< HEAD
--------------------------------------------------------------------
--                          Main Thread                           --
--------------------------------------------------------------------
=======
-- Variables
local toggled = false;

-- Main Code
>>>>>>> 4517a81967d36d3c29e98c06619f39136cab509a
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(IsControlJustPressed(0, 311)) then
            SendNUIMessage({action = "display"})
            SetNuiFocus(true, true)
        end
    end
end)
--------------------------------------------------------------------
--                          Functions                             --
--------------------------------------------------------------------

<<<<<<< HEAD
--------------------------------------------------------------------
--                         NUI Callbacks                         --
--------------------------------------------------------------------
RegisterNUICallback("exit_focus", function()
    SetNuiFocus(false, false)
=======
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
>>>>>>> 4517a81967d36d3c29e98c06619f39136cab509a
end)