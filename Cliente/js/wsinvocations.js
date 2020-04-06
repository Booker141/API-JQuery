function getHello(){
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/",
		success: function(data){
			$("#result").html(data);
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}

/*function getHello2(){
	var req = $.ajax({
		type: "GET",
		url: "http://localhost:8080/"
	});
	
	req.done(function(data){ $("#result").html(data); });
	req.fail(function(res){ alert("ERROR: " + res.statusText); });
}*/

function getPerson(personId){
	var myUrl = "http://localhost:8080/audience/" + personId;
	$.ajax({
		type: "GET",
		dataType: "json",
		url: myUrl,
		success: function(data){
			$("#result").html(JSON.stringify(data[0]));
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}

function postPerson(){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/audience/",
		contentType: "application/json",
		dataType: "text",
		data: JSON.stringify({
			"title": "Dunkirk",
			"director": "Christopher Nolan",
			"year": 2017
		}),
		success: function(data){
			$("#result").html(data);
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}

function getAllPersons(){
	var myUrl = "http://localhost:8080/audience/";
	$.ajax({
		type: "GET",
		dataType: "json",
		url: myUrl,
		success: function(data){ 
			/*$("#result").html(JSON.stringify(data)); */
			var output = "";
			for(var i = 0; i<data.length; i++) {
				output = output + 
				"<strong>Nombre</strong>: " + data[i]["Nombre"] + "<br>" + "<strong>Apellidos</strong>: " + data[i]["Apellidos"] + "<br>" + "<strong>DNI</strong>: " + data[i]["DNI"] + "<br>" + "<strong>Edad</strong>: " + data[i]["Edad"] + "<br><br>";
			}
			$("#result").html(output);
		},
		error: function(res){ alert("ERROR: " + res.statusText); }
	});
}