import React from "react"
import { Input } from "reactstrap"
import { nameToId, idToName } from "../APIOperations/Operations"

const SearchBox = ({ devices, setFiltered, setSearchString, type, staffs }) => {
  const search = ({ target: { value } }) => {
    const fil = devices.filter(el =>
      el[type] !== null ? el[type].toLowerCase().includes(value) : null
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
