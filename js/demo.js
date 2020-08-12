/* global L */

var mapCenter = [29.76, -95.38];

// Set up map
var map = L.map('map', {
  defaultExtentControl: true,
  center: mapCenter,
  zoom: 14
});

// Another way to add to map
// L.control.defaultExtent().addTo(map);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {    
              maxZoom: 18,
              attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(map);
