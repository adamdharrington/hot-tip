/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import renderer from 'react-test-renderer'
import HotTip from '../HotTip'
import * as utils from '../utils'

describe('Components', () => {
  describe('HotTip', () => {
    it('renders', () => {
      const component = renderer.create(
        <HotTip tip="click me">
          <a>{'link'}</a>
        </HotTip>,
      )
      const tip = component.toJSON()

      expect(tip.type).toEqual('a')
      expect(tip.children[0]).toEqual('link')
      expect(tip).toMatchSnapshot()
    })

    it('hover', () => {
      /* eslint-disable import/namespace */
      utils.getBounds = jest.fn(one => ({one}))
      utils.getPosition = jest.fn(one => two => ({one, two}))
      const component = renderer.create(
        <HotTip tip="click me">
          <a>{'link'}</a>
        </HotTip>,
      )
      let tip = component.toJSON()

      // manually trigger the callback
      tip.props.onMouseOver('hello')
      expect(utils.getBounds).toBeCalledWith('hello')
      expect(utils.getPosition).toBeCalledWith('bottom')

      tip = component.toJSON()
      expect(tip).toMatchSnapshot()

      tip.props.onMouseOut()

      tip = component.toJSON()
      expect(tip).toMatchSnapshot()

      const actions = []

      expect(actions[0].payload.position).toEqual({
        one: 'bottom',
        two: {one: 'hello'},
      })
      expect(actions[1].payload).toEqual({visible: false})
    })
  })
})
