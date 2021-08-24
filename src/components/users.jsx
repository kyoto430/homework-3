import React, { useState } from 'react'
import API from '../API'

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll())
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }
  const renderPhrase = (number) => {
    return number === 1 ? 'человек тусанет' : 'человека тусанут'
  }
  return (
    <>
      {users.length ? (
        <table className="table caption-top">
          <caption>
            {`${users.length} ${renderPhrase(users.length)} с тобой сегодня`}
          </caption>
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((quality) => (
                      <span
                        key={quality._id}
                        className={`badge bg-${quality.color} m-2`}
                      >
                        {quality.name}
                      </span>
                    ))}
                  </td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-danger"
                    >
                      <span className="badge bg-danger">delete</span>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h1>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h1>
      )}
    </>
  )
}

export default Users
