import React, {useContext, useEffect} from 'react'
import {HotTipContext} from './HotTipContext'
import {clearTooltip} from './actions'

export default function HotTipDisplay() {
  const [state, dispatch] = useContext(HotTipContext)
  const {tip, positionClass, layoutClass, x, y} = state
  const isNode = typeof tip !== 'function'
  const className = ['hot-tip', positionClass, layoutClass].join(' ')

  function handleKeyPress({key}) {
    if (key === 'Escape') {
      dispatch(clearTooltip())
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div
      id="ht-anchor"
      role="tooltip"
      aria-hidden="false"
      className={className}
      style={{top: y, left: x}}
    >
      <div className="ht-point" />
      <div className="ht-body">{isNode ? tip : tip()}</div>
    </div>
  )
}

HotTipDisplay.displayName = 'HotTipDisplay'
