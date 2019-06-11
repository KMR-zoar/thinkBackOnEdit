const username = process.argv[2]

if (username === undefined) {
  console.log('Username is null\nnpm run start -- <username>')
  process.exit(1)
}

const rss = encodeURIComponent(username) + '.rss'
const urlJoin = require('url-join')
const axios = require('axios')
const RssParser = require('rss-parser')
const rssparser = new RssParser()
const geojsonCreator = require('../lib/geojsonCreator')
const fs = require('fs')

const baseURL = 'http://osmose.openstreetmap.fr/byuser/'

const url = urlJoin(baseURL, rss)

axios.get(url).then(res => {
  rssparser.parseString(res.data).then(feed => {
    const geojson = geojsonCreator(feed)
    fs.writeFile('result.geojson', JSON.stringify(geojson, null, 2), () => {
      console.log('done')
    })
  })
})
