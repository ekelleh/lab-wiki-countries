import React, { Component } from 'react';
import './App.css';
import countriesJSON from './countries.json'
import CountryDetail from './components/CountryDetail'
import Navbar from './components/Navbar'
import CountryList from './components/CountryList'

import { Switch, Route } from "react-router-dom";

class App extends Component {

  state = {
    countries: countriesJSON
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
        <div className="row">

        <CountryList countries={this.state.countries}/>

        <Switch>

         <Route exact path="/:id" component={CountryDetail} />

        </Switch>

        </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
