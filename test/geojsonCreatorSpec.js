const assert = require('assert')
const geojsonCreator = require('../lib/geojsonCreator')

describe('GeoJSONの作成', () => {
  it('GeoJSONクリエーター', () => {
    const feed = {
      items: [
        {
          title: 'Almost junction, join or use noexit tag',
          link:
            'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0429181&lon=139.7136643&item=1270&level=1',
          content:
            '\n        item=1270, class=1, level=1\n        <a href="http://osmose.openstreetmap.fr/error/27629905558">E</a>\n        <a href="http://localhost:8111/load_and_zoom?left=139.7116643&amp;bottom=36.0409181&amp;right=139.7156643&amp;top=36.0449181">josm</a>\n        ',
          contentSnippet:
            'item=1270, class=1, level=1\n        E\n        josm',
          guid:
            'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0429181&lon=139.7136643&item=1270&level=1',
          categories: ['1270']
        },
        {
          title: 'Almost junction, join or use noexit tag',
          link:
            'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0379387&lon=139.7094773&item=1270&level=1',
          content:
            '\n        item=1270, class=1, level=1\n        <a href="http://osmose.openstreetmap.fr/error/27629905556">E</a>\n        <a href="http://localhost:8111/load_and_zoom?left=139.7074773&amp;bottom=36.0359387&amp;right=139.7114773&amp;top=36.0399387">josm</a>\n        ',
          contentSnippet:
            'item=1270, class=1, level=1\n        E\n        josm',
          guid:
            'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0379387&lon=139.7094773&item=1270&level=1',
          categories: ['1270']
        }
      ],
      title: 'Osmose - k_zoar',
      description: 'k_zoarさんの統計.\n    検出された課題数: 500以上.\n    ',
      link: 'http://osmose.openstreetmap.fr/byuser/k_zoar',
      lastBuildDate: 'Wed Jun  5 03:14:03 2019'
    }
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
    assert.equal(content, JSON.stringify(geojsonCreator(feed)))
  })
})
