import { arc, symbol } from 'd3-shape'
import React from 'react'
import svgpath from 'svgpath'

const GeneratePath = (path, round, translate) => {
  return svgpath(path)
    .rotate(translate[2])
    .translate(translate[0], translate[1])
    .round(round)
    .toString()
}
export const Annulus = ({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  round = 2,
  translate = [0, 0],
  ...rest
}) => {
  return (
    <path
      d={GeneratePath(
        arc()({
          startAngle: (angleFrom * Math.PI) / 180,
          endAngle: (angleTo * Math.PI) / 180,
          innerRadius: innerRadius,
          outerRadius: outerRadius
        }),
        round,
        translate
      )}
      {...rest}
    />
  )
}

export const Arc = ({ box, round = 2, translate = [0, 0], ...rest }) => {
  const symbolGenerator = symbol()
    .type({
      draw: function (context, box) {
        const r = box / 6

        const a = 0
        const b = box
        const c = box / 2 + -r
        const d = box / 2 + r
        const e = box / 2

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
      d={GeneratePath(
        svgpath(symbolGenerator())
          .translate(-box / 2, -box / 2)
          .toString(),
        round,
        translate
      )}
      {...rest}
    />
  )
}

export const Circle = ({ radius, round = 2, translate = [0, 0], ...rest }) => {
  const circle = (
    <circle
      r={radius}
      cx={translate[0] !== 0 && translate[0]}
      cy={translate[1] !== 0 && translate[1]}
      {...rest}
    />
  )
  return circle
}

export const Rectangle = ({
  width,
  height,
  round = 2,
  translate = [0, 0],
  ...rest
}) => {
  const path =
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
  return <path d={GeneratePath(path, round, translate)} {...rest} />
}

export const Sector = ({
  angleFrom,
  angleTo,
  outerRadius,
  translate = [0, 0],
  ...rest
}) => {
  const innerRadius = 0
  return Annulus({
    angleFrom,
    angleTo,
    innerRadius,
    outerRadius,
    translate,
    ...rest
  })
}

function returnDots(circles, distance, dotsRadius, translate = [0, 0], rest) {
  return (
    <g key='dots'>
      {circles.flatMap((rowCircles, row) => (
        <g key={`dot-row-${row}`}>
          {rowCircles.map((circle, column) => (
            <circle
              key={`dot-column-${row}-${column}`}
              r={dotsRadius}
              cx={circle.x * distance + translate[0]}
              cy={circle.y * distance + translate[1]}
              fill={`#000`}
              {...rest}
            />
          ))}
        </g>
      ))}
    </g>
  )
}

export const Triangle = ({
  positions,
  size,
  round = 2,
  translate = [0, 0],
  ...rest
}) => {
  const path =
    positions
      .map((position, index) => {
        const command = index === 0 ? 'm' : 'l'
        return `${command}${position.x * size},${position.y * size}`
      })
      .join('') + 'z'

  return <path d={GeneratePath(path, round, translate)} {...rest} />
}

export const Lozenge = ({
  width = 1,
  height = 3,
  round = 2,
  translate = [0, 0],
  ...rest
}) => {
  return (
    <Triangle
      positions={[
        { x: 0, y: -height },
        { x: width, y: height },
        { x: -width, y: height },
        { x: -width, y: -height }
      ]}
      round={round}
      translate={translate}
      {...rest}
    />
  )
}

export const AnnulusDots = ({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  distance,
  inner = false,
  translate = [0, 0],
  ...rest
}) => {
  const firstColumn = innerRadius / distance
  let columns = outerRadius / distance
  const dotsRadius = distance / 6
  const circles = innerRadius === 0 ? [[{ x: 0, y: 0 }]] : []

  if (angleFrom < 0) {
    angleFrom = 360 + angleFrom
  }

  if (angleTo < 0) {
    angleTo = 360 + angleTo
  }

  if (inner) {
    columns -= 1
  }

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
    if (column.length !== 0) {
      circles.push(column)
    }
  }
  return returnDots(circles, distance, dotsRadius, translate, rest)
}

export const ArcDots = ({ box, distance, translate = [0, 0], ...rest }) => {
  const width = box / 3
  const height = box / 2
  const columns = width / distance
  const rows = height / distance
  const dotsRadius = distance / 6

  const circles = []

  for (let y = 0; y <= rows; y++) {
    const row = []

    for (let x = 0; x <= columns; x++) {
      row.push({
        x: -x - columns / 2,
        y: -y
      })
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
      row.push({
        x: x + columns / 2,
        y: -y
      })
    }

    circles.push(row)
  }

  return returnDots(circles, distance, dotsRadius, translate, rest)
}

export const CircleDots = ({
  radius,
  distance,
  inner = false,
  translate = [0, 0],
  ...rest
}) => {
  let columns = radius / distance
  const dotsRadius = distance / 6

  const circles = [[{ x: 0, y: 0 }]]

  if (inner) {
    columns -= 1
  }

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
  return returnDots(circles, distance, dotsRadius, translate, rest)
}

export const RectangleDots = ({
  width,
  height,
  distance,
  inner = false,
  translate = [0, 0],
  ...rest
}) => {
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
        x: x - columnsStart + (inner ? 1 / 2 : 0),
        y: y - rowsStart + (inner ? 1 / 2 : 0)
      })
    }
    circles.push(row)
  }
  return returnDots(circles, distance, dotsRadius, translate, rest)
}

export const SectorDots = ({
  angleFrom,
  angleTo,
  outerRadius,
  distance,
  inner = false,
  translate = [0, 0],
  ...rest
}) => {
  const innerRadius = 0
  return AnnulusDots({
    angleFrom,
    angleTo,
    innerRadius,
    outerRadius,
    distance,
    translate,
    ...rest
  })
}

export const RectangleLines = ({
  width,
  height,
  distance,
  xLines = true,
  yLines = true,
  inner = false,
  translate = [0, 0],
  ...rest
}) => {
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
        x1: x - columnsStart + (inner ? 1 / 2 : 0),
        y1: -rows / 2,
        x2: x - columnsStart + (inner ? 1 / 2 : 0),
        y2: rows / 2
      })
    }
  }

  if (yLines) {
    for (let y = 0; y <= rows; y++) {
      lines.push({
        x1: -columns / 2,
        y1: y - rowsStart + (inner ? 1 / 2 : 0),
        x2: columns / 2,
        y2: y - rowsStart + (inner ? 1 / 2 : 0)
      })
    }
  }

  return (
    <g key='lines' {...rest}>
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
