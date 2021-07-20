import React, { useEffect } from "react";

const MapComponent = () => {
  let map;

  function initMap() {
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    var dirService = new window.google.maps.DirectionsService();

    displayRoute("Chicago", "Dickinson College", dirService);
  }

  function displayRoute(origin, destination, service) {
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
    service
      .route({
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      })
      .then((result) => {
        directionsRenderer.setDirections(result);
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }
  useEffect(() => {
    console.log("here");
    initMap();
  }, []);

  return <div id="map" className="h-100"></div>;
};

export default MapComponent;
