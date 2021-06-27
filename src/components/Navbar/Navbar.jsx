import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import AccountIcon from "./AccountIcon";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

var loggedIn = true;
const loggedInComponent = loggedIn ? (
  //loggedIn
  <AccountIcon width={50} isNavbar={true} />
) : (
  //!loggedIn
    <Link to="/signup">
      <Button variant="outline-light">
        Sign-up
      </Button>
    </Link>
  // </Button>
);

const NavBar = () => {
  return (
    <Navbar
      bg={useLocation().pathname == "/" ? "transparent" : "dark"}
      className={
        useLocation().pathname == "/" ? "position-absolute vw-100" : ""
      }
      variant="dark"
    >
      <Navbar.Brand href="#home">Carpool</Navbar.Brand>

      <InputGroup className="w-25">
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>

      <Nav className="mr-auto">
        <Nav.Link href="#pricing">Post Ride</Nav.Link>
        <Nav.Link href="#features">Find Rides</Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
      </Nav>
      {loggedInComponent}
    </Navbar>
  );
};
export default NavBar;
