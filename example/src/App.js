import React from 'react'

import { Annulus, Arc, Circle, Rectangle, Sector, RectangleDots } from 'annulus'

const App = () => {
  let elementSize = 256
  let size = {
    width: elementSize * 3,
    height: elementSize * 2
  }

  function position(x, y) {
    return `translate(${x * elementSize * 0.5 + 32},${
      y * elementSize * 0.5 + 32
    })`
  }

  return (
    <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
      <Annulus
        angleFrom={-90}
        angleTo={0}
        innerRadius={elementSize / 3}
        outerRadius={elementSize}
        style={{
          fill: `rgb(193,18,28)`
        }}
        transform={position(2, 2)}
      />
      <Circle
        radius={size.height / 4}
        style={{
          fill: `rgb(43,44,124)`
        }}
        transform={position(3, 1)}
      />
      <Rectangle
        width={elementSize}
        height={elementSize}
        style={{
          fill: `rgb(245,255,0)`
        }}
        transform={position(3, 3)}
      />
      <Sector
        angleFrom={90}
        angleTo={180}
        outerRadius={elementSize}
        style={{
          fill: `rgb(27,84,44)`
        }}
        transform={position(0, 2)}
      />
      <Arc
        box={elementSize}
        style={{
          fill: `rgb(250,132,43)`
        }}
        transform={position(5, 1)}
      />
      <RectangleDots
        width={elementSize}
        height={elementSize}
        distance={32}
        transform={position(5, 3)}
      />
    </svg>
  )
}

export default App
