import {useContext, useEffect, createElement, cloneElement} from 'react'
import PropTypes from 'prop-types'
import {HotTipContext} from './HotTipContext'
import {clearTooltip, addTooltip} from './actions'
import {getPosition, getBounds, getRenderType} from './utils'

export default function HotTip({position, tip, children}) {
  const dispatch = useContext(HotTipContext)[1]
  useEffect(() => hide, [])

  function show(e) {
    const bounds = getBounds(e)
    const actualPosition = getPosition(position)(bounds)

    dispatch(addTooltip(tip, actualPosition))
  }
  function hide() {
    dispatch(clearTooltip())
  }
  const renderType = getRenderType(children)

  const hotTipProps = {
    tabIndex: 0,
    'aria-describedby': 'ht-anchor',
    onMouseOver: show,
    onFocus: show,
    onMouseOut: hide,
    onBlur: hide,
  }

  if (tip) {
    if (renderType === 'WRAP') {
      return createElement('span', hotTipProps, children)
    }
    if (renderType === 'RENDER_PROPS') {
      return children(hotTipProps)
    }
    return cloneElement(children, hotTipProps)
  }
  return children
}

HotTip.defaultProps = {
  position: 'bottom',
  tip: '',
}

HotTip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
}
