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
  let tau = (2 * Math.PI) / 360
  let arcGenerator = arc()

  return (
    <path
      d={arcGenerator({
        startAngle: angleFrom * tau,
        endAngle: angleTo * tau,
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

export const Sector = ({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  ...rest
}) => {
  innerRadius = 0
  return Annulus({ angleFrom, angleTo, innerRadius, outerRadius, ...rest })
}

// function generateDots(angle = false, columns, innerRadius = false) {
//   let tau = Math.PI / 180

//   let circles = []
//   for (let y = innerRadius ? 4 : 0; y < columns; y++) {
//     let max = y == 0 ? 1 : y * 6
//     let row = []

//     for (let x = 0; x < max; x++) {
//       let calc = (1 + x) / max
//       if (angle === false) {
//         row.push({
//           x: Math.cos(2 * Math.PI * calc) * y,
//           y: Math.sin(2 * Math.PI * calc) * y
//         })
//       } else {
//         if (calc <= 0.5 || calc === 1) {
//           row.push({
//             x: Math.cos(2 * Math.PI * calc + (angle - 90) * tau) * y,
//             y: Math.sin(2 * Math.PI * calc + (angle - 90) * tau) * y
//           })
//         }
//       }
//     }
//     circles.push(row)
//   }

//   return circles
// }

// function generateArcDots(angle, columns) {
//   let circles = []
//   for (let y = 0; y < 13; y++) {
//     let row = []

//     for (let x = 0; x < columns; x++) {
//       row.push({
//         x: -x - 4,
//         y: y - 12
//       })
//     }
//     circles.push(row)
//   }

//   for (let y = 4; y < columns + 4; y++) {
//     let max = y == 0 ? 1 : y * 6
//     let row = []

//     for (let x = 0; x < max; x++) {
//       let calc = (1 + x) / max
//       if (360 * calc >= 0 && 360 * calc < 180) {
//         row.push({
//           x: Math.cos(2 * Math.PI * calc) * y,
//           y: Math.sin(2 * Math.PI * calc) * y
//         })
//       }
//     }
//     circles.push(row)
//   }

//   for (let y = 0; y < 13; y++) {
//     let row = []

//     for (let x = 0; x < columns; x++) {
//       row.push({
//         x: x + 4,
//         y: y - 12
//       })
//     }
//     circles.push(row)
//   }

//   return circles
// }

function returnDots(circles, distance, radius, rest) {
  return (
    <g key={`dots`} {...rest}>
      {circles.map(({}, row) => {
        return (
          <g key={`dot-row-${row}`}>
            {circles[row].map((circle, column) => {
              return (
                <circle
                  key={`dot-column-${row}-${column}`}
                  r={radius}
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

// export const AnnulusDots = ({
//   angleFrom,
//   angleTo,
//   innerRadius,
//   outerRadius,
//   ...rest
// }) => {
//   let angle = 180
//   let columns = 13
//   let box = 64

//   let circles = generateDots(angle, columns, true)

//   return returnDots(circles, box, rest)
// }

export const RectangleDots = ({ width, height, distance, ...rest }) => {
  // Radius, columns & rows are based distance value
  let columns = 1 + width / distance
  let rows = 1 + height / distance
  let radius = distance / 6

  let circles = []
  let rowsStart = (rows - 1) / 2
  let columnsStart = (columns - 1) / 2

  for (let y = 0; y < rows; y++) {
    let row = []

    for (let x = 0; x < columns; x++) {
      row.push({
        x: x - columnsStart,
        y: y - rowsStart
      })
    }
    circles.push(row)
  }

  return returnDots(circles, distance, radius, rest)
}
