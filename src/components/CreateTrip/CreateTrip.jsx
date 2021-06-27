import React, {useState} from "react";
import {Form,Col, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'


const CreateTrip =()=>{
    const [date, setDate] = useState(new Date())
    const [price, setPrice] = useState("Free, Gas, $$, etc!")

    const maxDate=()=>{
        var date = new Date(new Date());
        date.setDate(date.getDate() + 90);
        return date;
    }
    //changing dropdownButton resets custom form values
    const onItemClick=(x)=>{
        console.log(x)
        console.log(x.target)
        console.log(x.target.text)
        setPrice(x.target.text)
    }
    
    const onCustomPriceChange=(x)=>{
        setPrice(x.target.value)
        if(x.target.value.length===0) {setPrice("Free, Gas, $$, etc!")}
    }
    return(
        <div width="100">
        <Form>
        <Form.Row>
            <Form.Group>
            <Form.Label className="float-left">Pick Up Location</Form.Label>
            <Form.Control placeholder="Pick Up Location" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group>
            <Form.Label className="float-left">Destination</Form.Label>
            <Form.Control placeholder="Destination" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group>
            <Form.Label>Date</Form.Label>
              
                <DateTimePicker 
                    value = {date}
                    onChange={(value)=>setDate(value)} 
                    clearIcon={null}
                    minDate={new Date()}
                    maxDate={maxDate()}
                    
                    /> 
          
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Price</Form.Label>
            <DropdownButton title={price}>
            
                <Dropdown.Item onSelect={(_,x)=>onItemClick(x)}>No Cost</Dropdown.Item>
                <Dropdown.Item onSelect={(_,x)=>onItemClick(x)}>Gas Fee</Dropdown.Item>
                <Dropdown.Divider />
                {/* <Dropdown.Item }>Custom Input (Cash, etc)</Dropdown.Item> */}
                <Form.Control 
                    placeholder = "Custom Input (Cash, etc)"
                    onChange={(x)=> onCustomPriceChange(x) }/>
            </DropdownButton>
        </Form.Group>


        <Form.Group controlId="formGridAddress2">
            <Form.Row>
                <DropdownButton id="dropdown-basic-button" title="Extra Seats">
                    <Dropdown.Item >1</Dropdown.Item>
                    <Dropdown.Item >2</Dropdown.Item>
                    <Dropdown.Item >3</Dropdown.Item>
                </DropdownButton>
            </Form.Row>
        </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>

    )

}

export default CreateTrip