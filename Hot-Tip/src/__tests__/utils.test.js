/* eslint-disable max-lines-per-function */
import {
  getPosition,
  getBottom,
  getTop,
  getRight,
  getLeft,
  getBounds,
  getRenderType,
} from '../utils'

const mockGetBounds = (
  left = 0,
  top = 0,
  width = 80,
  height = 10,
  clientWidth = 800,
  clientHeight = 900,
) => {
  return {top, left, width, height, clientWidth, clientHeight}
}

describe('utils > getPosition', () => {
  it('returns appropriate function (curries)', () => {
    expect(getPosition('top')).toEqual(getTop)
    expect(getPosition('right')).toEqual(getRight)
    expect(getPosition('left')).toEqual(getLeft)
    expect(getPosition('bottom')).toEqual(getBottom)
    expect(getPosition()).toEqual(getBottom)
  })
})

describe('utils > getBottom/getTop horizontal offsets', () => {
  describe('getBottom', () => {
    it('Should not offset when mid is 100px from edge', () => {
      const position = getBottom(mockGetBounds(60, 300))

      expect(position.layoutClass).toEqual('centred')
      expect(position.positionClass).toEqual('bottom')
      expect(position.x).toEqual(100)
      expect(position.y).toEqual(310)
      expect(position).toMatchSnapshot()
    })

    it('Should not offset when mid is 100px from (right) edge', () => {
      const position = getBottom(mockGetBounds(660, 300))

      expect(position.layoutClass).toEqual('centred')
      expect(position.positionClass).toEqual('bottom')
      expect(position.x).toEqual(700)
      expect(position.y).toEqual(310)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to left when < 100px from right', () => {
      const position = getBottom(mockGetBounds(661, 300))

      expect(position.layoutClass).toEqual('right-offset')
      expect(position.positionClass).toEqual('bottom')
      expect(position.x).toEqual(701)
      expect(position.y).toEqual(310)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to right when mid < 100px from left', () => {
      const position = getBottom(mockGetBounds(59, 300))

      expect(position.layoutClass).toEqual('left-offset')
      expect(position.positionClass).toEqual('bottom')
      expect(position.x).toEqual(99)
      expect(position.y).toEqual(310)
      expect(position).toMatchSnapshot()
    })
  })

  describe('getTop', () => {
    it('Should not offset when mid is 100px from edge', () => {
      const position = getTop(mockGetBounds(60, 300))

      expect(position.layoutClass).toEqual('centred')
      expect(position.positionClass).toEqual('top')
      expect(position.x).toEqual(100)
      expect(position.y).toEqual(300)
      expect(position).toMatchSnapshot()
    })

    it('Should not offset when mid is 100px from (right) edge', () => {
      const position = getTop(mockGetBounds(660, 300))

      expect(position.layoutClass).toEqual('centred')
      expect(position.positionClass).toEqual('top')
      expect(position.x).toEqual(700)
      expect(position.y).toEqual(300)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to left when < 100px from right', () => {
      const position = getTop(mockGetBounds(661, 300))

      expect(position.layoutClass).toEqual('right-offset')
      expect(position.positionClass).toEqual('top')
      expect(position.x).toEqual(701)
      expect(position.y).toEqual(300)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to right when mid < 100px from left', () => {
      const position = getTop(mockGetBounds(59, 300))

      expect(position.layoutClass).toEqual('left-offset')
      expect(position.positionClass).toEqual('top')
      expect(position.x).toEqual(99)
      expect(position.y).toEqual(300)
      expect(position).toMatchSnapshot()
    })
  })
})

