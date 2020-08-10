import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"
import { getCrews } from "./APIOperations/HTTPOperations"
import { StaffContext } from "./Context/StaffContext"

const TotalItems = () => {
  const [devices, setDevices] = useState([])
  const [staff, setStaff] = useContext(StaffContext)

  useEffect(() => {
    getCrews(setDevices)
  }, [])

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
          {devices.map((d, index) => (
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
    </div>
  )
}

export default TotalItems
