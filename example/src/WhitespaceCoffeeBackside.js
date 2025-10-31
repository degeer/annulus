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
  dots = true,
  dotDistance = 1,
  lines = false
}) => {
  let elementSize = 9 // 9, 27, 54

  function position(x, y, rotate = false) {
    return [
      x * elementSize + ALLSize.sides / 2,
      y * elementSize + ALLSize.sides / 2,
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

  let WSDistance = elementSize * dotDistance

  let ALLSize = {
    width: 38 * elementSize,
    height: 63 * elementSize,
    sides: 2
  }
  let ALLSize2 = {
    width: 38 * elementSize,
    height: 21 * elementSize,
    sides: 2
  }
  return (
    <>
      <div className={`elements-all`}>
        <svg
          viewBox={`0 0 ${ALLSize2.width + ALLSize2.sides} ${
            ALLSize2.height + ALLSize2.sides
          }`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Rectangle
            width={ALLSize.width}
            height={ALLSize2.height}
            translate={position(19, 63 / 2)}
            fill={`#fff`}
          />
          <Annulus
            fill={WS2}
            angleFrom={180}
            angleTo={360}
            // distance={WSDistance}
            innerRadius={(elementSize * 21) / 2 / 3}
            outerRadius={(elementSize * 21) / 2}
            translate={position(38, 21 / 2)}
          />
          <RectangleDots
            distance={WSDistance}
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 63 / 2)}
            inner={true}
          />
          <Rectangle
            fill={`#fff`}
            width={elementSize * 15}
            height={elementSize * 2.5}
            translate={position(9.5, 3.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={4 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
            fontWeight={600}
          >
            Rostade kaffebönor
          </text>
          {/* <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={6 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            Vikt: 250g
          </text> */}

          <Rectangle
            fill={`#fff`}
            width={elementSize * 20}
            height={elementSize * 3}
            translate={position(12, 10.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={11 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            La Clara Coffee Roasters AB
          </text>

          <Rectangle
            fill={`#fff`}
            width={elementSize * 23}
            height={elementSize * 5}
            translate={position(13.5, 16.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={16 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            Kontakt: hello@whitespace.coffee
          </text>
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={18 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            whitespace.coffee
          </text>
        </svg>
      </div>
    </>
  )
}

export default WhitespaceVisitkort
