import React from "react";
import TripCard from "../TripCard/TripCard";

const TripList = (props) => {
  return Array(props.number)
    .fill()
    .map((e) => <TripCard />);
};

export default TripList;
