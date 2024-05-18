if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        document.body.innerText = `${Math.floor(battery.level * 100)}%`;
    });
} else {
    document.body.innerText = 'Battery API not supported';
}
