const assert = require('assert')
const itemParser = require('../lib/itemPaeser')

describe('アイテムパーサー', () => {
  it('アイテムオブジェクトのパース', () => {
    const content = JSON.stringify({
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
    })

    const item = {
      title: 'Almost junction, join or use noexit tag',
      link:
        'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0429181&lon=139.7136643&item=1270&level=1',
      content:
        '\n        item=1270, class=1, level=1\n        <a href="http://osmose.openstreetmap.fr/error/27629905558">E</a>\n        <a href="http://localhost:8111/load_and_zoom?left=139.7116643&amp;bottom=36.0409181&amp;right=139.7156643&amp;top=36.0449181">josm</a>\n        ',
      contentSnippet: 'item=1270, class=1, level=1\n        E\n        josm',
      guid:
        'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0429181&lon=139.7136643&item=1270&level=1',
      categories: ['1270']
    }

    const result = itemParser(item)

    assert.equal(content, JSON.stringify(result))
  })
})
