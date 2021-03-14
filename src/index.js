import { arc, symbol } from 'd3-shape'
import React from 'react'
import svgpath from 'svgpath'

export const Annulus = ({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  ...rest
}) => {
  return (
    <path
      d={arc()({
        startAngle: (angleFrom * Math.PI) / 180,
        endAngle: (angleTo * Math.PI) / 180,
        innerRadius: innerRadius,
        outerRadius: outerRadius
      })}
      {...rest}
    />
  )
}

export const Arc = ({ box, ...rest }) => {
  let symbolGenerator = symbol()
    .type({
      draw: function (context, box) {
        let r = box / 6

        let a = 0
        let b = box
        let c = box / 2 + -r
        let d = box / 2 + r
        let e = box / 2

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

  return (
    <path
      d={svgpath(symbolGenerator())
        .translate(-box / 2, -box / 2)
        .toString()}
      {...rest}
    />
  )
}

export const Circle = ({ radius, ...rest }) => {
  return <circle r={radius} {...rest} />
}

export const Rectangle = ({ width, height, ...rest }) => {
  return (
    <path
      d={
        'm' +
        -(width / 2) +
        ',' +
        -(height / 2) +
        'l' +
        width +
        ',' +
        0 +
        'l' +
        0 +
        ',' +
        height +
        'l' +
        -width +
        ',' +
        0 +
        'l' +
        0 +
        ',' +
        -height +
        'z'
      }
      {...rest}
    />
  )
}

export const Sector = ({ angleFrom, angleTo, outerRadius, ...rest }) => {
  let innerRadius = 0
  return Annulus({ angleFrom, angleTo, innerRadius, outerRadius, ...rest })
}

function returnDots(circles, distance, dotsRadius, rest) {
  return (
    <g key={`dots`} {...rest}>
      {circles.map(({}, row) => {
        return (
          <g key={`dot-row-${row}`}>
            {circles[row].map((circle, column) => {
              return (
                <circle
                  key={`dot-column-${row}-${column}`}
                  r={dotsRadius}
                  cx={circle.x * distance}
                  cy={circle.y * distance}
                />
              )
            })}
          </g>
        )
      })}
    </g>
  )
}

export const AnnulusDots = ({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  distance,
  ...rest
}) => {
  let firstColumn = innerRadius / distance
  let columns = outerRadius / distance
  let dotsRadius = distance / 6
  let circles = innerRadius === 0 ? [[{ x: 0, y: 0 }]] : []

  if (angleFrom < 0) {
    angleFrom = 360 + angleFrom
  }

  if (angleTo < 0) {
    angleTo = 360 + angleTo
  }
  for (let y = firstColumn; y <= columns; y++) {
    let column = []
    let points = y * 8

    for (let x = 0; x < points; x++) {
      let angle = (360 * x) / points

      if (
        (angleTo > angleFrom && angle >= angleFrom && angle <= angleTo) ||
        (angleFrom >= angleTo && (angle >= angleFrom || angle <= angleTo)) ||
        (angle == 0 && angleTo == 360)
      ) {
        column.push({
          x: y * Math.cos(((angle - 90) * Math.PI) / 180),
          y: y * Math.sin(((angle - 90) * Math.PI) / 180)
        })
      }
    }
    if (column.length !== 0) {
      circles.push(column)
    }
  }
  return returnDots(circles, distance, dotsRadius, rest)
}

export const ArcDots = ({ box, distance, ...rest }) => {
  let width = box / 3
  let height = box / 2
  let columns = width / distance
  let rows = height / distance
  let dotsRadius = distance / 6

  let circles = []

  for (let y = 0; y <= rows; y++) {
    let row = []

    for (let x = 0; x <= columns; x++) {
      row.push({
        x: -x - columns / 2,
        y: -y
      })
    }

    circles.push(row)
  }

  for (let y = rows - columns; y <= rows; y++) {
    let max = y == 0 ? 1 : y * 6
    let row = []

    for (let x = 0; x < max; x++) {
      let calc = (1 + x) / max
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
    let row = []

    for (let x = 0; x <= columns; x++) {
      row.push({
        x: x + columns / 2,
        y: -y
      })
    }

    circles.push(row)
  }

  return returnDots(circles, distance, dotsRadius, rest)
}

export const CircleDots = ({ radius, distance, ...rest }) => {
  let columns = radius / distance
  let dotsRadius = distance / 6

  let circles = [[{ x: 0, y: 0 }]]

  for (let y = 0; y <= columns; y++) {
    let column = []
    let points = y * 8

    for (let x = 0; x < points; x++) {
      let angle = x / points

      column.push({
        x: y * Math.sin(Math.PI * 2 * angle),
        y: y * Math.cos(Math.PI * 2 * angle)
      })
    }
    circles.push(column)
  }
  return returnDots(circles, distance, dotsRadius, rest)
}

export const RectangleDots = ({
  width,
  height,
  distance,
  inner = false,
  ...rest
}) => {
  let columns = width / distance
  let rows = height / distance
  let dotsRadius = distance / 6

  let circles = []
  let rowsStart = rows / 2
  let columnsStart = columns / 2

  if (inner) {
    rows -= 1
    columns -= 1
  }

  for (let y = 0; y <= rows; y++) {
    let row = []

    for (let x = 0; x <= columns; x++) {
      row.push({
        x: x - columnsStart + (inner ? 1 / 2 : 0),
        y: y - rowsStart + (inner ? 1 / 2 : 0)
      })
    }
    circles.push(row)
  }
  return returnDots(circles, distance, dotsRadius, rest)
}

export const SectorDots = ({
  angleFrom,
  angleTo,
  outerRadius,
  distance,
  ...rest
}) => {
  let innerRadius = 0
  return AnnulusDots({
    angleFrom,
    angleTo,
    innerRadius,
    outerRadius,
    distance,
    ...rest
  })
}

export const RectangleLines = ({
  width,
  height,
  distance,
  inner = false,
  ...rest
}) => {
  let columns = width / distance
  let rows = height / distance

  let lines = []
  let rowsStart = rows / 2
  let columnsStart = columns / 2

  if (inner) {
    rows -= 1
    columns -= 1
  }

  for (let x = 0; x <= columns; x++) {
    lines.push({
      x1: x - columnsStart + (inner ? 1 / 2 : 0),
      y1: -rows / 2,
      x2: x - columnsStart + (inner ? 1 / 2 : 0),
      y2: rows / 2
    })
  }

  for (let y = 0; y <= rows; y++) {
    lines.push({
      x1: -columns / 2,
      y1: y - rowsStart + (inner ? 1 / 2 : 0),
      x2: columns / 2,
      y2: y - rowsStart + (inner ? 1 / 2 : 0)
    })
  }

  return (
    <g key={`lines`} {...rest}>
      {lines.map((line, key) => {
        return (
          <line
            key={`line-${key}`}
            x1={line.x1 * distance}
            y1={line.y1 * distance}
            x2={line.x2 * distance}
            y2={line.y2 * distance}
          />
        )
      })}
    </g>
  )
}
