document.addEventListener('DOMContentLoaded', () => {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const batteryLevel = Math.round(battery.level * 100) + '%';

            // Create a new div element to display the battery level
            const batteryDiv = document.createElement('div');
            batteryDiv.id = 'battery-level';
            batteryDiv.textContent = 'Battery Level: ' + batteryLevel;

            // Append the div to the body of the document
            document.body.appendChild(batteryDiv);
        });
    } else {
        console.error('Battery API not supported on this browser.');
    }
});
