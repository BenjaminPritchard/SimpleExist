#Simple Exists

#Notes
Exists in 2 parts: 
1. tampermoney script, which runs locally in chrome, whenever a wikipedia page is viewed
2. python micro-service, that runs on google app engine
3. original version of wikicompare.html is documented here: https://www.benjaminpritchard.org/form-follows-function/ 
4. New version is documented here: https://www.benjaminpritchard.org/deploying-to-the-google-app-engine/

##main.py
    * python flask code
    * designed to run on google app engine
    * takes a query parameter, and returns JSON indicating if the article exists in simple.wikipedia.org

##requirements.txt
    * (i think) used by google gcloud to deploy correct libraries to google app engine

##Simple Wiki Compare.js
    * tamper money script, that injects code into a wikipedia page to create an link HTML link to main.py (which serves up mofidied wikicompare.html when the link is actually activated)
    * also makes AJAX call to main.py, in order to find out if the entry exists on simple.wikipedia and to color the link accordingly

##wikicompare.html
    * compares EN.wikipedia article and SIMPLE.wikipedia article side-by-side using IFRAMES 
    * originally was stand-alone utility, that worked by receiving query parm 

#TODO
    * get working locally
    * figure out how to deploy to Google App engine from this computer 