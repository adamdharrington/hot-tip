export const getBottom = (bounds, force) => {
  const {left, top, width, height, clientWidth, clientHeight} = bounds

  if (!force && top + height + 40 >= clientHeight) {
    return getTop(bounds, true) // eslint-disable-line
  }
  const x = left + width / 2
  const y = top + height
  const leftOffset = x < 100
  const rightOffset = !leftOffset && x + 100 > clientWidth
  const layoutClass = leftOffset
    ? 'left-offset'
    : rightOffset
    ? 'right-offset'
    : 'centred' // eslint-disable-line

  return {
    x,
    y,
    positionClass: 'bottom',
    layoutClass,
  }
}

export const getTop = (bounds, force) => {
  const {top} = bounds
  const bottom = getBottom(bounds, true)

  if (!force && top - 40 <= 0) {
    return bottom
  }

  return {...bottom, y: top, positionClass: 'top'}
}

export const getRight = (bounds, force) => {
  const {left, top, width, height, clientWidth, clientHeight} = bounds

  if (!force && left + width + 200 >= clientWidth) {
    return getLeft(bounds, true) // eslint-disable-line
  }
  const x = left + width
  const y = top + height / 2
  const topOffset = y < 50
  const bottomOffset = !topOffset && y + 50 > clientHeight
  const layoutClass = topOffset
    ? 'top-offset'
    : bottomOffset
    ? 'bottom-offset'
    : 'mid' // eslint-disable-line

  return {
    x,
    y,
    positionClass: 'right',
    layoutClass,
  }
}

export const getLeft = (bounds, force) => {
  const {left} = bounds
  const right = getRight(bounds, force)

  if (!force && left - 200 <= 0) {
    return right
  }

  return {...right, x: left, positionClass: 'left'}
}

export const getPosition = position => {
  switch (position) {
    case 'top':
      return getTop
    case 'right':
      return getRight
    case 'left':
      return getLeft
    case 'bottom':
    default:
      return getBottom
  }
}

export const getBounds = e => {
  const {top, left, width, height} = e.currentTarget.getBoundingClientRect()
  const {pageXOffset, pageYOffset} = window
  const {
    scrollTop,
    clientTop,
    scrollLeft,
    clientLeft,
    clientWidth,
    clientHeight,
  } = document.body
  const absTop = top + Math.max(pageYOffset, scrollTop) - clientTop
  const absLeft = left + Math.max(pageXOffset, scrollLeft) - clientLeft

  return {
    top: absTop,
    left: absLeft,
    width,
    height,
    clientWidth,
    clientHeight,
  }
}

export default {
  getBounds,
  getPosition,
}
