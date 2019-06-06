const assert = require('assert')
const GeoJSON = require('../class/geojson')
const Feature = require('../class/feature')

describe('GeoJSONクラスの定義', () => {
  const geojson = new GeoJSON()

  const properties1 = new Feature.Properties()
  properties1.title = 'Almost junction, join or use noexit tag'
  properties1.class = 1
  properties1.level = 1
  const geometry1 = new Feature.Geometry()
  geometry1.coordinates = [139.7136643, 36.0429181]

  const feature1 = new Feature.Feature()
  feature1.properties = properties1
  feature1.geometry = geometry1

  const properties2 = new Feature.Properties()
  properties2.title = 'Almost junction, join or use noexit tag'
  properties2.class = 1
  properties2.level = 1
  const geometry2 = new Feature.Geometry()
  geometry2.coordinates = [139.7094773, 36.0379387]

  const feature2 = new Feature.Feature()
  feature2.properties = properties2
  feature2.geometry = geometry2

  geojson.features = [feature1, feature2]
  it('GeoJSONクラス', () => {
    const content = JSON.stringify({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            title: 'Almost junction, join or use noexit tag',
            class: 1,
            level: 1
          },
          geometry: {
            type: 'Point',
            coordinates: [139.7136643, 36.0429181]
          }
        },
        {
          type: 'Feature',
          properties: {
            title: 'Almost junction, join or use noexit tag',
            class: 1,
            level: 1
          },
          geometry: {
            type: 'Point',
            coordinates: [139.7094773, 36.0379387]
          }
        }
      ]
    })
    assert.equal(content, JSON.stringify(geojson))
  })
})
