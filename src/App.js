import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./components/FrontPage/FrontPage";
import LogIn from "./components/Auth/LogIn";
import Navbar from "./components/Navbar/Navbar";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import TripCard from "./components/TripCard/TripCard";
import Map from "./components/Map/Map";
import CreateTrip from "./components/CreateTrip/CreateTrip";

const Routers = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/createtrip" exact component={CreateTrip} />
        <Route path="/map" exact component={Map} />
        <Route path="/trip" exact component={TripCard} />
      </Switch>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
