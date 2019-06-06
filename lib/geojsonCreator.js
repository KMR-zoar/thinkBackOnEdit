const GeoJSON = require('../class/geojson')
const itemParser = require('./itemPaeser')

const geojsonCreator = feed => {
  const itemArray = feed.items
  const featureArray = []
  itemArray.forEach(item => {
    featureArray.push(itemParser(item))
  })

  const geojson = new GeoJSON()
  geojson.features = featureArray

  return geojson
}

module.exports = geojsonCreator
