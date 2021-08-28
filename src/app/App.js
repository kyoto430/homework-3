import React, { useState } from 'react'
import Users from '../components/users'
import SearchStatus from '../components/searchStatus'
import API from '../API'

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll())
  const handleDelete = (userId) => {
    console.log(userId)
    setUsers(users.filter((user) => user._id !== userId))
  }
  const handleToggleBookMark = (id) => {
    setUsers(
      users.filter((user) => {
        if (user._id === id) {
          user.bookmark = !user.bookmark
          return user
        }
        return user
      })
    )
  }
  return (
    <div>
      {users.length > 0 ? (
        <table className="table caption-top">
          <SearchStatus length={users.length} />
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              onDelete={handleDelete}
              onToggle={handleToggleBookMark}
            />
          </tbody>
        </table>
      ) : (
        <h1>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h1>
      )}
    </div>
  )
}

export default App
