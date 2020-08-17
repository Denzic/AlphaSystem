import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"
import { getCrews, getStaffs } from "./APIOperations/HTTPOperations"
import { idToName, formatDate } from "./APIOperations/Operations"
import PaginationComp from "./PaginationComp"

const TotalItems = () => {
  const [devices, setDevices] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [devicePerPage] = useState([15])
  const [staffState, setStaffState] = useState([])
  let staffs = []

  useEffect(() => {
    getCrews(setDevices)
    getStaffs(editStaffs)
  }, [])

  const editStaffs = staff => {
    staffs = staff
    setStaffState(staffs)
  }

  let indexLast = currentPage * devicePerPage
  let indexFirst = indexLast - devicePerPage
  let currentDevices = devices.slice(indexFirst, indexLast)

  const paginate = n => setCurrentPage(n)

  return (
    <div>
      <h1>Total Items</h1>
      <Link to='./AddItem'>Add Item +</Link>
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
          {currentDevices.map((d, index) => (
            <tr key={index}>
              <td>{d.device_id}</td>
              <td>{d.device_name}</td>
              <td>{d.type}</td>
              <td>{formatDate(d.deliver_date)}</td>
              <td>{idToName(d.for_staff, staffState)}</td>
              {/* TODO: Edit page */}
              <td>
                <Link to={`/EditItem/${d.device_id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComp
        itemPerPage={devicePerPage}
        totalItems={devices.length}
        paginate={paginate}
      />
    </div>
  )
}

export default TotalItems
