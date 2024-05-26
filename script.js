// This script intercepts fetch requests and modifies the response
(function() {
  const originalFetch = window.fetch;
  window.fetch = async function() {
    const response = await originalFetch.apply(this, arguments);
    
    // Clone the response to modify it
    const clonedResponse = response.clone();
    const modifiedHeaders = new Headers(clonedResponse.headers);
    modifiedHeaders.set('my-custom-header', 'value');
    
    const modifiedBody = JSON.stringify({ message: 'My custom response' });
    
    // Create a new response with the modified headers and body
    return new Response(modifiedBody, {
      status: clonedResponse.status,
      statusText: clonedResponse.statusText,
      headers: modifiedHeaders
    });
  };
})();
