$(document).ready(function () {
  // Initialize FlipClock
  var clock = $('#flipclock').FlipClock({
    clockFace: 'TwentyFourHourClock',
    showSeconds: true,
    autoStart: true
  });

  // Function to update the current date
  function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    $('#date').text(now.toLocaleDateString(undefined, options));
  }

  // Update date immediately and every 60 seconds
  updateDate();
  setInterval(updateDate, 60000);



  // Append the script to the document body
  document.body.appendChild(script);
});

