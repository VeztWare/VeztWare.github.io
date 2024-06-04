exports.handler = async (event, context) => {
  navigator.getBattery()
    .then(function(battery) {

        // Get current battery level .
        var batteryLevel = battery.level * 100;
        console.log(batteryLevel);
    })
    .catch(function(e) {
        console.error(e);
    });
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: batteryLevel,
    };
  } catch (error) {
    console.error('Error fetching battery percentage:', error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body: 'Error fetching battery percentage',
    };
  }
};
