'use client'

import {
  Annulus,
  Circle,
  Rectangle,
  RectangleDots
} from 'annulus'

export default function WhitespaceCoffee2({
  color = true,
  dots = true,
  dotDistance = 1,
  lines = false
}: {
  color?: boolean
  dots?: boolean
  dotDistance?: number
  lines?: boolean
}) {
  let elementSize = 9

  function position(x: number, y: number, rotate: number | false = false) {
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
    height: 53 * elementSize,
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
          <Rectangle
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 53 / 2)}
            fill={`#fff`}
          />

          <RectangleDots
            distance={WSDistance}
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 53 / 2)}
            inner={true}
          />

          <Rectangle
            fill={`#fff`}
            width={ALLSize.width}
            height={elementSize * 19}
            translate={position(19, 25 + 19 / 2)}
          />

          <Annulus
            fill={WS2}
            angleFrom={0}
            angleTo={90}
            innerRadius={(elementSize * 19) / 3}
            outerRadius={elementSize * 19}
            translate={position(0, 44)}
          />

          <Rectangle
            fill={WS3}
            width={ALLSize.width / 2}
            height={elementSize * 19}
            translate={position(19 + 19 / 2, 25 + 19 / 2)}
          />

          <Circle
            fill={WS1}
            radius={elementSize * 3}
            translate={position(16, 18.5 + 19 / 2)}
          />

          <Rectangle
            fill={`#101820`}
            width={ALLSize.width}
            height={elementSize * 8}
            translate={position(19, 4)}
          />
          <text
            x={`50%`}
            y={4 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#fff'
            fontSize={`18px`}
          >
            Whitespace x La Clara
          </text>

          <Rectangle
            fill={`#fff`}
            width={elementSize * 24}
            height={elementSize * 8}
            translate={position(19, 16)}
          />
          <text
            x={`50%`}
            y={16 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#000'
            fontWeight={600}
            fontSize={`22px`}
          >
            Kaffe 01
          </text>

          <Rectangle
            fill={`#101820`}
            width={ALLSize.width}
            height={elementSize * 9}
            translate={position(19, 48.5)}
          />

          <text
            x={5 * elementSize + ALLSize.sides / 2}
            y={48 * elementSize + ALLSize.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#fff'
            fontSize={`12px`}
          >
            Odlat av Oscar Restrepo i Apía, handrostat
          </text>
          <text
            x={5 * elementSize + ALLSize.sides / 2}
            y={50 * elementSize + ALLSize.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#fff'
            fontSize={`12px`}
          >
            av José Gil Ramírez i Stallarholmen
          </text>
        </svg>
      </div>
    </>
  )
}
