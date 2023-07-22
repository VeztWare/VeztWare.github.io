function generateRandomKey(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomKey = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomKey += characters.charAt(randomIndex);
  }
  return randomKey;
}

function updateRandomKey() {
  const randomKey = generateRandomKey(20);
  document.getElementById('randomKey').textContent = randomKey;
}

// Generate and update the random key initially
updateRandomKey();

// Update the random key every 24 hours
setInterval(updateRandomKey, 24 * 60 * 60 * 1000);
