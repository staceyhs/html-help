$(document).ready(function() {

  $("h1").click(function() {
    var alerts = ["This is a headline", "I told you, THIS IS A HEADLINE!"];

    alerts.forEach(function(alert) {
      alert(alert);
    });

  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

});