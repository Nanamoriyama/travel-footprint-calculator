import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface OffsetActivity {
  activity: string;
  offset: number;
  unit: string;
}
const offsetData: OffsetActivity[] = [
  { activity: "plant trees🌳", offset: 22.68, unit: "trees" },
  { activity: "less using plastic bags🛍️", offset: 0.03549, unit: "bags" },
  { activity: "buy second hand clothing👚", offset: 25, unit: "kg" },
  { activity: "cycling🚲", offset: 0.15, unit: "km" },
  { activity: "less eating beef🐄", offset: 27, unit: "kg" },
];

interface Result {
  activity: string;
  amount: string;
  unit: string;
}
const Balance: React.FC = () => {
  const location = useLocation();
  const { co2Amount: initialCo2Amount } = location.state || { co2Amount: "" };
  const [co2Amount, setCo2Amount] = useState<number | string>(initialCo2Amount);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [animate, setAnimate] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsPageOpen(false), 1500); // Match the animation duration
  }, []);

  const handleCheckboxChange = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const calculateOffsets = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      const results = selectedActivities.map((activity) => {
        const activityData = offsetData.find((a) => a.activity === activity);
        if (!activityData) {
          return { activity, amount: "0", unit: "" }; // Default to zero if activity not found
        }
        const { offset, unit } = activityData;
        const amount = Math.floor(Number(co2Amount) / offset).toFixed(0);
        return { activity, amount, unit };
      });
      setResults(results);
    }, 500); // Match the animation duration
  };

  return (
    <div className={`p-4 ${isPageOpen ? "animate-pageOpen" : ""}`}>
      <h2 className="text-xl font-bold mb-4">Balance Your CO2 Emissions</h2>
      <div className="mb-4">
        <label className="block mb-2">CO2 Amount (kg):</label>
        <input
          type="number"
          value={co2Amount}
          onChange={(e) => setCo2Amount(e.target.value)}
          className="p-2 border border-gray-700 rounded text-gray-700"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Select Activities:</h3>
        {offsetData.map(({ activity }) => (
          <div key={activity} className="mb-2">
            <label className="text-lg">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(activity)}
                className="mr-2"
              />
              {activity}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={calculateOffsets}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>
      <div className={`mt-4 ${animate ? "animate-fadeIn" : ""}`}>
        {results.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Results:</h3>
            <ul className="text-lg">
              {results.map(({ activity, amount, unit }) => (
                <li key={activity} className="transition duration-700">
                  {activity}: {amount} {unit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Balance;
