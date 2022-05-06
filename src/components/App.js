import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((sushis) => setSushiData(sushis))
  }, [])
  return (
    <div className="app">
      <SushiContainer allSushi={sushiData}/>
      <Table />
    </div>
  );
}

export default App;
