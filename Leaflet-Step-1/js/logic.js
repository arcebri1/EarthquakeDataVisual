//Check the array of the data
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(data) {
//     console.log(data)
// })

//Create a map object, I chose the middle of US as the center
let myMap = L.map("map", {
    center: [39.50, -98.35],
    zoom: 4
})

//Create the base map layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
}).addTo(myMap);

url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

//Read through the data
d3.json(url, function (data) {
    console.log(data)

    //create a variable that calls up the array features witin the data in the geojson
    let sites = data.features
    console.log(sites)

    //Loop through each object to call up the magnitude
    //and coordinates of each earthquake
    for (let i = 0; i < sites.length; i++) {

        //Create variables for each data point you want to retrieve
        //console.log it to make sure you pull the correct data
        let eq_magnitude = sites[i].properties.mag
        // console.log(eq_magnitude)

        let eq_coordinates = sites[i].geometry.coordinates
        // console.log(eq_coordinates[0])
        // console.log([eq_coordinates[1], eq_coordinates[0]])

        let eq_place = sites[i].properties.place
        // console.log(eq_place)

        //Create variable for loop for the colors
        let color = "";

        if (eq_magnitude >= 1) {
            color = "#b8ff4d";
        }
        else if (eq_magnitude >= 2) {
            color = "l#ffff66";
        }
        else if (eq_magnitude >= 3) {
            color = "#ffdb4d";
        }
        else if (eq_magnitude >= 4) {
            color = "#ffb84d";
        }
        else if (eq_magnitude >= 5) {
            color = "#ff944d";
        }
        else {
            color = "#ff4d4d";
        }


        //Add the circles to the map. Do not forget to addTo the map
        L.circle([eq_coordinates[1], eq_coordinates[0]], {
            fillOpacity: 0.75,
            color: "white",
            weight: 1,
            fillColor: color,
            radius: eq_magnitude * 25000
        }).bindPopup("<h1>Earthquake Magnitude:" + eq_magnitude + "</h1><hr><h3>Place:" + eq_place + "</h3><hr><h3>Time:" + new Date(sites[i].properties.time) + "</h3>").addTo(myMap)
    }
})