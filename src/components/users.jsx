import React from "react"
import User from "./user"
import PropTypes from "prop-types"

const Users = ({ allUsers, users, ...rest }) => {
  return (
    <>
      {allUsers.map((user) => (
        <User key={user._id} {...user} {...rest} />
      ))}
    </>
  )
}

Users.propTypes = {
  allUsers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}

export default Users
