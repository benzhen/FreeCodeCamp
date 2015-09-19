$(document).ready(function() {
  var playSound = function() {($("#timeUp")[0]).play()};
  var countDownPomo, countDownRest, countDown;
  // increase or decrease when clicked
  $('#incR').click(function() {
    $('#restTime').html(parseInt($('#restTime').text()) + 1);
  });
  
  $('#decR').click(function() {
    if($('#restTime').text() !== '0')
      $('#restTime').html(parseInt($('#restTime').text()) - 1);
  });
  
  $('#incP').click(function() {
    $('#pomoTime').html(parseInt($('#pomoTime').text()) + 1);
  });
  
  $('#decP').click(function() {
    if($('#pomoTime').text() !== '0')
      $('#pomoTime').html(parseInt($('#pomoTime').text()) - 1);
  });
  
  // start the countdown
  $('#go').click(function() {
    // clear the current interval if timer is running and go is clicked again
    clearInterval(countDownPomo);
    clearInterval(countDownRest);
    //clearInterval(countDown);
    
    pomoTime = parseInt($('#pomoTime').text()) * 60;
    waitTime = pomoTime * 1000;
    restTime = parseInt($('#restTime').text()) * 60;
    
    /*countDown = function(timeLeft) {
      setInterval(function() {
        $('#clock').html(formatTime(timeLeft));
        if(timeLeft === 0) {
          clearInterval(countDown);
          playSound();
        }
        if(timeLeft !== 0) 
          timeLeft -= 1;
      }, 1000);
    };*/
    
    // Pomodoro Timer
    $('#state').html('Pomodoro Time Left: ');
    /*countDown(pomoTime);*/
    countDownPomo = setInterval(function() {
      $('#clock').html(formatTime(pomoTime));
      if(pomoTime === 0) {
        clearInterval(countDownPomo);
        playSound(); 
      }
      if(pomoTime !== 0) 
        pomoTime -= 1;
    }, 1000);
    // Rest timer, set to run 2 secs after Pomodoro Timer
    setTimeout(function() {
      $('#state').html('Rest Time Left: ');
      countDownRest = setInterval(function() {
        $('#clock').html(formatTime(restTime));
        if(restTime === 0) {
          clearInterval(countDownRest);
          playSound();
        }
        if(restTime !== 0) 
          restTime -= 1;
      }, 1000);
    }, waitTime+2000);
    
   
    
  });
  
  // Stop the clock when the time is clicked
  $('#clock').click(function() {
    clearInterval(countDownPomo);
    clearInterval(countDownRest);
  });
  // Return a string in minute:second format
  formatTime = function(sec) {
    return Math.floor(sec/60) + ':' + Math.floor(sec%60)
  }
});