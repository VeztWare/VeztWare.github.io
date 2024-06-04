navigator.getBattery()
    .then(function(battery) {

        // Get current battery level .
        var batteryLevel = battery.level * 100;
        console.log(batteryLevel);
    })
    .catch(function(e) {
        console.error(e);
    });
