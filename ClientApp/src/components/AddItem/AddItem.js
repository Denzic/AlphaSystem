import React, { useContext, useState, useEffect } from "react"
import { Row, Col, Button, Form, Input, Label } from "reactstrap"
import FormRow from "./FormRow"
import { FormContext } from "../Context/FormContext"
import { getStaffs, post } from "../APIOperations/HTTPOperations"
import { processDataToBack } from "../APIOperations/ProcessData"
import { handleChange } from "../APIOperations/Operations"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [staffState, setStaffState] = useState([])
  const [numberOfbatch, setNumberOfbatch] = useState(1)

  useEffect(() => {
    getStaffs(setStaffState)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const processeData = processDataToBack(formData, staffState)
    for (let i = 0; i < numberOfbatch; i++) {
      post(processeData)
    }
    setFormData({})
  }

  const batchInput = e => {
    setNumberOfbatch(parseInt(e.target.value) || 1)
  }

  return (
    <div>
      <Row style={{ marginBottom: "2rem" }}>
        <Col md={9}>
          <h1>Add Item</h1>
        </Col>
        <Col md={3}>
          <Label style={{ marginRight: "20px" }}>Batch Input</Label>
          <Input
            type='text'
            name='numberOfInput'
            onChange={batchInput}
            style={{ width: "80px", display: "inline" }}
          />
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        {rowNumber.map((n, index) => (
          <Row form key={index}>
            <FormRow
              form={form}
              formData={formData}
              setFormData={setFormData}
              staffs={staffState}
            />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default AddItem

// const checkDate = value =>
//   value.match(/([1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
//     ? value
//     : false
