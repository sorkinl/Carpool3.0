import logo from "./logo.svg";
import "./App.css";
import "./sass/app.scss";
import FrontPage from "./components/FrontPage/FrontPage";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import EditTrip from "./components/CreateTrip/EditTrip";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useFindUser from "./hooks/useFindUser";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/authActions";
import ReactGoogleMapLoader from "react-google-maps-loader";

const Routers = () => {
  return (
    <>
      <Navbar />
      <div className="pt-7 h-100">
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/createtrip" exact component={CreateTrip} />
          <Route path="/map" exact component={Map} />
          <Route path="/trip" exact component={TripCard} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/edittrip" exact component={EditTrip} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </>
  );
};

function App() {
  const { user, isLoading } = useFindUser();
  const dispatch = useDispatch();
  dispatch(setUser(user));

  return (
    //<Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <ReactGoogleMapLoader
      params={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: "places, directions",
      }}
      render={(googleMaps) =>
        googleMaps && (
          <div className="App">
            <Router>
              <Routers />
            </Router>
          </div>
        )
      }
    />
  );
}

export default App;
