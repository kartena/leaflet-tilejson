var osmTileJSON = {
    "tilejson": "2.0.0",
    "name": "osm-bright-3006",
    "description": "Kartena's rendering, based on MapBox's OSM Bright, of Swedish OpenStreetMap data in SWEREF99 projection.",
    "version": "1.0.0",
    "attribution": "Map data &copy; <a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> contributors; Imagery &copy; 2013 Kartena",
    "scheme": "xyz",
    "tiles": [
    "http://api.geosition.com/tile/osm-bright-3006/{z}/{x}/{y}.png"
    ],
    "minzoom": 0,
    "maxzoom": 14,
    "crs": "EPSG:3006",
    "projection": "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
    "transform": [1, 0, -1, 0],
    "scales": [0.0001220703125, 0.000244140625, 0.00048828125, 0.0009765625,
    0.001953125, 0.00390625, 0.0078125, 0.015625, 0.03125, 0.0625,
    0.125, 0.25, 0.5, 1.0, 2.0],
    "center": [ 11.9, 57.7, 8 ]
};

var map = L.TileJSON.createMap('map', osmTileJSON);
