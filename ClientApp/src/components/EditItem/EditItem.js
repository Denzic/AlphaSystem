import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form, Label, Col, Table, Input } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"
import { getDevice, getHistory, update } from "../APIOperations/HTTPOperations"
import { formatDate, handleChange } from "../APIOperations/Operations"
import HistoryModal from "./HistoryModal"

const EditItem = ({ match }) => {
  const {
    params: { id }
  } = match
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [history, setHistory] = useState([])
  const [historyDescription, setHistoryDescription] = useState("")

  useEffect(() => {
    getDevice(editData, id)
    getHistory(editHistoryData, id)
  }, [])

  const editData = data => {
    data["order_date"] = formatDate(data["order_date"])
    data["deliver_date"] = formatDate(data["deliver_date"])
    setFormData(data)
  }

  const editHistoryData = data => {
    data.forEach(d => {
      d["action_date"] = formatDate(d["action_date"])
    })
    setHistory(data)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    update(formData)
  }

  const showDescription = e => {
    const id = parseInt(e.target.parentNode.id)
    setHistoryDescription(history[id].description)
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
            />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>

      <Label>Device History</Label>
      <HistoryModal id={id} />
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
                <tr key={index} id={index} onClick={showDescription}>
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
