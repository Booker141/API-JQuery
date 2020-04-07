//Boton de prueba
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

//Boton "Consultar asistente"
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

//Boton "Añadir asistente"
function addPerson(nombre, apellidos, dni, edad){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/audience/",
		contentType: "application/json",
		dataType: "text",
		data: JSON.stringify({
			"Nombre": nombre.value,
			"Apellidos": apellidos.value,
			"DNI": dni.value,
			"Edad": edad.value
		}),
		success: function(data){
			$("#result").html("Se ha añadido con éxito el siguiente asistente:");
			$("#data").html("<strong>Nombre</strong>: " + nombre.value + "<br>" + "<strong>Apellidos</strong>: " + apellidos.value + "<br>" + "<strong>DNI</strong>: " + dni.value + "<br>" + "<strong>Edad</strong>: " + edad.value + "<br><br>");
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}

//Boton "Lista de asistentes"
function getAudience(){
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
				"<strong>ID</strong>: " + data[i]["_id"] + "<br>" +
				"<strong>Nombre</strong>: " + data[i]["Nombre"] + "<br>" + "<strong>Apellidos</strong>: " + data[i]["Apellidos"] + "<br>" + "<strong>DNI</strong>: " + data[i]["DNI"] + "<br>" + "<strong>Edad</strong>: " + data[i]["Edad"] + "<br><br>";
			}
			$("#result").html("Se han hallado los siguientes asistentes:");
			$("#data").html(output);
		},
		error: function(res){ alert("ERROR: " + res.statusText); }
	});
}

//Boton "Modificar asistente"
function updatePerson(){
	var myUrl = "http://localhost:8080/audience/";
	$.ajax({
		type: "POST",
		dataType: "json",
		url: myUrl,
		success: function(data){
			
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}