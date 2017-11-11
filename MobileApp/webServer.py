from flask import Flask, url_for, render_template, request

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
    with open("data.json", 'rb+') as myfile:
    	filehandle.seek(-2, os.SEEK_END)
    	filehandle.truncate()
    with open("data.json", "a") as myfile:
    	myfile.write("{"+data+"}]';")
    return render_template('index.html')

@app.route('/updateData/<data>')
def submitData(data):
    print("Data submitted: ")
    with open("data.json", 'rb+') as myfile:
    	filehandle.seek(-2, os.SEEK_END)
    	filehandle.truncate()
    with open("data.json", "a") as myfile:
    	myfile.write("{"+data+"}]';")
    return render_template('index.html')

