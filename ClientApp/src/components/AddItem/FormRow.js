import React from "react"
import { Col, FormGroup, Label } from "reactstrap"
import InputGenerator from "./InputGenerator"

let count = -1

const FormRow = ({ form, formData, setFormData, staffs }) => {
  const colNumber = [1, 2, 3]

  return (
    <>
      {colNumber.map((n, index) => (
        <Col md={4} key={index}>
          <Col md={12}>
            <FormGroup>
              <div style={{ display: "none" }}>
                {count === 17 ? (count = 0) : count++}
              </div>
              <Label>{form[count].label}</Label>
              <InputGenerator
                currentField={form[count]}
                formData={formData}
                setFormData={setFormData}
                staffs={staffs}
              />
            </FormGroup>
          </Col>
        </Col>
      ))}
    </>
  )
}

export default FormRow
