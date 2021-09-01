import React, { useState } from "react"
import Users from "../components/users"
import SearchStatus from "../components/searchStatus"
import API from "../API"
import Pagination from "../components/pagination"
import { paginate } from "../utils/paginate"

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
  const [currentPage, setCurrentPage] = useState(1)
  const count = users.length
  const pageSize = 4
  const handlePageChange = (pageIndex) => {
    console.log("page:", pageIndex)
    setCurrentPage(pageIndex)
  }
  const allUsers = paginate(users, currentPage, pageSize)
  return (
    <div>
      {users.length > 0
        ? (
          <>
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
                  allUsers={allUsers}
                  onDelete={handleDelete}
                  onToggle={handleToggleBookMark}
                />
              </tbody>
            </table>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )
        : (
          <h1>
            <span className="badge bg-danger">Никто с тобой не тусанет</span>
          </h1>
        )}
    </div>
  )
}

export default App
