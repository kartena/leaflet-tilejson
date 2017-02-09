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
    "resolutions": [
			8192, 4096, 2048, 1024, 512, 256, 128,
			64, 32, 16, 8, 4, 2, 1, 0.5
		],
    "origin": [0, 0],
	"bounds": [218128.7031, 6126002.9379, 1083427.2970, 7692850.9468],
    "center": [ 11.9, 57.7, 8 ]
};

var map = L.TileJSON.createMap('map', osmTileJSON);
