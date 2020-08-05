import React, { useContext, useState } from "react"
import { Row, Button, Form } from "reactstrap"
import FormRow from "./FormRow"
import { FormContext } from "../Context/FormContext"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    console.log(formData)
    await fetch("inventory/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checkDate(value) || parseInt(value) || value,
    }))
  }

  const checkDate = value => {
    let x
    value.match(/([1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
      ? (x = value)
      : (x = false)
    return x
  }

  return (
    <div>
      <h1>Add Item</h1>
      <Form onSubmit={handleSubmit}>
        {rowNumber.map((n, index) => (
          <Row form key={index}>
            <FormRow
              form={form}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default AddItem
