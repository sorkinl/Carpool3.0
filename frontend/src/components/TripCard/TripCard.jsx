import React from "react";
import { Card, Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import AccountIcon from "../Navbar/AccountIcon";

const TripCard = (props) => {
  return (
    <Card
      className={props.className}
      className="m-3 p-2"
      bg={"light"}
      text={"dark"}
      style={{ width: "25rem", height: "14rem" }}
    >
      <Row>

        <Col xs={10}>
          <Card.Body className="text-left p-1">
            <Row>
            <Card.Title className="pr-3 pl-3">{props.origin} Carlisle, PA </Card.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-arrow-right" viewBox="0 0 15 15">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 
            <Card.Title className="pl-3">{props.destination} NYC, NY </Card.Title>
            </Row>

            <Row className= "pt-1">
            <Col xs={5}>
            {/* <Card.Text className="">{props.tripDate.toString()}</Card.Text> */}
            <Card.Text className=""> Date: 01/01/22 </Card.Text>
            </Col>
            <Col xs={4}>
              <Card.Text>Time: 9am</Card.Text>
            </Col> 
            </Row>

            <Row className= "pt-1"> 
            <Col xs={5}>
            <Card.Text className="">Price: 5${props.price} </Card.Text>
            </Col>
            <Col xs={5}>
            <Card.Text className="">Seats left: 2{props.seatsRemaining}</Card.Text>
            </Col>
          </Row>
          </Card.Body>
          </Col>

          <Col xs={2}  >
          <div style = {{position: "relative",
                    right: "20px",
                    top: "10px",
                    left: "-50px",
                    width: "80px"}}>
          <AccountIcon className="" isNavbar={false} width={50} />
          <Card.Text className = "pt-1" >
            {props.firstName} Leonchik Sorkin{props.lastName}
          </Card.Text>
          </div>
        </Col>

        <Col  xs={8}>
        <Row className= "float-left pl-1 pt-2 width-70">
            <Col>
            <Card.Text className="">Comments: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</Card.Text>
            </Col>
          </Row>
          </Col>
          
          <ButtonGroup className="align-items-center" style = {{position: "absolute",
                  right: "7px", bottom: "7px"}}>
          <Button
              variant="outline-secondary"
              type="submit"
              className=" mr-2"
              size = "sm"
              style={{ width: "70px" }}
            >
              Delete
            </Button>
            <Button 
               variant="outline-secondary"
               type="submit"
               size = "sm"
               className = ""
               style={{ width: "70px" }}>
              Edit
            </Button>
          </ButtonGroup>

      </Row>
    </Card>
  );
};

export default TripCard;
