// ==UserScript==
// @name         Simple Wiki Compare
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add a link to en.wikipedia articles, showing if a matching simple.wikipedia article exists
// @author       Benjamin Pritchard
// @match        https://en.wikipedia.org/*
// @grant        none
// @GitHub       https://github.com/BenjaminPritchard/SimpleExist
// ==/UserScript==

(function() {
  'use strict';

  // grab the name of the wiki article we are on
  var x = document.getElementById("firstHeading");
  var article = x.innerText;

  // there is a "donate" button on the page, which has an ID of "n-sitesupport"
  // find that element, and add our bottom "Simple" right below it
  var ul = document.getElementById("n-sitesupport").parentElement;
  var li = document.createElement("li");
  li.innerHTML = '<a id="simple" href="https://simplewikiexists.appspot.com/compare?q=' + article + '"></a>';
  ul.appendChild(li);

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var obj = JSON.parse(this.responseText);
          var simple = document.getElementById("simple");
          if (obj.response == 200) {
            simple.style = "color:green";
            simple.innerText = "Simple (Exists)";
          }
          else {
            simple.innerText = "Simple (Doesn't Exist)";
            simple.style = "color:red";
          }
        }
      }
    };

    //make call to Google App Engine
    var request_string = "https://simplewikiexists.appspot.com/?q=" + article.replace(/ /g,"_"); // replace all spaces with underscores
    xhttp.open("GET", request_string, true);
    xhttp.send();

})();

