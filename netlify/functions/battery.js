exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      const { batteryPercentage } = JSON.parse(event.body);
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `${batteryPercentage}%`,
      };
    } catch (error) {
      console.error('Error parsing request body:', error);
      return {
        statusCode: 400,
        headers: { "Content-Type": "text/plain" },
        body: 'Invalid request',
      };
    }
  } else {
    return {
      statusCode: 405,
      headers: { "Content-Type": "text/plain" },
      body: 'Method Not Allowed',
    };
  }
};
