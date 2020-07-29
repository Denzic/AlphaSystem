import React from "react"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"

const TotalItems = () => {
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
          <tr>
            <td>1</td>
            <td>Acer Monitor</td>
            <td>Monitor</td>
            <td>Y</td>
            <td>Dean Wang</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Acer Monitor</td>
            <td>Monitor</td>
            <td>Y</td>
            <td>Dean Wang</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TotalItems
