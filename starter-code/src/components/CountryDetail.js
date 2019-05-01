
import React, { Component } from 'react'
import countriesJSON from '../countries.json'
import { Link } from "react-router-dom";

const findCountryWithCountryCode = (countryCode) => {
  const found = countriesJSON.find(el => el.cca3 === countryCode);
  return found;
}


export default class CountryDetail extends Component {
  render() {
    
    const countryId = this.props.match.params.id;
    const country = findCountryWithCountryCode(countryId)

    return (
      <React.Fragment>
        
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className='capital-style'>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area}
                    km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((countryCode, index) => (

                      <li key={index}><Link to={'/'+ countryCode} > {findCountryWithCountryCode(countryCode).name.common} </Link></li>
                      ))}    

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </React.Fragment>
    )
  }
}

