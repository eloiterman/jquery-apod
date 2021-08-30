var apod = {

  //Create a random date
randomDate: function(start, end) {
  //Randomize the date https://gist.github.com/miguelmota/5b67e03845d840c949c4
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  //Format the date
  let d = date.getDate();
  let m = date.getMonth() + 1; //In JS months start at 0
  let y = date.getFullYear();

  //Change the month and day strings so that they match the documented format.
  if(m < 10){
    m = '0'+m
  }

  if(d < 10){
    d = '0'+d
  }

  return `${y}-${m}-${d}`;
},

//Injects the results of the API call into the DOM
buildDOM: function(result) {
 // $("#apodTitle").text(result.title);
 document.getElementsByTagName("h1")[0].innerHTML = (result.title);


  if(result.media_type === 'video') {
    $("#apodImage").hide();
  /// document.getElementById("apodImage").style.visibility="hidden";
 
    $("#apodVideo > iframe").attr("src", result.url).show();
  }else{
    $("#apodVideo").hide();
   //document.getElementById("apodVideo").style.visibility="hidden";
    $("#apodImg").attr("src", result.url).attr('alt', result.title).show();
  }

  $("#apodCopyright").text("Copyright: " + result.copyright);
  //$("#apodDate").text("Date: " + result.date);
 // $("#apodDesc").text(result.explanation);
 document.getElementById("apodDate").innerHTML = ("Date: " + result.date);
 document.getElementById("apodDesc").innerHTML = (result.explanation);
},

//Executes an AJAX call to an API.
getRequest: function() {
  let _this = this;
  let date = this.randomDate(new Date(1995, 5, 16), new Date());
  let url = "https://api.nasa.gov/planetary/apod?api_key=VJKfcUQwcfwF8elXqUFg81h4k7G7ibzaihODcWoS&date=" + date;
  $.ajax({
      url: url
  }).done(function(result){
      _this.buildDOM(result);
  }).fail(function(result){
    console.log(result);
  });
},
//how do I inject this into result? i.e. _this.buildDOM(result)
  /*var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', "https://api.nasa.gov/planetary/apod?api_key=VJKfcUQwcfwF8elXqUFg81h4k7G7ibzaihODcWoS&date=");
  httpRequest.send();
  return httpRequest.responseText;
*/
// Initialization method.
init: function() {
  this.getRequest();
},

};

apod.init();


/*$(function() {
    $('#btnRandApod').on('click',function(){
      apod.getRequest();
    });
});*/

document.getElementById("btnRandApod").addEventListener("click", function() {
  apod.getRequest();
});





//      var url = "https://api.nasa.gov/planetary/apod?api_key=VJKfcUQwcfwF8elXqUFg81h4k7G7ibzaihODcWoS&date=" + date;
      
