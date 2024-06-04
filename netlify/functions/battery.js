exports.handler = async (event, context) => {
  try {
    // Fetch the HTML page from your Netlify site
    const response = await fetch('https://main--vezt.netlify.app/index.html'); // Replace with your actual Netlify site URL
    const html = await response.text();

    // Extract the battery percentage from the body content
    const batteryPercentage = html.trim();

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: batteryPercentage,
    };
  } catch (error) {
    console.error('Error fetching or parsing HTML:', error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body: 'Error fetching battery percentage',
    };
  }
};
