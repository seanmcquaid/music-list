import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path ="/" render={()=><Home/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
