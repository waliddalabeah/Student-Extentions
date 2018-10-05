$("iframe").hide();
$("ul#ul").hide();
//this for tomato show it and hide the other
$("img#tomato").click(function(){
$("iframe#tomat").toggle();
$("iframe#motional").hide();

         });
//this for emotion show it and hide the other
$("img#emotion").click(function(){
$("iframe#motional").toggle();
$("iframe#tomat").hide();


         });
//this it will show and hid the list
  $("button#btn").click(function(){
$("ul#ul").toggle();
$("iframe").hide()

// $("ul").hide();

         });
//show iframe survey
  $("li#s1").click(function(){
$("iframe#s1").toggle();
$("iframe#s2").hide()
$("iframe#s3").hide()
$("iframe#s4").hide()
$("iframe#s5").hide()

         });
  $("li#s2").click(function(){
$("iframe#s2").toggle();
$("iframe#s1").hide()
$("iframe#s3").hide()
$("iframe#s4").hide()
$("iframe#s5").hide()
         });
         $("li#s3").click(function(){
$("iframe#s3").toggle();
$("iframe#s1").hide()
$("iframe#s2").hide()
$("iframe#s4").hide()
$("iframe#s5").hide()
         });
         $("li#s4").click(function(){
$("iframe#s4").toggle();
$("iframe#s1").hide()
$("iframe#s2").hide()
$("iframe#s3").hide()
$("iframe#s5").hide()
         });
//this for lecture survey show it and hide the other
         $("li#s5").click(function(){
$("iframe#s5").toggle();
$("iframe#s1").hide()
$("iframe#s2").hide()
$("iframe#s3").hide()
$("iframe#s4").hide()
         });

 // Automatic Slideshow - change image every 3 seconds
           var myIndex = 0;
           carousel();

           function carousel() {
               var i;
               var x = document.getElementsByClassName("mySlides");
               for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";
               }
               myIndex++;
               if (myIndex > x.length) {myIndex = 1}
               x[myIndex-1].style.display = "block";
               setTimeout(carousel, 3000);
           }

/////// counter watch//////////////////////////////////////
// Set the date we're counting down to
var countDownDate = new Date("Jan 29, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

   // Get todays date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Output the result in an element with id="demo"
   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";

   // If the count down is over, write some text
   if (distance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = "EXPIRED";
   }
}, 1000);
/////////////////////////////////
