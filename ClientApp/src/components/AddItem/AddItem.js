import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form } from "reactstrap"
import FormRow from "./FormRow"
import { FormContext } from "../Context/FormContext"
import { getStaffs, post } from "../APIOperations/HTTPOperations"
import { handleChange } from "../APIOperations/Operations"
import { processDataToBack } from "../APIOperations/ProcessData"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [staffState, setStaffState] = useState([])
  let staffs = []

  useEffect(() => {
    getStaffs(editStaffs)
  }, [])

  const editStaffs = staff => {
    staffs = staff
    setStaffState(staffs)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const processeData = processDataToBack(formData, staffState)
    post(processeData)
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
              onChange={e => {
                handleChange(setFormData, e)
              }}
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
