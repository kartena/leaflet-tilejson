# leaflet-tilejson

leaflet-tilejson adds support for the 
[TileJSON](https://github.com/mapbox/TileJSON) specification 
to the [Leaflet](http://leaflet.cloudmade.com) map client.

For extra fun and possibility of future profit, leaflet-tilejson 
also supports an 
[extension to the TileJSON specification](https://github.com/perliedman/TileJSON/tree/master/2.0.0), 
which allows other projections than spherical-mercator. This 
extension requires [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet)
and [Proj4js](http://proj4js.org) as extra dependencies.

## Example

```javascript
var osmTileJSON = {
    "tilejson": "2.0.0",
    "name": "OpenStreetMap",
    "description": "A free editable map of the whole world.",
    "version": "1.0.0",
    "attribution": "&copy; OpenStreetMap contributors, CC-BY-SA",
    "scheme": "xyz",
    "tiles": [
        "http://a.tile.openstreetmap.org/${z}/${x}/${y}.png",
        "http://b.tile.openstreetmap.org/${z}/${x}/${y}.png",
        "http://c.tile.openstreetmap.org/${z}/${x}/${y}.png"
    ],
    "minzoom": 0,
    "maxzoom": 18,
    "bounds": [ -180, -85, 180, 85 ],
    "center": [ 11.9, 57.7, 8 ]
};

var map = L.TileJSON.createMap('map', osmTileJSON);
```

## Limitations

This is, as everything else, a work in progress. Current known limitations are:

 * No support for UTFGrid interaction. Mostly because Leaflet does not currently support UTFGrid.
 * Only the first tile URL specified is used. The method for specifying this in the TileJSON 
   specification and in Leaflet differs in ways that makes it hard to implement in the general case.
 * Bounds are not used.
