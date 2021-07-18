import React, { useEffect, useState } from "react";
import {
  Form,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  Modal,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { Typeahead } from "react-bootstrap-typeahead";

const EditTrip = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("Free, Gas, $$, etc!");
  const [customPriceDisabled, setCustomPrice] = useState(true);
  const [customPriceValue, setCustomPriceValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  //changing dropdownButton resets custom form values
  const onItemClick = (x) => {
    if (x.target.value !== "Custom Input (Cash, etc)") {
      setPrice(x.target.value);
      setCustomPrice(true);
      setCustomPriceValue("");
    } else {
      setCustomPrice(false);
    }
  };

  const maxDate = () => {
    var date = new Date(new Date());
    date.setDate(date.getDate() + 90);
    return date;
  };
  const printPredictions = (predictions, status) => {
    if (
      status != window.google.maps.places.PlacesServiceStatus.OK ||
      !predictions
    ) {
      console.log(status);
      return;
    }
    console.log(predictions);
    setPredictions(predictions);
  };
  const autocompleteService =
    new window.google.maps.places.AutocompleteService();
  useEffect(() => {
    if (pickupAddress.length > 3) {
      autocompleteService.getQueryPredictions(
        { input: pickupAddress },
        printPredictions
      );
    }
  });

  return (
    <div className="text-center vh-100 d-flex align-items-center justify-content-center">
      <Form>
        <Form.Group controlId="formGridAddressPickUp">
          <Form.Label>Pickup Address</Form.Label>
          {/* <Form.Control
            placeholder="Current Pickup Address"
            name="pickupAddress"
            value={inputValues.pickupAddress}
            onChange={(e) => handleOnChange(e)}
          /> */}
          <Typeahead
            placeholder="Current Pickup Address"
            id="pickupAddress"
            value={pickupAddress}
            onInputChange={(text, e) => setPickupAddress(text)}
            options={predictions}
            labelKey={(option) => option.description}
          />
        </Form.Group>
        <Form.Group controlId="formGridAddressDestination">
          <Form.Label>Destination Address</Form.Label>
          <Form.Control
            placeholder="Current Destination Address"
            name="destinationAddress"
            value={destinationAddress}
            onInputChange={(text, e) => setDestinationAddress(text)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>Date</Form.Label> <br />
            <DateTimePicker
              className=""
              value={date}
              onChange={(value) => setDate(value)}
              clearIcon={null}
              minDate={new Date()}
              maxDate={maxDate()}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSeats">
            <Form.Label>Extra Seats</Form.Label>
            <Form.Control as="select" defaultValue="deafault" className="ml-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className="pr-1 float-left" controlId="formGridAddress2">
            <Form.Label>Price</Form.Label>
            <Form.Control as="select" custom onChange={(x) => onItemClick(x)}>
              <option>No Cost</option>
              <option>Gas Fee</option>
              <option>Custom Input (Cash, etc)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="pl-1 float-right">
            <Form.Label>Custom Price Input</Form.Label>
            <Form.Control
              placeholder="Custom Input (Cash, etc)"
              disabled={customPriceDisabled}
              onChange={(x) => setCustomPriceValue(x.target.value)}
              value={customPriceValue}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridComment">
            <Form.Label>Comments</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="btn-group ml-auto">
            <Button
              variant="dark"
              type="submit"
              className="col-xs-3 mr-2"
              style={{ width: "150px" }}
            >
              Update
            </Button>
            <Button variant="dark" type="submit" style={{ width: "150px" }}>
              Cancel
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};
export default EditTrip;
