import {
  annulusPath,
  arcPath,
  circlePath,
  rectanglePath,
  sectorPath,
  annulusDots,
  arcDots,
  circleDots,
  rectangleDots,
  sectorDots,
  rectangleLines
} from './index.js'

import {
  Annulus,
  Arc,
  Circle,
  Rectangle,
  Sector,
  AnnulusDots,
  ArcDots,
  CircleDots,
  RectangleDots,
  SectorDots,
  RectangleLines
} from './react.js'

describe('vanilla JS exports', () => {
  it('annulusPath is truthy', () => {
    expect(annulusPath).toBeTruthy()
  })
  it('arcPath is truthy', () => {
    expect(arcPath).toBeTruthy()
  })
  it('circlePath is truthy', () => {
    expect(circlePath).toBeTruthy()
  })
  it('rectanglePath is truthy', () => {
    expect(rectanglePath).toBeTruthy()
  })
  it('sectorPath is truthy', () => {
    expect(sectorPath).toBeTruthy()
  })
  it('annulusDots is truthy', () => {
    expect(annulusDots).toBeTruthy()
  })
  it('arcDots is truthy', () => {
    expect(arcDots).toBeTruthy()
  })
  it('circleDots is truthy', () => {
    expect(circleDots).toBeTruthy()
  })
  it('rectangleDots is truthy', () => {
    expect(rectangleDots).toBeTruthy()
  })
  it('sectorDots is truthy', () => {
    expect(sectorDots).toBeTruthy()
  })
  it('rectangleLines is truthy', () => {
    expect(rectangleLines).toBeTruthy()
  })
})

describe('React exports', () => {
  it('Annulus is truthy', () => {
    expect(Annulus).toBeTruthy()
  })
  it('Arc is truthy', () => {
    expect(Arc).toBeTruthy()
  })
  it('Circle is truthy', () => {
    expect(Circle).toBeTruthy()
  })
  it('Rectangle is truthy', () => {
    expect(Rectangle).toBeTruthy()
  })
  it('Sector is truthy', () => {
    expect(Sector).toBeTruthy()
  })
  it('AnnulusDots is truthy', () => {
    expect(AnnulusDots).toBeTruthy()
  })
  it('ArcDots is truthy', () => {
    expect(ArcDots).toBeTruthy()
  })
  it('CircleDots is truthy', () => {
    expect(CircleDots).toBeTruthy()
  })
  it('RectangleDots is truthy', () => {
    expect(RectangleDots).toBeTruthy()
  })
  it('SectorDots is truthy', () => {
    expect(SectorDots).toBeTruthy()
  })
  it('RectangleLines is truthy', () => {
    expect(RectangleLines).toBeTruthy()
  })
})

describe('vanilla JS functions produce output', () => {
  it('annulusPath returns a string', () => {
    const result = annulusPath({
      angleFrom: 0,
      angleTo: 180,
      innerRadius: 50,
      outerRadius: 100
    })
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  })

  it('arcPath returns a string', () => {
    const result = arcPath({ box: 100 })
    expect(typeof result).toBe('string')
  })

  it('circlePath returns a string', () => {
    const result = circlePath({ radius: 50 })
    expect(typeof result).toBe('string')
  })

  it('rectanglePath returns a string', () => {
    const result = rectanglePath({ width: 100, height: 80 })
    expect(typeof result).toBe('string')
  })

  it('sectorPath returns a string', () => {
    const result = sectorPath({ angleFrom: 0, angleTo: 90, outerRadius: 100 })
    expect(typeof result).toBe('string')
  })

  it('annulusDots returns data', () => {
    const result = annulusDots({
      angleFrom: 0,
      angleTo: 180,
      innerRadius: 50,
      outerRadius: 100,
      distance: 20
    })
    expect(result.circles).toBeDefined()
  })
})
