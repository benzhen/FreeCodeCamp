$(document).ready(function() {
  //add classes from animate.css to pulse when hovered
  $('.popInAndOut').hover(function() {
    $(this).addClass('animated pulse infinite');
  },function() {
    $(this).removeClass('animated pulse infinite');
  });
  //animate the buttons to be bigger when hovered
  $('.popOut').hover(function(){
    $(this).animate({height: '+=10%', width: '+=10%'},500);
  },function(){
     $(this).animate({height: '-=10%', width: '-=10%'},500);
  });
});