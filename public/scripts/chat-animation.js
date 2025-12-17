// public/scripts/chat-animation.js
// Animates chat messages sequentially with delays

document.addEventListener('DOMContentLoaded', function() {
  const chatMessages = document.querySelectorAll('.chat-msg');
  
  if (chatMessages.length === 0) return;
  
  // Delays for each message (in milliseconds)
  const delays = [500, 1200, 2400, 3600];
  
  chatMessages.forEach((msg, index) => {
    setTimeout(() => {
      msg.classList.add('show');
    }, delays[index] || 1000 * (index + 1));
  });
  
  // Optional: Loop animation
  // Uncomment below to make it repeat
  /*
  setInterval(() => {
    chatMessages.forEach(msg => msg.classList.remove('show'));
    
    chatMessages.forEach((msg, index) => {
      setTimeout(() => {
        msg.classList.add('show');
      }, delays[index] || 1000 * (index + 1));
    });
  }, 8000); // Repeat every 8 seconds
  */
});
