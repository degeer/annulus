import React from 'react'

import {
  Annulus,
  Arc,
  Circle,
  Rectangle,
  Sector,
  ArcDots,
  AnnulusDots,
  CircleDots,
  RectangleDots,
  SectorDots,
  RectangleLines
} from 'annulus'

const App = () => {
  let elementSize = 256 * 2
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
    <>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Annulus
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(0, 0)}
        />
        <Arc
          box={elementSize}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(3, 1)}
        />
        <Circle
          radius={elementSize / 2}
          style={{
            fill: `rgb(43,44,124)`
          }}
          transform={position(5, 1)}
        />
        <Rectangle
          width={elementSize}
          height={elementSize}
          style={{
            fill: `rgb(245,255,0)`
          }}
          transform={position(1, 3)}
        />
        <Sector
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          style={{
            fill: `rgb(27,84,44)`
          }}
          transform={position(4, 4)}
        />
        <Annulus
          angleFrom={-90}
          angleTo={90}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(5, 3)}
        />
        <Sector
          angleFrom={-90}
          angleTo={90}
          outerRadius={elementSize / 2}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(5, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Annulus
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(0, 0)}
        />
        <Arc
          box={elementSize}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(3, 1)}
        />
        <Circle
          radius={elementSize / 2}
          style={{
            fill: `rgb(43,44,124)`
          }}
          transform={position(5, 1)}
        />
        <Rectangle
          width={elementSize}
          height={elementSize}
          style={{
            fill: `rgb(245,255,0)`
          }}
          transform={position(1, 3)}
        />
        <Sector
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          style={{
            fill: `rgb(27,84,44)`
          }}
          transform={position(4, 4)}
        />
        <Annulus
          angleFrom={-90}
          angleTo={90}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(5, 3)}
        />
        <Sector
          angleFrom={-90}
          angleTo={90}
          outerRadius={elementSize / 2}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(5, 4)}
        />
        <AnnulusDots
          angleFrom={90}
          angleTo={180}
          distance={elementSize / 12}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          transform={position(0, 0)}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 12}
          transform={position(3, 1)}
        />
        <CircleDots
          radius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 1)}
        />
        <RectangleDots
          width={elementSize}
          height={elementSize}
          distance={elementSize / 12}
          transform={position(1, 3)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 12}
          transform={position(4, 4)}
        />
        <AnnulusDots
          angleFrom={-90}
          angleTo={90}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 3)}
        />
        <SectorDots
          angleFrom={-90}
          angleTo={90}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <RectangleLines
          width={size.width}
          height={size.height}
          distance={elementSize / 24}
          style={{
            stroke: `#ccc`,
            strokeWidth: `1`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
        <AnnulusDots
          angleFrom={90}
          angleTo={180}
          distance={elementSize / 12}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          transform={position(0, 0)}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 12}
          transform={position(3, 1)}
        />
        <CircleDots
          radius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 1)}
        />
        <RectangleDots
          width={elementSize}
          height={elementSize}
          distance={elementSize / 12}
          transform={position(1, 3)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 12}
          transform={position(4, 4)}
        />
        <AnnulusDots
          angleFrom={-90}
          angleTo={90}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 3)}
        />
        <SectorDots
          angleFrom={-90}
          angleTo={90}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <AnnulusDots
          angleFrom={-90}
          angleTo={0}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(1, 1)}
        />
        <AnnulusDots
          angleFrom={-90}
          angleTo={-45}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(3, 1)}
        />
        <AnnulusDots
          angleFrom={-90}
          angleTo={270}
          innerRadius={elementSize / 6}
          outerRadius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 1)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <AnnulusDots
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          distance={elementSize / 8}
          transform={position(0, 0)}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 8}
          transform={position(3, 1)}
        />
        <CircleDots
          radius={elementSize / 2}
          distance={elementSize / 8}
          transform={position(5, 1)}
        />
        <RectangleDots
          width={elementSize}
          height={elementSize}
          distance={elementSize / 8}
          transform={position(1, 3)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 8}
          transform={position(4, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Annulus
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(0, 0)}
        />
        <Arc
          box={elementSize}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(3, 1)}
        />
        <Circle
          radius={elementSize / 2}
          style={{
            fill: `rgb(43,44,124)`
          }}
          transform={position(5, 1)}
        />
        <Rectangle
          width={elementSize}
          height={elementSize}
          style={{
            fill: `rgb(245,255,0)`
          }}
          transform={position(1, 3)}
        />
        <Sector
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          style={{
            fill: `rgb(27,84,44)`
          }}
          transform={position(4, 4)}
        />
        <AnnulusDots
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          distance={elementSize / 12}
          transform={position(0, 0)}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 12}
          transform={position(3, 1)}
        />
        <CircleDots
          radius={elementSize / 2}
          distance={elementSize / 12}
          transform={position(5, 1)}
        />
        <RectangleDots
          width={elementSize}
          height={elementSize}
          distance={elementSize / 12}
          transform={position(1, 3)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 12}
          transform={position(4, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Annulus
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(0, 0)}
        />
        <Arc
          box={elementSize}
          style={{
            fill: `rgb(250,132,43)`
          }}
          transform={position(3, 1)}
        />
        <Circle
          radius={elementSize / 2}
          style={{
            fill: `rgb(43,44,124)`
          }}
          transform={position(5, 1)}
        />
        <Rectangle
          width={elementSize}
          height={elementSize}
          style={{
            fill: `rgb(245,255,0)`
          }}
          transform={position(1, 3)}
        />
        <Sector
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          style={{
            fill: `rgb(27,84,44)`
          }}
          transform={position(4, 4)}
        />
        <AnnulusDots
          angleFrom={90}
          angleTo={180}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          distance={elementSize / 6}
          transform={position(0, 0)}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 6}
          transform={position(3, 1)}
        />
        <CircleDots
          radius={elementSize / 2}
          distance={elementSize / 6}
          transform={position(5, 1)}
        />
        <RectangleDots
          width={elementSize}
          height={elementSize}
          distance={elementSize / 6}
          transform={position(1, 3)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 6}
          transform={position(4, 4)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Sector
          angleFrom={-90}
          angleTo={0}
          outerRadius={elementSize}
          style={{
            fill: `rgb(43,44,124)`
          }}
          transform={position(2, 2)}
        />
        <Annulus
          angleFrom={90}
          angleTo={270}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          style={{
            fill: `rgb(193,18,28)`
          }}
          transform={position(2, 2)}
        />
        <SectorDots
          angleFrom={270}
          angleTo={360}
          outerRadius={elementSize}
          distance={elementSize / 18}
          transform={position(2, 2)}
        />
        <AnnulusDots
          angleFrom={90}
          angleTo={270}
          innerRadius={elementSize / 3}
          outerRadius={elementSize}
          distance={elementSize / 12}
          transform={position(2, 2)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <RectangleDots
          width={elementSize * 2}
          height={elementSize * 2}
          style={{
            fill: `rgb(245,255,0)`
          }}
          distance={64}
          transform={position(3, 2)}
        />
        <CircleDots
          radius={elementSize}
          style={{
            fill: `rgb(43,44,124)`
            // opacity: `0.5`
          }}
          distance={64}
          transform={position(3, 2)}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <RectangleLines
          width={size.width}
          height={size.height}
          distance={elementSize / 24}
          style={{
            stroke: `#ccc`,
            strokeWidth: `1`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
        <Arc
          box={elementSize}
          style={{
            fill: `#215da5`
          }}
          transform={`translate(${32 + elementSize / 2 + elementSize / 12}, ${
            32 + elementSize * 1.25
          })`}
        />
        <ArcDots
          box={elementSize}
          distance={elementSize / 24}
          transform={`translate(${
            32 + elementSize / 2 + (2 * elementSize) / 3 + elementSize / 12
          }, ${32 + elementSize * 1.25})`}
        />
        <g
          transform={`translate(${
            32 + elementSize / 2 + (5.5 * elementSize) / 3 + elementSize / 12
          }, ${32 + elementSize * 1.25})`}
        >
          <Arc
            box={elementSize}
            style={{
              fill: `#f7b219`
            }}
            transform={`rotate(180)`}
          />
        </g>

        <RectangleDots
          width={elementSize / 3}
          height={elementSize * 1.5}
          distance={elementSize / 24}
          transform={`translate(${
            32 + elementSize / 2 + (4.5 * elementSize) / 3 + elementSize / 12
          }, ${32 + elementSize})`}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <Rectangle
          width={size.width}
          height={size.height}
          distance={elementSize / 24}
          style={{
            fill: `#eee`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
        <RectangleDots
          width={size.width}
          height={size.height}
          distance={elementSize / 8}
          style={{
            fill: `#ccc`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
        <RectangleDots
          width={size.width}
          height={size.height}
          distance={elementSize / 8}
          inner={true}
          style={{
            fill: `#ccc`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
      </svg>
      <svg viewBox={`0 0 ${size.width + 64} ${size.height + 64}`}>
        <RectangleLines
          width={size.width}
          height={size.height}
          distance={elementSize / 24}
          style={{
            stroke: `#000`,
            strokeWidth: `1`
          }}
          transform={`translate(${32 + size.width / 2}, ${
            32 + +size.height / 2
          })`}
        />
      </svg>
    </>
  )
}

export default App
