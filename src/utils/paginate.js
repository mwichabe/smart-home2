import _ from "lodash"

export function paginate(items, pageNumber, pageSize) {
  const firstIndex = (pageNumber - 1) * pageSize
  return _(items) // converting to lodash wrapper. To chain all lodash methods
    .slice(firstIndex) // start from here
    .take(pageSize) // take items
    .value() // reverting the lodash wrapper to a regular array
}
