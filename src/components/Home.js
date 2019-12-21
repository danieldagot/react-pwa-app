import React from "react";
import { Link } from "react-router-dom";




const SHEET_ID = '1TK4yJK9Jj2cB3HxIA8SnRYC0oBDKyIOy3xEZZkGMzQw';
const ACCESS_TOKEN = '328708097763-c10j1infothgirhoq5g25bmcou3vvrlh.apps.googleusercontent.com';
 let getSheetValues = async () =>{
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:B5`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`  
  }
  });
  const data = await request.json();
  console.log(data.Sheet1.raw.feed.entry);
  return data.Sheet1.raw.feed.entry;
}


const home = () => {
  return (
    <div title="Home">
              <button onClick={getSheetValues()}>Get sheet values</button>
      {JSON.stringify(getSheetValues)}
      <h1>Home Page</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default home;




  
