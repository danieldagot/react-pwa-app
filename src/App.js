// import React, { Component ,JsonTable } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import Home from "./components/Home";
// import About from "./components/About";
// import ReactGoogleSheets from 'react-google-sheets'; 
// import Tabletop from 'tabletop';
// import Raw from "./data" ; 
// import "./app.css"
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     Tabletop.init({
//       key: '1bwUidK8Ok86LfHYJUnzZWvTkW7FfhHlJsHY3GdKsYpI',
//       simpleSheet: true,
//       callback: data => {
//         console.log('google sheet data --->',data)
//         console.log("----------------------------------------");
//         this.setState({data:data})
//       },
//      // simpleSheet: true
//     })
//   }


//   render() {
//     return (
//       <div className="App">
//         <table>
          
//     {Raw.map(m => {
//       var vals = Object.values(m)
// return     <tr>{vals.map(d =>  <td> {d}</td>)}</tr>
    
    
//       })}
//         </table>
      
//       {/* {JSON.stringify(Raw)} */}
//       </div>
//     );
//   }
// }
// export default App;


  
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React App</h2>
        </div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;