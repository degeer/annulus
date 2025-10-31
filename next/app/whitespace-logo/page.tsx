'use client'

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

export default function WhitespaceLogo() {
  const dots = true
  const dotDistance = 1 / 24
  const lines = false
  const elementSize = 6

  function position(x: number, y: number, rotate = 0) {
    return [
      elementSize / 3 + x * elementSize * 0.5,
      y * elementSize * 0.5,
      rotate
    ]
  }

  const color10 = `#000`
  const colorGrey = `#ccc`
  const WS1 = `#ff5100`
  const WS2 = `#f7b018`
  const WS3 = `#215da6`

  const WSSize = {
    width: elementSize * 12,
    height: elementSize * 3
  }

  const WSDistance = elementSize * dotDistance

  return (
    <svg
      viewBox={`0 0 ${WSSize.width} ${WSSize.height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
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
      <Arc box={elementSize} fill={WS3} translate={position(1, 3)} />
      {dots ? (
        <ArcDots
          box={elementSize}
          distance={WSDistance}
          translate={position(2 + 1 / 3, 3)}
        />
      ) : (
        <Arc box={elementSize} fill={colorGrey} translate={position(2 + 1 / 3, 3)} />
      )}
      <Arc box={elementSize} fill={WS2} translate={position(5 - 1 / 3, 3, 180)} />
      {dots ? (
        <RectangleDots
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          distance={WSDistance}
          translate={position(4, 2 + 1 / 3)}
        />
      ) : (
        <Rectangle
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          fill={colorGrey}
          translate={position(4, 2 + 1 / 3)}
        />
      )}
      <Rectangle
        fill={WS1}
        width={elementSize / 3}
        height={elementSize}
        translate={position(6 + 1 / 3, 3)}
      />
      {dots ? (
        <CircleDots
          radius={elementSize / 6}
          distance={WSDistance}
          translate={position(6 + 1 / 3, 2)}
        />
      ) : (
        <Circle
          radius={elementSize / 6}
          fill={colorGrey}
          translate={position(6 + 1 / 3, 2)}
        />
      )}
      <Rectangle
        fill={WS3}
        width={(elementSize * 2) / 3}
        height={elementSize / 3}
        translate={position(7 + 2 / 3, 2 + 1 / 3)}
      />
      {dots ? (
        <RectangleDots
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          distance={WSDistance}
          translate={position(7 + 2 / 3, 2 + 1 / 3)}
        />
      ) : (
        <Rectangle
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          fill={colorGrey}
          translate={position(7 + 2 / 3, 2 + 1 / 3)}
        />
      )}
      <Annulus
        fill={WS1}
        angleFrom={180}
        angleTo={270}
        innerRadius={elementSize / 6}
        outerRadius={elementSize / 2}
        translate={position(9 + 2 / 3, 3)}
      />
      {dots ? (
        <AnnulusDots
          angleFrom={-90}
          angleTo={90}
          distance={WSDistance}
          innerRadius={0}
          outerRadius={elementSize / 2}
          translate={position(9 + 2 / 3, 3)}
        />
      ) : (
        <Annulus
          angleFrom={-90}
          angleTo={90}
          fill={colorGrey}
          innerRadius={0}
          outerRadius={elementSize / 2}
          translate={position(9 + 2 / 3, 3)}
        />
      )}
      <Annulus
        fill={WS3}
        angleFrom={-90}
        angleTo={90}
        innerRadius={elementSize / 6}
        outerRadius={elementSize / 2}
        translate={position(12 + 2 / 3, 3)}
      />
      {dots ? (
        <AnnulusDots
          angleFrom={90}
          angleTo={270}
          distance={WSDistance}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(12, 3)}
        />
      ) : (
        <Annulus
          angleFrom={90}
          angleTo={270}
          fill={colorGrey}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(12, 3)}
        />
      )}
      <Annulus
        fill={WS2}
        angleFrom={0}
        angleTo={360}
        innerRadius={elementSize / 6}
        outerRadius={elementSize / 2}
        translate={position(15, 3)}
      />
      {dots ? (
        <RectangleDots
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          distance={WSDistance}
          translate={position(14 + 1 / 3, 3 + 2 / 3)}
        />
      ) : (
        <Rectangle
          width={elementSize / 3}
          height={(elementSize * 5) / 3}
          fill={colorGrey}
          translate={position(14 + 1 / 3, 3 + 2 / 3)}
        />
      )}
      <Rectangle
        fill={WS1}
        width={elementSize / 3}
        height={elementSize}
        translate={position(18, 3)}
      />
      {dots ? (
        <AnnulusDots
          angleFrom={0}
          angleTo={360}
          distance={WSDistance}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(17 + 1 / 3, 3)}
        />
      ) : (
        <Annulus
          angleFrom={0}
          angleTo={360}
          fill={colorGrey}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(17 + 1 / 3, 3)}
        />
      )}
      <Annulus
        fill={WS3}
        angleFrom={-45}
        angleTo={45}
        innerRadius={elementSize / 6}
        outerRadius={elementSize / 2}
        translate={position(19 + 2 / 3, 3)}
      />
      {dots ? (
        <AnnulusDots
          angleFrom={135}
          angleTo={315}
          distance={WSDistance}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(19 + 2 / 3, 3)}
        />
      ) : (
        <Annulus
          angleFrom={135}
          angleTo={315}
          fill={colorGrey}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          translate={position(19 + 2 / 3, 3)}
        />
      )}
      <Annulus
        fill={WS2}
        angleFrom={180}
        angleTo={270}
        innerRadius={elementSize / 6}
        outerRadius={elementSize / 2}
        translate={position(21 + 2 / 3, 3)}
      />
      {dots ? (
        <AnnulusDots
          angleFrom={-90}
          angleTo={90}
          distance={WSDistance}
          innerRadius={0}
          outerRadius={elementSize / 2}
          translate={position(21 + 2 / 3, 3)}
        />
      ) : (
        <Annulus
          angleFrom={-90}
          angleTo={90}
          fill={colorGrey}
          innerRadius={0}
          outerRadius={elementSize / 2}
          translate={position(21 + 2 / 3, 3)}
        />
      )}
    </svg>
  )
}
