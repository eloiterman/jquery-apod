var apod = {
    // Application Constructor
    init: function() {

        var url = "https://api.nasa.gov/planetary/apod?api_key=VJKfcUQwcfwF8elXqUFg81h4k7G7ibzaihODcWoS";

        $.ajax({
            url: url
        }).done(function(result){
          console.log(result);
        }).fail(function(result){
          console.log(result);
        });
    },
};

apod.init();
