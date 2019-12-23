import React, { Component ,JsonTable } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
//import Home from "./components/Home";
import About from "./components/About";
//import ReactGoogleSheets from 'react-google-sheets'; 
//import Tabletop from 'tabletop';
import Raw from "./data" ; 
import "./app.css"
class Tible extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  render() {
    return (
      <div className="App">
        <table>
          
    {Raw.map(m => {
      var vals = Object.values(m)
return     <tr>{vals.map(d =>  <td> {d}</td>)}</tr>
    
    
      })}
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
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Tible} />
            <Route path="/about" exact component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;