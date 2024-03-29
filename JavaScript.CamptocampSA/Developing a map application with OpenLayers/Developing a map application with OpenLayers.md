## Udemy Course: "Developing a map application with OpenLayers"

### Instructor: Camptocamp SA

https://www.udemy.com/course/developing-a-map-application-with-openlayers/

## Summary

Et kursus om hvordan man laver en web mapping applikation, hvor man sætter det op med Node.js og benytter OpenLayers.

## Den røde tråd

### Section 1: Introduction

Han snakker lidt om OpenLayers, WFS (Web Feature Service) og WMS (Web Mapping Service), og viser, hvordan man sætter et udviklingsmiljø op-

1) Sikr, at Node JS og npm er installeret

   ```
   node --version
   npm --version
   ```

2) Han bruger Atom som code editor, men jeg bruger VS Code

3) Lav et working directory ved navn `mooc`

4) Åbn VS code for den folder, du lige lavede

5) Åbn en termnal i VS Code og eksekver følgende:

   ```
   npm init
   npm install ol
   npm install --sav-dev parcel-bundler
   ```

6) Tilføj de to linier, der starter med henholdsvis "start" og "build" til script-sektionen af `package.json`-filen, så den kommer til at se således ud:

   ```
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "start": "parcel index.html",
     "build": "parcel build --public-url . index.html"
   },
   ```

### Section 2: The map (Map object)

I første omgang laver vi en simpel web mapping applikation med et simpelt kort, der f.eks. viser landegrænser og -navne.

7. Lav i `mooc`-folderen en fil ved navn `index.html `med følgende indhold:

   ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>OpenLayers App</title>
       <style media="screen">
           html, body, 
           #map {
               margin: 0;
               width: 100%;
               height: 100%;
           }
       </style>
   </head>
   <body>
       <div id="map">
       </div>
       <script src="./index.js">
       </script>
   </body>
   </html>
   ```

8. Lav også i `mooc`-folderen en fil ved navn `index.js `med følgende indhold:

   ```
   import "ol/ol.css";
   import { Map, View } from "ol";
   import TileLayer from "ol/layer/Tile";
   import OSM from "ol/source/OSM";
   
   const map = new Map({
       target: 'map',
       layers: [
           new TileLayer({
               source: new OSM()
           })
       ],
       view: new View ({
           center: [0, 0],
           zoom: 0
       })
   })
   ```

9. Check at det virker ved at eksekvere: `npm start`. Applikationen skulle nu gerne køre i en browser med mulighed for navigering og zooming.

### Section 3: Create a simple map with a background XYZ

10. Ændr `index.html`-filen, så den ser således ud:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OpenLayers App</title>
        <style media="screen">
            html, body, 
            #map {
                margin: 0;
                width: 100%;
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div id="map">
        </div>
        <script src="./index.js">
        </script>
    </body>
    </html>
    ```

11. Ændr også `index.js`-filen, så den ser således ud:

    ```
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    //import OSM from "ol/source/OSM";
    import XYZ from "ol/source/XYZ";
    
    let basemapLayer = new TileLayer({
      source: new XYZ({
        attributions: [
          "Powered by Esri",
          "Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
        ],
        attributionsCollapsible: true,
        url:
          "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      }),
    });
    
    const map = new Map({
        target: 'map',
        layers: [
            // new TileLayer({
            //     source: new OSM()
            // })
            basemapLayer
        ],
        view: new View ({
            center: [0, 0],
            zoom: 0
        })
    })
    ```

12) Check igen at det virker ved at eksekvere: `npm start`. Der kører igen en web applikation, men denne gang med en baggrund af satellitbilleder.

### Section 4: Adding map control

Nu laver vi en web mapping applikation, som omfatter nogle standardkontroller, som vi har konfigureret arbitrært.

