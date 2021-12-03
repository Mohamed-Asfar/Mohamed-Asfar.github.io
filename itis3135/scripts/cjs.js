function tabs(event, tabName) {
    var i, body, links;
    body = document.getElementsByClassName("body");
    for (i = 0; i < body.length; i++) {
      body[i].style.display = "none";
    }
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }