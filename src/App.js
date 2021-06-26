import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./components/FrontPage/FrontPage";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route, BrowserRouter as Router, withRouter } from "react-router-dom";


const Routers = () =>{
  return(
    <Switch>
      <Navbar/>
      <Route path ="/"  exact component ={FrontPage}/>
    </Switch>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routers/>
      </Router>
    </div>
  )
  
  ;
}

export default App;
