import {
  annulusPath,
  arcPath,
  rectanglePath,
  sectorPath,
  annulusDots,
  arcDots,
  circleDots,
  rectangleDots,
  sectorDots,
  rectangleLines
} from './index.js'

export function Annulus({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  ...rest
}) {
  return (
    <path
      d={annulusPath({ angleFrom, angleTo, innerRadius, outerRadius })}
      {...rest}
    />
  )
}

export function Arc({ box, ...rest }) {
  return <path d={arcPath({ box })} {...rest} />
}

export function Circle({ radius, ...rest }) {
  return <circle r={radius} {...rest} />
}

export function Rectangle({ width, height, ...rest }) {
  return <path d={rectanglePath({ width, height })} {...rest} />
}

export function Sector({ angleFrom, angleTo, outerRadius, ...rest }) {
  return <path d={sectorPath({ angleFrom, angleTo, outerRadius })} {...rest} />
}

function renderDots({ circles, distance, dotsRadius }, rest) {
  return (
    <g>
      {circles.map((row, ri) => (
        <g key={ri}>
          {row.map(({ x, y }, ci) => (
            <circle
              key={`${ri}-${ci}`}
              r={dotsRadius}
              cx={x * distance}
              cy={y * distance}
              {...rest}
            />
          ))}
        </g>
      ))}
    </g>
  )
}

export function AnnulusDots({
  angleFrom,
  angleTo,
  innerRadius,
  outerRadius,
  distance,
  inner,
  ...rest
}) {
  return renderDots(
    annulusDots({
      angleFrom,
      angleTo,
      innerRadius,
      outerRadius,
      distance,
      inner
    }),
    rest
  )
}

export function ArcDots({ box, distance, ...rest }) {
  return renderDots(arcDots({ box, distance }), rest)
}

export function CircleDots({ radius, distance, inner, ...rest }) {
  return renderDots(circleDots({ radius, distance, inner }), rest)
}

export function RectangleDots({ width, height, distance, inner, ...rest }) {
  return renderDots(rectangleDots({ width, height, distance, inner }), rest)
}

export function SectorDots({
  angleFrom,
  angleTo,
  outerRadius,
  distance,
  inner,
  ...rest
}) {
  return renderDots(
    sectorDots({ angleFrom, angleTo, outerRadius, distance, inner }),
    rest
  )
}

export function RectangleLines({
  width,
  height,
  distance,
  xLines,
  yLines,
  inner,
  ...rest
}) {
  const { lines, distance: d } = rectangleLines({
    width,
    height,
    distance,
    xLines,
    yLines,
    inner
  })
  return (
    <g {...rest}>
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1 * d}
          y1={line.y1 * d}
          x2={line.x2 * d}
          y2={line.y2 * d}
        />
      ))}
    </g>
  )
}
