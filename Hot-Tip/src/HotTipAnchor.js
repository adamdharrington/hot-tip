import React, {useContext} from 'react'
import {HotTipContext} from './HotTipContext'

export default function HotTipAnchor() {
  const [state] = useContext(HotTipContext)
  const {tip, positionClass, layoutClass, visible, x, y} = state
  const isNode = typeof tip !== 'function'
  const className = ['hot-tip', positionClass, layoutClass].join(' ')

  return (
    Boolean(visible) && (
      <div className={className} style={{top: y, left: x}}>
        <div className="ht-point" />
        <div className="ht-body">{isNode ? tip : tip()}</div>
      </div>
    )
  )
}

HotTipAnchor.displayName = 'HotTipAnchor'
