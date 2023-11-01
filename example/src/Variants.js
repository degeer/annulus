import React from 'react'

import {
  Annulus,
  Arc,
  Circle,
  Rectangle,
  Sector,
  Triangle,
  ArcDots,
  AnnulusDots,
  CircleDots,
  RectangleDots,
  SectorDots,
  RectangleLines,
  Lozenge
} from 'annulus'

export const Diamonds = ({ width = 1, height = 3, counter = 3, ...rest }) => {
  counter -= 1
  let positions = [
    { x: 0, y: 0 },
    { x: width, y: -height }
  ]
  for (let index = 0; index < counter; index++) {
    if (index % 2 === 0) {
      positions.push({ x: 2 * width, y: height * 2 })
    } else {
      positions.push({ x: 2 * width, y: -height * 2 })
    }
  }

  if (counter % 2 === 0) {
    positions.push({ x: width, y: height }, { x: -width, y: height })
  } else {
    positions.push({ x: width, y: -height }, { x: -width, y: -height })
  }

  for (let index = 0; index < counter; index++) {
    if (
      (counter % 2 === 0 && index % 2 !== 0) ||
      (counter % 2 !== 0 && index % 2 === 0)
    ) {
      positions.push({ x: -2 * width, y: height * 2 })
    } else {
      positions.push({ x: -2 * width, y: -height * 2 })
    }
  }

  console.log(positions)
  return <Triangle positions={positions} {...rest} />
}

const Variants = () => {
  let elementSize = 24

  let dotsColor = `#000`
  let bounding = 0 //128
  let size2 = {
    width: elementSize * 64,
    height: elementSize * 34
  }

  function xy(x, y) {
    return `translate(${x * elementSize + bounding},${
      y * elementSize + bounding
    })`
  }

  let distance2 = elementSize / 1

  const color1 = `rgb(193,18,28)`
  const color2 = `rgb(250,132,43)`
  const color3 = `rgb(43,44,124)`

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMinYMin slice'
        viewBox={`0 0 ${size2.width + bounding * 2} ${
          size2.height + bounding * 2
        }`}
      >
        <RectangleLines
          width={elementSize * 64}
          height={elementSize * 34}
          distance={distance2 / 2}
          style={{
            stroke: `#ccc`,
            strokeWidth: `1`
          }}
          transform={xy(32, 17)}
        />
        <Arc
          box={elementSize * 12}
          style={{
            fill: color3
          }}
          transform={xy(7, 7)}
        />
        <Annulus
          angleFrom={60}
          angleTo={330}
          innerRadius={elementSize * 2}
          outerRadius={elementSize * 6}
          style={{
            fill: color1
          }}
          transform={xy(21, 7)}
        />
        <Sector
          angleFrom={0}
          angleTo={260}
          outerRadius={elementSize * 6}
          style={{
            fill: color2
          }}
          transform={xy(35, 7)}
        />
        <Circle
          radius={elementSize * 6}
          style={{
            fill: color3
          }}
          transform={xy(49, 7)}
        />

        <Rectangle
          width={elementSize * 7}
          height={elementSize * 12}
          style={{
            fill: color1
          }}
          transform={xy(59.5, 7)}
        />

        <ArcDots
          box={elementSize * 12}
          distance={elementSize / 2}
          transform={xy(7, 20)}
        />
        <AnnulusDots
          angleFrom={0}
          angleTo={360}
          distance={elementSize}
          innerRadius={elementSize * 2}
          outerRadius={elementSize * 6}
          transform={xy(21, 20)}
        />
        <SectorDots
          angleFrom={0}
          angleTo={270}
          distance={elementSize * 2}
          outerRadius={elementSize * 6}
          transform={xy(35, 20)}
        />
        <CircleDots
          radius={elementSize * 6}
          distance={elementSize * 3}
          transform={xy(49, 20)}
        />

        <RectangleLines
          width={elementSize * 12}
          height={elementSize * 6}
          distance={distance2 / 2}
          style={{
            stroke: dotsColor,
            strokeWidth: `1`
          }}
          transform={xy(7, 30)}
        />

        <RectangleLines
          width={elementSize * 12}
          height={elementSize * 6}
          distance={distance2 / 2}
          style={{
            stroke: dotsColor,
            strokeWidth: `1`
          }}
          transform={xy(21, 30)}
          inner={true}
        />

        <RectangleDots
          width={elementSize * 12}
          height={elementSize * 6}
          distance={elementSize}
          transform={xy(35, 30)}
          inner={true}
        />

        <RectangleDots
          width={elementSize * 12}
          height={elementSize * 6}
          distance={elementSize / 2}
          transform={xy(49, 30)}
        />

        <Lozenge
          width={1}
          height={3}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(57, 30)}
        />

        <Lozenge
          width={1}
          height={3}
          size={elementSize}
          style={{
            fill: color2
          }}
          transform={xy(59.5, 30)}
        />

        <Lozenge
          width={1}
          height={3}
          size={elementSize}
          style={{
            fill: color3
          }}
          transform={xy(62, 30)}
        />

        <Triangle
          positions={[
            { x: 0, y: -3 },
            { x: 3.5, y: 4 },
            { x: -7, y: 0 }
          ]}
          size={elementSize}
          style={{
            fill: color3
          }}
          transform={xy(59.5, 17)}
        />

        <Triangle
          positions={[
            { x: 0, y: -3 },
            { x: 3.5, y: 7 },
            { x: -7, y: 0 }
          ]}
          size={elementSize}
          style={{
            fill: color2
          }}
          transform={xy(59.5, 22)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={1}
          size={elementSize}
          style={{
            fill: color1
            // stroke: color2,
            // strokeWidth: `4`
          }}
          transform={xy(1, 30)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={2}
          size={elementSize}
          style={{
            fill: color1
            // stroke: color2,
            // strokeWidth: `4`
          }}
          transform={xy(15, 30)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={3}
          size={elementSize}
          style={{
            fill: color1
            // stroke: color2,
            // strokeWidth: `4`
          }}
          transform={xy(29.5, 30)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={4}
          size={elementSize}
          style={{
            fill: color1
            // stroke: color2,
            // strokeWidth: `4`
          }}
          transform={xy(43, 30)}
        />
      </svg>
    </>
  )
}

export default Variants
