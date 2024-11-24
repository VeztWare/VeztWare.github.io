// functions/bridge.js
const axios = require('axios');

exports.handler = async function(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Get data from Roblox
        const robloxData = JSON.parse(event.body);
        
        // Forward to Python server
        const pythonResponse = await axios.post(process.env.PYTHON_SERVER_URL, robloxData);
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Be more restrictive in production
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({
                message: 'Success',
                data: pythonResponse.data
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Internal server error',
                details: error.message
            })
        };
    }
};
