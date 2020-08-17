import React, { useContext, useState, useEffect } from "react"
import { Row, Button, Form, Label } from "reactstrap"
import FormRow from "../AddItem/FormRow"
import { FormContext } from "../Context/FormContext"
import {
  getDevice,
  getHistory,
  update,
  getStaffs
} from "../APIOperations/HTTPOperations"
import {
  formatDate,
  handleChange,
  convertName,
  idToName
} from "../APIOperations/Operations"
import DeviceHistory from "../DeviceHistory/DeviceHistory"
import { processDataToBack } from "../APIOperations/ProcessData"

const EditItem = ({ match }) => {
  const {
    params: { id }
  } = match
  const rowNumber = [1, 2, 3, 4, 5, 6]
  const [form] = useContext(FormContext)
  const [formData, setFormData] = useState({})
  const [history, setHistory] = useState([])
  const [historyDescription, setHistoryDescription] = useState("")
  const [staffState, setStaffState] = useState([])
  let staffs = []

  useEffect(() => {
    getStaffs(editStaffs)
    getDevice(editData, id)
    getHistory(editHistory, id)
  }, [])

  const editStaffs = staff => {
    staffs = staff
    setStaffState(staffs)
  }

  const editData = data => {
    data["order_date"] = formatDate(data["order_date"])
    data["deliver_date"] = formatDate(data["deliver_date"])
    // if (staffs !== undefined) convertName(data, staffs)
    setFormData(data)
  }

  const editHistory = data => {
    console.log(data)
    data.forEach(d => {
      d["action_date"] = formatDate(d["action_date"])
      d["staff_id"] = idToName(d["staff_id"], staffs)
    })
    setHistory(data)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const processedData = processDataToBack(formData, staffState)
    update(processedData)
  }

  return (
    <div>
      <h1>Edit Item</h1>
      <Label>ID: {id}</Label>
      <Form onSubmit={handleSubmit}>
        {rowNumber.map((n, index) => (
          <Row form key={index}>
            <FormRow
              form={form}
              onChange={e => handleChange(setFormData, e)}
              formData={formData}
              staffs={staffState}
            />
          </Row>
        ))}
        <Button>Submit</Button>
      </Form>

      <DeviceHistory
        id={id}
        history={history}
        staffs={staffState}
        setHistory={setHistory}
        setHistoryDescription={setHistoryDescription}
        historyDescription={historyDescription}
      />
    </div>
  )
}

export default EditItem
