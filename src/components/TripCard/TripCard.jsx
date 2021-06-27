import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import AccountIcon from "../Navbar/AccountIcon";
const TripCard = (props) => {
  return (
    <Card
      className={props.className}
      bg={"light"}
      text={"dark"}
      style={{ width: "22rem" }}
    >
      <Row>
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center flex-column pl-4"
        >
          <AccountIcon className="pb-2" isNavbar={false} width={50} />
          <Card.Text>
            {props.firstName} {props.lastName}
          </Card.Text>
        </Col>
        <Col xs={9}>
          <Card.Body className="text-left p-2">
            <Card.Title>To: {props.destination}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              From: {props.origin}
            </Card.Subtitle>
            <Card.Text className="">{props.tripDate.toString()}</Card.Text>
          </Card.Body>
          <div className="float-left">
            <p className="d-inline m-2">${props.price} per seat</p>
            <p className="d-inline m-2">{props.seatsRemaining} seats left</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default TripCard;
