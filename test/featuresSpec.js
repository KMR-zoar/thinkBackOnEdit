const assert = require('assert')
const Feature = require('../class/feature')

describe('地物クラスの定義', () => {
  const properties = new Feature.Properties()
  properties.title = 'title'
  properties.class = 1
  properties.level = 1

  const geometry = new Feature.Geometry()
  geometry.coordinates = [139.7136643, 36.0429181]

  const featureObj = new Feature.Feature()
  featureObj.properties = properties
  featureObj.geometry = geometry

  it('Propertiesクラス', () => {
    const contents = JSON.stringify({
      title: 'title',
      class: 1,
      level: 1
    })
    assert.equal(contents, JSON.stringify(properties))
  })

  it('Geometryクラス', () => {
    const contents = JSON.stringify({
      type: 'Point',
      coordinates: [139.7136643, 36.0429181]
    })
    assert.equal(contents, JSON.stringify(geometry))
  })

  it('Featureクラス', () => {
    const contents = JSON.stringify({
      type: 'Feature',
      properties: {
        title: 'title',
        class: 1,
        level: 1
      },
      geometry: {
        type: 'Point',
        coordinates: [139.7136643, 36.0429181]
      }
    })
    assert.equal(contents, JSON.stringify(featureObj))
  })
})
