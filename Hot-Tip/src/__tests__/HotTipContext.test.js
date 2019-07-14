import React from 'react'
import renderer from 'react-test-renderer'
import {HotTipConsumer} from '../HotTipContext'

describe('HotTipContext', () => {
  it('consumes default context', () => {
    const child = jest.fn()
    renderer.create(<HotTipConsumer>{child}</HotTipConsumer>)

    const context = child.mock.calls[0][0]
    expect(context[0]).toEqual({})
    expect(typeof context[1]).toEqual('function')
    expect(context[1]('noop')).toEqual('noop')
  })
})
