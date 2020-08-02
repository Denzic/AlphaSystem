import React from "react"
import FormProvider from "../Context/FormContext"
import { Input, Col, Row } from "reactstrap"

let count = 0

const InputGenerator = ({ currentInput }) => {
  count++
  const renderSpecialInput = () => {
    if (currentInput.name === "price") {
      return (
        <Row form>
          <Col md={7}>
            <Input type={currentInput.type[0]} name={currentInput.name} />
          </Col>
          <Col md={5}>
            <Input type={currentInput.type[1]} name={currentInput.name} />
          </Col>
        </Row>
      )
    }
  }

  return <>{renderSpecialInput()}</>
}

export default InputGenerator
