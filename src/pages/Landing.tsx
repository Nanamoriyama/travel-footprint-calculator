import { useState, useEffect } from "react";
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
  const [navigateTriggered, setNavigateTriggered] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTransitioning && !navigateTriggered) {
      const timer = setTimeout(() => {
        let found = data.find(
          (item) =>
            item["Starting point"] === start && item.Destination === destination
        );

        if (!found) {
          found = data.find(
            (item) =>
              item["Starting point"] === destination &&
              item.Destination === start
          );
        }

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
          setNavigateTriggered(true); // 防止再レンダリング
          navigate("/results", {
            state: { result: travelData },
          });
        } else {
          setNavigateTriggered(true); // 防止再レンダリング
          navigate("/results", {
            state: { result: null },
          });
        }
      }, 1500); // アニメーションの時間

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, start, destination, navigate, navigateTriggered]);

  const handleSearch = () => {
    setIsTransitioning(true);
  };

  return (
    <div
      className={`transition-transform ${
        isTransitioning ? "animate-pageClose" : "animate-pageOpen"
      } flex justify-center min-h-screen`}
    >
      <section
        className={`w-full max-w-md ${navigateTriggered ? "hidden" : ""}`}
      >
        <div>
          <div className="flex justify-center text-2xl font-extralight pb-4 mr-2 ml-2 mb-8">
            Please select the locations
          </div>
          <div className="flex flex-row justify-between gap-1 md:gap-4">
            <div className="flex flex-col">
              <label className="mb-2">
                From
                <div>
                  <select
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="mt-1 p-1 w-40 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 text-slate-600"
                  >
                    <option value="" disabled>
                      Start
                    </option>
                    {[
                      ...new Set(data.map((item) => item["Starting point"])),
                    ].map((point, index) => (
                      <option key={index} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label>
                To
                <div>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="mt-1 p-1 w-40 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 text-slate-600"
                  >
                    <option value="" disabled>
                      Destination
                    </option>
                    {[...new Set(data.map((item) => item.Destination))].map(
                      (dest, index) => (
                        <option key={index} value={dest}>
                          {dest}
                        </option>
                      )
                    )}
                  </select>
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
