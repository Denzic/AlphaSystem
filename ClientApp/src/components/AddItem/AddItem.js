import React, { useContext } from "react"
import { Row, Button, Form } from "reactstrap"
import FormRow from "./FormRow"
import { FormContext } from "../Context/FormContext"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form, setForm] = useContext(FormContext)
  console.log(form)

  return (
    <div>
      <h1>Add Item</h1>
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

export default AddItem
