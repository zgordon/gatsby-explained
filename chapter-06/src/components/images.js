import React from "react"

const LeftImage = ({ children }) => {
  return (
    <div
      className="right-align"
      style={{ float: `left`, width: `200px`, marginRight: `15px` }}
    >
      {children}
    </div>
  )
}

export default LeftImage
