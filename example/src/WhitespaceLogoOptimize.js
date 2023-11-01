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

const WhitespaceLogoOptimize = ({
  dots = false,
  dotDistance = 1 / 24,
  lines = false
}) => {
  let elementSize = 6 // 9, 27, 54

  function position(x, y, rotate = false) {
    // return `translate(${elementSize / 3 + x * elementSize * 0.5},${
    //   y * elementSize * 0.5
    // })`
    return [
      x * elementSize * 0.5,
      y * elementSize * 0.5 - elementSize / 2,
      rotate ? rotate : 0
    ]
  }

  // function positionTransform(x, y) {
  //   return `translate(${elementSize / 3 + x * elementSize * 0.5},${
  //     y * elementSize * 0.5
  //   })`
  // }
  // let dotsColor = `#000`

  const color10 = `#000`

  // let colorGrey = `rgba(0,0,90,.1)`
  // let WS1 = `#ff5100`
  // let WS2 = `#f7b018`
  // let WS3 = `#215da6`

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
        {/* <RectangleDots
          width={WSSize.width}
          height={WSSize.height}
          distance={elementSize / 6}
          translate={position(11 + 1 / 3, 3)}
        /> */}
        <Arc
          className={displayClassName && `W`}
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
          className={displayClassName && `H`}
          box={elementSize}
          fill={WS2}
          translate={position(5 - 1 / 3, 3, 180)}
          // transform={`rotate(180)`}
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
          className={displayClassName && `I`}
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
          className={displayClassName && `T`}
          fill={WS3}
          width={(elementSize * 2) / 3}
          height={elementSize / 3}
          // distance={elementSize / 12}
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
          className={displayClassName && `E`}
          fill={WS1}
          angleFrom={180}
          angleTo={270}
          // distance={elementSize / 12}
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
          className={displayClassName && `S`}
          fill={WS3}
          angleFrom={-90}
          angleTo={90}
          // distance={WSDistance}
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
          className={displayClassName && `P`}
          fill={WS2}
          angleFrom={0}
          angleTo={360}
          // distance={WSDistance}
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
          className={displayClassName && `A`}
          fill={WS1}
          width={elementSize / 3}
          height={elementSize}
          // distance={WSDistance}
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
          className={displayClassName && `C`}
          fill={WS3}
          angleFrom={-45}
          angleTo={45}
          // distance={elementSize / 12}
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
          className={displayClassName && `E`}
          fill={WS2}
          angleFrom={180}
          angleTo={270}
          // distance={elementSize / 12}
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

export default WhitespaceLogoOptimize
