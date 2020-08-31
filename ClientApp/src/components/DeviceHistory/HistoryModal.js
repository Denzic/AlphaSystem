import React, { useState } from "react"
import { postHistory, getHistory } from "../APIOperations/HTTPOperations"
import { handleChange } from "../APIOperations/Operations"
import { processHistoryData } from "../APIOperations/ProcessData"
import { Link } from "react-router-dom"
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

const HistoryModal = ({ id, setHistory, staffs }) => {
  const [modal, setModal] = useState(false)
  const [historyInput, sethistoryInput] = useState({
    device_id: parseInt(id)
  })

  const toggle = () => setModal(!modal)

  const closeBtn = (
    <button className='close' onClick={toggle}>
      &times;
    </button>
  )

  const handleSubmit = async e => {
    e.preventDefault()
    const processedData = processHistoryData(historyInput, staffs)
    await postHistory(processedData)
    await getHistory(setHistory, id)
  }

  const defaultOption = () => (
    <option disabled selected value>
      {" "}
      -- select a staff --{" "}
    </option>
  )

  const renderOptions = () =>
    staffs.map((staff, i) => (
      <option key={i} value={staff.first_name}>
        {staff.first_name}
      </option>
    ))

  return (
    <div>
      <Link onClick={toggle}>Add history +</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader close={closeBtn}>Add History</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Label>Time</Label>
            <Input
              type='date'
              name='action_date'
              onChange={e => handleChange(sethistoryInput, e)}></Input>
            <Label>Action</Label>
            <Input
              type='text'
              name='action'
              onChange={e => handleChange(sethistoryInput, e)}></Input>
            <Label>Staff</Label>
            <Input
              type='select'
              name='staff_id'
              onChange={e => handleChange(sethistoryInput, e)}>
              {defaultOption()}
              {renderOptions()}
            </Input>
            <Label>Description</Label>
            <Input
              type='textarea'
              name='description'
              onChange={e => handleChange(sethistoryInput, e)}></Input>
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

export default HistoryModal
