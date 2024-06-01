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
      <div className="flex flex-row justify-between gap-1 lg:gap-6">
        <div className="flex flex-col">
          <label className="mb-2">
            START
            <div>
              <input
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                list="starting-points"
                className="mt-1 p-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 appearance-none"
              />

              <datalist id="starting-points">
                {[...new Set(data.map((item) => item["Starting point"]))].map(
                  (point, index) => (
                    <option key={index} value={point} />
                  )
                )}
              </datalist>
            </div>
          </label>
        </div>
        <div>
          <label>
            DESTINATION
            <div>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                list="destinations"
                className="mt-1 p-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
              />
              <datalist id="destinations">
                {[...new Set(data.map((item) => item.Destination))].map(
                  (dest, index) => (
                    <option key={index} value={dest} />
                  )
                )}
              </datalist>
            </div>
          </label>
        </div>
      </div>
      <button onClick={handleSearch} className="my-8">
        Search
      </button>

      {result && (
        <div>
          <h2 className="font-extrabold my-8">Results</h2>
          <div className="flex justify-between">
            <div className="border border-stone-500 rounded-lg p-4">
              Train
              <br /> {result.Train} kg CO2
            </div>
            <div className="border border-stone-500 rounded-lg p-4">
              Car
              <br />
              {result.Car} kg CO2
            </div>
            <div className="border border-stone-500 rounded-lg p-4">
              Plane
              <br /> {result.Plane} kg CO2
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
