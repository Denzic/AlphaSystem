import React from "react"
import { Label, Input } from "reactstrap"
import InputGenerator from "./InputGenerator"

let count = -1

const FormCol = ({ form, formData, setFormData, handleChange }) => {
  count++
  if (count === 18) count = 0

  const renderInput = () => {
    if (form[count].type === "textarea")
      return <Input type={form[count].type} name={form[count].name} rows='4' />
    else if (form[count].name !== "price")
      return (
        <Input
          type={form[count].type}
          name={form[count].name}
          onChange={handleChange}
        />
      )
    else return <InputGenerator currentInput={form[count]} />
  }

  // const variation1 = () => {
  //   return (
  //     <>
  //       <Row form>
  //         <Col md={5}>
  //           <Label>{form[count].label}</Label>
  //         </Col>
  //         <Col md={7}>{renderInput()}</Col>
  //       </Row>
  //     </>
  //   )
  // }

  const handleOnload = () => {
    console.log(count)
  }

  return (
    <>
      <Label>{form[count].label}</Label>
      {renderInput()}
    </>
  )
}

export default FormCol
