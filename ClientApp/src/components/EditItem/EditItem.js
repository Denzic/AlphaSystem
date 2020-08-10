import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form, Label, Col, Table, Input } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"
import {
  getDevice,
  getHistory,
  update,
  getStaffs
} from "../APIOperations/HTTPOperations"
import {
  formatDate,
  handleChange,
  convertName
} from "../APIOperations/Operations"
import HistoryModal from "./HistoryModal"
import { showDescription } from "./EditItemLogic"

const EditItem = ({ match }) => {
  const {
    params: { id }
  } = match
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [history, setHistory] = useState([])
  const [historyDescription, setHistoryDescription] = useState("")
  const [staffState, setStaffState] = useState([])
  let staffs = []

  useEffect(() => {
    getStaffs(editStaffs)
    getDevice(editData, id)
    getHistory(editHistory, id)
  }, [])

  const editData = data => {
    data["order_date"] = formatDate(data["order_date"])
    data["deliver_date"] = formatDate(data["deliver_date"])
    if (staffs !== undefined) convertName(data, staffs)
    setFormData(data)
  }

  const editHistory = data => {
    data.forEach(d => {
      d["action_date"] = formatDate(d["action_date"])
    })
    setHistory(data)
  }

  const editStaffs = staff => {
    staffs = staff
    setStaffState(staffs)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    update(formData)
  }

  return (
    <div>
      <h1>Edit Item</h1>
      <Label>ID: {id}</Label>
      <Form onSubmit={handleSubmit}>
        {rowNumber.map((n, index) => (
          <Row form key={index}>
            <FormRow
              form={form}
              onChange={e => handleChange(setFormData, e)}
              formData={formData}
              staffs={staffState}
            />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>

      <h2>Device History</h2>
      <HistoryModal id={id} setHistory={setHistory} />
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
              {history.map((h, index) => (
                <tr
                  key={index}
                  id={index}
                  onClick={e =>
                    showDescription(setHistoryDescription, history, e)
                  }>
                  <td>{h.action_date}</td>
                  <td>{h.action}</td>
                  <td>{h.staff_id}</td>
                </tr>
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
    </div>
  )
}

export default EditItem
