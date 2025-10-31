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

const WhitespaceAll = ({
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
    width: 95,
    height: 56,
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
          {color && (
            <Annulus
              fill={WS1}
              angleFrom={90}
              angleTo={270}
              innerRadius={0}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0, 1)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              angleFrom={90}
              angleTo={270}
              innerRadius={0}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0, 1)}
            />
          )}
          {color && (
            <Rectangle
              fill={WS2}
              width={elementSize}
              height={elementSize * 3}
              translate={position(7, 3, 3, 1)}
            />
          )}
          {dots && (
            <RectangleDots
              distance={WSDistance}
              width={elementSize}
              height={elementSize * 3}
              translate={position(7, 3, 3, 1)}
            />
          )}
          {color && (
            <Arc
              fill={WS3}
              box={elementSize * 3}
              translate={position(12, 3, 6)}
            />
          )}
          {dots && (
            <ArcDots
              distance={WSDistance}
              box={elementSize * 3}
              translate={position(12, 3, 6)}
            />
          )}
          {color && (
            <Circle
              fill={WS1}
              radius={elementSize / 2}
              translate={position(9, 5, 5, 7)}
            />
          )}
          {dots && (
            <CircleDots
              distance={WSDistance}
              radius={elementSize / 2}
              translate={position(9, 5, 5, 7)}
            />
          )}
          {color && (
            <Annulus
              fill={WS3}
              angleFrom={0}
              angleTo={360}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 6, 1, 3)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              angleFrom={0}
              angleTo={360}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 6, 1, 3)}
            />
          )}
          {color && (
            <Annulus
              fill={WS1}
              angleFrom={180}
              angleTo={270}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(9, 6, 3, 3)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              angleFrom={180}
              angleTo={270}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(9, 6, 3, 3)}
            />
          )}
          {color && (
            <Annulus
              fill={WS2}
              angleFrom={-90}
              angleTo={90}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(13, 9, 0, 3)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              angleFrom={-90}
              angleTo={90}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(13, 9, 0, 3)}
            />
          )}
        </svg>
      </div>
      <div className={`elements`}>
        <svg
          viewBox={`0 0 ${38} ${20}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Annulus
              fill={WS1}
              angleFrom={90}
              angleTo={270}
              innerRadius={0}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              fill={WSBlack}
              angleFrom={90}
              angleTo={270}
              innerRadius={0}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${14} ${38}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Rectangle
              fill={WS2}
              width={elementSize}
              height={elementSize * 3}
              translate={position(1, 3)}
            />
          )}
          {dots && (
            <RectangleDots
              distance={WSDistance}
              fill={WSBlack}
              width={elementSize}
              height={elementSize * 3}
              translate={position(1, 3)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${38} ${38}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Arc fill={WS3} box={elementSize * 3} translate={position(3, 3)} />
          )}
          {dots && (
            <ArcDots
              distance={WSDistance}
              fill={WSBlack}
              box={elementSize * 3}
              translate={position(3, 3)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${14} ${14}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Circle
              fill={WS1}
              radius={elementSize / 2}
              translate={position(1, 1)}
            />
          )}
          {dots && (
            <CircleDots
              distance={WSDistance}
              fill={WSBlack}
              radius={elementSize / 2}
              translate={position(1, 1)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${38} ${38}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Annulus
              fill={WS3}
              angleFrom={0}
              angleTo={360}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 3)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              fill={WSBlack}
              angleFrom={0}
              angleTo={360}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 3)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${20} ${20}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Annulus
              fill={WS1}
              angleFrom={180}
              angleTo={270}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              fill={WSBlack}
              angleFrom={180}
              angleTo={270}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 0)}
            />
          )}
        </svg>
        <svg
          viewBox={`0 0 ${38} ${20}`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          {color && (
            <Annulus
              fill={WS2}
              angleFrom={-90}
              angleTo={90}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 3)}
            />
          )}
          {dots && (
            <AnnulusDots
              distance={WSDistance}
              fill={WSBlack}
              angleFrom={-90}
              angleTo={90}
              innerRadius={elementSize / 2}
              outerRadius={(elementSize * 3) / 2}
              translate={position(3, 3)}
            />
          )}
        </svg>
      </div>
    </>
  )
}

export default WhitespaceAll
