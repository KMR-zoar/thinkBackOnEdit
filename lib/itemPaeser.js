const objParser = require('./objectParser')
const Feature = require('../class/feature')

const itemParser = item => {
  const content = objParser.contentParser(item.contentSnippet)
  const location = objParser.urlParser(item.link)

  const Properites = new Feature.Properties()
  const Geometry = new Feature.Geometry()
  const FeatureObj = new Feature.Feature()

  Properites.title = item.title
  Properites.class = content.isClass
  Properites.level = content.isLevel

  Geometry.coordinates = location

  FeatureObj.properties = Properites
  FeatureObj.geometry = Geometry

  return FeatureObj
}

module.exports = itemParser
