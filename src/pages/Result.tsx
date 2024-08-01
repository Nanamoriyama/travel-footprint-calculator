import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const { result } = location.state || {};
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isButtonTransitioning, setIsButtonTransitioning] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1500); // Match the animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleSelectCO2 = (
    amount: number,
    option: string,
    distance: number
  ) => {
    setIsButtonTransitioning(true);
    setTimeout(() => {
      navigate("/balance", {
        state: {
          co2Amount: amount,
          selectedOption: option,
          distance: distance,
        },
      });
    }, 1500); // Match the animation duration
  };

  return (
    <div
      className={`flex flex-col items-center justify-start mt-6 pt-3 ${
        isTransitioning ? "animate-pageOpen" : ""
      }`}
    >
      {result ? (
        <div className="text-center">
          <h2 className="font-extrabold mt-0 mb-10">Results</h2>
          <h4 className="mb-4 font-thin ">
            Click below for CO2 offset options.
          </h4>
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              className={`border border-stone-500 rounded-lg p-4 m-1 hover:scale-125 transition duration-300 hover:border-blue-400 ${
                isButtonTransitioning ? "animate-pageClose" : ""
              }`}
              onClick={() =>
                handleSelectCO2(
                  result.Train,
                  "🚃",
                  result["Train distance (km)"]
                )
              }
            >
              Train: {result.Train} kg CO2 <br />
              <br />
              Distance: {result["Train distance (km)"]} km
            </button>
            <button
              className={`border border-stone-500 rounded-lg p-4 hover:scale-125 transition duration-300 hover:border-blue-400 ${
                isButtonTransitioning ? "animate-pageClose" : ""
              }`}
              onClick={() =>
                handleSelectCO2(
                  result.Car,
                  "🚗",
                  result["Driving distance (km)"]
                )
              }
            >
              Car: {result.Car} kg CO2 <br />
              <br />
              Distance: {result["Driving distance (km)"]} km
            </button>
            <button
              className={`border border-stone-500 rounded-lg p-4 hover:scale-125 transition duration-300 hover:border-blue-400 ${
                isButtonTransitioning ? "animate-pageClose" : ""
              }`}
              onClick={() =>
                handleSelectCO2(
                  result.Plane,
                  "🛫",
                  result["Flying distance (km)"]
                )
              }
            >
              Plane: {result.Plane} kg CO2 <br />
              <br />
              Distance: {result["Flying distance (km)"]} km
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center">
          No results found. Please go back and perform a search.
        </p>
      )}

      <button
        onClick={() => navigate("/")}
        className="border border-stone-500 mt-14 px-4 py-2 rounded hover:border-blue-400 items-center mb-0"
      >
        Go Back
      </button>
    </div>
  );
}

export default Result;
