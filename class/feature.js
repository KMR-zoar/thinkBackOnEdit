class Feature {
  constructor(properties, geometry) {
    this.type = 'Feature'
    this.properties = new Properties(properties)
    this.geometry = new Geometry(geometry)
  }
}

class Properties {
  constructor(title, classes, level) {
    this.title = title
    this.class = classes
    this.level = level
  }
}

class Geometry {
  constructor(coordinates) {
    this.type = 'Point'
    this.coordinates = new Array(coordinates)
  }
}

module.exports = {
  Feature: Feature,
  Properties: Properties,
  Geometry: Geometry
}
