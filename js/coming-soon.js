(function ($) {
  "use strict"; // Start of use strict
  var ddaytimer = setInterval(dayGap, 100);

  function dayGap() {
    var dday = new Date("January 30, 2020 16:00:00").getTime();
    var nowday = new Date();
    nowday = nowday.getTime();
    var distance = dday - nowday;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));

    var h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    var m = Math.floor((distance / (1000 * 60)) % 60);
    var s = Math.floor((distance / 1000) % 60);

    if (distance <= 0) {
      document.getElementById("dday-timer").innerHTML = "D-day";
    } else {
      document.getElementById("time-day").innerHTML = d;
      document.getElementById("time-hour").innerHTML = h;
      document.getElementById("time-minute").innerHTML = m;
      document.getElementById("time-second").innerHTML = s;
    }
  }

  // No JS

})(jQuery); // End of use strict
