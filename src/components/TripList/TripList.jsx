import React from "react";
import TripCard from "../TripCard/TripCard";

const TripList = (props) => {
  return (
    <div>
      {props.trips.map((trip) => (
        <TripCard className="m-3" {...trip} />
      ))}
    </div>
  );
};

export default TripList;
