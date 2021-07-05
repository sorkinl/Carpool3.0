import logo from "./logo.svg";
import "./App.css";
import "./sass/app.scss";
import FrontPage from "./components/FrontPage/FrontPage";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import EditTrip from "./components/CreateTrip/EditTrip"
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import TripCard from "./components/TripCard/TripCard";
import Map from "./components/Map/Map";
import CreateTrip from "./components/CreateTrip/CreateTrip";
import Dashboard from "./components/Dashboard/Dashboard";

const Routers = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/createtrip" exact component={CreateTrip} />
        <Route path="/map" exact component={Map} />
        <Route path="/trip" exact component={TripCard} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/edittrip" exact component={EditTrip} />
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
