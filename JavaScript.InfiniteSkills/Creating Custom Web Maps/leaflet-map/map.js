// initialize the map on the "map" div with a given center and zoom level
var map = L.map('map').setView([55.676111, 12.568333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//var marker = L.marker([55.66194, 12.49]).addTo(map);

var sites = [
    [55.661940, 12.490000],
    [55.658206, 12.506518],
    [55.664652, 12.502077],
    [55.661463, 12.498885]
];

var siteIcon = L.icon({
    iconUrl: 'img/castle.png',
    iconRetinaUrl: 'img/castle2x.png',
    iconSize: [24, 24],
    iconAnchor: [2, 1], // Justering af ikonets position i forhold til den geografiske position
    popupAnchor: [0, -24] // Justering af popuppens position i forhold til den geografiske position
})

var markersArray = [];
var circlesArray = [];

for (var i = 0; i < sites.length; i++) {
    markersArray[i] = new L.marker(sites[i], {icon: siteIcon}).addTo(map);
    circlesArray[i] = new L.circle(sites[i], 250).addTo(map);
}

var popup = L.popup({
    minWidth: 420
}).setContent('<img src="img/Hjem.png"><p>Hjem</p>');

markersArray[0].bindPopup(popup);

var polyline = new L.polyline(sites, {
    color: '#14CCCC',
    weight: 8
}).addTo(map);

var polygon = new L.polygon(sites, {
    color: '#880000',
    weight: 1,
    fillColor: 'fuchsia',
    fillOpacity: 0.5
}).addTo(map);

var attractions = [
    [55.681251, 12.575945], // Rundetårn
    [55.674224, 12.567670]  // Tivoli
];

var attractionsArray = [];

for (var i = 0; i < attractions.length; i++) {
    attractionsArray[i] = new L.marker(attractions[i]).addTo(map);
}

var latlng;

attractionsArray[0].on('click', function(e) {
    document.getElementById('name').innerHTML = "Rundetårn";
    document.getElementById('coordinates').innerHTML = "Latitude: " + e.latlng['lat'] + ', Longitude: ' + e.latlng['lng'];
    document.getElementById('link_anchor').innerHTML = "Wikipedia Page";
    document.getElementById('link_anchor').setAttribute('href', 'https://en.wikipedia.org/wiki/Rundetaarn');
    latlng = e.latlng;
})

attractionsArray[1].on('click', function(e) {
    document.getElementById('name').innerHTML = "Tivoli";
    document.getElementById('coordinates').innerHTML = "Latitude: " + e.latlng['lat'] + ', Longitude: ' + e.latlng['lng'];
    document.getElementById('link_anchor').innerHTML = "Wikipedia Page";
    document.getElementById('link_anchor').setAttribute('href', 'https://en.wikipedia.org/wiki/Tivoli_Gardens');
    latlng = e.latlng;
})

document.getElementById('center_button').addEventListener('click', function() {
    map.panTo(latlng);
});