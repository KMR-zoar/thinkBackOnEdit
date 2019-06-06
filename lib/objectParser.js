const url = require('url')

const urlParser = urlStr => {
  const query = url.parse(urlStr.replace('#', '?'), true).query
  return [parseFloat(query.lon), parseFloat(query.lat)]
}

const contentParser = contentSnippet => {
  const splittedContent = contentSnippet.split(',')
  const isClass = splittedContent[1].split('=')[1]
  const isLevel = splittedContent[2].split('\n')[0].split('=')[1]
  return {
    isClass: parseInt(isClass),
    isLevel: parseInt(isLevel)
  }
}

module.exports = {
  urlParser: urlParser,
  contentParser: contentParser
}
