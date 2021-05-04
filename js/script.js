// **************************CALCULATOR-PART START************************** 
function plus(){
  var m = document.getElementById("plus_1").value;
  var n = document.getElementById("plus_2").value;
  var z = parseInt(m)+parseInt(n);

document.getElementById("output").innerHTML=z;
}
function min(){
  var m = document.getElementById("min_1").value;
  var n = document.getElementById("min_2").value;
  var z = parseInt(m)-parseInt(n);

document.getElementById("output").innerHTML=z;
}
function mul(){
  var m = document.getElementById("mul_1").value;
  var n = document.getElementById("mul_2").value;
  var z = parseInt(m)*parseInt(n);

document.getElementById("output").innerHTML=z;
}
function div(){
  var m = document.getElementById("div_1").value;
  var n = document.getElementById("div_2").value;
  var z = parseInt(m)/parseInt(n);

document.getElementById("output").innerHTML=z;
}
function mod(){
  var m = document.getElementById("mod_1").value;
  var n = document.getElementById("mod_2").value;
  var z = parseInt(m)%parseInt(n);

document.getElementById("output").innerHTML=z;
}
// **************************JQUERY-PART START************************** 
// *****************************wow-part*****************************
$(document).ready(function(){
  new WOW().init();
});
// *****************************mixitup-part*****************************

 
var mixer = mixitup('.my_class') 
// *****************************slider-part*****************************
$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,    
    slidesToScroll: 1,  
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    asNavFor:".slider_1",
  });
$('.slider_1').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,    
    slidesToScroll: 1,  
    autoplay: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    asNavFor:".slider",
  });
  
// *****************************counter-up-part*****************************
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 100,
      time: 10000
  });
});

// *****************************typed js-part***************************** 
var typed = new Typed('.typed-part', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'Ramadan – let this month heal you.',
    'Mold yourself, ',
    'Shape your self, ',
    'This Ramadan changes your self, be a practicing Muslim.',
    'Ramadan is like the Rain. It nourishes the seed of good deeds.'
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 400,
  startDelay: 100,
});

// *****************************counter-down-part***************************** 
// Set the date we're counting down to
var countDownDate = new Date("June 22, 2021 17:10:20").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dayy").innerHTML = days +" " + "Days" 
  document.getElementById("hour").innerHTML = hours +" " + "Hours"
  document.getElementById("min").innerHTML = minutes +" " + "Minutes"
  document.getElementById("sec").innerHTML = seconds +" " + "Seconds"

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dayy").innerHTML = "Happy";
    document.getElementById("hour").innerHTML = "Birthday";
    document.getElementById("min").innerHTML = "To";
    document.getElementById("sec").innerHTML = "You!";
  }
}, 1000);
// **************************JQUERY-PART END************************** 