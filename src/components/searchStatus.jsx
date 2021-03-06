import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    return number === 1
      ? "человек тусанет"
      : number > 1 && number < 5
        ? "человека тусанут"
        : "человек тусанет"
  }
  return (
    <>
      <caption>{`${length} ${renderPhrase(length)} с тобой сегодня`}</caption>
    </>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
}

export default SearchStatus
