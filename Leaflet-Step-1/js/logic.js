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
d3.json(url, function(data) {
    console.log(data)

//create a variable that calls up the array features witin the data in the geojson
    let sites = data.features
    console.log(sites)
    
//Loop through each object to call up the magnitude
//and coordinates of each earthquake
    for (let i=0; i < sites.length; i++) {

    }
})