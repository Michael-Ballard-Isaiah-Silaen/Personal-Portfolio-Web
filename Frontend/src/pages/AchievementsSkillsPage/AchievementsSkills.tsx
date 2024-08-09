import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./xtra.module.css";
import "./AP.css";

const AchievementsSkillsPage: React.FC = () => {
  const [year, setYear] = useState<number>(2016);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  };

  const handleGoClick = () => {
    navigate(`/achievements/${year}`);
  };

  return (
    <div className={`${styles.container} pb-32`}>
      <div className="relative flex grow flex-col items-center pt-8">
        <h1 className="mb-5 text-3xl font-bold tracking-wide text-blue-700">
          Achievements Timeline
        </h1>
        <div className="timeline-container">
          <input
            type="range"
            min="2016"
            max="2019"
            value={year}
            className="slider"
            onChange={handleSliderChange}
            style={{
              writingMode: "bt-lr",
              WebkitAppearance: "slider-vertical",
            }}
          />
          <div className="timeline-labels">
            <div className="label">2016</div>
            <div className="label">2017</div>
            <div className="label">2018</div>
            <div className="label">2019</div>
          </div>
        </div>
        <div className="year-display font-bold tracking-wide text-black">
          Year: {year}
        </div>
        <button
          className="mb-8 mt-8 items-center justify-center rounded-lg bg-blue-500 px-8 py-2 text-white"
          onClick={handleGoClick} // Attach the click handler
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default AchievementsSkillsPage;
