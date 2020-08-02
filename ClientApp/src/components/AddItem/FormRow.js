import React from "react"
import { Col, FormGroup } from "reactstrap"
import FormSet from "./FormSet"

const FormRow = ({ form }) => {
  const colNumber = [1, 2, 3]
  return (
    <>
      {colNumber.map((n, index) => (
        <Col md={4}>
          <Col md={12}>
            <FormGroup>
              <FormSet key={index} form={form} />
            </FormGroup>
          </Col>
        </Col>
      ))}
    </>
  )
}

export default FormRow
