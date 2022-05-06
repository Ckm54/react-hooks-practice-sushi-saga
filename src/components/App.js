import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([])

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((sushis) => setSushiData(sushis))
  }, [])

  function handleEatSushi(sushi) {
    fetch(`http://localhost:3001/sushis/${sushi.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...sushi,
        'img_url': ''
      })
    })
    .then((res) => res.json())
    .then((updatedSushi) => {
      const updatedList = sushiData.map((sushi) => {
        if(sushi.id === updatedSushi.id) {
          return updatedSushi
        } else {
          return sushi
        }
      })
      setSushiData(updatedList)
      setSushiEaten([...sushiEaten, "eat"])
    })
  }
  return (
    <div className="app">
      <SushiContainer allSushi={sushiData} eatSushi={handleEatSushi}/>
      <Table plates={sushiEaten}/>
    </div>
  );
}

export default App;
