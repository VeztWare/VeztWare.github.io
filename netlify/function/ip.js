exports.handler = async (event, context) => {
  const clientIp = event.headers['x-nf-client-connection-ip'] || event.headers['client-ip'] || 'IP not found';
  return {
    statusCode: 200,
    body: JSON.stringify({ ip: clientIp }),
  };
};
