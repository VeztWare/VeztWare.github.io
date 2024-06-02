// netlify/functions/battery.js
exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const batteryPercentage = body.batteryPercentage;

  if (batteryPercentage !== undefined) {
    return {
      statusCode: 200,
      body: JSON.stringify({ batteryPercentage: batteryPercentage }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Battery percentage not provided' }),
    };
  }
};

// Client-side JavaScript
(async () => {
  if ('getBattery' in navigator) {
    const battery = await navigator.getBattery();
    const batteryPercentage = battery.level * 100;

    const response = await fetch('/.netlify/functions/battery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ batteryPercentage })
    });

    const data = await response.json();
    console.log(`Battery Percentage: ${data.batteryPercentage}%`);
  } else {
    console.log('Battery Status API not supported');
  }
})();
