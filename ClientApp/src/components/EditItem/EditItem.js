import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"

const EditItem = ({ id }) => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [device, setDevice] = useState([])
  const [deviceDetial, setDeviceDetial] = useState({})
  console.log(form)

  useEffect(() => {
    getDevice()
  }, [])

  const getDevice = async () => {
    const response = await fetch(`weatherforecast/crews/1`)
    const data = await response.json()
    console.log(response.status)
    setDevice(data)
  }

  const matched = () => {
    const data = form.map(property => {
      // if the object has corresponding field then assign value to form properties
      if (device[property.name]) property.value = device[property.name]
    })
    setDeviceDetial(data)
  }

  return (
    <div>
      <h1>Edit Item</h1>
      <h5>ID: {device.id}</h5>
      <Form>
        {rowNumber.map((n, index) => (
          <Row form>
            <FormRow key={index} form={form} />
          </Row>
        ))}
      </Form>
    </div>
  )
}

export default EditItem
