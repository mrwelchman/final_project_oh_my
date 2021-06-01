// read csv and create dropdown menus

// find the html element
var home_team=d3.select('#home_team')
var away_team=d3.select('#away_team')

d3.csv("../static/data/team_ratings.csv").then(function(data) {
	data.forEach(team=>{
		home_team.append('option')
								 .text(team['team'])
								 .property('value', team['team'])
		away_team.append('option')
								 .text(team['team'])
								 .property('value', team['team'])
	})
	console.log(data);

// var team = Object.values(data.team);
// var dropDownlist = document.getElementById('dropdownMenuLink');
// 	for (i=0; i<team.length; i++) {
// 		dropDownlist.options[i] = new Option(team[i])
// };
});

// var play_button=d3.select('#play')

// function make_prediction(){
// 	var home_team_selected=home_team.property('value')
// 	var away_team_selected=away_team.property('value')
// 	var model_inputs={'home': home_team_selected, 
// 					  'away': away_team_selected}
// 	d3.json('/predict', {
// 			            'method': 'POST',
// 			            'headers': {
// 			                "Content-type": "application/json; charset=UTF-8"
// 			            },
// 			            'body': JSON.stringify(model_inputs)
//         				})
// 	   .then(prediction=>{
// 	   		console.log('hi')
// 	   		console.log(prediction)
// 	   		d3.select('#prediction_result').text(prediction['result'])
// 	   })
// }

// play_button.on('click', make_prediction)
