#returns JSON response to indicate if the passed in parameter exists in simple.wikipedia
#
#must be invoked with a query string
#	&q=math
#
# JSON returned is formatted like this:
#    {"response": 404}
#
# 400 = bad request
# 200 = exists OK
# 404 = doesn't exist
#
# Benjamin Pritchard
# Kundalini Software 
# 1-April-2018

# [START gae_python37_app]
from flask import Flask
from flask import request
from flask_cors import CORS
from flask import render_template

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)
CORS(app)

@app.route('/compare')
def compare():
	searchWord = request.args.get('q', '')
	return render_template('wikicompare.html', searchWord=searchWord)


@app.route('/')
def hello():
	import urllib3
	import json

	data = {}
	http = urllib3.PoolManager()
	searchWord = request.args.get('q', '')
	if (searchWord != ''):
		url = "https://simple.wikipedia.org/wiki/" + searchWord
		r = http.request('GET', url)
		data['response'] = r.status
	else:
		data['response'] = 400		# bad request

	json_data = json.dumps(data)
	return(json_data)


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_python37_app]
