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
    { x: 0, y: height },
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

const Variants2 = () => {
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
        <Diamonds
          width={1}
          height={3}
          counter={1}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(1, 1)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={2}
          size={elementSize}
          style={{
            fill: color2
          }}
          transform={xy(3.5, 1)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={3}
          size={elementSize}
          style={{
            fill: color3
          }}
          transform={xy(8, 1)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={24}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(14.5, 1)}
        />
        <Diamonds
          width={3}
          height={9}
          counter={3}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(1, 8)}
        />
        <Diamonds
          width={1.5}
          height={4.5}
          counter={5}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(20, 8)}
        />
        <Diamonds
          width={1.5}
          height={4.5}
          counter={5}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(20, 17)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={7}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(36, 8)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={7}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(36, 14)}
        />
        <Diamonds
          width={1}
          height={3}
          counter={7}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(36, 20)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 8)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 11)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 14)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 17)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 20)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={12}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(51, 23)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={62}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(1, 27)}
        />
        <Diamonds
          width={0.5}
          height={1.5}
          counter={62}
          size={elementSize}
          style={{
            fill: color1
          }}
          transform={xy(1, 30)}
        />
      </svg>
    </>
  )
}

export default Variants2
