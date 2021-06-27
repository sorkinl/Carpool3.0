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
var loggedIn = true;
const loggedInComponent = loggedIn ? (
  //loggedIn
  <AccountIcon />
) : (
  //!loggedIn
  <Button variant="outline-light">Sign-up</Button>
);

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Carpoolicon</Navbar.Brand>

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
