import React from "react";
import Map from "../Map/Map";
import { Row, Col } from "react-bootstrap";
import TripList from "../TripList/TripList";
const Dashboard = () => {
  const trips = [
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
    {
      firstName: "Katie",
      lastName: "Le",
      destination: "Dickinson College",
      origin: "New York",
      destinationCoord: {
        lat: 40.203079,
        long: -77.198723,
      },
      originCoord: {
        lat: 43.0,
        long: -75.0,
      },
      tripDate: new Date(),
      price: 9.97,
      seatsRemaining: 2,
    },
  ];
  return (
    <div className="h-100">
      <Row className="h-100">
        <Col
          xs={5}
          className="overflow-auto h-100 d-flex justify-content-center"
        >
          <TripList number={10} trips={trips} />
        </Col>
        <Col className="h-100">
          <Map />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
