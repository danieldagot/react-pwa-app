import React, { Component} from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";
//import Home from "./components/Home";
//import About from "./components/About";
//import ReactGoogleSheets from 'react-google-sheets'; 
//import Tabletop from 'tabletop';
import Raw from "./data" ; 
import "./app.css"

class Tible extends Component {
   
  clols = Object.values(Raw.shift()); // returns "zero"
  dates = Raw[0]
  
  get_shifs = function() {
    let obg = {}
    for (let index = 1 ; index < Raw.length; index++) {
      console.log(Raw[index]);
      
      
    }
  }
  render() {
    console.log(this.dates);
    this.get_shifs()
    return (
      <div className="App">
        <table>
        <thead>

        <tr>
    {this.clols.map(c => <th>{c}</th>)}
    
  </tr>
  </thead>
	<tbody>
    {Raw.map(m => {
      var vals = Object.values(m)
return     <tr>{vals.map(d =>  <td> {d}</td>)}</tr>
    
    
      })}
      </tbody>
        </table>
      
      {/* {JSON.stringify(Raw)} */}
      </div>
    );
  }
}



  
// import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import Home from "./components/Home";
// import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
     
          
       <Tible/>
        
  
      </div>
    );
  }
}
export default App;