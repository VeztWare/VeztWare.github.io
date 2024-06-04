exports.handler = async (event, context) => {
  try {
    const battery = await navigator.getBattery();
    const batteryPercentage = Math.round(battery.level * 100);
    
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `${batteryPercentage}%`,
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
