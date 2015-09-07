$(document).ready(function() {
  $('#quoteButton').hover(function(){
    $(this).addClass('animated pulse infinite');
  }, function() {
    $(this).removeClass('animated pulse infinite');
  });
  
  $('#quoteButton').click(function() {
   $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
   .done(function(quoteInfo) {
     $('#quote').html("<h2>" + quoteInfo.quoteText + "</h2>");
     if(quoteInfo.quoteAuthor !== ""){
       $('#author').html("<h3>- " + quoteInfo.quoteAuthor + "</h3>");
     } else {
       $('#author').html("<h3>- Unknown</h3>");
     }
   });
    
  });
});