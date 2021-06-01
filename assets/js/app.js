// read csv and create dropdown menus
d3.csv("assets/data/team_ratings.csv").then(function(data) {
  console.log(data);
	
	var team = Object.values(data.team);
	var dropDownlist = document.getElementById('dropdownMenuLink');
 	for (i=0; i<team.length; i++) {
 		dropDownlist.options[i] = new Option(team[i])
	};
 });