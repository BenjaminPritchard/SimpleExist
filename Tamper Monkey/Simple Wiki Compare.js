// ==UserScript==
// @name         Simple Wiki Compare
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a link to en.wikipedia articles
// @author       Benjamin Pritchard
// @match        https://en.wikipedia.org/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    'use strict';

    var x = document.getElementById("firstHeading");
    var article = x.innerText;
    var ul = document.getElementsByClassName("body")[0].children[0];
    var li = document.createElement("li");
    li.innerHTML = '<a id="simple" href="https://simplewikiexists.appspot.com/compare?q=' + article + '">Simple</a>';
    ul.appendChild(li);


    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var simple = document.getElementById("simple");
            if (obj.response == 200) {
              simple.style = "color:green";
            }
            else {
              simple.style = "color:red";
            }
          }
        }
      };

      //make call to Google App Engine
      xhttp.open("GET", "https://simplewikiexists.appspot.com/?q=" + article, true);
      xhttp.send();

})();