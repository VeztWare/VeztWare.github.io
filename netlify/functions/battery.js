exports.handler = (event, context) => {
  navigator.getBattery()
    .then(function(battery) {
      const batteryLevel = battery.level * 100;
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `${batteryLevel}%`,
      };
    })
    .catch(function(error) {
      console.error('Error fetching battery percentage:', error);
      return {
        statusCode: 500,
        headers: { "Content-Type": "text/plain" },
        body: 'Error fetching battery percentage',
      };
    });
};
