import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
const Map = () => (
  <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <MapComponent />
  </Wrapper>
);

export default Map;
