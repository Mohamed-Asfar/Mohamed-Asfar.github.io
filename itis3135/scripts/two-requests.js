$(document).ready(function(){

    $.getJSON("first-req.json", function(data) {
        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#first").append(
        "<h2>" + value.title + "</h2>" +
        "<h3>" + value.content + "</h3>" +
        "<p>" + value.bio + "</p><br>"
        );
        });
        });
        });

});

function secReq() {
    var two = new XMLHttpRequest();
    two.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("second").innerHTML =
        this.responseText;
      }
    };
    two.open("GET", "second-req.txt", true);
    two.send();
  }