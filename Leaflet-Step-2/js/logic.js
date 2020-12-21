//Check the array of the data
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(data) {
//     console.log(data)
// })

d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json", function(data) {
    console.log(data)
})


//Create a map object, I chose the middle of US as the center
// let myMap = L.map("map", {
//     center: [39.50, -98.35],
//     zoom: 4,
//     layers: [satellite, cityLayer]
// })

// Define variables for our base map tile layers
let light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
});

let satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "satellite-streets-v11",
    accessToken: API_KEY
});

let outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "outdoors-v11",
    accessToken: API_KEY
});

// Create an object so nly one base layer can be shown at a time
let baseMaps = {
    Satellite: satellite,
    Grayscale: light,
    Outdoors: outdoors
  };

// Initialize all of the LayerGroups we'll be using
let layers = {
    EARTHQUAKES: new L.LayerGroup(),
    PLATES: new L.LayerGroup()
  };

// Create the map with our layers
let map = L.map("map", {
    center: [39.50, -98.35],
    zoom: 4,
    layers: [ 
      layers.EARTHQUAKES,
      layers.PLATES
    ]
  });

// Add our 'light' tile layer to the map
light.addTo(map);

// Create an overlays object to add to the layer control
let overlays = {
    "Earthquakes": layers.EARTHQUAKES,
    "Plates": layers.PLATES
  };

// Pass our map layers into our layer control
// Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps).addTo(myMap);

url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

plates_url = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json"

//Read through the data
// d3.json(url, function (data) {
//     // console.log(data)

//     //create a variable that calls up the array features witin the data in the geojson
//     let sites = data.features
//     // console.log(sites)

//     //Create for loop to define colors for the size of the
//     //earthquake magnitude
//     function circleColor(magnitude) {

//         if (magnitude < 1) {
//             return "#b8ff4d"
//         }
//         else if (magnitude < 2) {
//             return "yellow"
//         }
//         else if (magnitude < 3) {
//             return "#ffdb4d"
//         }
//         else if (magnitude < 4) {
//             return "#ffb84d"
//         }
//         else if (magnitude < 5) {
//             return "#ff944d"
//         }
//         else {
//             return "#ff4d4d"
//         }
//     }

//     //Loop through each object to call up the magnitude
//     //and coordinates of each earthquake
//     for (let i = 0; i < sites.length; i++) {

//         //Create variables for each data point you want to retrieve
//         //console.log it to make sure you pull the correct data
//         let eq_magnitude = sites[i].properties.mag
//         // console.log(eq_magnitude)

//         let eq_coordinates = sites[i].geometry.coordinates
//         // console.log(eq_coordinates[0])
//         // console.log([eq_coordinates[1], eq_coordinates[0]])

//         let eq_place = sites[i].properties.place
//         // console.log(eq_place)


//         //Add the circles to the map. Do not forget to addTo the map
//         L.circle([eq_coordinates[1], eq_coordinates[0]], {
//             fillOpacity: 0.75,
//             color: "white",
//             weight: 1,
//             fillColor: circleColor(eq_magnitude),
//             radius: eq_magnitude * 25000
//         }).bindPopup("<h2>Earthquake Magnitude:" + eq_magnitude + "</h2><hr><h3>Place:" + eq_place + "</h3><hr><h3>Time:" + new Date(sites[i].properties.time) + "</h3>").addTo(myMap)
//     }

//     // Set up the legend
//     let legend = L.control({ position: 'bottomright' });

//     legend.onAdd = function () {

//         //create the variable for the div to use later in the foor loop
//         //make sure to include labels even if it is an empty array
//         let div = L.DomUtil.create('div', 'info legend'),
//             grades = [0, 1, 2, 3, 4, 5],
//             labels = [];

//         // loop through our density intervals and generate a label with a colored square for each interval
//         for (let i = 0; i < grades.length; i++) {
//             div.innerHTML +=
//                 '<i style="background:' + circleColor(grades[i]) + '"></i> ' +
//                 grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//         }
//         return div;
//     };
//     // Adding legend to the map
//     legend.addTo(myMap);
// })