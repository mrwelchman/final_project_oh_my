from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

with open('static/model/ridge_reg.sav', 'rb') as f:
	ridge_reg=pickle.load(f)
with open('static/model/column_headers.sav', 'rb') as f:
	column_headers=pickle.load(f)

app=Flask(__name__)

@app.route('/')
def home(): 
	return render_template('index.html')

@app.route('/sample')
def sample(): 
	# model wants [0000000-10000001]
	input_ary=[]
	home_team_name='Dallas Mavericks'
	away_team_name='Orlando Magic'
	for each_col in column_headers:
		if each_col==home_team_name: 
			input_ary.append(1)
		elif each_col==away_team_name:
			input_ary.append(-1)
		else: 
			input_ary.append(0)
	result=ridge_reg.predict([input_ary])[0]
	return render_template('index.html', model_output=round(result, 0))

@app.route('/predict', methods=['POST'])
def predict(): 
	# model wants [0000000-10000001]
	print(request.form)
	input_ary=[]
	home_team_name=request.form['home_team']
	away_team_name=request.form['away_team']
	for each_col in column_headers:
		if each_col==home_team_name: 
			input_ary.append(1)
		elif each_col==away_team_name:
			input_ary.append(-1)
		else: 
			input_ary.append(0)
	result=ridge_reg.predict([input_ary])[0]
	# print(result)
	return render_template('index.html', model_output=round(result, 0), home=home_team_name, away=away_team_name)
	# return jsonify({'prediction': result})


if __name__ == '__main__':
	app.run()