import React from "react"
import { Input, Col, Row } from "reactstrap"

const InputGenerator = ({ currentInput, onChange, formData }) => {
  const renderInput = () => {
    if (currentInput.type === "textarea")
      return (
        <Input
          type={currentInput.type}
          name={currentInput.name}
          rows='4'
          onChange={onChange}
          value={formData[currentInput.name]}
        />
      )
    else if (!Array.isArray(currentInput.name))
      return (
        <Input
          type={currentInput.type}
          name={currentInput.name}
          onChange={onChange}
          value={formData[currentInput.name]}
        />
      )
    else return renderSpecialInput()
  }

  const renderSpecialInput = () => {
    if (Array.isArray(currentInput.name)) {
      return (
        <Row form>
          <Col md={7}>
            <Input
              type={currentInput.type[0]}
              name={currentInput.name[0]}
              onChange={onChange}
              value={formData[currentInput.name[0]]}
            />
          </Col>
          <Col md={5}>
            <Input
              type={currentInput.type[1]}
              name={currentInput.name[1]}
              onChange={onChange}
              value={formData[currentInput.name[1]]}
            />
          </Col>
        </Row>
      )
    }
  }

  return <>{renderInput()}</>
}

export default InputGenerator
