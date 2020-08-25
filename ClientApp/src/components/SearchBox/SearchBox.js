import React from "react"
import { Input } from "reactstrap"

let firstTime = true

const SearchBox = ({
  devices,
  setFiltered,
  setSearchString,
  type,
  filtered
}) => {
  const search = ({ target: { value } }) => {
    console.log(filtered)
    let fil
    let collection
    firstTime ? (collection = devices) : (collection = filtered)
    firstTime = false
    fil = collection.filter(el =>
      el[type] !== null ? el[type].includes(value) : null
    )
    setFiltered(fil)
    setSearchString(value)
  }

  return (
    <div>
      <Input onChange={search}></Input>
    </div>
  )
}
export default SearchBox
