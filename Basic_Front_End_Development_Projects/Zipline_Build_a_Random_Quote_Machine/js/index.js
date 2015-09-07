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
  
  $('#tweetThis').click(function() {
    var text = "";
    text += $('#quote').text() + '\n' + $('#author').text() + '\n\nTweet your own quotes\n';
    tweet("http://bit.ly/1Uxj9bs", text);
  });
  
  function tweet(url, text) {
            url = encodeURIComponent(url);
            text = encodeURIComponent(text);
            window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + "&url=" + url, "_blank");
        }
});