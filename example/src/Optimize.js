import React from 'react'

import {
  Annulus,
  Arc,
  Circle,
  Rectangle,
  ArcDots,
  AnnulusDots,
  CircleDots,
  RectangleDots,
  RectangleLines
} from 'annulus'

const Optimize = ({ dots = false, dotDistance = 1 / 24, lines = false }) => {
  let elementSize = 27

  function position(x, y) {
    return `translate(${elementSize / 3 + x * elementSize * 0.5},${
      y * elementSize * 0.5
    })`
  }

  function positionValues(x, y) {
    return [elementSize / 3 + x * elementSize * 0.5, y * elementSize * 0.5]
  }

  let dotsColor = `#000`

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
        {/* <RectangleDots
          width={WSSize.width}
          height={WSSize.height}
          distance={elementSize / 6}
          transform={position(11 + 1 / 3, 3)}
        /> */}
        <Arc
          className={`W`}
          box={elementSize}
          style={{
            fill: WS3
          }}
          translate={positionValues(1, 3)}
          // transform={position(1, 3)}
        />
        {dots ? (
          <ArcDots
            box={elementSize}
            distance={WSDistance}
            translate={positionValues(2 + 1 / 3, 3)}
            // transform={position(2 + 1 / 3, 3)}
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

export default Optimize
