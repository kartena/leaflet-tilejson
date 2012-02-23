var osmTileJSON = {
    "tilejson": "2.0.0",
    "name": "LMV-RT90",
    "description": "Kartena's rendering of Swedish Lantmäteriverket's map data in RT90 projection.",
    "version": "1.0.0",
    "attribution": "Map data &copy; Lantmäteriverket, rendering &copy; Kartena AB",
    "scheme": "xyz",
    "tiles": [
        "http://api.geosition.com/tile/lmv/${z}/${x}/${y}.png",
    ],
    "minzoom": 0,
    "maxzoom": 14,
    "crs": "EPSG:2400",
    "projection": "+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0 +proj=tmerc +ellps=bessel +units=m +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs",
    "transform": [1, 0, -1, 0],
    "scales": [0.0001220703125, 0.000244140625, 0.00048828125, 0.0009765625, 
               0.001953125, 0.00390625, 0.0078125, 0.015625, 0.03125, 0.0625, 
               0.125, 0.25, 0.5, 1.0, 2.0],
    "center": [ 11.9, 57.7, 8 ]
};

var map = L.TileJSON.createMap('map', osmTileJSON);
var b = new Billing.Leaflet(map, "github-demo", "lmv", parseInt(Math.random() * 10000000), window.location.hostname, window.location.href);
