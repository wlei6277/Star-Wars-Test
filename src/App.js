import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route  
            exact path="/"
            component={Home}
          />
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
}

export default connect(mapStateToProps)(App);
