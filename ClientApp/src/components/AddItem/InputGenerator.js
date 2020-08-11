import React from "react"
import { Input, Col, Row } from "reactstrap"

const InputGenerator = ({ currentField, onChange, formData, staffs }) => {
  const txtArea = () => currentField.type === "textarea" && { rows: "4" }

  const defaultOption = () =>
    !formData[currentField.name] ? (
      <option disabled selected value>
        {" "}
        -- select a staff --{" "}
      </option>
    ) : null

  const selected = staff =>
    formData[currentField.name] === staff.staff_id
      ? { selected: "selected" }
      : null

  const renderOptions = () =>
    currentField.type === "select"
      ? staffs.map((staff, i) => (
          <option key={i} value={staff.first_name} {...selected(staff)}>
            {staff.first_name}
          </option>
        ))
      : null

  const renderInput = () => {
    if (!Array.isArray(currentField.name))
      return (
        <Input
          type={currentField.type}
          name={currentField.name}
          onChange={onChange}
          defaultValue={formData[currentField.name]}
          {...txtArea()}>
          {defaultOption()}
          {renderOptions()}
        </Input>
      )
    else return renderSpecialInput()
  }

  const renderSpecialInput = () => {
    return (
      <Row form>
        <Col md={7}>
          <Input
            type={currentField.type[0]}
            name={currentField.name[0]}
            onChange={onChange}
            defaultValue={formData[currentField.name[0]]}
          />
        </Col>
        <Col md={5}>
          <Input
            type={currentField.type[1]}
            name={currentField.name[1]}
            onChange={onChange}
            defaultValue={formData[currentField.name[1]]}>
            <option value='aud'>AUD$</option>
            <option value='rmb'>RMB￥</option>
            <option value='usd'>USD$</option>
          </Input>
        </Col>
      </Row>
    )
  }

  return <>{renderInput()}</>
}

export default InputGenerator
