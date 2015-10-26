<html>
   <head>
      <title>The jQuery Example</title>
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      
      <script type="text/javascript" language="javascript">
         $(document).ready(function() {
            $("#driver").click(function(event){
               $.getJSON('../data/result.json', function(jd) {
                  $('#stage').html('<p> Name: ' + jd.name + '</p>');
                  $('#stage').append('<p>Age : ' + jd.age+ '</p>');
                  $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
               });
            });
         });
      </script>
      <!-- My crystal ball says that you are loading the model using either file:// or C:/, which stays true to the error message as they are not http://

So you can either install a webserver in your local PC or upload the model somewhere else and use jsonp and change the url to http://example.com/path/to/model -->
   </head>
   
   <body>
   
      <p>Click on the button to load result.json file </p>
      
      <div id="stage" style="background-color:#eee;">
         STAGE
      </div>
      
      <input type="button" id="driver" value="Load Data" />
      
   </body>
   
</html>