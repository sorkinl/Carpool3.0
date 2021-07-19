import React from "react";
import { Card, Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import AccountIcon from "../Navbar/AccountIcon";

const TripCard = (props) => {
  return (
    <Card
      className={props.className}
      className="shadow-sm rounded m-3 p-2"
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

            <Row className= "mt-1 ml-1">
              <Col xs={5}>
                <Row>
            {/* <Card.Text className="">{props.tripDate.toString()}</Card.Text> */}
                  <Card.Text className="h6 mr-2 mt-1">Date: </Card.Text>
                  <Card.Text className="mb-2"> 01/01/22 </Card.Text>
                </Row>
               </Col>
         
               <Col xs={4}>
                 <Row>
                  <Card.Text class="h6 ml-1 mt-1">Time: </Card.Text>
                  <Card.Text className= 'ml-2'> 9am</Card.Text>
                 </Row>
               </Col> 
            </Row>

            <Row className= "mt-1 ml-1"> 
              <Col xs={5}>
                <Row>
                  <Card.Text className="h6 pr-2 pt-1"> Price:</Card.Text>    
                  <Card.Text className="pb-2"> 5${props.price} </Card.Text>
               </Row>
             </Col>

             <Col xs={5}>
               <Row>
                <Card.Text className="h6 ml-1 mt-1">Seats left:</Card.Text>
                <Card.Text className="ml-2"> 2{props.seatsRemaining}</Card.Text>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        </Col>

        <Col xs={2}  >
          <div style = {{position: "relative", right: "20px", top: "10px", left: "-50px", width: "80px"}}>
            <AccountIcon className="" isNavbar={false} width={50} />
            <Card.Text className = "pt-1" >
               {props.firstName} Leonchik Sorkin{props.lastName}
            </Card.Text>
          </div>
        </Col>

        <Col  xs={8} className="text-left ">
        <Row className= "">
          <Card.Text className="d-inline ml-4">  
            <Card.Text className="d-inline h6 ml"> Comments: </Card.Text> 
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula.
          </Card.Text>  
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
              Cancel
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
