from flask import Flask, url_for, render_template, request
import os
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)

@app.route('/testButton', methods=['POST'])
def testButton():
    print("You just said " + request.form['textInput'])
    return render_template('index.html', inp = request.form['textInput'])

@app.route('/submitData/<data>')
def submitData(data):
    print("Data submitted: ")
    send_url = 'http://freegeoip.net/json'
    r = requests.get(send_url)
    j = json.loads(r.text)
    lat = j['latitude']
    lon = j['longitude']
    lat = 46.51908
    lon = 6.5622
    print type(data)
    with open("data.json", 'rb+') as myfile:
        myfile.seek(-3, os.SEEK_END)
        myfile.truncate()
    with open("data.json", "a") as myfile:
     	#myfile.write("{"+data+"}" + "," + "]';")
        myfile.write(',{' + str(data) + ',' + '"latitude":' + str(lat) + ',"longitude":' + str(lon) + '}]\';')
    return render_template('index.html')