describe('utils > getLeft/getRight vertical offsets', () => {
  describe('getRight', () => {
    it('Should not offset when vertical mid is 40px from top', () => {
      const position = getRight(mockGetBounds(400, 45))

      expect(position.layoutClass).toEqual('mid')
      expect(position.positionClass).toEqual('right')
      expect(position.x).toEqual(480)
      expect(position.y).toEqual(50)
      expect(position).toMatchSnapshot()
    })

    it('Should not offset when vertical mid is 40px from bottom', () => {
      const position = getRight(mockGetBounds(400, 845))

      expect(position.layoutClass).toEqual('mid')
      expect(position.positionClass).toEqual('right')
      expect(position.x).toEqual(480)
      expect(position.y).toEqual(850)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to left when < 100px from right', () => {
      const position = getRight(mockGetBounds(400, 44))

      expect(position.layoutClass).toEqual('top-offset')
      expect(position.positionClass).toEqual('right')
      expect(position.x).toEqual(480)
      expect(position.y).toEqual(49)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to right when mid < 100px from left', () => {
      const position = getRight(mockGetBounds(400, 846))

      expect(position.layoutClass).toEqual('bottom-offset')
      expect(position.positionClass).toEqual('right')
      expect(position.x).toEqual(480)
      expect(position.y).toEqual(851)
      expect(position).toMatchSnapshot()
    })
  })

  describe('getLeft', () => {
    it('Should not offset when vertical mid is 40px from top', () => {
      const position = getLeft(mockGetBounds(400, 45))

      expect(position.layoutClass).toEqual('mid')
      expect(position.positionClass).toEqual('left')
      expect(position.x).toEqual(400)
      expect(position.y).toEqual(50)
      expect(position).toMatchSnapshot()
    })

    it('Should not offset when vertical mid is 40px from bottom', () => {
      const position = getLeft(mockGetBounds(400, 845))

      expect(position.layoutClass).toEqual('mid')
      expect(position.positionClass).toEqual('left')
      expect(position.x).toEqual(400)
      expect(position.y).toEqual(850)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to left when < 100px from right', () => {
      const position = getLeft(mockGetBounds(400, 44))

      expect(position.layoutClass).toEqual('top-offset')
      expect(position.positionClass).toEqual('left')
      expect(position.x).toEqual(400)
      expect(position.y).toEqual(49)
      expect(position).toMatchSnapshot()
    })

    it('Should offset to right when mid < 100px from left', () => {
      const position = getLeft(mockGetBounds(400, 846))

      expect(position.layoutClass).toEqual('bottom-offset')
      expect(position.positionClass).toEqual('left')
      expect(position.x).toEqual(400)
      expect(position.y).toEqual(851)
      expect(position).toMatchSnapshot()
    })
  })
})

describe('utils > getTop/bottom/left/right swap to opposite if too close to bounds', () => {
  it('getBottom returns top position if too close to bottom', () => {
    const bottom = getBottom(mockGetBounds(360, 849))
    expect(bottom.positionClass).toEqual('bottom')
    expect(bottom.y).toEqual(859)
    const top = getBottom(mockGetBounds(360, 850))
    expect(top.positionClass).toEqual('top')
    expect(top.y).toEqual(850)
    expect({bottom, top}).toMatchSnapshot()
  })

  it('getTop returns bottom position if too close to top', () => {
    const bottom = getTop(mockGetBounds(360, 40))
    expect(bottom.positionClass).toEqual('bottom')
    expect(bottom.y).toEqual(50)
    const top = getTop(mockGetBounds(360, 41))
    expect(top.positionClass).toEqual('top')
    expect(top.y).toEqual(41)
    expect({bottom, top}).toMatchSnapshot()
  })

  it('getLeft returns right position if too close to left', () => {
    const left = getLeft(mockGetBounds(201, 445))
    expect(left.positionClass).toEqual('left')
    expect(left.x).toEqual(201)
    const right = getLeft(mockGetBounds(200, 445))
    expect(right.positionClass).toEqual('right')
    expect(right.x).toEqual(280)
    expect({right, left}).toMatchSnapshot()
  })

  it('getRight returns left position if too close to right', () => {
    const right = getRight(mockGetBounds(519, 445))
    expect(right.positionClass).toEqual('right')
    expect(right.x).toEqual(599)
    const left = getRight(mockGetBounds(520, 445))
    expect(left.positionClass).toEqual('left')
    expect(left.x).toEqual(520)
    expect({right, left}).toMatchSnapshot()
  })
})

describe('utils > getBounds', () => {
  it('crashes', () => {
    const getBoundingClientRect = jest.fn(() => ({
      top: 23,
      left: 23,
      width: 23,
      height: 23,
    }))
    const mockEvent = {
      currentTarget: {
        getBoundingClientRect,
      },
    }
    expect(getBounds(mockEvent)).toEqual({
      clientHeight: 0,
      clientWidth: 0,
      height: 23,
      left: 23,
      top: 23,
      width: 23,
    })
  })
})

describe('utils > getRenderType', () => {
  it('wraps undefined or string types', () => {
    expect(getRenderType('hi')).toBe('WRAP')
    expect(getRenderType()).toBe('WRAP')
  })
  it('identifies renderprops for function types', () => {
    expect(getRenderType(() => 'hi')).toBe('RENDER_PROPS')
  })
  it('wraps array types', () => {
    expect(getRenderType(['hi', '2'])).toBe('WRAP')
  })
  it('clones everything else', () => {
    expect(getRenderType({})).toBe('CLONE')
  })
})
