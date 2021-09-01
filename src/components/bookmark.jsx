import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ bookmark, ...rest }) => {
  let classes = ""
  bookmark ? (classes = "bi bi-bookmark-fill") : (classes = "bi bi-bookmark")
  return (
    <button {...rest}>
      <i className={classes}></i>
    </button>
  )
}

BookMark.propTypes = {
  bookmark: PropTypes.bool
}

export default BookMark
