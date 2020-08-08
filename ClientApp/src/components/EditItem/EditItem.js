import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form, Label, Col, Table, Input } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"
import { getDevice, getHistory, update } from "../APIOperations/HTTPOperations"
import { formatDate } from "../APIOperations/Operations"

const EditItem = ({ match }) => {
  const {
    params: { id }
  } = match
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [history, setHistory] = useState([])

  useEffect(() => {
    getDevice(editData, id)
    getHistory(setHistory, id)
  }, [])

  const editData = data => {
    data["order_date"] = formatDate(data["order_date"])
    data["deliver_date"] = formatDate(data["deliver_date"])
    setFormData(data)
  }

  const handleChange = e => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checkDate(type, value) || parseInt(value) || value
    }))
  }

  const checkDate = (type, value) => (type === "date" ? value : false)

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
            <FormRow form={form} onChange={handleChange} formData={formData} />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>

      <Label>Device History</Label>
      <Row>
        <Col md={6}>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Action</th>
                <th>Operator</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, index) => (
                <tr key={index}>
                  <td>{h.history_id}</td>
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
          <Input type='textarea' row='4'></Input>
        </Col>
      </Row>
    </div>
  )
}

export default EditItem

// const matched = () => {
//   const processed = form.map(property => {
//     // if the device has corresponding field then assign its value to form
//     if (device[property.name]) property.value = device[property.name]
//   })
//   setDevice(processed)
// }
