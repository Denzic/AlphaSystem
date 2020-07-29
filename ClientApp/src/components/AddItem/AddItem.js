import React from "react"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import FormRow from "./FormRow"

const AddItem = () => {
  const rowNumber = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>Add Item</h1>
      <Form>
        {rowNumber.map((n, index) => (
          <Row form>
            <FormRow key={index} rowNumber={n} />
            {/* <Col sm={4}>
              <FormGroup>
                <Label htmlFor='device_name'>Device Name</Label>
                <Input type='text' name='device_name' />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label htmlFor='order_date'>Order Date</Label>
                <Input type='date' name='order_date' />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label htmlFor='location'>Location</Label>
                <Input type='text' name='location' />
              </FormGroup>
            </Col> */}
          </Row>
        ))}

        {/* <Row form>
          <Col sm={4}>
            <FormGroup>
              <Label htmlFor='device_name'>Device Name</Label>
              <Input type='text' name='device_name' />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label htmlFor='order_date'>Order Date</Label>
              <Input type='date' name='order_date' />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label htmlFor='location'>Location</Label>
              <Input type='text' name='location' />
            </FormGroup>
          </Col>
        </Row> */}
      </Form>
    </div>
  )
}

export default AddItem
