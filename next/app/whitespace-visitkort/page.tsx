'use client'

import { RectangleDots } from 'annulus'

export default function WhitespaceVisitkort() {
  const dots = true
  const dotDistance = 1 / 24
  const elementSize = 12

  function position(x: number, y: number, xNumber = 1, yNumber = 1) {
    return [
      x * elementSize * 0.5 + xNumber,
      y * elementSize * 0.5 + yNumber,
      0
    ]
  }

  const WSDistance = elementSize * dotDistance * 3

  const ALLSize = {
    width: 98,
    height: 26,
    sides: 2
  }

  return (
    <div className="elements-all">
      <svg
        viewBox={`0 0 ${ALLSize.width + ALLSize.sides} ${
          ALLSize.height + ALLSize.sides
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        {dots && (
          <RectangleDots
            distance={WSDistance}
            width={elementSize * 8}
            height={elementSize * 2}
            translate={position(8, 2, 1, 1)}
          />
        )}
      </svg>
      <svg
        viewBox={`0 0 ${ALLSize.width + ALLSize.sides} ${
          ALLSize.height + ALLSize.sides
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        {dots && (
          <RectangleDots
            distance={WSDistance * 2}
            width={elementSize * 8}
            height={elementSize * 2}
            translate={position(8, 2, 1, 1)}
          />
        )}
      </svg>
      <svg
        viewBox={`0 0 ${ALLSize.width + ALLSize.sides} ${
          ALLSize.height + ALLSize.sides
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        {dots && (
          <RectangleDots
            distance={WSDistance * 4}
            width={elementSize * 8}
            height={elementSize * 2}
            translate={position(8, 2, 1, 1)}
          />
        )}
      </svg>
    </div>
  )
}
