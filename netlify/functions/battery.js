exports.handler = async (event, context) => {
  try {
    // Fetch the HTML page from your Netlify site
    const response = await fetch('https://main--vezt.netlify.app/index.html'); // Replace with your actual Netlify site URL
    const html = await response.text();

    // Use a regular expression to extract the battery percentage
    const match = html.match(/<p id="battery-percentage">([^<]+)<\/p>/);
    const batteryPercentage = match ? match[1].trim() : 'Battery percentage not found';

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
