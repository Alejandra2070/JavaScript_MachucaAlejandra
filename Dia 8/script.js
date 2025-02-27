document.getElementById("boton").addEventListener("click", function (event1) {
    event1.preventDefault();
    let idStar = document.getElementById("idStar").value;

    fetch(`https://swapi.py4e.com/api/people/${idStar}`)
        .then(res => res.json())
        .then(data => {
            let archivos = `
            <table class="table">
                <thead>
                    <tr class="table-dark">
                    <th scope="col">Nombre:</th>
                    <td scope="col">${data.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                    <th scope="row">Height:</th>
                    <td>${data.height}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Hair Color:</th>
                    <td>${data.hair_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Skin Color:</th>
                    <td>${data.skin_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Eyes Color:</th>
                    <td>${data.eye_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Birth year:</th>
                    <td>${data.birth_year}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Gender:</th>
                    <td>${data.gender}</td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Homeworld:</th>
                            <td>
                                <ul class="list-group">
                                    <li id="homeworld" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Films: </th>
                            <td>
                                <ul class="list-group">
                                    <li id="fil" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Species: </th>
                            <td>
                                <ul class="list-group">
                                    <li id="specie" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Vehicles: </th>
                            <td>
                                <ul class="list-group">
                                    <li id="vehicle" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>  
                    <tr class="table-dark">
                        <th scope="row">Starships: </th>
                            <td>
                                <ul class="list-group">
                                    <li id="starship" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Created: </th>
                        <td>${data.created}</td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Edited: </th>
                        <td>${data.edited}</td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Url: </th>
                        <td>${data.url}</td>
                    </tr>
                </tbody>
            </table>`
            fetch(data.homeworld)
            .then(res => res.json())
            .then(homeworld => {
                document.getElementById("homeworld").innerHTML += `
                <table>
                    <tbody>
                        <table class="table table-light">
                            <tr><th>Name:</th><td> ${homeworld.name}</td></tr>
                            <tr><th>Rotation period:</th><td> ${homeworld["rotation_period"]}</td></tr>
                            <tr><th>Orbital period:</th><td> ${homeworld["orbital_period"]}</td></tr>
                            <tr><th>Dilameter:</th><td> ${homeworld.diameter}</td></tr>
                            <tr><th>Climate:</th><td> ${homeworld.climate}</td></tr>
                            <tr><th>Gravity:</th><td> ${homeworld.gravity}</td></tr>
                            <tr><th>Terrain:</th><td> ${homeworld.terrain}</td></tr>
                            <tr><th>Surface water:</th><td> ${homeworld["surface_water"]}</td></tr>
                            <tr><th>Population:</th><td> ${homeworld.population}</td></tr>
                            <tr><th>Residents:</th><td> ${homeworld.residents.map(i => i).join("<br>")}</td></tr>
                            <tr><th>Films:</th><td> ${homeworld.films.map(i => i).join("<br>")}</td></tr>
                            <tr><th>Created:</th><td> ${homeworld.created}</td></tr>
                            <tr><th>Edited:</th><td> ${homeworld.edited}</td></tr>
                            <tr><th>Url:</th><td> ${homeworld.url}</td></tr>
                        </table>
                    </tbody>
                </table>`
            })
            for (const i of data.films) {
                fetch(i)
                    .then(res => res.json())
                    .then(films => {
                        document.getElementById("fil").innerHTML += `
                            <table>
                                <tbody>
                                    <table class="table table-light">
                                        <tr><th>Name:</th><td> ${films.title}</td></tr>
                                        <tr><th>Rotation period:</th><td> ${films["episode_id"]}</td></tr>
                                        <tr><th>Orbital period:</th><td> ${films["opening_crawl"]}</td></tr>
                                        <tr><th>Dilameter:</th><td> ${films.director}</td></tr>
                                        <tr><th>Climate:</th><td> ${films.producer}</td></tr>
                                        <tr><th>Gravity:</th><td> ${films["release_date"]}</td></tr>
                                        <tr><th>Terrain:</th><td> ${films.characters.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Surface water:</th><td> ${films.planets.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Population:</th><td> ${films.starships.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Residents:</th><td> ${films.vehicles.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Films:</th><td> ${films.species.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Created:</th><td> ${films.created}</td></tr>
                                        <tr><th>Edited:</th><td> ${films.edited}</td></tr>
                                        <tr><th>Url:</th><td> ${films.url}</td></tr>
                                    </table>
                                </tbody>
                            </table> 
                            `
                    })
            }
            for (const i of data.species) {
                fetch(i)
                    .then(res => res.json())
                    .then(species => {
                        document.getElementById("specie").innerHTML += `
                            <table>
                                <tbody>
                                    <table class="table table-light">
                                        <tr><th>Name:</th><td> ${species.name}</td></tr>
                                        <tr><th>Classification:</th><td> ${species.classification}</td></tr>
                                        <tr><th>Designation:</th><td> ${species.designation}</td></tr>
                                        <tr><th>Average height:</th><td> ${species.average_height}</td></tr>
                                        <tr><th>skin colors:</th><td> ${species.skin_colors}</td></tr>
                                        <tr><th>hair colors:</th><td> ${species.hair_colors}</td></tr>
                                        <tr><th>Eye colors:</th><td> ${species.eye_colors}</td></tr>
                                        <tr><th>Average lifespan:</th><td> ${species.average_lifespan}</td></tr>
                                        <tr><th>Homeworld:</th><td> ${species.homeworld}</td></tr>
                                        <tr><th>Language:</th><td> ${species.language}</td></tr>
                                        <tr><th>People:</th><td> ${species.people.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Films:</th><td> ${species.films.map(i => i).join("<br>")}</td></tr>
                                        <tr><th>Created:</th><td> ${species.created}</td></tr>
                                        <tr><th>Edited:</th><td> ${species.edited}</td></tr>
                                        <tr><th>Url:</th><td> ${species.url}</td></tr>
                                    </table>
                                </tbody>
                            </table>
                            `
                    })
            }
            for (const i of data.vehicles) {
                fetch(i)
                    .then(res => res.json())
                    .then(vehicles => {
                        document.getElementById("vehicle").innerHTML += `
                            <table>
                                <tbody>
                                    <table class="table table-light">
                                        <tr><th>Name:</th><td> ${vehicles.name}</td></tr>
                                        <tr><th>Model:</th><td> ${vehicles.model}</td></tr>
                                        <tr><th>Manufacturer:</th><td> ${vehicles.manufacturer}</td></tr>
                                        <tr><th>Cost in Credits:</th><td> ${vehicles.cost_in_credits}</td></tr>
                                        <tr><th>Length:</th><td> ${vehicles.length}</td></tr>
                                        <tr><th>Max atmosphering speed:</th><td> ${vehicles.max_atmosphering_speed}</td></tr>
                                        <tr><th>Crew:</th><td> ${vehicles.crew}</td></tr>
                                        <tr><th>Passengers:</th><td> ${vehicles.passengers}</td></tr>
                                        <tr><th>Cargo capacity:</th><td> ${vehicles.cargo_capacity}</td></tr>
                                        <tr><th>Consumables:</th><td> ${vehicles.consumables}</td></tr>
                                        <tr><th>Vehicle class:</th><td> ${vehicles.vehicle_class}</td></tr>
                                        <tr><th>Pilots:</th><td> ${vehicles.pilots}</td></tr>
                                        <tr><th>Films:</th><td> ${vehicles.films}</td></tr>
                                        <tr><th>Created:</th><td> ${vehicles.created}</td></tr>
                                        <tr><th>Edited:</th><td> ${vehicles.edited}</td></tr>
                                        <tr><th>Url:</th><td> ${vehicles.url}</td></tr>

                                    </table>
                                </tbody>
                            </table> `
                    })
            }
            for (const i of data.starships) {
                fetch(i)
                    .then(res => res.json())
                    .then(starships => {
                        document.getElementById("starship").innerHTML += `
                            <table>
                                <tbody>
                                    <table class="table table-light">
                                        <tr><th>Name:</th><td> ${starships.name}</td></tr>
                                        <tr><th>Model:</th><td> ${starships.model}</td></tr>
                                        <tr><th>Manufacturer:</th><td> ${starships.manufacturer}</td></tr>
                                        <tr><th>Cost in Credits:</th><td> ${starships.cost_in_credits}</td></tr>
                                        <tr><th>Length:</th><td> ${starships.length}</td></tr>
                                        <tr><th>Max atmosphering speed:</th><td> ${starships.max_atmosphering_speed}</td></tr>
                                        <tr><th>Crew:</th><td> ${starships.crew}</td></tr>
                                        <tr><th>Passengers:</th><td> ${starships.passengers}</td></tr>
                                        <tr><th>Cargo capacity:</th><td> ${starships.cargo_capacity}</td></tr>
                                        <tr><th>Consumables:</th><td> ${starships.consumables}</td></tr>
                                        <tr><th>Vehicle class:</th><td> ${starships.vehicle_class}</td></tr>
                                        <tr><th>Pilots:</th><td> ${starships.pilots}</td></tr>
                                        <tr><th>Films:</th><td> ${starships.films}</td></tr>
                                        <tr><th>Created:</th><td> ${starships.created}</td></tr>
                                        <tr><th>Edited:</th><td> ${starships.edited}</td></tr>
                                        <tr><th>Url:</th><td> ${starships.url}</td></tr>
                                    </table>
                                </tbody>
                            </table> `
                    })
            }
            document.getElementById("output").innerHTML = archivos
        })

})