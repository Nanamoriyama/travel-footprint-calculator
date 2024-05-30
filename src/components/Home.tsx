import React, { useState } from "react";

import { data, TravelData } from "./data";

function Home() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState<TravelData | null>(null);

  const handleSearch = () => {
    const found = data.find(
      (item) =>
        item["Starting point"] === start && item.Destination === destination
    );
    setResult(found || null);
  };

  return (
    <div className="my-8">
      <h1 className="my-8">Travel CO2 Calculator</h1>
      <div className="flex justify-between gap-3 ">
        <div className="">
          <label className="border-white">
            START
            <input
              type="text"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              list="starting-points"
              className=""
            />
            <datalist id="starting-points">
              {[...new Set(data.map((item) => item["Starting point"]))].map(
                (point, index) => (
                  <option key={index} value={point} />
                )
              )}
            </datalist>
          </label>
        </div>
        <div>
          <label>
            DESTINATION
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              list="destinations"
            />
            <datalist id="destinations">
              {[...new Set(data.map((item) => item.Destination))].map(
                (dest, index) => (
                  <option key={index} value={dest} />
                )
              )}
            </datalist>
          </label>
        </div>
      </div>
      <button onClick={handleSearch} className="my-8">
        Search
      </button>
      {result && (
        <div>
          <h2 className="font-extrabold">Results</h2>
          <p>Train: {result.Train} kg CO2</p>
          <p>Car: {result.Car} kg CO2</p>
          <p>Plane: {result.Plane} kg CO2</p>
        </div>
      )}
    </div>
  );
}

export default Home;
