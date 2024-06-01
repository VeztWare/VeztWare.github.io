exports.handler = async (event, context) => {
  try {
    const ipAddress = event.headers['client-ip']; // Get client's IP address from headers
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip: ipAddress }),
    };
    return response;
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
