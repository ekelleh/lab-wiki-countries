import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CountryList extends Component {
  render() {

    
    return (
    
          <div className="col-5 column-style">
            <div className="list-group">
            {this.props.countries.map((country, index) => (

              <Link className="list-group-item list-group-item-action" to={'/'+ country.cca3} key={index}> {country.name.common} </Link>
            ))}

            </div>
        </div>
      
    )
  }
}



