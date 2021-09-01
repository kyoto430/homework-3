import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"
import PropTypes from "prop-types"

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  onDelete,
  onToggle,
  ...rest
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        <Qualitie {...rest} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark onClick={() => onToggle(_id)} {...rest} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn bg-danger">
          <span className="badge bg-danger">delete</span>
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default User
