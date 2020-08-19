import React, { useState } from "react"
import { updateHistory } from "../APIOperations/HTTPOperations"
import { handleChange, formatDate } from "../APIOperations/Operations"
import { processHistoryData } from "../APIOperations/ProcessData"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form
} from "reactstrap"

const EditHistory = ({
  staffs,
  history,
  setHistory,
  currentHistory,
  setCurrentHistory
}) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const closeBtn = (
    <button className='close' onClick={toggle}>
      &times;
    </button>
  )

  const handleSubmit = e => {
    e.preventDefault()
    const processedData = processHistoryData(currentHistory, staffs)
    updateHistory(processedData)
    const temp = history
    console.log(temp)
    setHistory(temp)
  }

  const defaultOption = () => (
    <option disabled selected value>
      {" "}
      -- select a staff --{" "}
    </option>
  )

  const selected = staff =>
    currentHistory.staff_id === staff.staff_id && { selected: "selected" }

  const renderOptions = () =>
    staffs.map((staff, i) => (
      <option key={i} value={staff.first_name} {...selected(staff)}>
        {staff.first_name}
      </option>
    ))

  return (
    <div>
      <Button onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader close={closeBtn}>Edit History</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Label>Time</Label>
            <Input
              type='date'
              name='action_date'
              onChange={e => handleChange(setCurrentHistory, e)}
              defaultValue={formatDate(currentHistory["action_date"])}></Input>
            <Label>Action</Label>
            <Input
              type='text'
              name='action'
              onChange={e => handleChange(setCurrentHistory, e)}
              defaultValue={currentHistory["action"]}></Input>
            <Label>Staff</Label>
            <Input
              type='select'
              name='staff_id'
              onChange={e => handleChange(setCurrentHistory, e)}>
              {defaultOption()}
              {renderOptions()}
            </Input>
            <Label>Description</Label>
            <Input
              type='textarea'
              name='description'
              onChange={e => handleChange(setCurrentHistory, e)}
              defaultValue={currentHistory["description"]}></Input>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' type='submit' onClick={toggle}>
              Save
            </Button>{" "}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default EditHistory
