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
		success: function(data){ $("#result").html(JSON.stringify(data)); },
		error: function(res){ alert("ERROR: " + res.statusText); }
	});
}