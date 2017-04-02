var map = L.map('map', {
    center: [21.9162, 95.9560],
    zoom: 5,
});

// Add basemap
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// Add GeoJSON
$.getJSON('./Population-density.geojson', function (geojson) {
  L.choropleth(geojson, {
    valueProperty: 'pop_t',
    scale: ['white', 'red'],
    steps: 5,
    mode: 'q',
    style: {
      color: '#fff',
      weight: 2,
      fillOpacity: 0.8
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('State ' + feature.properties.pop_t_rank + '<br>' +
          feature.properties.pop_t.toLocaleString() + 'pop_t')

    }
  }).addTo(map)
})
