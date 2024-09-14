/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import _ from "lodash"

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props

  const numberOfPages = Math.ceil(itemsCount / pageSize)
  if (numberOfPages === 1) return null

  const pages = _.range(1, numberOfPages + 1)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(p => (
          <li
            key={p}
            className={p === currentPage ? "page-item active " : "page-item"}
          >
            <a
              onClick={() => onPageChange(p)}
              className="page-link bg-secondary text-white"
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
