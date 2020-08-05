import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"

const TotalItems = () => {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    getCrews()
  }, [])

  const getCrews = async () => {
    const response = await fetch(`inventory/devices`)
    const data = await response.json()
    console.log(response.status)
    setDevices(data)
  }

  return (
    <div>
      <h1>Total Items</h1>
      <Link to='./AddItem'>Add Item +</Link>
      <Link to='/EditItem'>Edit Item +</Link>
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
              <td>Dean Wang</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TotalItems
