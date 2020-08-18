import React, { useState, useEffect } from "react"
import { Row, Col, Table, Input } from "reactstrap"
import HistoryModal from "./HistoryModal"
import HistoryRow from "./HistoryRow"
import PaginationComp from "../PaginationComp"
import { getHistory } from "../APIOperations/HTTPOperations"

const DeviceHistory = ({ id, staffs }) => {
  const [history, setHistory] = useState([])
  const [historyDescription, setHistoryDescription] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [historyPerPage] = useState([10])

  useEffect(() => {
    getHistory(setHistory, id)
  }, [])

  let indexLast = currentPage * historyPerPage
  let indexFirst = indexLast - historyPerPage
  let currentHistory = history.slice(indexFirst, indexLast)

  const paginate = n => setCurrentPage(n)

  return (
    <>
      <h2>Device History</h2>

      <HistoryModal id={id} setHistory={setHistory} staffs={staffs} />

      <Row>
        <Col md={6}>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Action</th>
                <th>Operator</th>
              </tr>
            </thead>
            <tbody>
              {currentHistory.map((h, index) => (
                <HistoryRow
                  key={index}
                  h={h}
                  index={index}
                  staffs={staffs}
                  history={history}
                  setHistoryDescription={setHistoryDescription}
                />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Table>
            <thead>
              <tr>
                <th>Description</th>
              </tr>
            </thead>
          </Table>
          <Input
            type='textarea'
            rows='4'
            defaultValue={historyDescription}></Input>
        </Col>
      </Row>
      <PaginationComp
        itemPerPage={historyPerPage}
        totalItems={history.length}
        paginate={paginate}
      />
    </>
  )
}

export default DeviceHistory
