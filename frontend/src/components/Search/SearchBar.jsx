import React, { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Typeahead } from "react-bootstrap-typeahead";
import TripService from "../../services/trip.service";

export default function SearchBar() {
  
    const geocoder = new window.google.maps.Geocoder();
    const history = useHistory();
    
    //Uncomment if not testing
    // const [submitVal, setSubmitVal] = useState({
    //   desttitle: "",
    //   destlat: null,
    //   destlong: null,
    //   origintitle: "",
    //   originlat: null,
    //   originlong: null,
    // });

    //sample data
    const [submitVal, setSubmitVal] = useState({
      desttitle: "B",
      destlat: 40.26244099945301,
      destlong: -76.8777270663108,
      origintitle: "A",
      originlat: 40.20279077901089,
      originlong: -77.19806027344512,
    });

    const [predictions, setPredictions] = useState([]);
    
    const [pickupAddress, setPickupAddress] = useState("");
    
    const [destinationAddress, setDestinationAddress] = useState("");
    
    const autocompleteService =
        new window.google.maps.places.AutocompleteService();
    
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
      console.log("place", place);
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
          setSubmitVal({
            ...submitVal,
            ...obj,
          });
        })
        .catch((e) => console.log("Geocoder failed due to: " + e));
    };

    //Send user to dashboard with the stored result, trips/message
    const onSubmit = async () => {
      //Check for empty inputs
      for (const key of Object.keys(submitVal)) {
        if (!submitVal[key]) {
          return;
        }
      }
      try {
        TripService.findAround(submitVal)
        .then((response) => {
            history.push({
                pathname: "/dashboard",
                data: response.data.body
            });
          console.log("tripresults", response.data.body);
        });
      } catch(e) {
        console.log(e);
      }
    };

    return (
      <InputGroup className="w-50 mr-2">
        <Form.Group>
          <Typeahead
            placeholder="From"
            id="pickupAddress"
            required
            value={pickupAddress}
            onInputChange={handlePickupChange}
            options={predictions}
            labelKey={(option) => option.description}
            onChange={(place) => onValueSelect("pickup", place)}
            inputProps={{ required: true }}
            // isValid
          />

        </Form.Group>
          <Typeahead
            placeholder="To"
            id="destinationAddress"
            value={destinationAddress}
            onInputChange={handleDestinationChange}
            options={predictions}
            labelKey={(option) => option.description}
            onChange={(place) => onValueSelect("destination", place)}
            inputProps={{ required: true }}
            // isInvalid
          />

        <InputGroup.Append>
          <Button 
            variant="outline-secondary"
            onClick={onSubmit}>
            Search
            </Button>
        </InputGroup.Append>
      </InputGroup>
  );
};
