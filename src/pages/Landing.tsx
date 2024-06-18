import { useState } from "react";
import { data } from "../components/data";
import { useNavigate } from "react-router-dom";

interface TravelData {
  "Starting point": string;
  Destination: string;
  Train: number;
  Car: number;
  Plane: number;
  "Driving distance (km)": number;
  "Flying distance (km)": number;
  "Train distance (km)": number;
}

function Landing() {
  const [start, setStart] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const found = data.find(
      (item) =>
        item["Starting point"] === start && item.Destination === destination
    );

    setIsTransitioning(true);
    setTimeout(() => {
      if (found) {
        const travelData: TravelData = {
          "Starting point": found["Starting point"],
          Destination: found.Destination,
          Train: Number(found.Train),
          Car: Number(found.Car),
          Plane: Number(found.Plane),
          "Driving distance (km)": Number(found["Driving distance (km)"]),
          "Flying distance (km)": Number(found["Flying distance (km)"]),
          "Train distance (km)": Number(found["Train distance (km)"]),
        };
        navigate("/results", {
          state: { result: travelData },
        });
      } else {
        navigate("/results", {
          state: { result: null },
        });
      }
    }, 1500); // Match the animation duration
  };

  return (
    <div
      className={`transition-transform ${
        isTransitioning ? "animate-pageClose" : "animate-pageOpen"
      }`}
    >
      <section className="">
        <div className="">
          <div className="flex flex-row justify-between gap-1">
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
          <div className="flex flex-col items-center mt-12">
            <button
              onClick={handleSearch}
              className="my-10 border border-stone-400 border-bold p-4 rounded items-center hover:scale-125 transition duration-300 hover:border-blue-400"
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
