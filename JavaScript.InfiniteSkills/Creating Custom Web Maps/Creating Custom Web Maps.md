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

### Section 3: ...





