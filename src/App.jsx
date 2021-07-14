import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Weather from './components/Weather'
import Home from './components/Home'
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/weather" component={Weather} ></Route>
      <Route exact path="/about" component={About} ></Route>

    </Switch>
    
    
      <Footer/>
    </>
  );
};

export default App;
