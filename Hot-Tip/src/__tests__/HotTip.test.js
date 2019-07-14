/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import renderer, {act} from 'react-test-renderer'
import HotTip from '../HotTip'
import {clearTooltip} from '../actions'
import {HotTipContext} from '../HotTipContext'
import * as utils from '../utils'

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

  it('calls render props', () => {
    const renderPropFn = jest.fn(props => {
      return <h2 {...props}>hi</h2>
    })
    const component = renderer.create(
      <HotTip tip="click me">{renderPropFn}</HotTip>,
    )
    const tip = component.toJSON()
    expect(renderPropFn).toHaveBeenCalledTimes(1)
    expect(Object.keys(renderPropFn.mock.calls[0][0]).sort()).toEqual([
      'aria-describedby',
      'onBlur',
      'onFocus',
      'onMouseOut',
      'onMouseOver',
      'tabIndex',
    ])
    expect(tip.type).toEqual('h2')
    expect(tip).toMatchSnapshot()
  })

  it('renders without tip', () => {
    HotTip.PropTypes = {}
    const component = renderer.create(<HotTip>text</HotTip>)
    const tip = component.toJSON()

    expect(tip).toEqual('text')
    expect(tip).toMatchSnapshot()
  })

  it('calls context on hover & blur', () => {
    /* eslint-disable import/namespace */
    utils.getBounds = jest.fn(one => ({one}))
    utils.getPosition = jest.fn(one => two => ({one, two}))
    const dispatch = jest.fn(action => action)
    const component = renderer.create(
      <HotTipContext.Provider value={[{}, dispatch]}>
        <HotTip tip="i am text" position="top">
          text
        </HotTip>
      </HotTipContext.Provider>,
    )
    let tip = component.toJSON()

    act(() => {
      // manually trigger the callback
      tip.props.onMouseOver('hello')
    })
    expect(utils.getBounds).toBeCalledWith('hello')
    expect(utils.getPosition).toBeCalledWith('top')

    tip = component.toJSON()
    expect(tip).toMatchSnapshot()

    act(() => {
      tip.props.onMouseOut()
    })
    tip = component.toJSON()
    expect(tip).toMatchSnapshot()

    const actions = dispatch.mock.calls

    expect(actions[0][0].payload.position).toEqual({
      one: 'top',
      two: {one: 'hello'},
    })
    expect(actions[1][0].payload).toEqual({visible: false})
  })

  it('unmounts calling clear', () => {
    const dispatch = jest.fn(action => action)
    const component = renderer.create(
      <HotTipContext.Provider value={[{}, dispatch]}>
        <HotTip tip="click me">
          <a>{'link'}</a>
        </HotTip>
      </HotTipContext.Provider>,
    )

    act(() => {
      component.unmount()
    })
    expect(dispatch.mock.calls[0][0]).toEqual(clearTooltip())
  })
})
