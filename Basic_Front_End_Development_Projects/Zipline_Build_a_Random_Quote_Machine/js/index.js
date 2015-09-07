$(document).ready(function() {
  // add classes from animate.css to pulse when hovered
  $('#quoteButton').hover(function(){
    $(this).addClass('animated pulse infinite');
  }, function() {
    $(this).removeClass('animated pulse infinite');
  });
  // make request to Forismatic API by URL and capture it in JSON format
  // parse the quoteText and quoteAuthor to their elements 
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
  // send the shorten URL of the site and the quote on the site to be on the tweet
  $('#tweetThis').click(function() {
    var text = $('#quote').text() + '\n' + $('#author').text() + '\n\nTweet your own quotes\n';
    tweet("http://bit.ly/1Uxj9bs", text);
  });
  // open up a new window to twitter with the site URL and the quote in the textbox of the tweet
  function tweet(url, text) {
            url = encodeURIComponent(url);
            text = encodeURIComponent(text);
            window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + "&url=" + url, "_blank");
        }
});