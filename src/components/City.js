import React, { Component } from 'react';
import {getReportStatic} from '../service'

class City extends Component{
  componentDidMount() {
    getReportStatic().then( report => {
      this.setState ({
        weatherReports:report
      });
    })
  }
  getCityRow(city){
    return (
        <tr>
          <td>{city.cityName}</td>
         <td>{city.sunRise}</td>
         <td>{city.sunSet}</td>
        </tr>
         );
  }
    render(){
      // const report = await getReportStatic();
      console.log('printing state');
      if(this.state!=null){
        console.log(this.state.weatherReports[0].cityName);
      return (
        <div>
          <table border="1" align="left" >
            <tbody>
              <tr>
              <th scope ="col">city name </th>
              <th scope ="col">sun rise </th>
               <th scope ="col">sun set </th>
               </tr>
            {this.state.weatherReports.map(city=>this.getCityRow(city))}
            </tbody>
          </table>
        </div>
        
  )
      }
      return(
        <li>
         ...loading
        </li>
      );
    }
  }

  export default City;