navigator.getBattery()
    .then(function(battery) {
        // Get current battery level
        var batteryLevel = battery.level * 100;
        console.log(batteryLevel);

        // Display battery level in the HTML element
        document.getElementById('battery-level').textContent = 'Battery Level: ' + batteryLevel + '%';
    })
    .catch(function(e) {
        console.error(e);
        document.getElementById('battery-level').textContent = 'Failed to fetch battery level.';
    });

