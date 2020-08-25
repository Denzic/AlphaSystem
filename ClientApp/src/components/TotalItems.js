import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"
import { getCrews, getStaffs } from "./APIOperations/HTTPOperations"
import { idToName, formatDate } from "./APIOperations/Operations"
import PaginationComp from "./PaginationComp"
import SearchBox from "./SearchBox/SearchBox"

const TotalItems = () => {
  const [devices, setDevices] = useState([])
  const [filter, setFilter] = useState([])
  const [searchString, setSearchString] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [devicePerPage] = useState([15])
  const [staffState, setStaffState] = useState([])

  useEffect(() => {
    getCrews(setDevices)
    getStaffs(setStaffState)
  }, [])

  const getCurrentDevices = items => {
    let indexLast = currentPage * devicePerPage
    let indexFirst = indexLast - devicePerPage
    let currentDevices = items.slice(indexFirst, indexLast)
    return currentDevices
  }

  const paginate = n => setCurrentPage(n)

  const renderDevices = items => {
    const collection = getCurrentDevices(items)
    return collection.map((d, index) => (
      <tr key={index}>
        <td>{d.device_id}</td>
        <td>{d.device_name}</td>
        <td>{d.type}</td>
        <td>{formatDate(d.deliver_date)}</td>
        <td>{idToName(d.for_staff, staffState)}</td>
        <td>
          <Link to={`/EditItem/${d.device_id}`}>Edit</Link>
        </td>
      </tr>
    ))
  }

  return (
    <div>
      <h1>Total Items</h1>
      <Link to='./AddItem'>Add Item +</Link>
      <SearchBox
        devices={devices}
        setFilter={setFilter}
        setSearchString={setSearchString}
      />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Deliver Date</th>
            <th>For Staff</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchString === "" ? renderDevices(devices) : renderDevices(filter)}
        </tbody>
      </Table>
      <PaginationComp
        itemPerPage={devicePerPage}
        totalItems={searchString === "" ? devices.length : filter.length}
        paginate={paginate}
      />
    </div>
  )
}

export default TotalItems
