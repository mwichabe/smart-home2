import React from "react"

export default function ListGroup(props) {
  const { selectedCategory, onSelect, categories } = props
  return (
    <div>
      <ul className="list-group">
        {categories.map(c => (
          <li
            className={
              c === selectedCategory
                ? "list-group-item bg-secondary text-white"
                : "list-group-item"
            }
            key={c._id}
            onClick={() => onSelect(c)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
