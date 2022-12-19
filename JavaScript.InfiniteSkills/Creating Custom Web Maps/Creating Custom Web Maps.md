## Udemy Course: "Creating Custom Web Maps"

### Instructor: Infinite Skills (Matt Sidor)

https://www.udemy.com/course/creating-custom-web-maps/


## Summary

Et kursus om hvordan man laver en javascript baseret web applikation, der anvender web maps, og som baserer sig på javascript libraryet Leaflet samt data fra OpenStreetMap.

## Den røde tråd

### Section 1: Introduction

Han fortæller om historien for Web Maps, der for alvor tog fart i 2005 med lanceringen af Google Maps, og hvor f.eks. OpenStreetMap er en vigtig spiller.

### Section 2: Introduction

1) Åbn websitet:https://leafletjs.com/ i en browser, klik på Download og download seneste stabile version af Leaflet (1.9.3) da jeg skrev dette. Det lander som en zip-fil.

2) Lav en projektfolder ved navn `leaflet-map` med en subfolder ved navn `lib`, som igen skal have en subfolder ved navn `leaflet`, og kopier indholdet af Leaflet-zipfilen fra forrige trin over i sidstnævnte folder.

3) Lav i `leaflet-map`-folderen en fil ved navn `index.html`med følgende indhold:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <link rel="stylesheet" href="map.css"/>
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
           integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
           crossorigin=""/>
       <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
           integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
           crossorigin=""></script>        
   </head>
   <body>
       <div id="map"></div>
       <script src="map.js"></script>
   </body>
   </html>
   ```

4) Lav også i `leaflet-map`-folderen en fil ved navn `map.css`med følgende indhold:

   ```
   .leaflet-container {
       width: 100%;
       height: 100vh;
   }
   ```

5) Lav også i `leaflet-map`-folderen en fil ved navn `map.js`med følgende indhold:

   ```
   // initialize the map on the "map" div with a given center and zoom level
   var map = L.map('map').setView([55.676111, 12.568333], 13);
   
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);
   ```

6) Verificer at det virker ved at åbne `index.html`-filen i en browser. Bemærk, at jeg afviger lidt fra anvisningerne i kurset, da jeg stødte på en fejlbesked om brug af en deprecated feature, der lod til at have at gøre med den lokale css-fil. Der er i øvrigt en simpel getting started guide på Leaflets egen hjemmeside: https://leafletjs.com/examples/quick-start/.

### Section 3: Features and Events

I det følgende demonstreres:

* Hvordan man tilføjet markers til sit map, evt med et custom icon
* Tildeler popups til markers
* Tegner andre geometries, såsom polylines, polygons og circles
* Lav en custom event handler for når brugeren klikker på en marker
* Navigerer rundt i mappet ved tryk på knap uden for mappet

7) Ændr `index.html`-filen, så der ser således ud:

   ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Simple Leaflet App</title>
       <link rel="stylesheet" href="map.css"/>
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
           integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
           crossorigin=""/>
       <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
           integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
           crossorigin=""></script>        
   </head>
   <body>
       <div id="info">
           <h1 id="name"></h1>
           <h2 id="coordinates"></h2>
           <h3 id="link"><a href="" target="_blank" id="link_anchor"></a></h3>
           <button id="center_button">Center on Attraction</button>
       </div>
       <div id="map"></div>
   </body>
   <script src="map.js"></script>
   </html>
   ```

8) Ændr `map.css`-filen, så der ser således ud:

   ```
   .leaflet-container {
       width: 98%;
       height: 75vh;
   
       position: absolute;
       top: 0;
       bottom: 0;
       margin-top: 200px;
   }
   
   #info {
       position: absolute;
       top: 0;
       width: 100%;
       height: 200px;
   }
   ```

9) Ændr `map.js`-filen, så den ser således ud:

   ```
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
   ```

10) Verificer at det virker ved at åbne `index.html`-filen i en browser.