13. Ændr `index.html`-filen, så den ser således ud:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OpenLayers App</title>
        <style media="screen">
            html, body, 
            #map {
                margin: 0;
                width: 100%;
                height: 100%;
            }
            .map .ol-custom-overviewmap,
            .map .ol-custom-overviewmap.ol-uncollapsible {
                bottom: auto;
                left: auto;
                right: 0;
                top: 0;
            }
        </style>
    </head>
    <body>
        <div id="map">
        </div>
        <script src="./index.js">
        </script>
    </body>
    </html>
    ```

14. Ændr også `index.js`-filen, så den ser således ud:

    ```
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import { Attribution, ScaleLine, OverviewMap, ZoomToExtent, defaults as defaultControls } from  "ol/control";
    
    let basemapLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    let overviewLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    // En map control
    let overviewMapControl = new OverviewMap({
        className: "ol-overviewmap ol-custom-overviewmap",
        layers: [overviewLayer],
        collapsed: false
    });
    
    // En map control mere
    let zoomToExtentControl = new ZoomToExtent({
        // ESPG:3857
        extent: [-15000000, -24000000, 15000000, 29000000]
    });
    
    function getScaleControl() {
        let control = new ScaleLine({
            units: "metric",
            bar: false,
            steps: 6,
            text: true,
            minWidth: 140
        })
        return control;
    }
    
    const map = new Map({
        target: 'map',
        layers: [basemapLayer],
        view: new View ({
            center: [0, 0],
            zoom: 0
        }),
        controls: defaultControls({
            attributionOptions: {collapsible: true}
        }).extend([overviewMapControl, zoomToExtentControl, getScaleControl()])
    })
    ```

15. Check igen at det virker ved at eksekvere: `npm start`. Der kører igen en web applikation, men nu, hvor der er lidt flere kontroller (alla "widgets"), nemlig et oversigtskort, en zoom to extent-knap og en bjælke, der viser størrelsesforhold.

### Section 5: Create a map with a WMS Layer

Her bygger vi videre på web applikationen fra før, hvor vi tilføjer et *tile* layer fra en WMS-service (Web Mapping service) - specifikt et, der handler om jordskælvs-zoner

16) Ændr `index.js`-filen, så den ser således ud:

    ```
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import { Attribution, ScaleLine, OverviewMap, ZoomToExtent, defaults as defaultControls } from  "ol/control";
    import TileWMS from "ol/source/TileWMS";
    
    let basemapLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    let overviewLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    let earthquakeLayer = new TileLayer({
        source: new TileWMS({
            url: "https://sedac.ciesin.columbia.edu/geoserver/wms",
            params: {
                LAYERS: "ndh:ndh-earthquake-frequency-distribution",
                TILES: true
            }
        })
    })
    
    // En map control
    let overviewMapControl = new OverviewMap({
        className: "ol-overviewmap ol-custom-overviewmap",
        layers: [overviewLayer],
        collapsed: false
    });
    
    // En map control mere
    let zoomToExtentControl = new ZoomToExtent({
        // ESPG:3857
        extent: [-15000000, -24000000, 15000000, 29000000]
    });
    
    function getScaleControl() {
        let control = new ScaleLine({
            units: "metric",
            bar: false,
            steps: 6,
            text: true,
            minWidth: 140
        })
        return control;
    }
    
    const map = new Map({
        target: 'map',
        layers: [basemapLayer, earthquakeLayer],
        view: new View ({
            center: [0, 0],
            zoom: 0
        }),
        controls: defaultControls({
            attributionOptions: {collapsible: true}
        }).extend([overviewMapControl, zoomToExtentControl, getScaleControl()])
    })
    ```

17) Check igen at det virker ved at eksekvere: `npm start`. Der kører igen en web mapping applikation, hvor man kan se jorskælvsområder markeret med gule nuancer.

### Section 5: Create a map with a Vector Layer

Her bygger vi igen videre på web applikationen fra før, hvor vi nu tilføjer et *vector* layer fra en WFS-service (Web Feature Service) - specifikt et, der handler om, hvilke jordskælv, der har været det seneste døgn

16) Ændr `index.js`-filen, så den ser således ud:

    ```
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import { Attribution, ScaleLine, OverviewMap, ZoomToExtent, defaults as defaultControls } from  "ol/control";
    import TileWMS from "ol/source/TileWMS";
    import VectorLayer from "ol/layer/Vector";
    import VectorSource from "ol/source/Vector";
    import GeoJSON from "ol/format/GeoJSON";
    
    let basemapLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    let overviewLayer = new TileLayer({
        source: new OSM({
            url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        })
    })
    
    let earthquakeLayer = new TileLayer({
        source: new TileWMS({
            url: "https://sedac.ciesin.columbia.edu/geoserver/wms",
            params: {
                LAYERS: "ndh:ndh-earthquake-frequency-distribution",
                TILES: true
            }
        })
    })
    
    let earthquakeVectorLayer = new VectorLayer({
        source: new VectorSource({
            format: new GeoJSON(),
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        })
    })
    
    // En map control
    let overviewMapControl = new OverviewMap({
        className: "ol-overviewmap ol-custom-overviewmap",
        layers: [overviewLayer],
        collapsed: false
    });
    
    // En map control mere
    let zoomToExtentControl = new ZoomToExtent({
        // ESPG:3857
        extent: [-15000000, -24000000, 15000000, 29000000]
    });
    
    function getScaleControl() {
        let control = new ScaleLine({
            units: "metric",
            bar: false,
            steps: 6,
            text: true,
            minWidth: 140
        })
        return control;
    }
    
    const map = new Map({
        target: 'map',
        layers: [basemapLayer, earthquakeLayer, earthquakeVectorLayer],
        view: new View ({
            center: [0, 0],
            zoom: 0
        }),
        controls: defaultControls({
            attributionOptions: {collapsible: true}
        }).extend([overviewMapControl, zoomToExtentControl, getScaleControl()])
    })
    ```

17) Check igen at det virker ved at eksekvere: `npm start`. Der kører igen en web mapping applikation, hvor man nu også kan se jordskælv fra det seneste døgn markeret med blå cirkler.



