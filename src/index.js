import { arc as d3Arc, symbol as d3Symbol } from 'd3-shape'
import svgpath from 'svgpath'

export function annulusPath({ angleFrom, angleTo, innerRadius, outerRadius }) {
  return d3Arc()({
    startAngle: (angleFrom * Math.PI) / 180,
    endAngle: (angleTo * Math.PI) / 180,
    innerRadius,
    outerRadius
  })
}

export function arcPath({ box }) {
  const gen = d3Symbol()
    .type({
      draw(context, size) {
        const r = size / 6
        const a = 0
        const b = size
        const c = size / 2 - r
        const d = size / 2 + r
        const e = size / 2

        context.moveTo(a, a)
        context.lineTo(a, e)
        context.arcTo(a, b, b, b, r * 3)
        context.arcTo(b, b, b, a, r * 3)
        context.lineTo(b, a)
        context.lineTo(d, a)
        context.lineTo(d, e)

        context.arcTo(d, d, c, d, r)
        context.arcTo(c, d, c, c, r)

        context.lineTo(c, a)

        context.closePath()
      }
    })
    .size(box)

  return svgpath(gen())
    .translate(-box / 2, -box / 2)
    .toString()
}

export function circlePath({ radius }) {
  return d3Arc()({
    startAngle: 0,
    endAngle: 2 * Math.PI,
    innerRadius: 0,
    outerRadius: radius
  })
}

export function rectanglePath({ width, height }) {
  const hw = width / 2
  const hh = height / 2
  return `M${-hw},${-hh}l${width},0l0,${height}l${-width},0z`
}

export function sectorPath({ angleFrom, angleTo, outerRadius }) {
  return annulusPath({ angleFrom, angleTo, innerRadius: 0, outerRadius })
}

function returnDots(circles, distance, dotsRadius) {
  return { circles, distance, dotsRadius }
}

export function annulusDots({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  distance,
  inner = false
}) {
  const firstColumn = innerRadius / distance
  let columns = outerRadius / distance
  const dotsRadius = distance / 6
  const circles = innerRadius === 0 ? [[{ x: 0, y: 0 }]] : []

  if (angleFrom < 0) angleFrom = 360 + angleFrom
  if (angleTo < 0) angleTo = 360 + angleTo

  if (inner) columns -= 1

  for (let y = firstColumn; y <= columns; y++) {
    const column = []
    const points = y * 8

    for (let x = 0; x < points; x++) {
      const angle = (360 * x) / points
      if (
        (angleTo > angleFrom && angle >= angleFrom && angle <= angleTo) ||
        (angleFrom >= angleTo && (angle >= angleFrom || angle <= angleTo)) ||
        (angle === 0 && angleTo === 360)
      ) {
        column.push({
          x: y * Math.cos(((angle - 90) * Math.PI) / 180),
          y: y * Math.sin(((angle - 90) * Math.PI) / 180)
        })
      }
    }
    if (column.length !== 0) circles.push(column)
  }
  return returnDots(circles, distance, dotsRadius)
}

export function arcDots({ box, distance }) {
  const width = box / 3
  const height = box / 2
  const columns = width / distance
  const rows = height / distance
  const dotsRadius = distance / 6
  const circles = []

  for (let y = 0; y <= rows; y++) {
    const row = []
    for (let x = 0; x <= columns; x++) {
      row.push({ x: -x - columns / 2, y: -y })
    }
    circles.push(row)
  }

  for (let y = rows - columns; y <= rows; y++) {
    const max = y === 0 ? 1 : y * 6
    const row = []
    for (let x = 0; x < max; x++) {
      const calc = (1 + x) / max
      if (360 * calc >= 0 && 360 * calc < 180) {
        row.push({
          x: Math.cos(2 * Math.PI * calc) * y,
          y: Math.sin(2 * Math.PI * calc) * y
        })
      }
    }
    circles.push(row)
  }

  for (let y = 0; y <= rows; y++) {
    const row = []
    for (let x = 0; x <= columns; x++) {
      row.push({ x: x + columns / 2, y: -y })
    }
    circles.push(row)
  }

  return returnDots(circles, distance, dotsRadius)
}

export function circleDots({ radius, distance, inner = false }) {
  let columns = radius / distance
  const dotsRadius = distance / 6
  const circles = [[{ x: 0, y: 0 }]]

  if (inner) columns -= 1

  for (let y = 0; y <= columns; y++) {
    const column = []
    const points = y * 8
    for (let x = 0; x < points; x++) {
      const angle = x / points
      column.push({
        x: y * Math.sin(Math.PI * 2 * angle),
        y: y * Math.cos(Math.PI * 2 * angle)
      })
    }
    circles.push(column)
  }
  return returnDots(circles, distance, dotsRadius)
}

export function rectangleDots({ width, height, distance, inner = false }) {
  let columns = width / distance
  let rows = height / distance
  const dotsRadius = distance / 6
  const circles = []
  const rowsStart = rows / 2
  const columnsStart = columns / 2

  if (inner) {
    rows -= 1
    columns -= 1
  }

  for (let y = 0; y <= rows; y++) {
    const row = []
    for (let x = 0; x <= columns; x++) {
      row.push({
        x: x - columnsStart + (inner ? 0.5 : 0),
        y: y - rowsStart + (inner ? 0.5 : 0)
      })
    }
    circles.push(row)
  }
  return returnDots(circles, distance, dotsRadius)
}

export function sectorDots({
  angleFrom,
  angleTo,
  outerRadius,
  distance,
  inner = false
}) {
  return annulusDots({
    angleFrom,
    angleTo,
    innerRadius: 0,
    outerRadius,
    distance,
    inner
  })
}

export function rectangleLines({
  width,
  height,
  distance,
  xLines = true,
  yLines = true,
  inner = false
}) {
  let columns = width / distance
  let rows = height / distance
  const lines = []
  const rowsStart = rows / 2
  const columnsStart = columns / 2

  if (inner) {
    rows -= 1
    columns -= 1
  }

  if (xLines) {
    for (let x = 0; x <= columns; x++) {
      lines.push({
        x1: x - columnsStart + (inner ? 0.5 : 0),
        y1: -rows / 2,
        x2: x - columnsStart + (inner ? 0.5 : 0),
        y2: rows / 2
      })
    }
  }

  if (yLines) {
    for (let y = 0; y <= rows; y++) {
      lines.push({
        x1: -columns / 2,
        y1: y - rowsStart + (inner ? 0.5 : 0),
        x2: columns / 2,
        y2: y - rowsStart + (inner ? 0.5 : 0)
      })
    }
  }

  return { lines, distance }
}
