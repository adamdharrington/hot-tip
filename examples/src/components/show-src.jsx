import React, { useState } from "react"
import PropTypes from "prop-types"

const Source = ({ children, showDefault = false }) => {
  const [show, setShow] = useState(showDefault)

  return show ? (
    <div className="source">
      <pre>{children}</pre>
      <div className="hide-src" onClick={() => setShow(false)}>
        {"Hide"}
      </div>
    </div>
  ) : (
    <div className="show-src" onClick={() => setShow(true)}>
      {"Show Source"}
    </div>
  )
}

Source.propTypes = {
  children: PropTypes.node.isRequired,
  showDefault: PropTypes.bool,
}

export default Source
