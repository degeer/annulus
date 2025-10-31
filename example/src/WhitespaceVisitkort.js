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

const WhitespaceVisitkort = ({
  color = true,
  dots = false,
  dotDistance = 1 / 24,
  lines = false
}) => {
  let elementSize = 12 // 9, 27, 54

  function position(x, y, xNumber = 1, yNumber = 1, rotate = false) {
    return [
      x * elementSize * 0.5 + xNumber,
      y * elementSize * 0.5 + yNumber,
      rotate ? rotate : 0
    ]
  }

  let colorGrey = `var(--color-logo-space)`
  let WS1 = `var(--color-ws-orange)`
  let WS2 = `var(--color-ws-yellow)`
  let WS3 = `var(--color-ws-blue)`

  WS1 = `#ff5100`
  WS2 = `#f7b018`
  WS3 = `#215da6`

  let WSBlack = `#101820`

  let WSDistance = elementSize * dotDistance * 3

  let ALLSize = {
    width: 98,
    height: 26,
    sides: 2
  }
  return (
    <>
      <div className={`elements-all`}>
        <svg
          viewBox={`0 0 ${ALLSize.width + ALLSize.sides} ${
            ALLSize.height + ALLSize.sides
          }`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {/* <RectangleLines
            width={ALLSize.width + ALLSize.sides}
            height={ALLSize.height + ALLSize.sides}
            distance={elementSize / 12}
            style={{
              stroke: colorGrey,
              strokeWidth: `0.1`
            }}
            transform={`translate(${(ALLSize.width + ALLSize.sides) / 2}, ${
              (ALLSize.height + ALLSize.sides) / 2
            })`}
          /> */}
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
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
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
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
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
    </>
  )
}

export default WhitespaceVisitkort
