import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import AccountIcon from "../Navbar/AccountIcon";
const TripCard = () => {
  return (
    <Card bg={"light"} text={"dark"} style={{ width: "22rem" }}>
      <Row>
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center flex-column pl-4"
        >
          <AccountIcon className="pb-2" isNavbar={false} width={50} />
          <Card.Text>Katie Le</Card.Text>
        </Col>
        <Col xs={9}>
          <Card.Body className="text-left p-2">
            <Card.Title>To: Dickinson College</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              From: New York
            </Card.Subtitle>
            <Card.Text className="">Wednesday, Oct 15 at 3:45PM</Card.Text>
          </Card.Body>
          <div className="float-left">
            <p className="d-inline m-2">$10 per seat</p>
            <p className="d-inline m-2">2 seats left</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default TripCard;
