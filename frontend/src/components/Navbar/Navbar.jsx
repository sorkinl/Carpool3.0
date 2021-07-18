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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../Search/SearchBar";

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

      <SearchBar />

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
