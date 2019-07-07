import React, {useReducer} from 'react'
import PropTypes from 'prop-types'
import {HotTipContext} from './HotTipContext'
import HotTipAnchor from './HotTipAnchor'
import HotTipReducer from './reducer'

export default function HotTipProvider({children}) {
  const context = useReducer(HotTipReducer, {})

  return (
    <HotTipContext.Provider value={context}>
      <>
        <HotTipAnchor />
        {children}
      </>
    </HotTipContext.Provider>
  )
}

HotTipProvider.propTypes = {
  children: PropTypes.node,
}
