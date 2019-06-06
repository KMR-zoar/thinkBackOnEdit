const Feature = require('./feature').Feature

class GeoJSON {
  constructor(featureArray) {
    this.type = 'FeatureCollection'
    this.features = new Array(featureArray)
  }
}

module.exports = GeoJSON
