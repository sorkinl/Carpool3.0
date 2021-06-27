import React, {useState} from "react";
import {Form,Col, Button, DropdownButton, Dropdown, Modal} from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'


const EditTrip =()=>{
    const [date, setDate] = useState(new Date())

    const maxDate=()=>{
        var date = new Date(new Date());
        date.setDate(date.getDate() + 90);
        return date;
    }

    return(
<div className="text-center vh-100 d-flex align-items-center justify-content-center">
    <Form>
  <Form.Group controlId="formGridAddressPickUp">
    <Form.Label>Pickup Address</Form.Label>
    <Form.Control placeholder="Current Pickup Address" />
  </Form.Group>

  <Form.Group controlId="formGridAddressDestination">
    <Form.Label>Destination Address</Form.Label>
    <Form.Control placeholder="Current Destination Address" />
  </Form.Group>

  <Form.Row>
  <Form.Group>
    <Form.Label controlId="formGridDate">Date</Form.Label>           
         <Form.Control type="date" 
             value = {date}
             onChange={(value)=>setDate(value)} 
             clearIcon={null}
             minDate={new Date()}
             maxDate={maxDate()}
            /> 
  </Form.Group>

    <Form.Group as={Col} controlId="formGridSeats">
      <Form.Label>Extra Seats</Form.Label>
      <Form.Control as="select" defaultValue="deafault">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridComment">
      <Form.Label>Comments</Form.Label>
      <Form.Control/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <div className="btn-group ml-auto">
  <Button className="col-xs-3 mr-2">
    Update
  </Button>
  <Button>
    Cancel
  </Button>
  </div>
  </Form.Row>
</Form> 
 </div>
    )
}

export default EditTrip