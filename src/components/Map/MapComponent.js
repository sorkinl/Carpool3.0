import React, { useEffect } from "react";

const MapComponent = () => {
  let map;

  function initMap() {
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  useEffect(() => {
    initMap();
  }, []);

  return <div id="map" className="vh-100"></div>;
};

export default MapComponent;
