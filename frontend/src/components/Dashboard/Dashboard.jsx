import React, { useEffect, useState } from "react";
import Map from "../Map/Map";
import { Row, Col } from "react-bootstrap";
import TripList from "../TripList/TripList";
import { useLocation } from "react-router-dom";

//TODO: No trips found

//ISSUE: Unable to add trip result to searchData 

const Dashboard = () => {
  const [searchData, setSearchData] = useState([]);
  const { data } = useLocation();
  console.log("data", data);

  useEffect(() => {
    if ( data !== undefined) {
      if (data.length > 0) {
        data.forEach(trip => {
          setSearchData((prevState) => ({
            searchData: [
              ...prevState, 
              {
                firstName: "Katie",
                lastName: "Le",
                destination: trip.desttitle,
                origin: trip.origintitle,
                destinationCoord: {
                  lat: trip.destlat,
                  long: trip.destlong,
                },
                originCoord: {
                  lat: trip.originlat,
                  long: trip.originlong,
                },
                tripDate: trip.departdate,
                price: 9.97,
                seatsRemaining: trip.emptyseats,
              }
            ]
          }));
        });
      } else {
        //print "no trips found"
      }
    }
  }, []);

  console.log("searchData", searchData);

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
          {/* <TripList number={10} trips={data === undefined? trips : searchData} /> */}
        </Col>
        <Col className="h-100">
          <Map />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
