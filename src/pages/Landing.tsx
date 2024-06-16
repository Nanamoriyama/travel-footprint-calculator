import React, { useState } from "react";
import { data, TravelData } from "../components/data";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const found = data.find(
      (item) =>
        item["Starting point"] === start && item.Destination === destination
    );
    navigate("/results", { state: { result: found || null } });
  };

  return (
    <div className="">
      <section className="">
        <div className="my-8">
          <div className="flex flex-row justify-between gap-16">
            <div className="flex flex-col">
              <label className="mb-2">
                From
                <div>
                  <input
                    type="text"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    list="starting-points"
                    className="mt-1 p-1 w-40 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 appearance-none text-slate-600"
                  />
                  <datalist id="starting-points">
                    {[
                      ...new Set(data.map((item) => item["Starting point"])),
                    ].map((point, index) => (
                      <option key={index} value={point} />
                    ))}
                  </datalist>
                </div>
              </label>
            </div>
            <div>
              <label>
                To
                <div>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    list="destinations"
                    className="mt-1 p-1 w-40 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 text-slate-600"
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
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="my-10 border  border-stone-400 border-bold p-4 rounded hover:border-red-400 items-center"
            >
              Calculate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
