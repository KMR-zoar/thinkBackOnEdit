const url = require('url')

const urlParser = urlStr => {
  const query = url.parse(urlStr.replace('#', '?'), true).query
  return [parseFloat(query.lon), parseFloat(query.lat)]
}

const contentParser = contentSnippet => {
  const splittedContent = contentSnippet.split(',')
  const classStr = splittedContent.filter(item => {
    return item.indexOf('class=') > 0
  })[0]

  const isClass = classStr ? classStr.split('=')[1] : 0

  const levelStr = splittedContent.filter(item => {
    return item.indexOf('level=') > 0
  })[0]
  const isLevel = levelStr ? levelStr.split('\n')[0].split('=')[1] : 0
  return {
    isClass: parseInt(isClass),
    isLevel: parseInt(isLevel)
  }
}

module.exports = {
  urlParser: urlParser,
  contentParser: contentParser
}
