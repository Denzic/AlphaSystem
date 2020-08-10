import React from "react"
import { Col, FormGroup, Label } from "reactstrap"
import InputGenerator from "./InputGenerator"

let count = -1

const FormRow = ({ form, formData, onChange, staffs }) => {
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
                currentInput={form[count]}
                onChange={onChange}
                formData={formData}
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
