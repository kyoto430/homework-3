import React from 'react'

const BookMark = ({ bookmark, ...rest }) => {
  let classes = ''
  bookmark ? (classes = 'bi bi-bookmark-fill') : (classes = 'bi bi-bookmark')
  return (
    <button {...rest}>
      <i className={classes}></i>
    </button>
  )
}

export default BookMark
