// netlify/functions/getDeviceBrand.js

exports.handler = async (event, context) => {
  const userAgent = event.headers['user-agent'];
  let deviceBrand = 'Unknown';

  if (/android/i.test(userAgent)) {
    deviceBrand = 'Android';
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    deviceBrand = 'iOS';
  } else if (/windows/i.test(userAgent)) {
    deviceBrand = 'Windows';
  } else if (/macintosh/i.test(userAgent)) {
    deviceBrand = 'Mac';
  } else if (/linux/i.test(userAgent)) {
    deviceBrand = 'Linux';
  } else if (/samsung/i.test(userAgent)) {
    deviceBrand = 'Samsung';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deviceBrand }),
  };
};
