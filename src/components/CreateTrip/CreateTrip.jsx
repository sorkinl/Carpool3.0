import React, {useState} from "react";
import {Form,Col, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'


const CreateTrip =()=>{
    const [date, setDate] = useState(new Date())
    const [price, setPrice] = useState("Free, Gas, $$, etc!")
    const [customPriceDisabled, setCustomPrice] = useState(true)
    const [customPriceValue, setCustomPriceValue] = useState("")

    const maxDate=()=>{
        var date = new Date(new Date());
        date.setDate(date.getDate() + 90);
        return date;
    }
    //changing dropdownButton resets custom form values
    const onItemClick=(x)=>{
        if(x.target.value !=="Custom Input (Cash, etc)"){
            setPrice(x.target.value)
            setCustomPrice(true)
            setCustomPriceValue("")
        }else{
            setCustomPrice(false)
        }
    }
    
    const onCustomPriceChange=(x)=>{
        setPrice(x.target.value)
        if(x.target.value.length===0) {setPrice("Free, Gas, $$, etc!")}
    }
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center">
        <Form>
        <Form.Row>
            <Form.Group style={{width:"100%"}}>
            <Form.Label className="float-left">Pick Up Location</Form.Label>
            <Form.Control placeholder="Pick Up Location" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group style={{width:"100%"}}>
            <Form.Label className="float-left">Destination</Form.Label>
            <Form.Control placeholder="Destination" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group >
            <Form.Label className="float-left">Date</Form.Label> <br/>
              
                <DateTimePicker 
           
                    value = {date}
                    onChange={(value)=>setDate(value)} 
                    clearIcon={null}
                    minDate={new Date()}
                    maxDate={maxDate()}
                    
                    /> 
          
            </Form.Group>
        </Form.Row>

       
           
            
        <Form.Row>
            <Form.Group className="" style={{width:"50%"}} controlId="formGridAddress2">
                <Form.Label className="float-left">Price</Form.Label> 
                <Form.Control as="select" custom onChange = {(x)=>onItemClick(x)}>
                    <option>No Cost</option>
                    <option>Gas Fee</option>
                    <option>Custom Input (Cash, etc)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="" style={{width:"50%"}} controlId="formGridAddress2">
                <Form.Label className="float-left">Seats Available</Form.Label> 
                <Form.Control as="select" custom onChange = {(x)=>setPrice(x.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Form.Control>
            </Form.Group>
               
        </Form.Row>

        <Form.Row>
            <Form.Group style={{width:"100%"}}>
            <Form.Label className="float-left">Custom Price Input</Form.Label> 
            <Form.Control placeholder="Custom Input (Cash, etc)"  disabled={customPriceDisabled} onChange={(x)=>setCustomPriceValue(x.target.value)} value = {customPriceValue}/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Button variant="dark" type="submit" style={{width:"100%"}}>
                Submit
            </Button>
        </Form.Row>
       
        </Form>
        </div>

    )

}

export default CreateTrip