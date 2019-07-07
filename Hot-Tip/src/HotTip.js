import { useContext, useEffect, createElement, cloneElement } from "react"
import PropTypes from "prop-types"
import { HotTipContext } from "./HotTipContext"
import * as types from "./action-types"
import { getPosition, getBounds } from "./utils"

export default function HotTip({ position = "bottom", tip, children }) {
  const dispatch = useContext(HotTipContext)[1]
  useEffect(
    () => () => {
      dispatch(clearTooltip())
    },
    []
  )

  function handleMouseEnter(e) {
    const bounds = getBounds(e)
    const actualPosition = getPosition(position)(bounds)

    dispatch(addTooltip(tip, actualPosition))
  }
  const handleMouseOut = () => dispatch(clearTooltip())

  if (tip) {
    if (typeof children === "string") {
      return createElement(
        "span",
        {
          onMouseOver: handleMouseEnter,
          onMouseOut: handleMouseOut,
        },
        children
      )
    }
    return cloneElement(children, {
      onMouseOver: handleMouseEnter,
      onMouseOut: handleMouseOut,
    })
  }
  return children
}

HotTip.defaultProps = {
  position: "bottom",
  tip: "",
}

HotTip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
}

export function addTooltip(tip, position) {
  return {
    type: types.UPDATE_TOOLTIP,
    payload: {
      tip,
      visible: true,
      position,
    },
  }
}

export function clearTooltip() {
  return {
    type: types.UPDATE_TOOLTIP,
    payload: {
      visible: false,
    },
  }
}
