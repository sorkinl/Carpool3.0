import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
const NavBar = ()=>{
    return (
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Carpoolicon</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Post Ride</Nav.Link>
          <Nav.Link href="#features">Find Rides</Nav.Link>
          <Nav.Link href="#pricing">About us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
}
export default NavBar;
