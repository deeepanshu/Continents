import React from 'react';
import { IContinentData } from '../../lib/interfaces'
interface IProps { 
  data?: IContinentData 
}
const CountryTable = ({ data }: IProps ) => (
  <table className="table">
    <thead>
      <tr>
        <th style={{ width: "30%" }}>Country</th>
        <th style={{ width: "10%" }}>Captial</th>
        <th style={{ width: "5%" }}>Curreny</th>
        <th style={{ width: "15%" }}>Phone (Ext.)</th>
        <th>Languages Spoken</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.continent?.countries.map(ele => (
          <tr key={ele.code}>
            <td >{ele.name} {ele.emoji}</td>
            <td>{ele.capital || "-"}</td>
            <td>{ele.currency || "-"}</td>
            <td>{ele.phone ? `+${ele.phone}` : "-" }</td>
            <td>{ele.languages.length ? ele.languages.map(l => l.name).join(", ") : "-"}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default CountryTable;