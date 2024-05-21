function countdownTimer(minutes) {
    let seconds = minutes * 60;
    const countdown = setInterval(function() {
      seconds--;
      if (seconds < 0) {
        clearInterval(countdown);
      } else {
        console.log(seconds + " seconds left");
      }
    }, 1000);
  }