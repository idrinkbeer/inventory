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