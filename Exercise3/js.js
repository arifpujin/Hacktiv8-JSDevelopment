window.onload = displaySwapi();

function displaySwapi(array = dataSwapi.results) {
	array.forEach(function(element) {
        //create element
		let dataSwapi = document.querySelector("#dataSwapi");
		let input = document.createElement("tr");
		let name = document.createElement("td");
		let rotation = document.createElement("td");
		let orbital = document.createElement("td");
		let diameter = document.createElement("td");
		let climate = document.createElement("td");
		let gravity = document.createElement("td");
		let terrain = document.createElement("td");
		let surface_water = document.createElement("td");
		let population = document.createElement("td");
		let residents = document.createElement("td");
		let films = document.createElement("td");
		let created = document.createElement("td");
		let edited = document.createElement("td");
		let url = document.createElement("td");

        //Append from Swapi
		name.append(element.name);
		rotation.append(element.rotation_period);
		orbital.append(element.orbital_period);
		diameter.append(element.diameter);
		climate.append(element.climate);
		gravity.append(element.gravity);
		terrain.append(element.terrain);
		surface_water.append(element.surface_water);
		population.append(element.population);        
		created.append(element.created);
		edited.append(element.edited);
        url.append(element.url);
        
        element.residents.map(function(argument) {
			residents.append(argument+"\n");
		})
		element.films.map(function(argument) {
			films.append(argument+"\n");
        })

		input.append(name, rotation, orbital, diameter, climate, gravity, terrain, surface_water, population, residents, films, created, edited, url);
		dataSwapi.append(input);
	});
}

