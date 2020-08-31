import React from "react"
import { Input, Col, Row } from "reactstrap"
import { handleChange } from "../APIOperations/Operations"

const InputGenerator = ({ currentField, formData, setFormData, staffs }) => {
  const txtArea = () => currentField.type === "textarea" && { rows: "4" }
  const staffList = () =>
    currentField.name === "for_staff" ||
    currentField.name === "approved_by" ||
    currentField.name === "order_staff"
      ? { list: "staff_list" }
      : null

  const renderInput = () => {
    if (!Array.isArray(currentField.name))
      return (
        <>
          <Input
            type={currentField.type}
            name={currentField.name}
            onChange={e => handleChange(setFormData, e)}
            defaultValue={formData[currentField.name]}
            {...txtArea()}
            {...staffList()}
          />
          <datalist id='staff_list'>
            {staffs.map((staff, i) => (
              <option key={i} value={staff.first_name}></option>
            ))}
          </datalist>
        </>
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
            onChange={e => handleChange(setFormData, e)}
            defaultValue={formData[currentField.name[0]]}
          />
        </Col>
        <Col md={5}>
          <Input
            type='text'
            list='currency_type'
            name={currentField.name[1]}
            onChange={e => handleChange(setFormData, e)}
            defaultValue={formData[currentField.name[1]]}
          />
          <datalist id='currency_type'>
            <option value='AUD' />
            <option value='RMB' />
            <option value='USD' />
          </datalist>
        </Col>
      </Row>
    )
  }

  return <>{renderInput()}</>
}

export default InputGenerator
