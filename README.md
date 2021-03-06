# Earthquake Data Visualization - Leaflet

- - -

I created an interactive map using leaflet to visualize the United States Geological Survey (USGS) earthquake data. Working on adding tectonic data to the map.

- - -

## Where is the data from?

The earthquake data was obtained from [USGS](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). The data set picked was, [All Earthquakes from the Past Day](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson).


## Leaflet-Step-1

   * Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * Data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   * Included popups that provide additional information about the earthquake when a marker is clicked.

   * Created a legend that will provide context on the magnitude of the marker regarding its color.

![](Images/map.gif)

## Leaflet-Step-2 (Work in Progress)

I will be plotting a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

What I will be doing..

* Plot a second data set on the map.

* Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently.

* Add layer controls to the map.

* Map will look like this:
![](Images/5-Advanced.png)

- - -

The data is provided by UCSD Extension: Data Science and Visualization Bootcamp.

- - -

Contact:

Email: arcebri1@gmail.com
