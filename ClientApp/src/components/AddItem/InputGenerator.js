import React, { useState, useEffect } from "react"
import { Input, Col, Row } from "reactstrap"

const InputGenerator = ({ currentInput, onChange, formData }) => {
  const modFormData = () => {
    if (currentInput.type === "date")
      return formatDate(formData[currentInput.name])
    else return formData[currentInput.name]
  }

  const formatDate = dateString => {
    let date = new Date(dateString)
    const y = date.getFullYear()
    let m = date.getMonth()
    m < 10 ? (m = "0" + m) : (m = date.getMonth())
    let d = date.getDay()
    d < 10 ? (d = "0" + d) : (d = date.getDay())
    return y + "-" + m + "-" + d
  }

  const renderInput = () => {
    if (currentInput.type === "textarea")
      return (
        <Input
          type={currentInput.type}
          name={currentInput.name}
          rows='4'
          onChange={onChange}
          value={modFormData()}
        />
      )
    else if (currentInput.name !== "price")
      return (
        <Input
          type={currentInput.type}
          name={currentInput.name}
          onChange={onChange}
          value={modFormData()}
        />
      )
    else return renderSpecialInput()
  }

  const renderSpecialInput = () => {
    if (currentInput.name === "price") {
      return (
        <Row form>
          <Col md={7}>
            <Input
              type={currentInput.type[0]}
              name={currentInput.name}
              onChange={onChange}
              value={modFormData()}
            />
          </Col>
          <Col md={5}>
            <Input
              type={currentInput.type[1]}
              name={currentInput.name}
              onChange={onChange}
              value={modFormData()}
            />
          </Col>
        </Row>
      )
    }
  }

  return <>{renderInput()}</>
}

export default InputGenerator
