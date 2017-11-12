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
    return render_template('index.html', inp = request.form['textInput'], )

@app.route('/submitData/<data>')
def submitData(data):
    print("Data submitted: ")
    send_url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2zR_gbYDYGYkr19cdc991M3ulNmZd1Uw'
    r = requests.post(send_url)
    j = json.loads(r.text)
    lat = j['location']['lat']
    lon = j['location']['lng']
    lat = 46.51858
    lon = 6.5618
    print type(data)
    with open("data_epfl.json", 'rb+') as myfile:
        myfile.seek(-3, os.SEEK_END)
        myfile.truncate()
    with open("data_epfl.json", "a") as myfile:
     	#myfile.write("{"+data+"}" + "," + "]';")
        myfile.write(',{' + str(data) + ',' + '"latitude":' + str(lat) + ',"longitude":' + str(lon) + '}]\';')
    return render_template('index.html', doneChatting=1)


