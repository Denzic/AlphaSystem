import React from "react"
import { Col, FormGroup } from "reactstrap"
import FormSet from "./FormSet"

const FormRow = ({ form, formData, setFormData, handleChange }) => {
  const colNumber = [1, 2, 3]
  return (
    <>
      {colNumber.map((n, index) => (
        <Col md={4} key={index}>
          <Col md={12}>
            <FormGroup>
              <FormSet
                key={index}
                form={form}
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Col>
      ))}
    </>
  )
}

export default FormRow
