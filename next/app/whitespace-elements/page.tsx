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

export default function WhitespaceElements({
  dots = false,
  dotDistance = 1 / 24,
  lines = false
}: {
  dots?: boolean
  dotDistance?: number
  lines?: boolean
}) {
  let elementSize = 6

  function position(x: number, y: number, rotate: number | false = false) {
    return [
      x * elementSize * 0.5,
      y * elementSize * 0.5 - elementSize / 2,
      rotate ? rotate : 0
    ]
  }

  const color10 = `#000`

  let colorGrey = `var(--color-logo-space)`
  let WS1 = `var(--color-ws-orange)`
  let WS2 = `var(--color-ws-yellow)`
  let WS3 = `var(--color-ws-blue)`

  let WSSize = {
    width: 68,
    height: elementSize * 2
  }

  let WSDistance = elementSize * dotDistance

  let displayClassName = false
  return (
    <>
      <div className={`elements`}>
        <svg
          viewBox={`0 0 ${6} ${6}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Circle
            radius={elementSize / 2}
            fill={WS1}
            translate={position(1, 2)}
          />
        </svg>
        <svg
          viewBox={`0 0 ${3} ${3}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Annulus
            className={displayClassName ? `S` : undefined}
            fill={WS3}
            angleFrom={180}
            angleTo={270}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            translate={position(1, 1)}
          />
        </svg>
        <svg
          viewBox={`0 0 ${6} ${3}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Annulus
            className={displayClassName ? `S` : undefined}
            fill={WS2}
            angleFrom={-90}
            angleTo={90}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            translate={position(1, 2)}
          />
        </svg>
        <svg
          viewBox={`0 0 ${6} ${6}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Annulus
            className={displayClassName ? `S` : undefined}
            fill={WS1}
            angleFrom={0}
            angleTo={360}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            translate={position(1, 2)}
          />
        </svg>
        <svg
          viewBox={`0 0 ${3} ${3}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Annulus
            className={displayClassName ? `S` : undefined}
            fill={WS3}
            angleFrom={270}
            angleTo={360}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            translate={position(1, 2)}
          />
        </svg>
      </div>
      <svg
        viewBox={`0 0 ${WSSize.width} ${WSSize.height}`}
        xmlns={`http://www.w3.org/2000/svg`}
        fill={`none`}
        aria-hidden={`true`}
        className={`logo__graphic`}
      >
        {lines && (
          <RectangleLines
            width={WSSize.width}
            height={WSSize.height}
            distance={elementSize / 6}
            style={{
              stroke: color10,
              strokeWidth: `0.01`
            }}
            transform={`translate(${WSSize.width / 2}, ${WSSize.height / 2})`}
          />
        )}
        <Arc
          className={displayClassName ? `W` : undefined}
          box={elementSize}
          fill={WS3}
          translate={position(1, 3)}
        />
        {dots ? (
          <ArcDots
            box={elementSize}
            distance={WSDistance}
            translate={position(2 + 1 / 3, 3)}
          />
        ) : (
          <Arc
            box={elementSize}
            fill={colorGrey}
            translate={position(2 + 1 / 3, 3)}
          />
        )}
        <Arc
          className={displayClassName ? `H` : undefined}
          box={elementSize}
          fill={WS2}
          translate={position(5 - 1 / 3, 3, 180)}
        />
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
          className={displayClassName ? `I` : undefined}
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
          className={displayClassName ? `T` : undefined}
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
          className={displayClassName ? `E` : undefined}
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
          className={displayClassName ? `S` : undefined}
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
          className={displayClassName ? `P` : undefined}
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
          className={displayClassName ? `A` : undefined}
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
          className={displayClassName ? `C` : undefined}
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
          className={displayClassName ? `E` : undefined}
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
    </>
  )
}
