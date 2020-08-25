import React from "react"
import { Input } from "reactstrap"

const SearchBox = ({ devices, setFilter, setSearchString }) => {
  const search = ({ target: { value } }) => {
    const filtered = devices.filter(el => el.device_name.includes(value))
    setFilter(filtered)
    setSearchString(value)
  }

  return (
    <div>
      <Input onChange={search}></Input>
    </div>
  )
}
export default SearchBox
