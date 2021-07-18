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
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
||||||| 47766c4e
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import SearchBar from "../Search/SearchBar";
>>>>>>> 6be8a8ce029f076c0fc173a6e2cc649e08bbd88c

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const loggedInComponent = user ? (
    //loggedIn
    <AccountIcon width={50} isNavbar={true} />
  ) : (
    //!loggedIn
    <Link to="/signup">
      <Button variant="outline-light">Sign-up</Button>
    </Link>
    // </Button>
  );
  return (
    <Navbar
      bg={useLocation().pathname == "/" ? "transparent" : "dark"}
      className={
        /* 
        useLocation().pathname == "/" ?  */ "position-absolute vw-100" /* : "" */
      }
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/">
        Carpool
      </Navbar.Brand>

<<<<<<< HEAD
      {/*  <InputGroup className="w-25">
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup> */}
||||||| 47766c4e
      <InputGroup className="w-25">
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
=======
      <SearchBar/>
>>>>>>> 6be8a8ce029f076c0fc173a6e2cc649e08bbd88c

      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/createtrip">
          Post Ride
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard">
          Find Rides
        </Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
      </Nav>
      {loggedInComponent}
    </Navbar>
  );
};
export default NavBar;
