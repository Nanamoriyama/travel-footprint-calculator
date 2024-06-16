import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const { result } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-8">
      {result ? (
        <div className="text-center">
          <h2 className="font-extrabold mt-0 mb-10">Results</h2>
          <div className="flex justify-between gap-4">
            <div className="border border-stone-500 rounded-lg p-4">
              Train: {result.Train} kg CO2
            </div>
            <div className="border border-stone-500 rounded-lg p-4">
              Car: {result.Car} kg CO2
            </div>
            <div className="border border-stone-500 rounded-lg p-4">
              Plane: {result.Plane} kg CO2
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">
          No results found. Please go back and perform a search.
        </p>
      )}
      <button
        onClick={() => navigate("/")}
        className="border border-stone-500 mt-10 px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
}

export default Result;
