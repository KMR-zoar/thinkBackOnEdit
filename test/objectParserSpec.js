const assert = require('assert')
const parsers = require('../lib/objectParser')

describe('オブジェクトパーサー', () => {
  const url =
    'http://osmose.openstreetmap.fr/map/#zoom=16&lat=36.0429181&lon=139.7136643&item=1270&level=1'
  const contentSnippet = {
    contentSnippet: 'item=1270, class=1, level=1\n        E\n        josm'
  }
  it('URLのパース', () => {
    const content = JSON.stringify([139.7136643, 36.0429181])

    const result = parsers.urlParser(url)

    assert.equal(content, JSON.stringify(result))
  })
  it('コンテンツのパース', () => {
    const content = JSON.stringify({
      isClass: 1,
      isLevel: 1
    })

    const result = parsers.contentParser(contentSnippet.contentSnippet)

    assert.equal(content, JSON.stringify(result))
  })

  const contentSnippet2 = {
    contentSnippet:
      'Conflict between tags: amenity, landuse\n        item=4030, class=900, level=1\n        E\n        josm'
  }

  it('コンテンツのパース2', () => {
    const content = JSON.stringify({
      isClass: 900,
      isLevel: 1
    })

    const result = parsers.contentParser(contentSnippet2.contentSnippet)

    assert.equal(content, JSON.stringify(result))
  })
})
