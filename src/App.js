import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import About from "./components/About";
import ReactGoogleSheets from 'react-google-sheets'; 
import Tabletop from 'tabletop';

function showInfo(data, tabletop) {
  alert('Successfully processed!')
  console.log(data);
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1bwUidK8Ok86LfHYJUnzZWvTkW7FfhHlJsHY3GdKsYpI',
      simpleSheet: true,
      callback: data => {
        console.log('google sheet data --->',data)
        console.log("----------------------------------------");
        this.setState({data:data})
      },
     // simpleSheet: true
    })
  }


  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;


