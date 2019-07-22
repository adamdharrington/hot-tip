import React, {useContext} from 'react'
import {HotTipContext} from './HotTipContext'
import HotTipDisplay from './HotTipDisplay'

export default function HotTipAnchor() {
  const [state] = useContext(HotTipContext)
  const {visible} = state

  return Boolean(visible) ? (
    <HotTipDisplay />
  ) : (
    <div id="ht-anchor" role="tooltip" aria-hidden="true" />
  )
}

HotTipAnchor.displayName = 'HotTipAnchor'
