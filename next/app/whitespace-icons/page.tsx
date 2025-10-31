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

export default function WhitespaceIcons() {
  const dots = true
  const dotDistance = 1 / 24
  const lines = false
  const type = 0

  const elementSize = 5
  const areaPadding = 2

  const WSSize = {
    width: 90,
    height: 90
  }

  const SvgArea = {
    width: WSSize.width + areaPadding,
    height: WSSize.height + areaPadding
  }

  function position(x: number, y: number) {
    return [
      (x * 2 * elementSize) / 2 + areaPadding / 2,
      (y * 2 * elementSize) / 2 + areaPadding / 2,
      0
    ]
  }

  const dotsColor = `#000`
  const color10 = `#ccc`
  const colorGrey = `rgba(0, 0, 90, 0.1)`
  const WS1 = `hsl(19, 100%, 50%)`
  const WS2 = `hsl(41, 93%, 53%)`
  const WS3 = `hsl(213, 67%, 39%)`

  const WSDistance = 24 * elementSize * dotDistance
  const displayClassName = false

  function type0() {
    return (
      <>
        <Annulus
          fill={WS1}
          angleFrom={180}
          angleTo={360}
          outerRadius={6 * elementSize}
          innerRadius={2 * elementSize}
          translate={position(6, 12)}
        />
        <Annulus
          fill={WS3}
          angleFrom={0}
          angleTo={360}
          outerRadius={6 * elementSize}
          innerRadius={2 * elementSize}
          translate={position(12, 12)}
        />
        {dots ? (
          <CircleDots
            radius={4 * elementSize}
            distance={WSDistance}
            translate={position(9, 4)}
            fill={dotsColor}
          />
        ) : (
          <Circle
            radius={3 * elementSize}
            fill={colorGrey}
            translate={position(9, 5)}
          />
        )}
      </>
    )
  }

  function type1() {
    return (
      <>
        <Circle
          radius={2 * elementSize}
          fill={WS1}
          translate={position(6, 4)}
        />
        <Annulus
          fill={WS3}
          angleFrom={-90}
          angleTo={90}
          outerRadius={6 * elementSize}
          innerRadius={2 * elementSize}
          translate={position(6, 12)}
        />
        <Annulus
          fill={WS2}
          angleFrom={-90}
          angleTo={90}
          outerRadius={6 * elementSize}
          innerRadius={2 * elementSize}
          translate={position(6, 18)}
        />
        {dots ? (
          <RectangleDots
            width={8 * elementSize}
            height={18 * elementSize}
            distance={WSDistance}
            translate={position(14, 9)}
            fill={dotsColor}
          />
        ) : (
          <Rectangle
            width={3 * elementSize}
            height={7 * elementSize}
            fill={colorGrey}
            translate={position(1, 4)}
          />
        )}
      </>
    )
  }

  function type2() {
    return (
      <>
        <Circle
          radius={2 * elementSize}
          fill={WS1}
          translate={position(2, 4)}
        />
        <Circle
          radius={2 * elementSize}
          fill={WS1}
          translate={position(9, 2)}
        />
        <Circle
          radius={2 * elementSize}
          fill={WS2}
          translate={position(16, 4)}
        />
        {dots ? (
          <ArcDots
            box={12 * elementSize}
            distance={WSDistance}
            translate={position(9, 12)}
            fill={dotsColor}
          />
        ) : (
          <Arc
            box={12 * elementSize}
            fill={colorGrey}
            translate={position(9, 12)}
          />
        )}
      </>
    )
  }

  function type3() {
    return (
      <>
        <Annulus
          fill={WS1}
          angleFrom={0}
          angleTo={360}
          outerRadius={2 * elementSize}
          innerRadius={6 * elementSize}
          translate={position(6, 12)}
        />
        <Annulus
          fill={WS2}
          angleFrom={0}
          angleTo={360}
          outerRadius={3 * elementSize}
          innerRadius={elementSize}
          translate={position(15, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={90}
            angleTo={180}
            fill={dotsColor}
            distance={WSDistance}
            outerRadius={9 * elementSize}
            innerRadius={3 * elementSize}
            translate={position(6, 3)}
          />
        ) : (
          <Annulus
            angleFrom={-90}
            angleTo={90}
            fill={colorGrey}
            outerRadius={6 * elementSize}
            innerRadius={2 * elementSize}
            translate={position(9, 9)}
          />
        )}
      </>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${SvgArea.width} ${SvgArea.height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      {lines && (
        <RectangleLines
          width={WSSize.width}
          height={WSSize.height}
          distance={elementSize}
          style={{
            stroke: color10,
            strokeWidth: `0.1`
          }}
          transform={`translate(${SvgArea.width / 2}, ${SvgArea.height / 2})`}
        />
      )}
      {type === 0 && type0()}
      {type === 1 && type1()}
      {type === 2 && type2()}
      {type === 3 && type3()}
    </svg>
  )
}
