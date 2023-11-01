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

const WhitespaceLogo = ({
  dots = false,
  dotDistance = 1 / 24,
  lines = false
}) => {
  let elementSize = 32 * 9

  function position(x, y) {
    return `translate(${elementSize / 3 + x * elementSize * 0.5},${
      y * elementSize * 0.5
    })`
  }

  let dotsColor = `#000`

  const color10 = `#000`

  let WS1 = `#ff5100`
  let WS2 = `#f7b018`
  let WS3 = `#215da6`

  let WSSize = {
    width: elementSize * 12,
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
          transform={position(1, 3)}
        />
        {dots ? (
          <ArcDots
            box={elementSize}
            distance={WSDistance}
            transform={position(2 + 1 / 3, 3)}
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
        <Arc
          className={`H`}
          box={elementSize}
          style={{
            fill: WS2
          }}
          transform={position(5 - 1 / 3, 3) + `rotate(180)`}
        />
        {dots ? (
          <RectangleDots
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            distance={WSDistance}
            transform={position(4, 2 + 1 / 3)}
          />
        ) : (
          <Rectangle
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            style={{
              fill: colorGrey
            }}
            transform={position(4, 2 + 1 / 3)}
          />
        )}
        <Rectangle
          className={`I`}
          style={{
            fill: WS1
          }}
          width={elementSize / 3}
          height={elementSize}
          transform={position(6 + 1 / 3, 3)}
        />
        {dots ? (
          <CircleDots
            radius={elementSize / 6}
            distance={WSDistance}
            transform={position(6 + 1 / 3, 2)}
          />
        ) : (
          <Circle
            radius={elementSize / 6}
            style={{
              fill: colorGrey
            }}
            transform={position(6 + 1 / 3, 2)}
          />
        )}
        <Rectangle
          className={`T`}
          style={{
            fill: WS3
          }}
          width={(elementSize * 2) / 3}
          height={elementSize / 3}
          distance={elementSize / 12}
          transform={position(7 + 2 / 3, 2 + 1 / 3)}
        />
        {dots ? (
          <RectangleDots
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            distance={WSDistance}
            transform={position(7 + 2 / 3, 2 + 1 / 3)}
          />
        ) : (
          <Rectangle
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            style={{
              fill: colorGrey
            }}
            transform={position(7 + 2 / 3, 2 + 1 / 3)}
          />
        )}
        <Annulus
          className={`E`}
          style={{
            fill: WS1
          }}
          angleFrom={180}
          angleTo={270}
          distance={elementSize / 12}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          transform={position(9 + 2 / 3, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={-90}
            angleTo={90}
            distance={WSDistance}
            innerRadius={0}
            outerRadius={elementSize / 2}
            transform={position(9 + 2 / 3, 3)}
          />
        ) : (
          <Annulus
            angleFrom={-90}
            angleTo={90}
            style={{
              fill: colorGrey
            }}
            innerRadius={0}
            outerRadius={elementSize / 2}
            transform={position(9 + 2 / 3, 3)}
          />
        )}
        <Annulus
          className={`S`}
          style={{
            fill: WS3
          }}
          angleFrom={-90}
          angleTo={90}
          distance={WSDistance}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          transform={position(12 + 2 / 3, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={90}
            angleTo={270}
            distance={WSDistance}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(12, 3)}
          />
        ) : (
          <Annulus
            angleFrom={90}
            angleTo={270}
            style={{
              fill: colorGrey
            }}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(12, 3)}
          />
        )}
        <Annulus
          className={`P`}
          style={{
            fill: WS2
          }}
          angleFrom={0}
          angleTo={360}
          distance={WSDistance}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          transform={position(15, 3)}
        />
        {dots ? (
          <RectangleDots
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            distance={WSDistance}
            transform={position(14 + 1 / 3, 3 + 2 / 3)}
          />
        ) : (
          <Rectangle
            width={elementSize / 3}
            height={(elementSize * 5) / 3}
            style={{
              fill: colorGrey
            }}
            transform={position(14 + 1 / 3, 3 + 2 / 3)}
          />
        )}
        <Rectangle
          className={`A`}
          style={{
            fill: WS1
          }}
          width={elementSize / 3}
          height={elementSize}
          distance={WSDistance}
          transform={position(18, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={0}
            angleTo={360}
            distance={WSDistance}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(17 + 1 / 3, 3)}
          />
        ) : (
          <Annulus
            angleFrom={0}
            angleTo={360}
            style={{
              fill: colorGrey
            }}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(17 + 1 / 3, 3)}
          />
        )}
        <Annulus
          className={`C`}
          style={{
            fill: WS3
          }}
          angleFrom={-45}
          angleTo={45}
          distance={elementSize / 12}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          transform={position(19 + 2 / 3, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={135}
            angleTo={315}
            distance={WSDistance}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(19 + 2 / 3, 3)}
          />
        ) : (
          <Annulus
            angleFrom={135}
            angleTo={315}
            style={{
              fill: colorGrey
            }}
            innerRadius={elementSize / 6}
            outerRadius={elementSize / 2}
            transform={position(19 + 2 / 3, 3)}
          />
        )}
        <Annulus
          className={`E`}
          style={{
            fill: WS2
          }}
          angleFrom={180}
          angleTo={270}
          distance={elementSize / 12}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          transform={position(21 + 2 / 3, 3)}
        />
        {dots ? (
          <AnnulusDots
            angleFrom={-90}
            angleTo={90}
            distance={WSDistance}
            innerRadius={0}
            outerRadius={elementSize / 2}
            transform={position(21 + 2 / 3, 3)}
          />
        ) : (
          <Annulus
            angleFrom={-90}
            angleTo={90}
            style={{
              fill: colorGrey
            }}
            innerRadius={0}
            outerRadius={elementSize / 2}
            transform={position(21 + 2 / 3, 3)}
          />
        )}
      </svg>
    </>
  )
}

export default WhitespaceLogo
