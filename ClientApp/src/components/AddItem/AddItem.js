import React, { useContext, useState } from "react"
import { Row, Button, Form } from "reactstrap"
import FormRow from "./FormRow"
import { FormContext } from "../Context/FormContext"
import { post } from "../APIOperations/HTTPOperations"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})

  const handleChange = e => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checkDate(type, value) || parseInt(value) || value
    }))
  }

  const checkDate = (type, value) => (type === "date" ? value : false)

  const handleSubmit = e => {
    e.preventDefault()
    post(formData)
  }

  return (
    <div>
      <h1>Add Item</h1>
      <Form onSubmit={handleSubmit}>
        {rowNumber.map((n, index) => (
          <Row form key={index}>
            <FormRow form={form} formData={formData} onChange={handleChange} />
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
