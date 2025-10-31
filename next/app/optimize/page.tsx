'use client'

import {
  Arc,
  ArcDots,
  RectangleLines
} from 'annulus'

export default function Optimize({
  dots = false,
  dotDistance = 1 / 24,
  lines = false
}: {
  dots?: boolean
  dotDistance?: number
  lines?: boolean
}) {
  let elementSize = 27

  function position(x: number, y: number) {
    return `translate(${elementSize / 3 + x * elementSize * 0.5},${
      y * elementSize * 0.5
    })`
  }

  function positionValues(x: number, y: number) {
    return [elementSize / 3 + x * elementSize * 0.5, y * elementSize * 0.5]
  }

  const color10 = `#000`

  let WS1 = `#ff5100`
  let WS2 = `#f7b018`
  let WS3 = `#215da6`

  let WSSize = {
    width: elementSize * 6,
    height: elementSize * 3
  }

  let colorGrey = `rgba(0,0,90,.1)`
  let WSDistance = elementSize * dotDistance

  return (
    <>
      <svg
        viewBox={`0 0 ${WSSize.width} ${WSSize.height}`}
        xmlns={`http://www.w3.org/2000/svg`}
      >
        {lines && (
          <RectangleLines
            width={WSSize.width}
            height={WSSize.height}
            distance={elementSize / 6}
            style={{
              stroke: color10,
              strokeWidth: `0.1`
            }}
            transform={`translate(${WSSize.width / 2}, ${WSSize.height / 2})`}
          />
        )}
        <Arc
          className={`W`}
          box={elementSize}
          style={{
            fill: WS3
          }}
          translate={positionValues(1, 3)}
        />
        {dots ? (
          <ArcDots
            box={elementSize}
            distance={WSDistance}
            translate={positionValues(2 + 1 / 3, 3)}
          />
        ) : (
          <Arc
            box={elementSize}
            style={{
              fill: colorGrey
            }}
            transform={position(2 + 1 / 3, 3)}
          />
        )}
      </svg>
    </>
  )
}
