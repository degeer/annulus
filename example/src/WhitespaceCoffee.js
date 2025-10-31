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

const WhitespaceVisitkort = ({
  color = true,
  dots = true,
  dotDistance = 1,
  lines = false
}) => {
  let elementSize = 9 // 9, 27, 54

  function position(x, y, rotate = false) {
    return [
      x * elementSize + ALLSize.sides / 2,
      y * elementSize + ALLSize.sides / 2,
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

  let WSDistance = elementSize * dotDistance

  let ALLSize = {
    width: 38 * elementSize,
    height: 63 * elementSize,
    sides: 2
  }
  let ALLSize2 = {
    width: 38 * elementSize,
    height: 21 * elementSize,
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
            width={ALLSize.width}
            height={ALLSize.height}
            distance={elementSize}
            style={{
              stroke: `blue`,
              strokeWidth: `0.5`
            }}
            transform={`translate(${(ALLSize.width + ALLSize.sides) / 2}, ${
              (ALLSize.height + ALLSize.sides) / 2
            })`}
          /> */}

          <Rectangle
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 63 / 2)}
            fill={`#fff`}
          />

          <RectangleDots
            distance={WSDistance}
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 63 / 2)}
            inner={true}
          />

          <Rectangle
            fill={`#fff`}
            width={ALLSize.width}
            height={elementSize * 19}
            translate={position(19, 35 + 19 / 2)}
          />

          <Annulus
            fill={WS2}
            angleFrom={0}
            angleTo={90}
            // distance={WSDistance}
            innerRadius={(elementSize * 19) / 3}
            outerRadius={elementSize * 19}
            translate={position(0, 54)}
          />

          <Rectangle
            fill={WS3}
            width={ALLSize.width / 2}
            height={elementSize * 19}
            translate={position(19 + 19 / 2, 35 + 19 / 2)}
          />

          <Circle
            fill={WS1}
            radius={elementSize * 3}
            translate={position(16, 28.5 + 19 / 2)}
          />

          <Rectangle
            fill={`#101820`}
            width={ALLSize.width}
            height={elementSize * 8}
            translate={position(19, 4)}
          />
          <text
            x={`50%`}
            y={4 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#fff'
            fontSize={`18px`}
          >
            Whitespace x La Clara
          </text>
          {/* <Rectangle
            fill={`#fff`}
            width={ALLSize.width}
            height={elementSize * 54}
            translate={position(19, 9 + 27)}
          /> */}

          <Rectangle
            fill={`#fff`}
            width={elementSize * 24}
            height={elementSize * 8}
            translate={position(19, 20)}
          />
          <text
            x={`50%`}
            y={20 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#000'
            fontWeight={600}
            fontSize={`22px`}
          >
            Kaffe 01
          </text>

          {/* <Rectangle
            fill={WS3}
            width={ALLSize.width}
            height={elementSize * 10}
            translate={position(19, 49)}
          /> */}

          <Rectangle
            fill={`#101820`}
            width={ALLSize.width}
            height={elementSize * 9}
            translate={position(19, 58.5)}
          />
          {/* <text
            x={`50%`}
            y={57 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#fff'
            fontSize='12'
          >
            Odlat i Colombia
          </text>
          <text
            x={`50%`}
            y={60.5 * elementSize + ALLSize.sides / 2}
            dominantBaseline='middle'
            textAnchor='middle'
            fill='#fff'
            fontSize='12'
          >
            Handrostat i Stallarholmen
          </text> */}

          <text
            x={5 * elementSize + ALLSize.sides / 2}
            y={58 * elementSize + ALLSize.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#fff'
            fontSize={`12px`}
          >
            Odlat av Oscar Restrepo i Apía, handrostat
          </text>
          <text
            x={5 * elementSize + ALLSize.sides / 2}
            y={60 * elementSize + ALLSize.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#fff'
            fontSize={`12px`}
          >
            av José Gil Ramírez i Stallarholmen
          </text>
          {/* <text
            x={4 * elementSize + ALLSize.sides / 2}
            y={60 * elementSize + ALLSize.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#fff'
            fontSize={`12px`}
          >
            Ramírez.
          </text> */}
          {/* <foreignObject
            x='0'
            y={55 * elementSize + ALLSize.sides / 2}
            width={ALLSize.width}
            height='45' // Adjust height as needed
          >
            <div
              xmlns='http://www.w3.org/1999/xhtml'
              style={{
                textAlign: 'left',
                maxWidth: '275px',
                margin: '0 auto',
                color: '#fff',
                fontSize: '12px'
              }}
            >
              Odlat av Oscar Restrepo i Apía, handrostat i Stallarholmen av José
              Gil Ramírez.
            </div>
          </foreignObject> */}

          {/* <RectangleLines
            width={ALLSize.width}
            height={ALLSize.height}
            distance={elementSize}
            style={{
              stroke: `blue`,
              strokeWidth: `0.5`
            }}
            transform={`translate(${(ALLSize.width + ALLSize.sides) / 2}, ${
              (ALLSize.height + ALLSize.sides) / 2
            })`}
          /> */}
        </svg>
      </div>
      {/* <div className={`elements-all`}>
        <svg
          viewBox={`0 0 ${ALLSize2.width + ALLSize2.sides} ${
            ALLSize2.height + ALLSize2.sides
          }`}
          xmlns={`http://www.w3.org/2000/svg`}
          fill={`none`}
          aria-hidden={`true`}
        >
          <Rectangle
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 63 / 2)}
            fill={`#fff`}
          />
          <Annulus
            fill={WS2}
            angleFrom={180}
            angleTo={360}
            // distance={WSDistance}
            innerRadius={(elementSize * 21) / 2 / 3}
            outerRadius={(elementSize * 21) / 2}
            translate={position(38, 21 / 2)}
          />
          <RectangleDots
            distance={WSDistance}
            width={ALLSize.width}
            height={ALLSize.height}
            translate={position(19, 63 / 2)}
            inner={true}
          />
          <Rectangle
            fill={`#fff`}
            width={elementSize * 15}
            height={elementSize * 5}
            translate={position(9.5, 4.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={4 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
            fontWeight={600}
          >
            Rostade kaffebönor
          </text>
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={6 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            Vikt: 250g
          </text>

          <Rectangle
            fill={`#fff`}
            width={elementSize * 20}
            height={elementSize * 3}
            translate={position(12, 10.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={11 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            La Clara Coffee Roasters AB
          </text>

          <Rectangle
            fill={`#fff`}
            width={elementSize * 23}
            height={elementSize * 5}
            translate={position(13.5, 16.5)}
          />
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={16 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            Kontakt: hello@whitespace.coffee
          </text>
          <text
            x={3 * elementSize + ALLSize2.sides / 2}
            y={18 * elementSize + ALLSize2.sides / 2}
            dominantBaseline='start'
            textAnchor='start'
            fill='#000'
            fontSize='12'
          >
            www.whitespace.coffee
          </text>
        </svg>
      </div> */}
    </>
  )
}

export default WhitespaceVisitkort
