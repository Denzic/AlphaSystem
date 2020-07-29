import React from "react"
import { Label, Input } from "reactstrap"

const FormCol = ({ colNumber, rowNumber }) => {
  switch (rowNumber) {
    case 1:
      console.log("")
  }
  return (
    <>
      <Label>Device Name</Label>
      <Input type='text' name='device_name' />
    </>
  )
}

export default FormCol
