--------------------------------------------------------------------
--                          Main Thread                           --
--------------------------------------------------------------------
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

--------------------------------------------------------------------
--                         NUI Callbacks                         --
--------------------------------------------------------------------
RegisterNUICallback("exit_focus", function()
    SetNuiFocus(false, false)
end)