import React from "react";
import {
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

export default function SearchBar() {
  
    const onSearchRides = () => {
      //Search by lat, long, name 
      //query: "/dashborad?key=param"
    }
    return (
      <InputGroup className="w-50 mr-2">
        <FormControl placeholder="From" />
        <FormControl placeholder="To" />
        <InputGroup.Append>
          <Button 
            variant="outline-secondary"
            onClick={onSearchRides}>
            Search
            </Button>
        </InputGroup.Append>
      </InputGroup>
  );
};
