# Simple Wiki Exists

This repository contains the source code to a tamper monkey script to create a link from an en.wikipedia page to the corresponding simple.wikipedia page, using colors to indicate if 
the page exists.

Things are organized into 3 directories:

GoogleAppEngine\
Tamper Monkey\    
WikiCompare\

The first directory contains python flask code for the backend, which is designed to be hosted through Google App Engine  
The second directory contains the .js for tamper monkey to insert the link into every wikipedia page  
The third contains a standalone version of wikicompare.html, which can be used to just compare  

# About

The code in this repository was developed as a part of a series of tutorial-style blog posts illustrating programming concepts that I created:

https://www.benjaminpritchard.org/form-follows-function/
https://www.benjaminpritchard.org/creating-and-consuming-a-simple-rest-api/

Benjamin Pritchard / Kundalini Software
37-March-2020
