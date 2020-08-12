import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"
import { getCrews } from "./APIOperations/HTTPOperations"
import PaginationComp from "./PaginationComp"

const TotalItems = () => {
  const [devices, setDevices] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [devicePerPage] = useState([10])

  useEffect(() => {
    getCrews(setDevices)
  }, [])

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
            <th>Borrowed</th>
            <th>By Who</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentDevices.map((d, index) => (
            <tr key={index}>
              <td>{d.device_id}</td>
              <td>{d.device_name}</td>
              <td>{d.type}</td>
              <td>Y</td>
              <td>Dean</td>
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
