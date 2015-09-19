$(document).ready(function(){
    /* Does your browser support geolocation? */
  if ("geolocation" in navigator) {
    $('.js-geolocation').show(); 
  } else {
    $('#weather').html('<h1 class="text-danger"> Browser does not have geolocation, please use a brower that does </h1>');
    $('.js-geolocation').hide();
  }

  /* Where in the world are you? */
  $('.js-geolocation').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
  });

  function loadWeather(location, woeid) {
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'f',
      success: function(weather) {
        html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
        
        // Change background image based on temp
        if(weather.temp >= 90) {
          backgroundImage = 'http://images.all-free-download.com/images/graphiclarge/morocco_africa_desert_238699.jpg';
        } else if(weather.temp >= 70) {
          backgroundImage = 'http://images.all-free-download.com/images/graphiclarge/spring_tree_203485.jpg';
        } else if(weather.temp >= 50) {
          backgroundImage = 'http://images.all-free-download.com/images/graphiclarge/autumn_background_209020.jpg';
        } else {
          backgroundImage = 'https://image.freepik.com/free-photo/mount-cook-national-park-free-photo_385-82.jpg';
        }
        
        $('#weatherBox').css('background', "url(" + backgroundImage + ")");
        $('#weatherBox').css('background-repeat', 'no-repeat');
        $('#weatherBox').css('background-size', '100% 100%');

        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  }
});
