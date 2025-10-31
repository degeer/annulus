'use client'

import {
  Annulus,
  Circle,
  Rectangle,
  RectangleDots
} from 'annulus'

export default function WhitespaceCoffee() {
  const elementSize = 9
  const WSDistance = elementSize * 1

  const ALLSize = {
    width: 38 * elementSize,
    height: 63 * elementSize,
    sides: 2
  }

  function position(x: number, y: number) {
    return [
      x * elementSize + ALLSize.sides / 2,
      y * elementSize + ALLSize.sides / 2,
      0
    ]
  }

  const WS1 = `#ff5100`
  const WS2 = `#f7b018`
  const WS3 = `#215da6`

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
        <Rectangle
          width={ALLSize.width}
          height={ALLSize.height}
          translate={position(19, 63 / 2)}
          fill="#fff"
        />
        <RectangleDots
          distance={WSDistance}
          width={ALLSize.width}
          height={ALLSize.height}
          translate={position(19, 63 / 2)}
          inner={true}
        />
        <Rectangle
          fill="#fff"
          width={ALLSize.width}
          height={elementSize * 19}
          translate={position(19, 35 + 19 / 2)}
        />
        <Annulus
          fill={WS2}
          angleFrom={0}
          angleTo={90}
          innerRadius={(elementSize * 19) / 3}
          outerRadius={elementSize * 19}
          translate={position(0, 54)}
        />
        <Rectangle
          fill={WS3}
          width={ALLSize.width / 2}
          height={elementSize * 19}
          translate={position(19 + 19 / 2, 35 + 19 / 2)}
        />
        <Circle
          fill={WS1}
          radius={elementSize * 3}
          translate={position(16, 28.5 + 19 / 2)}
        />
        <Rectangle
          fill="#101820"
          width={ALLSize.width}
          height={elementSize * 8}
          translate={position(19, 4)}
        />
        <text
          x="50%"
          y={4 * elementSize + ALLSize.sides / 2}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="18px"
        >
          Whitespace x La Clara
        </text>
        <Rectangle
          fill="#fff"
          width={elementSize * 24}
          height={elementSize * 8}
          translate={position(19, 20)}
        />
        <text
          x="50%"
          y={20 * elementSize + ALLSize.sides / 2}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#000"
          fontWeight={600}
          fontSize="22px"
        >
          Kaffe 01
        </text>
        <Rectangle
          fill="#101820"
          width={ALLSize.width}
          height={elementSize * 9}
          translate={position(19, 58.5)}
        />
        <text
          x={5 * elementSize + ALLSize.sides / 2}
          y={58 * elementSize + ALLSize.sides / 2}
          dominantBaseline="start"
          textAnchor="start"
          fill="#fff"
          fontSize="12px"
        >
          Odlat av Oscar Restrepo i Apía, handrostat
        </text>
        <text
          x={5 * elementSize + ALLSize.sides / 2}
          y={60 * elementSize + ALLSize.sides / 2}
          dominantBaseline="start"
          textAnchor="start"
          fill="#fff"
          fontSize="12px"
        >
          av José Gil Ramírez i Stallarholmen
        </text>
      </svg>
    </div>
  )
}
