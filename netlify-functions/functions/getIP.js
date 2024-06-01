exports.handler = async (event, context) => {
  // Get the user's IP address from the request headers
  const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || event.headers['x-client-ip'] || event.headers['forwarded-for'];

  // Return the IP address as JSON
  return {
    statusCode: 200,
    body: JSON.stringify({ ip }),
  };
};

