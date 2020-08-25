import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table, Row, Col } from "reactstrap"
import { getCrews, getStaffs } from "./APIOperations/HTTPOperations"
import { idToName, formatDate } from "./APIOperations/Operations"
import PaginationComp from "./PaginationComp"
import SearchBox from "./SearchBox/SearchBox"

const TotalItems = () => {
  const [devices, setDevices] = useState([])
  const [filtered, setFiltered] = useState([])
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

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <Row>
                <Col md={4}>Name</Col>
                <Col md={5}>
                  <SearchBox
                    devices={devices}
                    setFiltered={setFiltered}
                    setSearchString={setSearchString}
                    type={"device_name"}
                    filtered={filtered}
                  />
                </Col>
              </Row>
            </th>
            <th>
              <Row>
                <Col md={4}>Type</Col>
                <Col md={5}>
                  <SearchBox
                    devices={devices}
                    setFiltered={setFiltered}
                    setSearchString={setSearchString}
                    type={"type"}
                    filtered={filtered}
                  />
                </Col>
              </Row>
            </th>
            <th>
              <Row>
                <Col md={6}>Deliver Date</Col>
                <Col md={5}>
                  <SearchBox
                    devices={devices}
                    setFiltered={setFiltered}
                    setSearchString={setSearchString}
                    type={"deliver_date"}
                    filtered={filtered}
                  />
                </Col>
              </Row>
            </th>
            <th>
              <Row>
                <Col md={5}>For Staff</Col>
                <Col md={5}>
                  <SearchBox
                    devices={devices}
                    setFiltered={setFiltered}
                    setSearchString={setSearchString}
                    type={"for_staff"}
                    filtered={filtered}
                  />
                </Col>
              </Row>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchString === ""
            ? renderDevices(devices)
            : renderDevices(filtered)}
        </tbody>
      </Table>
      <PaginationComp
        itemPerPage={devicePerPage}
        totalItems={searchString === "" ? devices.length : filtered.length}
        paginate={paginate}
      />
    </div>
  )
}

export default TotalItems
