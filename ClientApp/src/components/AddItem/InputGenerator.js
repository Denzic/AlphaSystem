import React from "react"
import { Input, Col, Row } from "reactstrap"

const InputGenerator = ({ currentInput, onChange, formData, staffs }) => {
  const renderInput = () => {
    if (!Array.isArray(currentInput.name))
      return (
        <Input
          type={currentInput.type}
          name={currentInput.name}
          onChange={onChange}
          defaultValue={formData[currentInput.name]}
          {...(currentInput.type === "textarea" && { rows: "4" })}>
          {currentInput.type === "select"
            ? staffs.map((staff, i) => (
                <option key={i} value={staff.first_name}>
                  {staff.first_name}
                </option>
              ))
            : null}
        </Input>
      )
    else return renderSpecialInput()
  }

  const renderSpecialInput = () => {
    return (
      <Row form>
        <Col md={7}>
          <Input
            type={currentInput.type[0]}
            name={currentInput.name[0]}
            onChange={onChange}
            defaultValue={formData[currentInput.name[0]]}
          />
        </Col>
        <Col md={5}>
          <Input
            type={currentInput.type[1]}
            name={currentInput.name[1]}
            onChange={onChange}
            defaultValue={formData[currentInput.name[1]]}>
            <option value='aud'>AUD</option>
            <option value='rmb'>RMB</option>
            <option value='usd'>USD</option>
          </Input>
        </Col>
      </Row>
    )
  }

  return <>{renderInput()}</>
}

export default InputGenerator
