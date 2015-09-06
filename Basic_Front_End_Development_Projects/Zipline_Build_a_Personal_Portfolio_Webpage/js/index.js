$(document).ready(function() {
  $('.popInAndOut').hover(function() {
    $(this).addClass('animated pulse infinite');
  },function() {
    $(this).removeClass('animated pulse infinite');
  });
  $('.popOut').hover(function(){
    $(this).animate({height: '+=10%', width: '+=10%'},500);
  },function(){
     $(this).animate({height: '-=10%', width: '-=10%'},500);
  });
});