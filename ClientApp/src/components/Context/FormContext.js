import React, { useState, createContext } from "react"

export const FormContext = createContext()

const FormProvider = props => {
  const [form, setForm] = useState([
    {
      label: "Device Name",
      name: "device_name",
      type: "text"
    },
    {
      label: "Order Date",
      name: "order_date",
      type: "date"
    },
    {
      label: "Location",
      name: "location",
      type: "text"
    },
    {
      label: "Type",
      name: "type",
      type: "text"
    },
    {
      label: "Deliver Date",
      name: "deliver_date",
      type: "date"
    },
    {
      label: "For Staff",
      name: "for_staff",
      type: "select"
    },
    {
      label: "Brand",
      name: "brand",
      type: "text"
    },
    {
      label: "Order URL",
      name: "order_url",
      type: "text"
    },
    {
      label: "Device Number",
      name: "device_number",
      type: "text"
    },
    {
      label: "Order Staff",
      name: "order_staff",
      type: "text"
    },
    {
      label: "IP",
      name: "ip",
      type: "text"
    },
    {
      label: "Price",
      name: "price",
      type: ["text", "select"],
      options: ["Jennifer", "Larry"]
    },
    {
      label: "Access Type",
      name: "access_type",
      type: "text"
    },
    {
      label: "Invoice Number",
      name: "invoice_number",
      type: "text"
    },
    {
      label: "Approved By",
      name: "approved_by",
      type: "select",
      option: ["Larry", "Jeniffer"]
    },
    {
      label: "Original Feature",
      name: "original_feature",
      type: "textarea"
    },
    {
      label: "Order Reason",
      name: "order_reason",
      type: "textarea"
    },
    {
      label: "Memo",
      name: "memo",
      type: "textarea"
    }
  ])

  return (
    <FormContext.Provider value={[form, setForm]}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormProvider
