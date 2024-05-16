var interval;
function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      if(timer!=null){

        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
  
        $('.js-timeout').html(minutes + ':' + seconds);
        
        if (minutes == 0 && seconds == 0){
          clearInterval(interval);
          $("#js-startTimer").show();
          $(".countdown--timer").hide();
        } 
      }
  }, 1000);
  $("#js-startTimer").hide();
  $(".countdown--timer").show();
}

function StartTimerfunction () {
  $('.js-timeout').text("00:05");
  countdown();
}

countdown();