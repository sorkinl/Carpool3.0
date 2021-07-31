import React, { useEffect, useState } from "react";
import {
  Form,
  Col,
  Button,
  Card,
  Dropdown,
  Modal,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { Typeahead } from "react-bootstrap-typeahead";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TripService from "../../services/trip.service";

const EditTrip = () => {
  const geocoder = new window.google.maps.Geocoder();

  const [pickupAddress, setPickupAddress] = useState("");

  const [destinationAddress, setDestinationAddress] = useState("");

  const [submitValues, setSubmitValues] = useState({
    tripid: uuid(),
    desttitle: "",
    destlat: null,
    destlong: null,
    origintitle: "",
    originlat: null,
    originlong: null,
  });

  const [date, setDate] = useState(new Date());

  const [price, setPrice] = useState("Free, Gas, $$, etc!");

  const [customPriceDisabled, setCustomPrice] = useState(true);

  const [customPriceValue, setCustomPriceValue] = useState("");

  const [predictions, setPredictions] = useState([]);

  const user = useSelector((state) => state.authReducer.user);
  
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

  const handlePickupChange = (text, e) => {
    setPickupAddress(text);
    if (pickupAddress.length > 3) {
      autocompleteService.getQueryPredictions(
        { input: pickupAddress },
        printPredictions
      );
    }
  };
  const handleDestinationChange = (text, e) => {
    setDestinationAddress(text);
    if (destinationAddress.length > 3) {
      autocompleteService.getQueryPredictions(
        { input: destinationAddress },
        printPredictions
      );
    }
  };
  const maxDate = () => {
    var date = new Date(new Date());
    date.setDate(date.getDate() + 90);
    return date;
  };
  const printPredictions = (predictions, status) => {
    if (
      status !== window.google.maps.places.PlacesServiceStatus.OK ||
      !predictions
    ) {
      console.log(status);
      return;
    }
    console.log(predictions);
    setPredictions(predictions);
  };

  const onValueSelect = (field, place) => {
    console.log(place);
    let obj;
    const placeId = place[0] ? place[0].place_id : null;
    geocoder
      .geocode({ placeId: placeId })
      .then(({ results }) => {
        console.log(results[0]);

        if (field === "pickup") {
          obj = {
            origintitle: results[0].formatted_address,
            originlat: results[0].geometry.location.lat(),
            originlong: results[0].geometry.location.lng(),
          };
        } else {
          obj = {
            desttitle: results[0].formatted_address,
            destlat: results[0].geometry.location.lat(),
            destlong: results[0].geometry.location.lng(),
          };
        }
        setSubmitValues({
          ...submitValues,
          ...obj,
        });
      })
      .catch((e) => console.log("Geocoder failed due to: " + e));
  };

  const handleSubmit = () => {
    try {
      TripService.createTrip({
        submitValues,
        date,
        price,
        uid: user,
      }).then((response) => {
        console.log(response);
      })
    } catch(e) {
      console.log(e);
    }
    //   axios.post("api/trip/create", {
    //     ...submitValues,
    //     date,
    //     price,
    //     uid: user,
    //   });
  };

  const autocompleteService =
    new window.google.maps.places.AutocompleteService();

  return (
    <div className="text-center vh-100 d-flex align-items-center justify-content-center">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGridAddressPickUp">
              <Form.Label>Pickup Address</Form.Label>
              <Typeahead
                placeholder="Current Pickup Address"
                id="pickupAddress"
                value={pickupAddress}
                onInputChange={handlePickupChange}
                options={predictions}
                labelKey={(option) => option.description}
                onChange={(place) => onValueSelect("pickup", place)}
                inputProps={{ required: true }}
              />
            </Form.Group>
            <Form.Group controlId="formGridAddressDestination">
              <Form.Label>Destination Address</Form.Label>
              <Typeahead
                placeholder="Current Destination Address"
                id="destinationAddress"
                value={destinationAddress}
                onInputChange={handleDestinationChange}
                options={predictions}
                labelKey={(option) => option.description}
                onChange={(place) => onValueSelect("destination", place)}
                inputProps={{ required: true }}
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
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Button variant="dark" type="submit" style={{ width: "150px" }}>
              Cancel
            </Button>
          </Form.Group>
        </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default EditTrip;
