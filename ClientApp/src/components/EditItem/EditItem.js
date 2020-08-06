import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form, Label } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"
import { getDevice } from "../APIOperations/HTTPOperations"
import { post } from "../APIOperations/HTTPOperations"

const EditItem = ({ match }) => {
  const {
    params: { id }
  } = match
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    getDevice(setFormData, id)
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checkDate(value) || parseInt(value) || value
    }))
  }

  // TODO :change to PUT
  const handleSubmit = async e => {
    e.preventDefault()
    post(formData)
  }

  const checkDate = value =>
    value.match(/([1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
      ? value
      : false

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
