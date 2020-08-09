import React, { useState } from "react"
import { postHistory } from "../APIOperations/HTTPOperations"
import { handleChange } from "../APIOperations/Operations"
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

const HistoryModal = ({ id }) => {
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

  const handleSubmit = e => {
    e.preventDefault()
    postHistory(historyInput)
  }

  return (
    <div>
      <Button onClick={toggle}>add history</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader close={closeBtn}>Add History</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Label>Time</Label>
            <Input
              type='date'
              name='action_date'
              onChange={e => handleChange(sethistoryInput, e)}
              value={historyInput["action_date"]}></Input>
            <Label>Action</Label>
            <Input
              type='text'
              name='action'
              onChange={e => handleChange(sethistoryInput, e)}
              value={historyInput["action"]}></Input>
            <Label>Staff</Label>
            <Input
              type='text'
              name='staff_id'
              onChange={e => handleChange(sethistoryInput, e)}
              value={historyInput["staff_id"]}></Input>
            <Label>Description</Label>
            <Input
              type='textarea'
              name='description'
              onChange={e => handleChange(sethistoryInput, e)}
              value={historyInput["description"]}></Input>
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
