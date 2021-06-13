import React from 'react';
import './Table.css';
import numeral from 'numeral';

function Table({countries}) {
   console.log(countries);
   return (
         <div className="table">
         {countries.map(({country,cases,countryInfo}) => (
            <tr>
               
               <td data-label="Country"><img src={`${countryInfo.flag}`} style={{height:'40px',backgroundSize: 'cover',borderRadius: '8px'}} alt={country}/>{country}</td>
               <td data-label="Total Cases">
                  <strong>{numeral(cases).format("0,0")}</strong>
               </td>
            </tr>
         ))}
         </div>
   )
}

export default Table
