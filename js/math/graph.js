class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point) {
    this.points.push(point)
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point))
  }

  draw(ctx) {
    for (const segment of this.segments) {
      segment.draw(ctx)
    }

    for (const point of this.points) {
      point.draw(ctx)
    }
  }
}