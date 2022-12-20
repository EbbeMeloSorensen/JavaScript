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
